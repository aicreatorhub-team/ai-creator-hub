export default function Dashboard() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">

      <section className="max-w-6xl mx-auto">

        <div className="mb-12">
          <p className="text-zinc-400 mb-3">
            Welcome back 👋
          </p>

          <h1 className="text-5xl font-bold">
            Your AI Creator Dashboard
          </h1>

          <p className="text-zinc-400 mt-4 max-w-2xl">
            Create content, grow your audience and build your online business
            with your AI team.
          </p>
        </div>


        <div className="grid md:grid-cols-3 gap-6 mb-12">

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-3">
              🎬 Content Created
            </h2>
            <p className="text-4xl font-bold">
              0
            </p>
          </div>


          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-3">
              🤖 AI Tools
            </h2>
            <p className="text-4xl font-bold">
              12
            </p>
          </div>


          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-3">
              🚀 Growth Score
            </h2>
            <p className="text-4xl font-bold">
              100%
            </p>
          </div>

        </div>


        <section className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">

          <h2 className="text-2xl font-bold mb-6">
            Create Something New
          </h2>


          <textarea
            className="w-full h-32 bg-black border border-zinc-700 rounded-xl p-4 text-white"
            placeholder="Example: Create a YouTube video strategy about AI..."
          />


          <button className="mt-5 bg-white text-black px-8 py-3 rounded-xl font-bold">
            Generate with AI
          </button>

        </section>

      </section>

    </main>
  );
}