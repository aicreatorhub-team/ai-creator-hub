import { redirect } from "next/navigation";
import { getUser } from "@/lib/auth/getUser";
import { getProjects } from "@/lib/supabase/projects";
import Link from "next/link";
import { getDashboardData } from "./dashboard-data";

export default async function DashboardPage() {
  const user = await getUser();

  if (!user) {
    redirect("/login");
  }

  const projects = await getProjects();
  const dashboardData = await getDashboardData(user.id);

  const modules = [
    {
      title: "YouTube Creator AI",
      description:
        "Create video ideas, scripts, SEO, titles and professional content.",
      link: "/youtube-creator",
    },
    {
      title: "AI Assistant",
      description:
        "Your personal AI assistant with memory and conversations.",
      link: "/ai-assistant",
    },
    {
      title: "AI Template Creator",
      description:
        "Create templates, designs and digital assets.",
      link: "/templates",
    },
    {
      title: "AI Business Team",
      description:
        "Build business ideas, strategies and business plans.",
      link: "/business-ai",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <section className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold mb-4">
          AI Creator Hub
        </h1>

        <p className="text-zinc-400 mb-10">
          Welcome {user.email}
        </p>


        <div className="grid md:grid-cols-4 gap-6 mb-12">

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <p className="text-zinc-400">
              Current Plan
            </p>
            <h3 className="text-2xl font-bold mt-2">
              {dashboardData.plan.name}
            </h3>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <p className="text-zinc-400">
              AI Credits
            </p>
            <h3 className="text-2xl font-bold mt-2">
              {dashboardData.credits.used} / {dashboardData.credits.total}
            </h3>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <p className="text-zinc-400">
              Projects
            </p>
            <h3 className="text-2xl font-bold mt-2">
              {projects.length}
            </h3>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <p className="text-zinc-400">
              AI Usage
            </p>
            <h3 className="text-2xl font-bold mt-2">
              {dashboardData.aiUsage} credits
            </h3>
          </div>

        </div>
        <h2 className="text-2xl font-bold mb-6">
          AI Modules
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {modules.map((module) => (
            <Link
              key={module.title}
              href={module.link}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 hover:border-white transition"
            >
              <h3 className="text-xl font-bold mb-3">
                {module.title}
              </h3>

              <p className="text-zinc-400">
                {module.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-12 bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

  
        <div className="grid md:grid-cols-4 gap-6 mb-12">

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <p className="text-zinc-400">
              Current Plan
            </p>
            <h3 className="text-2xl font-bold mt-2">
              {dashboardData.plan.name}
            </h3>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <p className="text-zinc-400">
              AI Credits
            </p>
            <h3 className="text-2xl font-bold mt-2">
              {dashboardData.credits.used} / {dashboardData.credits.total}
            </h3>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <p className="text-zinc-400">
              Projects
            </p>
            <h3 className="text-2xl font-bold mt-2">
              {projects.length}
            </h3>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <p className="text-zinc-400">
              AI Usage
            </p>
            <h3 className="text-2xl font-bold mt-2">
              {dashboardData.aiUsage} credits
            </h3>
          </div>

        </div>
        <h2 className="text-2xl font-bold mb-6">
            Your Projects
          </h2>

          {projects.length === 0 ? (
            <p className="text-zinc-400">
              No projects yet.
            </p>
          ) : (
            <div className="space-y-4">
              {projects.map((project) => (
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

