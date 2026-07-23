"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function RegisterPage() {
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleRegister() {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setMessage(error.message);
      return;
    }

    setMessage("Registration successful. Check your email.");
  }

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-zinc-900 p-8 rounded-3xl">
        <h1 className="text-3xl font-bold mb-6">
          Create Account
        </h1>

        <input
          className="w-full mb-4 p-3 rounded bg-black border border-zinc-700"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full mb-4 p-3 rounded bg-black border border-zinc-700"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleRegister}
          className="w-full bg-white text-black py-3 rounded-xl font-bold"
        >
          Register
        </button>

        {message && (
          <p className="mt-4 text-zinc-300">
            {message}
          </p>
        )}
      </div>
    </main>
  );
}
