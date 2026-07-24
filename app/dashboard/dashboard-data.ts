export async function getDashboardData(userId: string) {
  return {
    plan: "Free",
    credits: {
      used: 0,
      total: 100,
    },
    projects: 0,
    aiUsage: 0,
    userId,
  };
}