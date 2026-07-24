import { controlAIRequest } from "@/app/usage/ai-request-control";
import { logUsage } from "@/app/usage/usage-log";
import { generateYouTubeContent } from "./youtube-controller";


export async function handleYouTubeRequest(
  userId: string,
  email: string,
  deviceId: string,
  accountCount: number,
  credits: number,
  action: "IDEA" | "SCRIPT" | "SEO",
  input: string
) {

  const control = await controlAIRequest(
    email,
    deviceId,
    accountCount,
    credits,
    "SCRIPT_WRITER"
  );


  if (!control.allowed) {
    return {
      success: false,
      message: control.reason,
    };
  }


  const result = await generateYouTubeContent(
    userId,
    action,
    input
  );


  await logUsage(
    userId,
    action,
    15
  );


  return {
    success: true,
    result,
    remainingCredits: control.remainingCredits,
  };
}
