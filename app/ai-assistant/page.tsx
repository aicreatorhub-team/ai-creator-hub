"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { saveMemory, getMemory } from "@/lib/supabase/memory";
import { createProject } from "@/lib/supabase/client-projects";

type MemoryItem = {
  id: string;
  user_id: string;
  key: string;
  value: string;
  created_at: string;
};

type User = {
  id: string;
  email?: string;
};

export default function AIAssistantPage() {
  const supabase = createClient();

  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [memory, setMemory] = useState<MemoryItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function loadUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        setUser({
          id: user.id,
          email: user.email,
        });
      }

      const savedMemory = await getMemory();
      setMemory(savedMemory);
    }

    loadUser();
  }, [supabase]);

  async function generateAI() {
    if (!prompt.trim()) {
      setResult("Please enter your request first.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt,
          mode: "Content Creator",
        }),
      });

      const data = await response.json();

      setResult(data.message || "No response generated.");
    } catch {
      setResult("AI Engine unavailable.");
    } finally {
      setLoading(false);
    }
  }

  async function saveProject() {
    if (!result) return;

    try {
      await createProject({
        title: "AI Project",
        content: result,
        mode: "Content Creator",
      });

      await saveMemory(
        "last_request",
        prompt
      );

      alert("Project saved successfully!");
    } catch (error) {
      console.error("SAVE ERROR:", error);
      alert("Failed to save project.");
    }
  }

  return (
    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-4xl font-bold mb-3">
        AI Creator Hub
      </h1>

      {user && (
        <p className="text-zinc-400 mb-6">
          Logged in as {user.email}
        </p>
      )}

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="w-full h-40 bg-zinc-900 rounded-xl p-4"
        placeholder="Write your idea..."
      />

      <button
        onClick={generateAI}
        disabled={loading}
        className="mt-5 bg-white text-black px-6 py-3 rounded-xl"
      >
        {loading ? "Creating..." : "Generate AI"}
      </button>

      {result && (
        <div className="mt-8 bg-zinc-900 p-6 rounded-xl">

          <pre className="whitespace-pre-wrap">
            {result}
          </pre>

          <button
            onClick={saveProject}
            className="mt-5 bg-green-600 px-5 py-2 rounded-xl"
          >
            Save Project
          </button>

        </div>
      )}

      {memory.length > 0 && (
        <div className="mt-8 bg-zinc-900 p-5 rounded-xl">

          <h2 className="text-xl font-bold mb-3">
            AI Memory
          </h2>

          {memory.slice(0, 5).map((item) => (
            <p key={item.id}>
              {item.key}: {item.value}
            </p>
          ))}

        </div>
      )}

    </main>
  );
}