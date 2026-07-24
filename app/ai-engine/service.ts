export type AIModel =
  | "fast"
  | "balanced"
  | "advanced";

export interface AIGenerationRequest {
  prompt: string;
  model: AIModel;
  userId: string;
}

export interface AIGenerationResponse {
  success: boolean;
  content: string;
  model: AIModel;
}

export async function generateAI(
  request: AIGenerationRequest
): Promise<AIGenerationResponse> {

  return {
    success: true,
    content: "AI response placeholder for: " + request.prompt,
    model: request.model,
  };
}