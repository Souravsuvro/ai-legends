import { streamText } from "ai";
import { z } from "zod";
import { getLegend } from "@/lib/agents/legends";
import { getDefaultModel } from "@/lib/ai/provider";

export const maxDuration = 60;

const bodySchema = z.object({
  messages: z.array(
    z.object({
      role: z.enum(["user", "assistant", "system"]),
      content: z.string(),
    })
  ),
  legendId: z.string().optional().default("ada"),
});

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const { messages, legendId } = bodySchema.parse(json);

    const legend = getLegend(legendId);
    const model = getDefaultModel();

    const result = streamText({
      model,
      system: legend.systemPrompt,
      messages,
      temperature: legend.temperature,
      maxTokens: 2048,
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error("[ai-legends/chat]", error);
    return new Response(
      JSON.stringify({
        error: "Failed to generate response",
        details: error instanceof Error ? error.message : "Unknown error",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
