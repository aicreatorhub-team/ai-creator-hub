"use client";

import Link from "next/link";


export default function Navbar() {

  return (

    <nav className="w-full bg-zinc-950 border-b border-zinc-800 px-6 py-5">

      <div className="max-w-6xl mx-auto flex flex-wrap gap-6 items-center">

        <Link
          href="/"
          className="font-bold text-xl"
        >
          AI Creator Hub
        </Link>


        <div className="flex gap-5 text-zinc-300">

          <Link href="/">
            Dashboard
          </Link>


          <Link href="/ai-assistant">
            AI Assistant
          </Link>


          <Link href="/projects">
            Projects
          </Link>


        </div>

      </div>

    </nav>

  );

}