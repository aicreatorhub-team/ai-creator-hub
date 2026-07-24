import { createClient } from "@/lib/supabase/server";


export async function addCredits(
  userId: string,
  amount: number
) {
  const supabase = await createClient();

  const { data: credits, error } = await supabase
    .from("credits")
    .select("balance")
    .eq("user_id", userId)
    .single();

  if (error) {
    throw error;
  }


  const { data, error: updateError } =
    await supabase
      .from("credits")
      .update({
        balance: credits.balance + amount,
      })
      .eq("user_id", userId)
      .select()
      .single();


  if (updateError) {
    throw updateError;
  }


  return data;
}



export async function deductCredits(
  userId: string,
  amount: number
) {
  const supabase = await createClient();


  const { data: credits, error } =
    await supabase
      .from("credits")
      .select("balance")
      .eq("user_id", userId)
      .single();


  if (error) {
    throw error;
  }


  if (credits.balance < amount) {
    throw new Error("Insufficient credits");
  }


  const { data, error: updateError } =
    await supabase
      .from("credits")
      .update({
        balance: credits.balance - amount,
      })
      .eq("user_id", userId)
      .select()
      .single();


  if (updateError) {
    throw updateError;
  }


  return data;
}
export async function getCreditBalance(
  userId: string
) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("credits")
    .select("balance")
    .eq("user_id", userId)
    .single();

  if (error) {
    throw error;
  }

  return {
    total: data.balance,
    used: 0,
  };
}