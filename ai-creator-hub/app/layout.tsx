import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Creator Hub",
  description:
    "Your AI team for creating, growing and monetizing online.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen">

        <nav className="border-b border-zinc-800 px-8 py-5 flex justify-between items-center">

          <Link
            href="/"
            className="text-xl font-bold"
          >
            AI Creator Hub
          </Link>

          <div className="flex gap-6 text-sm text-zinc-300">

            <Link
              href="/"
              className="hover:text-white"
            >
              Home
            </Link>

            <Link
              href="/tools"
              className="hover:text-white"
            >
              AI Tools
            </Link>

            <Link
              href="/ai-assistant"
              className="hover:text-white"
            >
              Assistant
            </Link>

            <Link
              href="/pricing"
              className="hover:text-white"
            >
              Pricing
            </Link>

          </div>

        </nav>

        {children}

      </body>
    </html>
  );
}