import { redirect } from "next/navigation";
import Link from "next/link";
import { getUser } from "@/lib/auth/getUser";
import { getProjects } from "@/lib/supabase/projects";
import { getDashboardData } from "./dashboard-data";

export default async function DashboardPage() {
  const user = await getUser();

  if (!user) {
    redirect("/login");
  }

  const projects = await getProjects();
  const dashboardData = await getDashboardData(user.id);

  const credits =
    dashboardData.credits.total || 0;

  const used =
    dashboardData.credits.used || 0;

  const percentage =
    credits > 0
      ? Math.min((used / credits) * 100, 100)
      : 0;


  const modules = [
    {
      title: "YouTube Creator AI",
      description:
        "Generate ideas, scripts, SEO, thumbnails and growth strategies.",
      link: "/youtube-creator",
    },
    {
      title: "AI Assistant",
      description:
        "Your personal AI workspace with memory.",
      link: "/ai-assistant",
    },
    {
      title: "Template Creator",
      description:
        "Create digital products and assets.",
      link: "/templates",
    },
    {
      title: "Business AI Team",
      description:
        "Build strategies and automation plans.",
      link: "/business-ai",
    },
  ];


  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">

      <section className="max-w-7xl mx-auto">

        <div className="mb-12">

          <h1 className="text-5xl font-bold">
            AI Creator Hub
          </h1>

          <p className="text-zinc-400 mt-3">
            Welcome back {user.email}
          </p>

        </div>


        <div className="grid md:grid-cols-4 gap-6 mb-12">

          <div className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800">
            <p className="text-zinc-400">
              Current Plan
            </p>
            <h2 className="text-3xl font-bold mt-3">
              {dashboardData.plan.name}
            </h2>
          </div>


          <div className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800">

            <p className="text-zinc-400">
              AI Credits
            </p>

            <h2 className="text-3xl font-bold mt-3">
              {used}/{credits}
            </h2>

            <div className="mt-4 bg-black rounded-full h-3">
              <div
                className="bg-white h-3 rounded-full"
                style={{
                  width: `${percentage}%`,
                }}
              />
            </div>

          </div>


          <div className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800">
            <p className="text-zinc-400">
              Projects
            </p>

            <h2 className="text-3xl font-bold mt-3">
              {projects.length}
            </h2>
          </div>


          <div className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800">

            <p className="text-zinc-400">
              AI Status
            </p>

            <h2 className="text-3xl font-bold mt-3">
              Online
            </h2>

          </div>


        </div>


        <h2 className="text-3xl font-bold mb-6">
          AI Tools
        </h2>


        <div className="grid md:grid-cols-2 gap-6">


          {modules.map((module)=>(
            <Link
              key={module.title}
              href={module.link}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-white transition"
            >

              <h3 className="text-2xl font-bold mb-3">
                {module.title}
              </h3>

              <p className="text-zinc-400">
                {module.description}
              </p>

            </Link>
          ))}


        </div>


        <div className="mt-12 bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

          <h2 className="text-3xl font-bold mb-6">
            Recent Projects
          </h2>


          {projects.length === 0 ? (

            <p className="text-zinc-400">
              No projects created yet.
            </p>

          ) : (

            <div className="space-y-4">

              {projects.slice(0,5).map(project=>(
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
