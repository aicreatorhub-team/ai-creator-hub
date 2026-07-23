"use client";

import { useState } from "react";
import {
  getProjects,
  deleteProject,
  toggleFavorite,
  AIProject,
} from "@/lib/storage/projects";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<AIProject[]>(() =>
    getProjects()
  );


  function refreshProjects() {
    setProjects([...getProjects()]);
  }


  function handleDelete(id: string) {
    deleteProject(id);
    refreshProjects();
  }


  function handleFavorite(id: string) {
    toggleFavorite(id);
    refreshProjects();
  }


  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">

      <section className="max-w-6xl mx-auto">


        <header className="mb-12">

          <h1 className="text-5xl font-bold">
            Projects
          </h1>

          <p className="text-zinc-400 mt-4">
            Manage your saved AI creations.
          </p>

        </header>




        {projects.length === 0 ? (

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 text-center">

            <h2 className="text-2xl font-bold mb-3">
              No projects yet
            </h2>

            <p className="text-zinc-400">
              Create an AI project and save it here.
            </p>

          </div>


        ) : (


          <div className="grid md:grid-cols-2 gap-6">


            {projects.map((project) => (

              <div
                key={project.id}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6"
              >


                <div className="flex justify-between items-start mb-5">


                  <h2 className="text-2xl font-bold">
                    {project.title}
                  </h2>


                  <button
                    onClick={() =>
                      handleFavorite(project.id)
                    }
                    className="text-2xl"
                  >

                    {project.favorite ? "⭐" : "☆"}

                  </button>


                </div>




                <p className="text-zinc-400 mb-2">
                  Mode: {project.mode}
                </p>



                <p className="text-zinc-500 text-sm mb-5">

                  Created:
                  {" "}
                  {new Date(
                    project.createdAt
                  ).toLocaleDateString()}

                </p>




                <div className="bg-black rounded-xl p-5 mb-5">

                  <p className="text-zinc-300 whitespace-pre-wrap">

                    {project.content}

                  </p>

                </div>




                <button
                  onClick={() =>
                    handleDelete(project.id)
                  }
                  className="bg-red-600 px-5 py-3 rounded-xl"
                >

                  Delete

                </button>



              </div>

            ))}


          </div>

        )}


      </section>

    </main>
  );
}