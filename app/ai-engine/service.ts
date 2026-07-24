import OpenAI from "openai";
import { deductCredits } from "@/lib/credits/transactions";
import {
  saveGeneration,
  saveUsageLog,
} from "@/lib/usage/database-log";


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});


export type AIModel =
  | "fast"
  | "balanced"
  | "advanced";


export interface AIGenerationRequest {
  prompt: string;
  model: AIModel;
  userId: string;
  tool?: string;
  creditsUsed?: number;
}


export interface AIGenerationResponse {
  success: boolean;
  content: string;
  model: AIModel;
}


const MODEL_MAP = {
  fast: "gpt-4.1-mini",
  balanced: "gpt-4.1-mini",
  advanced: "gpt-4.1",
};



export async function generateAI(
  request: AIGenerationRequest
): Promise<AIGenerationResponse> {


  const credits =
    request.creditsUsed || 1;


  await deductCredits(
    request.userId,
    credits
  );


  const response =
    await openai.chat.completions.create({

      model: MODEL_MAP[request.model],

      messages: [
        {
          role: "system",
          content:
            "You are AI Creator Hub, an expert AI assistant for YouTube creators and digital entrepreneurs.",
        },
        {
          role: "user",
          content: request.prompt,
        },
      ],

    });



  const content =
    response.choices[0]?.message?.content ||
    "No AI response";



  await saveGeneration(
    request.userId,
    request.tool || "AI",
    request.prompt,
    content,
    credits
  );



  await saveUsageLog(
    request.userId,
    request.tool || "AI",
    "GENERATION"
  );



  return {
    success: true,
    content,
    model: request.model,
  };
}