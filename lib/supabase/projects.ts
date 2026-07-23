import { createClient } from "@/lib/supabase/server";

export async function getProjects() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}


export async function createProject(project: {
  title: string;
  content: string;
  mode: string;
}) {
  const supabase = await createClient();

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
    throw error;
  }

  return data;
}


export async function deleteProject(id: string) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("projects")
    .delete()
    .eq("id", id);

  if (error) {
    throw error;
  }
}