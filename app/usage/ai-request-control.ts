import { guardRequest } from "@/app/security/request-guard";
import {
  checkUsageLimit,
  UsageAction,
} from "./usage-service";


export interface AIRequestResult {
  allowed: boolean;
  reason?: string;
  remainingCredits?: number;
}


export async function controlAIRequest(
  email: string,
  deviceId: string,
  accountCount: number,
  userCredits: number,
  action: UsageAction
): Promise<AIRequestResult> {

  const securityCheck = await guardRequest(
    email,
    deviceId,
    accountCount
  );


  if (!securityCheck.allowed) {
    return {
      allowed: false,
      reason: securityCheck.reason,
    };
  }


  const usageCheck = await checkUsageLimit(
    userCredits,
    action
  );


  if (!usageCheck.allowed) {
    return {
      allowed: false,
      reason: "Not enough credits",
    };
  }


  return {
    allowed: true,
    remainingCredits: usageCheck.remainingCredits,
  };
}