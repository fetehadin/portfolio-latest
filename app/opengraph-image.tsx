import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { profile } from "@/content/cv";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** The paper sheet on the desk, drawn in the light palette. */
export default async function OpengraphImage() {
  const photo = await readFile(join(process.cwd(), "public", profile.photo));
  const photoSrc = `data:image/png;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(circle at 8% 0%, rgba(30,120,95,.45), transparent 55%), radial-gradient(circle at 95% 0%, rgba(214,160,90,.28), transparent 50%), #1F2B29",
        }}
      >
        <div
          style={{
            width: 1000,
            height: 470,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "64px 72px",
            background: "#ECEAE1",
            borderRadius: 3,
            boxShadow: "0 40px 80px -20px rgba(0,0,0,.6)",
            color: "#1B1C19",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 36 }}>
            <img
              src={photoSrc}
              width={150}
              height={150}
              alt=""
              style={{ borderRadius: 3, border: "2px solid #D3D0C4" }}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 60, fontWeight: 600, letterSpacing: -2 }}>{profile.name}</div>
              <div style={{ fontSize: 30, marginTop: 8 }}>{profile.role}</div>
              <div style={{ fontSize: 24, marginTop: 6, color: "#5F5D56" }}>{profile.location}</div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              borderTop: "2px solid #D3D0C4",
              paddingTop: 24,
              fontSize: 24,
              color: "#5F5D56",
            }}
          >
            <span style={{ color: "#0F5A46" }}>{profile.domain}</span>
            <span>backend · apis · automation</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
