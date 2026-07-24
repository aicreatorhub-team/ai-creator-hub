export type AIModelType =
  | "fast"
  | "balanced"
  | "advanced";


export const AI_MODELS = {
  fast: {
    name: "Fast Model",
    quality: "standard",
    creditMultiplier: 1,
  },

  balanced: {
    name: "Balanced Model",
    quality: "high",
    creditMultiplier: 2,
  },

  advanced: {
    name: "Advanced Model",
    quality: "premium",
    creditMultiplier: 3,
  },
} as const;


export function getModelConfig(
  model: AIModelType
) {
  return AI_MODELS[model];
}