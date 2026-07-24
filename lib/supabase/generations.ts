import { createClient } from "@/lib/supabase/server";


export async function saveGeneration(data: {
  userId: string;
  tool: string;
  input: string;
  output: string;
  creditsUsed: number;
}) {

  const supabase = await createClient();


  const { error } = await supabase
    .from("ai_generations")
    .insert({
      user_id: data.userId,
      tool: data.tool,
      input: data.input,
      output: data.output,
      credits_used: data.creditsUsed,
    });


  if (error) {
    console.error(
      "GENERATION SAVE ERROR:",
      error
    );

    throw error;
  }


  return {
    success: true,
  };
}



export async function getGenerations(
  userId: string
) {

  const supabase = await createClient();


  const { data, error } = await supabase
    .from("ai_generations")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", {
      ascending: false,
    });


  if (error) {
    console.error(
      "GENERATION LOAD ERROR:",
      error
    );

    return [];
  }


  return data;
}