import { NextResponse } from "next/server";
import { generateAIResponse } from "@/lib/ai";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { prompt, mode } = body;

    if (!prompt) {
      return NextResponse.json(
        {
          error: "Prompt is required",
        },
        {
          status: 400,
        }
      );
    }

    const result = await generateAIResponse(
      prompt,
      mode
    );

    return NextResponse.json(result);

  } catch {
    return NextResponse.json(
      {
        error: "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}