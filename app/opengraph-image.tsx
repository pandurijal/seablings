import { ImageResponse } from "next/og";

export const alt = "Seablings — Southeast Asia, Stronger Together";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "linear-gradient(135deg, #f0f9ff 0%, #ffffff 45%, #f2fbf7 100%)",
          color: "#0f172a",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            left: -120,
            width: 420,
            height: 420,
            borderRadius: 9999,
            background: "rgba(14, 165, 233, 0.25)",
            filter: "blur(40px)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -160,
            right: -100,
            width: 480,
            height: 480,
            borderRadius: 9999,
            background: "rgba(34, 197, 94, 0.22)",
            filter: "blur(50px)",
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            position: "relative",
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background:
                "linear-gradient(135deg, #0ea5e9 0%, #0284c7 55%, #16a34a 100%)",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 26,
              fontWeight: 800,
              letterSpacing: "-0.06em",
            }}
          >
            SEA
          </div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              display: "flex",
            }}
          >
            Seablings
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            position: "relative",
          }}
        >
          <div
            style={{
              fontSize: 88,
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              display: "flex",
            }}
          >
            Southeast Asia,
          </div>
          <div
            style={{
              fontSize: 88,
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              background:
                "linear-gradient(90deg, #0284c7 0%, #16a34a 100%)",
              backgroundClip: "text",
              color: "transparent",
              display: "flex",
            }}
          >
            stronger together.
          </div>
          <div
            style={{
              fontSize: 32,
              fontWeight: 400,
              color: "#475569",
              maxWidth: 900,
              display: "flex",
            }}
          >
            A community platform for cross-border kindness, shared stories,
            and cultural exchange across the region.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "#64748b",
            position: "relative",
          }}
        >
          <div style={{ display: "flex" }}>seablings.org</div>
          <div
            style={{
              display: "flex",
              padding: "10px 18px",
              borderRadius: 999,
              background: "rgba(15, 23, 42, 0.06)",
              color: "#0f172a",
              fontWeight: 600,
            }}
          >
            #Seablings
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
