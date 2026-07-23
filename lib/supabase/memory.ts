import { createClient } from "@/lib/supabase/client";

export async function saveMemory(
  key: string,
  value: string
) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Not authenticated");
  }

  const { error } = await supabase
    .from("user_memory")
    .insert({
      user_id: user.id,
      key,
      value,
    });

  if (error) {
    console.error("MEMORY ERROR:", error);
    throw error;
  }
}


export async function getMemory() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return [];
  }

  const { data, error } = await supabase
    .from("user_memory")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    console.error("MEMORY LOAD ERROR:", error);
    return [];
  }

  return data;
}