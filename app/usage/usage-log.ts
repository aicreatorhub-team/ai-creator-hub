import { createClient } from "@/lib/supabase/server";

export interface UsageLog {
  userId: string;
  action: string;
  creditsUsed: number;
}


export async function logUsage(
  userId: string,
  action: string,
  creditsUsed: number
) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("usage_logs")
   .insert({
  user_id: userId,
  action,
  tool: action,
  credits_used: creditsUsed,
})
    .select()
    .single();


  if (error) {
    throw error;
  }


  return data;
}


export async function getUsageHistory(
  userId: string
) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("usage_logs")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", {
      ascending: false,
    });


  if (error) {
    throw error;
  }


  return data;
}