import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/** Favicon: het beeldmerk in wit op MasterSchool Navy. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#03193C",
          borderRadius: 12,
        }}
      >
        <svg width="46" height="46" viewBox="0 0 48 48" fill="#FFFFFF">
          <path d="M24 4.5 33 15h-6.2v8.2h-5.6V15H15L24 4.5Z" />
          <path d="M22.4 26.7c-3.3-2.6-8.8-4-15.1-3.7L5 24l-2 16.4 2.6-.5c5.9-1.1 12.5-.2 16.8 2.4V26.7Z" />
          <path d="M25.6 26.7c3.3-2.6 8.8-4 15.1-3.7l2.3.1 2 16.3-2.6-.5c-5.9-1.1-12.5-.2-16.8 2.4V26.7Z" />
        </svg>
      </div>
    ),
    size,
  );
}
