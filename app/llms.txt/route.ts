import { llmsText } from "@/lib/cv-text";

export const dynamic = "force-static";

export function GET() {
  return new Response(llmsText(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
