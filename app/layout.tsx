import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Legends — Legendary Agents Platform",
  description:
    "Production-ready multi-agent platform featuring legendary AI personas. Built for 2026 standards with streaming, tools, and durable agent design.",
  metadataBase: new URL("https://ai-legends.vercel.app"),
  openGraph: {
    title: "AI Legends",
    description: "Talk to legendary AI agents. Build, orchestrate, and ship production agents.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full legendary-bg antialiased">{children}</body>
    </html>
  );
}
