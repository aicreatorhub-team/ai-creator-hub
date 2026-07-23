import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";


export const metadata: Metadata = {
  title: "AI Creator Hub",
  description:
    "Create content, business ideas and strategies with AI.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <html lang="en">

      <body>

        <Navbar />

        {children}

      </body>

    </html>

  );

}