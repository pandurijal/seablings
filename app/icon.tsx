import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

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
          background:
            "linear-gradient(135deg, #0ea5e9 0%, #0284c7 55%, #16a34a 100%)",
          color: "white",
          fontSize: 30,
          fontWeight: 800,
          letterSpacing: "-0.06em",
          borderRadius: 14,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        SEA
      </div>
    ),
    { ...size },
  );
}
