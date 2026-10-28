import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { profile } from "@/content/site";

export const alt = `${profile.name}, ${profile.role} in ${profile.city}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Photo, name and positioning on the light palette. */
export default async function OpengraphImage() {
  const photo = await readFile(join(process.cwd(), "public", profile.photo));
  const photoSrc = `data:image/png;base64,${photo.toString("base64")}`;
  const [firstSentence] = profile.positioning.split(/(?<=\.)\s/);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 64,
          padding: "0 80px",
          background: "radial-gradient(circle at 85% 50%, rgba(30,120,95,.18), transparent 45%), #F4F2EC",
          color: "#1B1C19",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontSize: 24,
              color: "#0F5A46",
            }}
          >
            <div style={{ width: 14, height: 14, borderRadius: 999, background: "#1E9E6A" }} />
            {profile.availability}
          </div>
          <div style={{ fontSize: 76, fontWeight: 600, letterSpacing: -2.5, marginTop: 24, lineHeight: 1 }}>
            {profile.name}
          </div>
          <div style={{ fontSize: 34, marginTop: 28, lineHeight: 1.35 }}>{firstSentence}</div>
          <div style={{ fontSize: 24, marginTop: 36, color: "#66645C" }}>
            {`${profile.role} · ${profile.city} · ${profile.utc} · ${profile.domain}`}
          </div>
        </div>
        <img
          src={photoSrc}
          width={300}
          height={375}
          alt=""
          style={{ borderRadius: 6, border: "2px solid #DDD9CD", objectFit: "cover" }}
        />
      </div>
    ),
    size,
  );
}
