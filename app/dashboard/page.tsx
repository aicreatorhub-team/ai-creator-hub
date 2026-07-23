import { redirect } from "next/navigation";
import { getUser } from "@/lib/auth/getUser";
import { getProjects } from "@/lib/supabase/projects";

export default async function DashboardPage() {
  const user = await getUser();

  if (!user) {
    redirect("/login");
  }

  const projects = await getProjects();

  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <section className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold mb-4">
          AI Creator Hub Dashboard 🚀
        </h1>

        <p className="text-zinc-400 mb-8">
          Welcome {user.email}
        </p>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

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