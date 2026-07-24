import { getSubscriptionData } from "@/app/subscription/subscription-service";

export async function getDashboardData(userId: string) {
  const subscription = await getSubscriptionData(userId);

  return {
    plan: subscription.plan,
    credits: subscription.credits,
    projects: 0,
    aiUsage: 0,
    userId,
  };
}