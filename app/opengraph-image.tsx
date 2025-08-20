import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#0B0C10",
          color: "#F7F7F9",
          padding: "48px",
          alignItems: "center",
          justifyContent: "space-between",
          fontFamily: "Inter, system-ui, sans-serif"
        }}
      >
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <div style={{ width: 32, height: 32, background: "#C8102E", borderRadius: 8 }} />
          <div style={{ fontSize: 28, fontWeight: 700 }}>Albion</div>
        </div>
        <div style={{ maxWidth: 700, fontSize: 44, lineHeight: 1.15, fontWeight: 800 }}>
          Replace the Expansion Cartel with One Operator
        </div>
      </div>
    ),
    size
  );
}