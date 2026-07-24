import { controlAIRequest } from "@/app/usage/ai-request-control";
import { logUsage } from "@/app/usage/usage-log";
import { generateYouTubeContent } from "./youtube-controller";
import { getCreditBalance, deductCredits } from "@/lib/credits/transactions";
import { AI_COSTS } from "@/app/subscription/credits";

export async function handleYouTubeRequest(
  userId: string,
  email: string,
  deviceId: string,
  accountCount: number,
  creditsOrAction: number | "IDEA" | "SCRIPT" | "SEO",
  actionOrInput: "IDEA" | "SCRIPT" | "SEO" | string,
  oldInput?: string
) {

  const action =
    typeof creditsOrAction === "number"
      ? actionOrInput as "IDEA" | "SCRIPT" | "SEO"
      : creditsOrAction;

  const input =
    oldInput ??
    (typeof creditsOrAction === "number"
      ? actionOrInput
      : "");

  const creditsData = await getCreditBalance(userId);

  const currentCredits =
    creditsData.total;

  const actionMap = {
    IDEA: "IDEA_GENERATOR",
    SCRIPT: "SCRIPT_WRITER",
    SEO: "SEO_TAGS_GENERATOR",
  } as const;

  const toolAction =
    actionMap[action];

  const cost =
    AI_COSTS[toolAction];


  const control =
    await controlAIRequest(
      email,
      deviceId,
      accountCount,
      currentCredits,
      toolAction
    );


  if (!control.allowed) {
    return {
      success: false,
      message: control.reason,
    };
  }


  const result =
    await generateYouTubeContent(
      userId,
      action,
      input
    );


  await deductCredits(
    userId,
    cost
  );


  await logUsage(
    userId,
    toolAction,
    cost
  );


  return {
    success: true,
    result,
    remainingCredits:
      currentCredits - cost,
  };
}