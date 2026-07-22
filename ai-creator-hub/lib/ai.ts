export async function generateAIResponse(
  prompt: string,
  mode: string
) {
  return {
    mode,
    prompt,
    response:
      "AI Engine is connected. Real model integration will be added next.",
  };
}