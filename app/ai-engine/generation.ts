import { generateAI } from "./service";
import { AI_PROMPTS } from "./prompts";
import {
  AIModelType,
  getModelConfig,
} from "./models";


export interface GenerationRequest {
  userId: string;
  promptType: keyof typeof AI_PROMPTS;
  model: AIModelType;
  input: string;
}


export async function runGeneration(
  request: GenerationRequest
) {

  const prompt =
    AI_PROMPTS[request.promptType];


  const modelConfig =
    getModelConfig(request.model);


  const response = await generateAI({
    userId: request.userId,
    model: request.model,
    prompt: `
${prompt}

User request:
${request.input}
`,
  });


  return {
    success: response.success,
    model: modelConfig.name,
    quality: modelConfig.quality,
    content: response.content,
  };
}