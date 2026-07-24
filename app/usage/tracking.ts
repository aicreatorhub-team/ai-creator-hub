export type UsageAction = {
  userId: string;
  module: string;
  action: string;
  creditsUsed: number;
  createdAt: Date;
};

export const usageHistory: UsageAction[] = [];

export function trackUsage(
  userId: string,
  module: string,
  action: string,
  creditsUsed: number
) {
  const record: UsageAction = {
    userId,
    module,
    action,
    creditsUsed,
    createdAt: new Date(),
  };

  usageHistory.push(record);

  return record;
}

export function getUserUsage(userId: string) {
  return usageHistory.filter(
    (item) => item.userId === userId
  );
}

export function getTotalCreditsUsed(userId: string) {
  return usageHistory
    .filter((item) => item.userId === userId)
    .reduce(
      (total, item) => total + item.creditsUsed,
      0
    );
}