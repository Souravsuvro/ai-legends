"use client";

import { useChat } from "ai/react";
import { useState } from "react";
import { LEGEND_LIST, getLegend, type LegendId } from "@/lib/agents/legends";
import { cn } from "@/lib/utils";

export function Chat() {
  const [legendId, setLegendId] = useState<LegendId>("ada");
  const legend = getLegend(legendId);

  const { messages, input, handleInputChange, handleSubmit, isLoading, setMessages } =
    useChat({
      api: "/api/chat",
      body: { legendId },
      onError: (err) => {
        console.error("Chat error:", err);
      },
    });

  const switchLegend = (id: LegendId) => {
    setLegendId(id);
    setMessages([]);
  };

  return (
    <div className="flex h-full flex-col">
      {/* Legend selector */}
      <div className="border-b border-zinc-800 bg-zinc-950/80 px-4 py-3 backdrop-blur">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center gap-2">
          <span className="mr-2 text-sm font-medium text-zinc-400">Talk to:</span>
          {LEGEND_LIST.map((l) => (
            <button
              key={l.id}
              onClick={() => switchLegend(l.id)}
              className={cn(
                "flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium transition-all",
                legendId === l.id
                  ? "bg-violet-600 text-white shadow-lg shadow-violet-500/25"
                  : "bg-zinc-800/80 text-zinc-300 hover:bg-zinc-700"
              )}
            >
              <span>{l.avatarEmoji}</span>
              <span className="hidden sm:inline">{l.name.split(" ")[0]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Active legend header */}
      <div className="border-b border-zinc-800/60 bg-zinc-900/40 px-4 py-4">
        <div className="mx-auto flex max-w-4xl items-start gap-4">
          <div
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-2xl"
            style={{ backgroundColor: `${legend.color}22` }}
          >
            {legend.avatarEmoji}
          </div>
          <div>
            <h2 className="text-lg font-semibold text-zinc-100">{legend.name}</h2>
            <p className="text-sm text-zinc-400">
              {legend.title} · {legend.era}
            </p>
            <p className="mt-1 text-sm text-zinc-500">{legend.tagline}</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="mx-auto max-w-4xl space-y-6">
          {messages.length === 0 && (
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 text-center">
              <p className="text-zinc-300">
                Ask {legend.name.split(" ")[0]} anything — systems, ideas, code,
                philosophy, or inventions.
              </p>
              <p className="mt-2 text-sm text-zinc-500">{legend.description}</p>
            </div>
          )}

          {messages.map((m) => (
            <div
              key={m.id}
              className={cn(
                "flex gap-3",
                m.role === "user" ? "justify-end" : "justify-start"
              )}
            >
              {m.role === "assistant" && (
                <div
                  className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-sm"
                  style={{ backgroundColor: `${legend.color}33` }}
                >
                  {legend.avatarEmoji}
                </div>
              )}
              <div
                className={cn(
                  "max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed",
                  m.role === "user"
                    ? "bg-violet-600 text-white"
                    : "bg-zinc-800/90 text-zinc-100 border border-zinc-700/50"
                )}
              >
                <div className="whitespace-pre-wrap">{m.content}</div>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex items-center gap-2 text-sm text-zinc-500">
              <div className="h-2 w-2 animate-pulse rounded-full bg-violet-500" />
              {legend.name.split(" ")[0]} is thinking…
            </div>
          )}
        </div>
      </div>

      {/* Input */}
      <div className="border-t border-zinc-800 bg-zinc-950/90 px-4 py-4 backdrop-blur">
        <form
          onSubmit={handleSubmit}
          className="mx-auto flex max-w-4xl gap-3"
        >
          <input
            value={input}
            onChange={handleInputChange}
            placeholder={`Message ${legend.name}…`}
            className="flex-1 rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-500 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="rounded-xl bg-violet-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Send
          </button>
        </form>
        <p className="mx-auto mt-2 max-w-4xl text-center text-xs text-zinc-600">
          AI Legends v0 · Streaming via Vercel AI SDK · Personas are fictional
          interpretations for educational & creative use.
        </p>
      </div>
    </div>
  );
}
