type FlagEntry = {
  name: string;
  src: string;
};

const ASEAN_FLAGS: FlagEntry[] = [
  { name: "Brunei", src: "/flags/flag-brunei.svg" },
  { name: "Cambodia", src: "/flags/flag-cambodia.svg" },
  { name: "Indonesia", src: "/flags/flag-indonesia.svg" },
  { name: "Laos", src: "/flags/flag-laos.svg" },
  { name: "Malaysia", src: "/flags/flag-malaysia.svg" },
  { name: "Myanmar", src: "/flags/flag-myanmar.svg" },
  { name: "Philippines", src: "/flags/flag-philippines.svg" },
  { name: "Singapore", src: "/flags/flag-singapore.svg" },
  { name: "Thailand", src: "/flags/flag-thailand.svg" },
  { name: "Vietnam", src: "/flags/flag-vietnam.svg" },
];

const REPEAT = 3;
const looped = Array.from({ length: REPEAT }, () => ASEAN_FLAGS).flat();

export default function FlagRibbon() {
  return (
    <section
      aria-label="ASEAN member nations"
      className="relative w-full bg-white/70 backdrop-blur-sm border-y border-slate-100 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white/95 to-transparent z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white/95 to-transparent z-10"
      />

      <div
        className="flex w-max animate-marquee motion-reduce:animate-none hover:[animation-play-state:paused]"
        role="list"
      >
        {looped.map((flag, i) => (
          <div
            key={`${flag.name}-${i}`}
            role="listitem"
            className="flex items-center gap-2.5 px-5 py-3 shrink-0"
          >
            <img
              src={flag.src}
              alt={flag.name}
              width={32}
              height={22}
              loading="lazy"
              className="h-[22px] w-auto rounded-[2px] shadow-sm ring-1 ring-slate-200/70 object-cover"
            />
            <span className="text-sm font-medium text-slate-700 whitespace-nowrap tracking-tight">
              {flag.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
