import { getSubscriptionData } from "@/app/subscription/subscription-service";
import { getCreditBalance } from "@/lib/credits/transactions";

export async function getDashboardData(userId: string) {
  const subscription = await getSubscriptionData(userId);

  const creditBalance = await getCreditBalance(userId);

  return {
    plan: {
      name: subscription.plan.name,
      price: subscription.plan.price,
      monthlyCredits: subscription.plan.monthlyCredits,
      features: subscription.plan.features,
    },

    credits: {
      used: creditBalance.used ?? 0,
      total:
        creditBalance.total ??
        subscription.plan.monthlyCredits,
    },

    projects: 0,

    aiUsage:
      creditBalance.used ?? 0,

    userId,
  };
}