type RequestRecord = {
  userId: string;
  timestamp: number;
};

const requests: RequestRecord[] = [];

export function checkRateLimit(
  userId: string,
  maxRequests: number,
  windowMs: number
) {
  const now = Date.now();

  const userRequests = requests.filter(
    (request) =>
      request.userId === userId &&
      now - request.timestamp < windowMs
  );

  if (userRequests.length >= maxRequests) {
    return false;
  }

  requests.push({
    userId,
    timestamp: now,
  });

  return true;
}