export type ProjectType =
  | "AI_GENERATION"
  | "YOUTUBE"
  | "BUSINESS"
  | "MARKETING"
  | "OTHER";


export interface AIProject {

  id: string;

  title: string;

  content: string;

  mode: string;

  type: ProjectType;

  createdAt: string;

  favorite: boolean;

}



const STORAGE_KEY = "ai_creator_projects";



function loadProjects(): AIProject[] {

  if (typeof window === "undefined") {
    return [];
  }


  const saved =
    localStorage.getItem(STORAGE_KEY);


  if (!saved) {
    return [];
  }


  try {

    return JSON.parse(saved);

  } catch {

    return [];

  }

}



function saveProjects(
  projects: AIProject[]
) {

  if (typeof window === "undefined") {
    return;
  }


  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(projects)
  );

}




export function createProject(
  data: Omit<
    AIProject,
    "id" | "createdAt" | "favorite"
  >
): AIProject {


  const projects =
    loadProjects();



  const newProject: AIProject = {

    id: crypto.randomUUID(),

    title: data.title,

    content: data.content,

    mode: data.mode,

    type: data.type,

    createdAt:
      new Date().toISOString(),

    favorite: false,

  };



  projects.unshift(newProject);



  saveProjects(projects);



  return newProject;

}




export function getProjects(): AIProject[] {

  return loadProjects();

}




export function getProjectById(
  id: string
): AIProject | undefined {


  return loadProjects().find(
    (project) =>
      project.id === id
  );

}




export function deleteProject(
  id: string
): boolean {


  const projects =
    loadProjects();



  const filtered =
    projects.filter(
      (project) =>
        project.id !== id
    );



  if (
    filtered.length === projects.length
  ) {

    return false;

  }



  saveProjects(filtered);


  return true;

}




export function toggleFavorite(
  id: string
): AIProject | undefined {


  const projects =
    loadProjects();



  const project =
    projects.find(
      (item) =>
        item.id === id
    );



  if (!project) {

    return undefined;

  }



  project.favorite =
    !project.favorite;



  saveProjects(projects);



  return project;

}