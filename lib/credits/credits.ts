import { createClient } from "@/lib/supabase/server";

export async function getUserCredits() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Not authenticated");
  }

  const { data, error } = await supabase
    .from("credits")
    .select("*")
    .eq("user_id", user.id)
    .single();

  if (error) {
    throw error;
  }

  return data;
}


export async function createInitialCredits(userId: string) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("credits")
    .insert({
      user_id: userId,
      balance: 100,
      plan: "free",
    })
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}


export async function consumeCredits(amount: number = 1) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Not authenticated");
  }

  const { data: credits, error } = await supabase
    .from("credits")
    .select("balance")
    .eq("user_id", user.id)
    .single();

  if (error) {
    throw error;
  }

  if (!credits || credits.balance < amount) {
    throw new Error("Not enough credits");
  }

  const { data, error: updateError } = await supabase
    .from("credits")
    .update({
      balance: credits.balance - amount,
    })
    .eq("user_id", user.id)
    .select()
    .single();

  if (updateError) {
    throw updateError;
  }

  return data;
}