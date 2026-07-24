import { NextResponse } from "next/server";
import { handleYouTubeRequest } from "@/app/youtube-creator/youtube-request";


export type YouTubeAction =
  | "IDEA"
  | "SCRIPT"
  | "SEO"
  | "THUMBNAIL"
  | "TITLE"
  | "DESCRIPTION"
  | "UPLOAD_OPTIMIZER"
  | "VIDEO_PLANNER"
  | "VOICE_PLANNER";


export function createYouTubeRoute(
  action: YouTubeAction
) {

  return async function POST(
    request: Request
  ) {

    try {

      const body =
        await request.json();


      const {
        userId,
        email,
        deviceId,
        accountCount,
        credits,
        topic,
      } = body;



      const result =
        await handleYouTubeRequest(
          userId,
          email,
          deviceId,
          accountCount,
          credits,
          action,
          topic
        );


      return NextResponse.json(
        result
      );


    } catch (error) {

      console.error(
        "YOUTUBE API ERROR:",
        error
      );


      return NextResponse.json(
        {
          success: false,
          message:
            "Something went wrong",
        },
        {
          status: 500,
        }
      );

    }

  };

}