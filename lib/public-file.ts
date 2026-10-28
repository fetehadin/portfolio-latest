import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { getCloudflareContext } from "@opennextjs/cloudflare";

/**
 * Reads a file from public/. Node (build, dev) has it on disk; the Cloudflare
 * Worker has no file system, so there it comes from the static assets binding.
 */
export async function readPublicFile(path: string): Promise<Buffer> {
  try {
    return await readFile(join(process.cwd(), "public", path));
  } catch (fsError) {
    const assets = getCloudflareContext().env.ASSETS;
    if (!assets) throw fsError;
    const res = await assets.fetch(new URL(path, "https://assets.local"));
    if (!res.ok) throw new Error(`${path}: ${res.status}`);
    return Buffer.from(await res.arrayBuffer());
  }
}
