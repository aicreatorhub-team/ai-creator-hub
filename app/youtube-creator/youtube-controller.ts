import { runGeneration } from "@/app/ai-engine/generation";

export type YouTubeAction =
  | "IDEA"
  | "SCRIPT"
  | "SEO";

const ACTION_PROMPTS = {
  IDEA: "IDEA_GENERATOR",
  SCRIPT: "SCRIPT_WRITER",
  SEO: "SEO_TAGS_GENERATOR",
} as const;


export async function generateYouTubeContent(
  userId: string,
  action: YouTubeAction,
  input: string
) {

  const result = await runGeneration({
    userId,
    promptType: ACTION_PROMPTS[action],
    model: "balanced",
    input,
  });

  return result;
}