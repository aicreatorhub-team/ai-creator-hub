import { plans } from "./plans";
import { getCreditBalance } from "./credits";

export async function getSubscriptionData(userId: string) {
  const credits = await getCreditBalance(userId);

  return {
    userId,
    plan: plans.free,
    credits,
    status: "active",
  };
}