import { ImageResponse } from "next/og";

export const alt =
  "MasterSchool — bijles en studiebegeleiding in Monnickendam en online";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Afbeelding die verschijnt wanneer iemand een link naar de site deelt. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#03193C",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="72" height="72" viewBox="0 0 48 48" fill="#FFFFFF">
            <path d="M24 4.5 33 15h-6.2v8.2h-5.6V15H15L24 4.5Z" />
            <path d="M22.4 26.7c-3.3-2.6-8.8-4-15.1-3.7L5 24l-2 16.4 2.6-.5c5.9-1.1 12.5-.2 16.8 2.4V26.7Z" />
            <path d="M25.6 26.7c3.3-2.6 8.8-4 15.1-3.7l2.3.1 2 16.3-2.6-.5c-5.9-1.1-12.5-.2-16.8 2.4V26.7Z" />
          </svg>
          <div style={{ fontSize: 56, fontWeight: 700, color: "#FFFFFF" }}>
            MasterSchool
          </div>
        </div>
        <div
          style={{
            marginTop: 48,
            fontSize: 62,
            fontWeight: 700,
            color: "#FFFFFF",
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          Betere cijfers en minder stress op de middelbare school
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 30,
            color: "rgba(255,255,255,0.78)",
            maxWidth: 900,
          }}
        >
          Persoonlijke bijles en studiebegeleiding voor havo en vwo — Monnickendam
          en online
        </div>
      </div>
    ),
    size,
  );
}
