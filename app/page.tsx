"use client";

import Link from "next/link";
import { useState } from "react";
import { getProjects } from "@/lib/storage/projects";

export default function HomePage() {
  const [projects] = useState(() => getProjects());

  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <section className="max-w-6xl mx-auto">

        <div className="flex justify-between items-center mb-12">

          <div>
            <h1 className="text-5xl font-bold">
              Welcome to AI Creator Hub 🚀
            </h1>

            <p className="text-zinc-400 text-lg mt-4">
              Create content, grow businesses and build strategies with AI.
            </p>
          </div>


          <div className="flex gap-3">

            <Link
              href="/login"
              className="border border-zinc-700 px-5 py-3 rounded-xl"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="bg-white text-black px-5 py-3 rounded-xl font-bold"
            >
              Register
            </Link>

          </div>

        </div>


        <div className="grid md:grid-cols-3 gap-6 mb-12">

          <Link
            href="/ai-assistant"
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-white transition"
          >
            <h2 className="text-2xl font-bold">
              🤖 AI Assistant
            </h2>

            <p className="text-zinc-400 mt-3">
              Generate content, scripts, ideas and strategies.
            </p>

          </Link>


          <Link
            href="/projects"
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-white transition"
          >
            <h2 className="text-2xl font-bold">
              📁 Projects
            </h2>

            <p className="text-zinc-400 mt-3">
              Manage your saved AI creations.
            </p>

          </Link>


          <Link
            href="/statistics"
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-white transition"
          >
            <h2 className="text-2xl font-bold">
              📊 Statistics
            </h2>

            <p className="text-zinc-400 mt-3">
              Saved Projects:
              <span className="text-white font-bold ml-2">
                {projects.length}
              </span>
            </p>

          </Link>

        </div>


        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

          <h2 className="text-3xl font-bold mb-6">
            Recent Projects
          </h2>


          {projects.length === 0 ? (

            <p className="text-zinc-400">
              No projects created yet.
            </p>

          ) : (

            <div className="space-y-4">

              {projects.slice(0,5).map((project) => (

                <div
                  key={project.id}
                  className="bg-black rounded-xl p-5"
                >

                  <h3 className="font-bold text-xl">
                    {project.title}
                  </h3>

                  <p className="text-zinc-400">
                    {project.mode}
                  </p>

                </div>

              ))}

            </div>

          )}

        </div>

      </section>
    </main>
  );
}