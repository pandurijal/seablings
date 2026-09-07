import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #0ea5e9 0%, #0284c7 55%, #16a34a 100%)",
          color: "white",
          borderRadius: 36,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 84,
            fontWeight: 800,
            letterSpacing: "-0.06em",
            lineHeight: 1,
            display: "flex",
          }}
        >
          SEA
        </div>
        <div
          style={{
            marginTop: 6,
            fontSize: 18,
            fontWeight: 600,
            letterSpacing: "0.18em",
            opacity: 0.85,
            display: "flex",
          }}
        >
          SOLIDARITY
        </div>
      </div>
    ),
    { ...size },
  );
}
