import { checkAccountAbuse } from "./abuse-detection";

export interface GuardResult {
  allowed: boolean;
  reason?: string;
}


export async function guardRequest(
  email: string,
  deviceId: string,
  accountCount: number
): Promise<GuardResult> {

  const abuseCheck = await checkAccountAbuse(
    email,
    deviceId,
    accountCount
  );


  if (abuseCheck.suspicious) {
    return {
      allowed: false,
      reason: abuseCheck.reason,
    };
  }


  return {
    allowed: true,
  };
}