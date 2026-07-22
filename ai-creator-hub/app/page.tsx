export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <div className="max-w-4xl text-center">

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          AI Creator Hub
        </h1>

        <p className="text-xl md:text-3xl font-semibold mb-4">
          Create. Grow. Monetize with AI.
        </p>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
          Your AI team for content creation, business growth and digital success.
          Create videos, generate ideas and build your online future with AI.
        </p>

        <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition">
          Start Creating
        </button>

      </div>
    </main>
  );
}