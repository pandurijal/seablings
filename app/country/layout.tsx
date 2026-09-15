import type { ReactNode } from "react";

export default function CountryLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen font-sans bg-gradient-to-b from-white via-sea-50/30 to-white">
      <div className="max-w-6xl mx-auto px-6 py-10">{children}</div>
    </div>
  );
}
