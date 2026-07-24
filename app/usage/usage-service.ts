import {
  AI_COSTS,
  hasEnoughCredits,
  calculateRemainingCredits,
} from "@/app/subscription/credits";

export type UsageAction =
  | keyof typeof AI_COSTS;


export async function checkUsageLimit(
  userCredits: number,
  action: UsageAction
) {
  const cost = AI_COSTS[action];

  const allowed = hasEnoughCredits(
    userCredits,
    cost
  );

  return {
    allowed,
    action,
    cost,
    remainingCredits: calculateRemainingCredits(
      userCredits,
      cost
    ),
  };
}


export async function recordUsage(
  userId: string,
  action: UsageAction
) {
  return {
    success: true,
    userId,
    action,
    cost: AI_COSTS[action],
  };
}