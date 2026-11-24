# AI Legends

**Production-ready multi-agent platform of legendary AI personas.**  
Built to 2026 standards: typed agents, streaming UI, modular providers, and a clear path to durable orchestration.

[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org)
[![Vercel AI SDK](https://img.shields.io/badge/AI_SDK-4.x-blue)](https://sdk.vercel.ai)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue)](https://www.typescriptlang.org)

## What is this?

AI Legends lets users converse with carefully designed legendary personas (Ada Lovelace, Nikola Tesla, Leonardo da Vinci, Hypatia, Richard Feynman, and more).  

v0 focuses on:

- Clean, typed persona registry (`lib/agents/legends.ts`)
- Streaming chat via **Vercel AI SDK**
- Provider abstraction (OpenAI / Anthropic ready, easy to add Grok etc.)
- Modern dark UI with persona switching
- Production scaffolding (strict TypeScript, env separation, clear structure)

## Quick Start

```bash
# 1. Clone
git clone https://github.com/Souravsuvro/ai-legends.git
cd ai-legends

# 2. Install
npm install

# 3. Environment
cp .env.example .env.local
# Add OPENAI_API_KEY or ANTHROPIC_API_KEY

# 4. Run
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
ai-legends/
├── app/
│   ├── api/chat/route.ts     # Streaming chat endpoint
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx              # Main chat surface
├── components/
│   └── chat.tsx              # Client chat UI + legend switcher
├── lib/
│   ├── agents/legends.ts     # Persona definitions & system prompts
│   ├── ai/provider.ts        # Model provider factory
│   └── utils.ts
├── .env.example
├── package.json
└── README.md
```

## Current Legends (v0)

| ID        | Name               | Focus                              |
|-----------|--------------------|------------------------------------|
| `ada`     | Ada Lovelace       | Algorithms, structure, poetry of code |
| `tesla`   | Nikola Tesla       | Energy, systems, bold engineering  |
| `da-vinci`| Leonardo da Vinci  | Observation, art + mechanics       |
| `hypatia` | Hypatia            | Reason, geometry, teaching         |
| `feynman` | Richard Feynman    | First principles, clear explanation|

## Roadmap (next increments)

- [ ] Tool calling & structured output per legend
- [ ] Persistent conversation memory (Postgres / Redis)
- [ ] Multi-agent collaboration (Orchestrator routes between legends)
- [ ] Vercel AI SDK ToolLoopAgent / eve harness integration
- [ ] Evaluation suite & observability (LangSmith / Vercel Analytics)
- [ ] Character marketplace & user-created legends
- [ ] Voice + image generation for legends
- [ ] Export to game engines / Unity / Unreal plugins

## Production Notes

- **Models**: Prefer Claude Sonnet or GPT-4.1 class for reasoning quality.
- **Safety**: System prompts keep personas educational & creative. Add guardrails before public launch.
- **Observability**: Log legendId + latency in the chat route; wire OpenTelemetry later.
- **Deployment**: Zero-config on Vercel. Set the same env vars in the project settings.

## License

MIT — build legendary things.

---

**Maintainer**: Sourav Sarker Suvra  
**Repo**: https://github.com/Souravsuvro/ai-legends
