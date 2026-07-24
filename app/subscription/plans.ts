export type PlanType =
  | "FREE"
  | "CREATOR_PRO"
  | "BUSINESS_AI"
  | "ENTERPRISE";

export const PLANS = {
  FREE: {
    name: "Free",
    price: 0,
    monthlyCredits: 100,
    features: [
      "Limited AI generations",
      "Basic YouTube tools",
      "Basic AI Assistant access",
    ],
  },

  CREATOR_PRO: {
    name: "Creator Pro",
    price: 19,
    monthlyCredits: 1000,
    features: [
      "Full YouTube Creator AI",
      "More AI generations",
      "Advanced content tools",
    ],
  },

  BUSINESS_AI: {
    name: "Business AI",
    price: 49,
    monthlyCredits: 5000,
    features: [
      "AI Business Team",
      "Marketing strategy",
      "Business automation tools",
    ],
  },

  ENTERPRISE: {
    name: "Enterprise",
    price: 199,
    monthlyCredits: 20000,
    features: [
      "All AI modules",
      "Priority AI processing",
      "Team access",
      "API access",
    ],
  },
};