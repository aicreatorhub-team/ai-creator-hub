import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { prompt, mode } = body;

    if (!prompt) {
      return NextResponse.json(
        {
          error: "Prompt is required",
        },
        {
          status: 400,
        }
      );
    }

    const result = {
      mode,
      prompt,
      message:
        "AI Engine is ready. Real AI model connection will be added next.",
    };

    return NextResponse.json(result);

  } catch {
    return NextResponse.json(
      {
        error: "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}