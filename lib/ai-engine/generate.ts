import OpenAI from "openai";
import { createClient } from "@/lib/supabase/server";
import { consumeCredits } from "@/lib/credits/credits";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});


export async function generateAI(params: {
  tool: string;
  prompt: string;
  credits?: number;
}) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Not authenticated");
  }


  const creditCost = params.credits || 1;


  await consumeCredits(creditCost);


  const response = await openai.chat.completions.create({
    model: "gpt-4.1-mini",
    messages: [
      {
        role: "system",
        content:
          "You are AI Creator Hub, a professional AI assistant for content creators.",
      },
      {
        role: "user",
        content: params.prompt,
      },
    ],
  });


  const result =
    response.choices[0]?.message?.content ||
    "No response generated";


  await supabase
    .from("ai_generations")
    .insert({
      user_id: user.id,
      tool: params.tool,
      input: params.prompt,
      output: result,
      credits_used: creditCost,
    });


  await supabase
    .from("usage_logs")
    .insert({
      user_id: user.id,
      tool: params.tool,
      action: "generation",
    });


  return result;
}