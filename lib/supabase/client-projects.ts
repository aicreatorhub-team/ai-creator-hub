import { createClient } from "@/lib/supabase/browser";

export async function createProject(project: {
  title: string;
  content: string;
  mode: string;
}) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Not authenticated");
  }

  const { data, error } = await supabase
    .from("projects")
    .insert({
      user_id: user.id,
      title: project.title,
      content: project.content,
      mode: project.mode,
    })
    .select()
    .single();

  if (error) {
    console.error("SUPABASE ERROR:", error);
    throw new Error(error.message);
  }

  return data;
}