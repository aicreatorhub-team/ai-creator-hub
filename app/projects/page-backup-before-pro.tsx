"use client";

import { useState } from "react";
import {
  AIProject,
  deleteProject,
  getProjects,
  toggleFavorite,
} from "@/lib/storage/projects";


export default function ProjectsPage() {

  const [projects, setProjects] = useState<AIProject[]>(
    () => getProjects()
  );


  function refreshProjects() {

    setProjects(
      getProjects()
    );

  }



  function removeProject(
    id: string
  ) {

    deleteProject(id);

    refreshProjects();

  }



  function favoriteProject(
    id: string
  ) {

    toggleFavorite(id);

    refreshProjects();

  }



  return (

    <main className="min-h-screen bg-black text-white px-6 py-16">

      <section className="max-w-6xl mx-auto">


        <header className="mb-12">

          <h1 className="text-5xl font-bold">
            Projects Dashboard
          </h1>


          <p className="text-zinc-400 mt-4">
            Your saved AI ideas, strategies and creations.
          </p>


        </header>



        {projects.length === 0 ? (

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 text-center">

            <h2 className="text-2xl font-bold">
              No saved projects
            </h2>


            <p className="text-zinc-400 mt-3">
              Generate an AI project and save it from AI Assistant.
            </p>


          </div>


        ) : (


          <div className="grid md:grid-cols-2 gap-6">


            {projects.map((project) => (

              <article
                key={project.id}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6"
              >


                <div className="flex justify-between">


                  <div>

                    <h2 className="text-2xl font-bold">
                      {project.title}
                    </h2>


                    <p className="text-zinc-400 mt-2">
                      Mode: {project.mode}
                    </p>


                    <p className="text-zinc-500 text-sm">
                      {new Date(
                        project.createdAt
                      ).toLocaleDateString()}
                    </p>


                  </div>



                  <button
                    onClick={() =>
                      favoriteProject(project.id)
                    }
                    className="text-2xl"
                  >

                    {project.favorite
                      ? "⭐"
                      : "☆"}

                  </button>


                </div>



                <div className="mt-6 bg-black rounded-xl p-4">

                  <p className="text-zinc-300 whitespace-pre-wrap line-clamp-6">

                    {project.content}

                  </p>

                </div>



                <button
                  onClick={() =>
                    removeProject(project.id)
                  }
                  className="mt-6 bg-red-600 px-5 py-3 rounded-xl"
                >

                  Delete Project

                </button>


              </article>

            ))}


          </div>

        )}


      </section>

    </main>

  );

}