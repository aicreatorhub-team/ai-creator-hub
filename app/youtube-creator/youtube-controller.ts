import { runGeneration } from "@/app/ai-engine/generation";

export type YouTubeAction =
  | "IDEA"
  | "SCRIPT"
  | "SEO";


const ACTION_PROMPTS = {
  IDEA: "YOUTUBE_IDEA_GENERATOR",
  SCRIPT: "YOUTUBE_SCRIPT_WRITER",
  SEO: "YOUTUBE_SEO_OPTIMIZER",
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