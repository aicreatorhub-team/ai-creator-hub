import { PLANS } from "./plans";
import { getCreditBalance } from "@/lib/credits/transactions";

export async function getSubscriptionData(userId: string) {
  const credits = await getCreditBalance(userId);

  return {
    userId,
    plan: PLANS.FREE,
    credits,
    status: "active",
  };
}