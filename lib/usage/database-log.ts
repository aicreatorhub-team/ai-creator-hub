import { createClient } from "@/lib/supabase/server";


export async function saveGeneration(
  userId: string,
  tool: string,
  input: string,
  output: string,
  creditsUsed: number
) {
  const supabase = await createClient();


  const { data, error } =
    await supabase
      .from("ai_generations")
      .insert({
        user_id: userId,
        tool,
        input,
        output,
        credits_used: creditsUsed,
      })
      .select()
      .single();


  if (error) {
    console.error(
      "GENERATION SAVE ERROR:",
      error
    );

    throw error;
  }


  return data;
}



export async function saveUsageLog(
  userId: string,
  tool: string,
  action: string
) {
  const supabase = await createClient();


  const { data, error } =
    await supabase
      .from("usage_logs")
      .insert({
        user_id: userId,
        tool,
        action,
      })
      .select()
      .single();


  if (error) {
    console.error(
      "USAGE LOG ERROR:",
      error
    );

    throw error;
  }


  return data;
}