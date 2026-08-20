import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Aakarsh Bommakanti — Sports Media & Content Leader";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#11110f",
          color: "#f4f0e8",
          padding: "72px",
          fontFamily: "Arial",
        }}
      >
        <div style={{ display: "flex", fontSize: 24, color: "#c8bfae", letterSpacing: 2 }}>
          SPORTS MEDIA · CONTENT · STORYTELLING
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 72, fontWeight: 700, letterSpacing: -2 }}>
            Aakarsh Bommakanti
          </div>
          <div style={{ fontSize: 36, color: "#d7cfbf" }}>
            Sports Media &amp; Content Leader
          </div>
          <div style={{ fontSize: 23, color: "#aaa394", maxWidth: 850, lineHeight: 1.4 }}>
            Content strategy, publishing, storytelling and audience growth across global sports media.
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 22 }}>
          <div style={{ color: "#d7cfbf" }}>10+ years in sports media &amp; digital content</div>
          <div style={{ color: "#aaa394" }}>aakarshbommakanti.com</div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
