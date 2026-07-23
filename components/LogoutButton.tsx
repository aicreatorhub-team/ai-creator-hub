"use client";

import { createClient } from "@/lib/supabase/client";

export default function LogoutButton() {
  const supabase = createClient();

  async function logout() {
    await supabase.auth.signOut();
    window.location.href = "/login";
  }

  return (
    <button
      onClick={logout}
      className="bg-red-600 text-white px-5 py-3 rounded-xl font-bold"
    >
      Logout
    </button>
  );
}
