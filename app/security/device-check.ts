export type DeviceRisk = {
  deviceId: string;
  browser: string;
  ip: string;
  accountCreatedAt: Date;
};

export function calculateRiskScore(
  sameDevice: boolean,
  sameBrowser: boolean,
  recentAccounts: number,
  vpnDetected: boolean
) {
  let score = 0;

  if (sameDevice) score += 20;
  if (sameBrowser) score += 15;
  if (recentAccounts >= 3) score += 30;
  if (vpnDetected) score += 10;

  return score;
}

export function isHighRisk(score: number) {
  return score >= 50;
}