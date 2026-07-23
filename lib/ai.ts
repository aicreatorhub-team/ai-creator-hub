import OpenAI from "openai";

import { contentCreatorMode } from "./ai-modes/contentCreator";
import { youtubeExpertMode } from "./ai-modes/youtubeExpert";
import { businessCoachMode } from "./ai-modes/businessCoach";
import { marketingExpertMode } from "./ai-modes/marketingExpert";
import { businessPlannerMode } from "./ai-modes/businessPlanner";
import { monetizationCoachMode } from "./ai-modes/monetizationCoach";


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});


const baseRules = `
You are AI Creator Hub Professional Engine.

MISSION:

Help creators, entrepreneurs and small businesses create better ideas,
strategies and content using artificial intelligence.

CORE RULES:

- Always answer professionally.
- Always answer in the user's language.
- Never invent fake facts, statistics, companies or sources.
- Clearly separate facts, assumptions and recommendations.
- Do not promise guaranteed success or income.
- Give practical steps that can actually be executed.
- Avoid unnecessary filler.
- Use clear structure with headings and lists.
- Focus on useful business and creator outcomes.

QUALITY STANDARD:

Every answer should feel like it was created by a professional consultant,
content strategist or business advisor.
`;



function getModePrompt(mode: string) {

  switch (mode) {

    case "Content Creator":
      return contentCreatorMode;


    case "YouTube Expert":
      return youtubeExpertMode;


    case "Business Coach":
      return businessCoachMode;


    case "Marketing Expert":
      return marketingExpertMode;


    case "Business Planner":
      return businessPlannerMode;


    case "Monetization Coach":
      return monetizationCoachMode;


    default:

      return `

ROLE:

Professional AI Consultant.

Help the user with practical,
structured and professional advice.

`;

  }

}




export async function generateAIResponse(
  prompt: string,
  mode: string
) {


  if (!prompt || prompt.trim().length === 0) {

    return {

      mode,

      prompt,

      message:
        "Please provide a request."

    };

  }



  if (!process.env.OPENAI_API_KEY) {

    return {

      mode,

      prompt,

      message:
        "AI Engine configuration error: API key missing."

    };

  }




  try {


    const response =
      await openai.chat.completions.create({

        model: "gpt-4o-mini",

        temperature: 0.3,

        max_tokens: 4000,


        messages: [

          {
            role: "system",
            content:
              baseRules +
              "\n\n" +
              getModePrompt(mode),
          },


          {
            role: "user",
            content: prompt.trim(),
          },

        ],

      });



    const message =
      response.choices[0]?.message?.content;



    return {

      mode,

      prompt,

      message:
        message ||
        "No AI response generated.",

    };



  } catch (error) {


    console.error(
      "AI Engine Error:",
      error
    );



    return {

      mode,

      prompt,

      message:
        "AI Engine temporarily unavailable. Please try again.",

    };


  }

}