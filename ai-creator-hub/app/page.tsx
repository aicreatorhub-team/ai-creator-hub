export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      <section className="max-w-6xl mx-auto px-6 py-24 text-center">

        <div className="inline-block px-4 py-2 mb-8 rounded-full border border-zinc-700 text-sm text-zinc-300">
          🚀 The future of AI creation
        </div>

        <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-8">
          Build, Grow and Monetize
          <br />
          with AI
        </h1>

        <p className="text-xl text-zinc-400 max-w-3xl mx-auto mb-10">
          AI Creator Hub is your complete AI workspace for creating content,
          building businesses and growing online.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">

          <a
            href="/dashboard"
            className="bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-zinc-200"
          >
            Start Creating
          </a>

          <a
            href="/pricing"
            className="border border-zinc-700 px-8 py-4 rounded-xl font-bold hover:border-white"
          >
            View Plans
          </a>

        </div>

      </section>


      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6 pb-24">

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">
            🎬 Create
          </h2>
          <p className="text-zinc-400">
            Generate videos, scripts, posts and ideas with AI.
          </p>
        </div>


        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">
            📈 Grow
          </h2>
          <p className="text-zinc-400">
            Build strategies, marketing plans and grow your audience.
          </p>
        </div>


        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">
            💰 Monetize
          </h2>
          <p className="text-zinc-400">
            Discover business ideas and create income opportunities.
          </p>
        </div>

      </section>


      <section className="text-center px-6 pb-24">

        <h2 className="text-4xl font-bold mb-6">
          Your AI team is ready.
        </h2>

        <p className="text-zinc-400 mb-8">
          Create faster. Work smarter. Build your future.
        </p>

      </section>

    </main>
  );
}