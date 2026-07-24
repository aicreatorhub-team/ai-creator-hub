export const AI_COSTS = {
  IDEA_GENERATOR: 5,
  SCRIPT_WRITER: 15,
  TITLE_GENERATOR: 5,
  DESCRIPTION_GENERATOR: 5,
  SEO_TAGS_GENERATOR: 5,
  THUMBNAIL_GENERATOR: 10,
  VIDEO_PLANNER: 15,
  VOICE_PLANNER: 10,
  VIDEO_EDITOR_PLANNER: 15,
  UPLOAD_OPTIMIZER: 10,
  CONTENT_REPURPOSER: 20,
  VIDEO_FACTORY_WORKFLOW: 50,
  AI_ASSISTANT_MESSAGE: 2,
  BUSINESS_STRATEGY: 30,
};

export function hasEnoughCredits(
  userCredits: number,
  actionCost: number
) {
  return userCredits >= actionCost;
}

export function calculateRemainingCredits(
  userCredits: number,
  actionCost: number
) {
  if (userCredits < actionCost) {
    return userCredits;
  }

  return userCredits - actionCost;
}