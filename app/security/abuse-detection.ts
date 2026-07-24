export interface AbuseCheckResult {
  suspicious: boolean;
  reason?: string;
}


export async function checkAccountAbuse(
  email: string,
  deviceId: string,
  accountCount: number
): Promise<AbuseCheckResult> {

  if (accountCount > 3) {
    return {
      suspicious: true,
      reason: "Too many accounts from same source",
    };
  }


  if (!email.includes("@")) {
    return {
      suspicious: true,
      reason: "Invalid email format",
    };
  }


  if (!deviceId) {
    return {
      suspicious: true,
      reason: "Missing device identifier",
    };
  }


  return {
    suspicious: false,
  };
}