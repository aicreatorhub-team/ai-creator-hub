const tools = [
  {
    title: "AI Content Creator",
    icon: "🎬",
    description:
      "Create videos, scripts, posts and creative ideas with AI.",
  },
  {
    title: "YouTube Script Generator",
    icon: "▶️",
    description:
      "Generate professional YouTube scripts, titles and content plans.",
  },
  {
    title: "Blog Writer",
    icon: "✍️",
    description:
      "Create articles, guides and SEO-friendly content faster.",
  },
  {
    title: "Social Media Creator",
    icon: "📱",
    description:
      "Generate posts, captions and strategies for social platforms.",
  },
  {
    title: "Business Idea Generator",
    icon: "💼",
    description:
      "Discover online business ideas and growth opportunities.",
  },
  {
    title: "Marketing Planner",
    icon: "📈",
    description:
      "Build marketing strategies and campaigns with AI.",
  },
];

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <section className="max-w-6xl mx-auto">

        <div className="text-center mb-14">
          <p className="text-zinc-400 mb-3">
            AI Creator Hub Tools
          </p>

          <h1 className="text-5xl font-bold mb-5">
            Your AI Productivity Suite
          </h1>

          <p className="text-zinc-400 max-w-2xl mx-auto">
            Powerful AI tools designed to help creators,
            entrepreneurs and businesses create more and grow faster.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <div
              key={tool.title}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-zinc-500 transition"
            >
              <div className="text-4xl mb-5">
                {tool.icon}
              </div>

              <h2 className="text-2xl font-bold mb-3">
                {tool.title}
              </h2>

              <p className="text-zinc-400">
                {tool.description}
              </p>

              <button className="mt-6 bg-white text-black px-5 py-3 rounded-xl font-semibold">
                Open Tool
              </button>
            </div>
          ))}
        </div>

      </section>
    </main>
  );
}