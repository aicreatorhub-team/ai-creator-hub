export interface UsageLog {
  userId: string;
  action: string;
  creditsUsed: number;
  timestamp: Date;
}


const usageHistory: UsageLog[] = [];


export async function logUsage(
  userId: string,
  action: string,
  creditsUsed: number
) {

  const entry: UsageLog = {
    userId,
    action,
    creditsUsed,
    timestamp: new Date(),
  };


  usageHistory.push(entry);


  return entry;
}


export async function getUsageHistory(
  userId: string
) {

  return usageHistory.filter(
    (item) => item.userId === userId
  );
}