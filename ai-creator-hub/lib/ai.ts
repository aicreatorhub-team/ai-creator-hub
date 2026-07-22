export async function generateAIResponse(
  prompt: string,
  mode: string
) {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return {
      mode,
      prompt,
      message:
        "AI API key is not configured yet. Add your key to .env.local.",
    };
  }

  return {
    mode,
    prompt,
    message:
      "AI connection is ready. Model integration will be activated next.",
  };
}