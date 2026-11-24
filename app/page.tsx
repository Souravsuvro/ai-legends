import { Chat } from "@/components/chat";

export default function HomePage() {
  return (
    <main className="flex h-dvh flex-col">
      {/* Top bar */}
      <header className="flex items-center justify-between border-b border-zinc-800 bg-zinc-950/90 px-4 py-3 backdrop-blur">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 text-lg font-bold text-white">
            AI
          </div>
          <div>
            <h1 className="text-base font-semibold tracking-tight text-zinc-100">
              AI Legends
            </h1>
            <p className="text-xs text-zinc-500">v0 · Legendary Agents Platform</p>
          </div>
        </div>
        <div className="hidden items-center gap-2 text-xs text-zinc-500 sm:flex">
          <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-emerald-400">
            Production scaffold
          </span>
          <span>Next.js 15 · AI SDK · Typed personas</span>
        </div>
      </header>

      {/* Chat surface */}
      <div className="flex-1 overflow-hidden">
        <Chat />
      </div>
    </main>
  );
}
