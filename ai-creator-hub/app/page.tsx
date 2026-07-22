}export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6">

      <section className="max-w-5xl mx-auto text-center py-24">

        <h1 className="text-6xl font-bold tracking-tight mb-6">
          AI Creator Hub
        </h1>

        <p className="text-2xl text-gray-300 mb-4">
          Create. Grow. Monetize with AI.
        </p>

        <p className="text-gray-400 max-w-2xl mx-auto mb-10">
          Your AI-powered workspace for content creation,
          business growth and digital success.
        </p>


        <div className="max-w-2xl mx-auto bg-zinc-900 rounded-2xl p-6">

          <textarea
            className="w-full h-32 bg-black border border-zinc-700 rounded-xl p-4 text-white"
            placeholder="What do you want to create? Example: YouTube video ideas, business plan, marketing content..."
          />

          <button className="mt-4 w-full bg-white text-black py-4 rounded-xl font-bold">
            Create
          </button>

        </div>


      </section>


      <section className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 pb-20">

        <div className="bg-zinc-900 rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-3">
            AI Content Creator
          </h2>
          <p className="text-gray-400">
            Create videos, articles and social media content faster.
          </p>
        </div>


        <div className="bg-zinc-900 rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-3">
            AI Business Tools
          </h2>
          <p className="text-gray-400">
            Discover ideas and automate your online business.
          </p>
        </div>


        <div className="bg-zinc-900 rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-3">
            AI Assistant
          </h2>
          <p className="text-gray-400">
            Your personal AI partner for growth.
          </p>
        </div>

      </section>

    </main>
  );
}