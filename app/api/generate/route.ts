import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

import { generateAIResponse } from "@/lib/ai";

import { guardRequest } from "@/app/security/request-guard";

import {
  deductCredits,
} from "@/lib/credits/transactions";

import {
  saveGeneration,
} from "@/lib/supabase/generations";

import {
  logUsage,
} from "@/app/usage/usage-log";


export async function POST(request: Request) {

  try {

    const supabase = await createClient();


    const {
      data: {
        user,
      },
    } = await supabase.auth.getUser();


    if (!user) {

      return NextResponse.json(
        {
          success: false,
          message: "Not authenticated",
        },
        {
          status: 401,
        }
      );

    }


    const body = await request.json();


    const {
      prompt,
      mode,
      deviceId,
      accountCount,
    } = body;



    if (!prompt) {

      return NextResponse.json(
        {
          success: false,
          message: "Prompt required",
        },
        {
          status: 400,
        }
      );

    }



    const security =
      await guardRequest(
        user.email || "",
        deviceId || "unknown",
        accountCount || 1
      );



    if (!security.allowed) {

      return NextResponse.json({
        success: false,
        message: security.reason,
      });

    }



    const creditsUsed = 2;



    const result =
      await generateAIResponse(
        prompt,
        mode || "Content Creator"
      );



    await deductCredits(
      user.id,
      creditsUsed
    );



    await saveGeneration({

      userId: user.id,

      tool: "AI_ASSISTANT_MESSAGE",

      input: prompt,

      output: result.message,

      creditsUsed,

    });



    await logUsage(

      user.id,

      "AI_ASSISTANT_MESSAGE",

      creditsUsed

    );



    return NextResponse.json({

      success: true,

      result,

      creditsUsed,

    });



  } catch (error) {


    console.error(
      "GENERATE API ERROR:",
      error
    );


    return NextResponse.json(
      {
        success:false,
        message:"AI generation failed",
      },
      {
        status:500,
      }
    );

  }

}