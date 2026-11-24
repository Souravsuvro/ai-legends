import { createOpenAI } from "@ai-sdk/openai";
import { createAnthropic } from "@ai-sdk/anthropic";

/**
 * Central model provider configuration.
 * Swap providers or add more (Grok, Google, etc.) here without touching routes.
 */

export const openai = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const anthropic = createAnthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

/**
 * Default model for v0.
 * Prefer a strong reasoning model; users can override later via legend config.
 */
export function getDefaultModel() {
  // Prefer Anthropic if key is present, otherwise OpenAI
  if (process.env.ANTHROPIC_API_KEY) {
    return anthropic("claude-sonnet-4-20250514");
  }
  return openai("gpt-4.1");
}
