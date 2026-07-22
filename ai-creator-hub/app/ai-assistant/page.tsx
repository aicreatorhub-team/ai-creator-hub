export default function AIAssistant() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-5xl font-bold mb-6">
        AI Assistant
      </h1>

      <p className="text-gray-400 text-lg mb-8 text-center">
        Your AI partner for content creation and growth.
      </p>

      <div className="w-full max-w-xl bg-zinc-900 rounded-2xl p-6">
        <input
          className="w-full bg-black border border-zinc-700 rounded-xl p-4"
          placeholder="Ask your AI..."
        />

        <button className="mt-4 bg-white text-black px-6 py-3 rounded-xl">
          Generate
        </button>
      </div>
    </main>
  );
}