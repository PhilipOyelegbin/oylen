import { Repeat, Scale, CloudCog } from "lucide-react";
import { pillars } from "@/lib/content";

const icons = { swap: Repeat, scale: Scale, cloud: CloudCog };

const toneStyles: Record<string, { icon: string; index: string }> = {
  primary: {
    icon: "bg-primary-container/30 text-primary",
    index: "text-primary",
  },
  tertiary: {
    icon: "bg-tertiary-container/30 text-tertiary",
    index: "text-tertiary",
  },
  secondary: {
    icon: "bg-secondary-container/40 text-secondary",
    index: "text-secondary",
  },
};

export default function PillarsSection() {
  return (
    <section
      id="about"
      className="px-gutter-mobile lg:px-margin py-16 lg:py-24 bg-surface-container-lowest/60"
    >
      <div className="max-w-2xl mx-auto text-center">
        <div className="text-xs font-display font-medium tracking-widest uppercase text-primary mb-3">
          Institutional Foundation
        </div>
        <h2 className="font-display font-semibold text-headline-lg-mobile lg:text-headline-lg text-on-surface tracking-tight text-balance">
          Engineering Trust, Reliability, and Disruption Across Essential
          Industries.
        </h2>
        <p className="mt-4 text-sm lg:text-base text-on-surface-variant leading-relaxed">
          Built on a solid capital structure and managed by cross-disciplinary
          operators, OylenGroup provides the stability of an institutional
          conglomerate with the speed of an agile venture lab.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">
        {pillars.map((pillar) => {
          const Icon = icons[pillar.icon as keyof typeof icons];
          const tone = toneStyles[pillar.tone];
          return (
            <div
              key={pillar.title}
              className="rounded-lg border border-outline-variant/25 bg-surface-container-low px-6 py-7"
            >
              <div
                className={`flex items-center justify-center size-11 rounded-full ${tone.icon}`}
              >
                <Icon className="size-5" strokeWidth={2} />
              </div>
              <h3 className="mt-5 font-display font-semibold text-lg text-on-surface">
                {pillar.title}
              </h3>
              <p className="mt-2.5 text-sm text-on-surface-variant leading-relaxed">
                {pillar.description}
              </p>
              <p
                className={`mt-5 text-[11px] font-display font-semibold tracking-[0.08em] uppercase ${tone.index}`}
              >
                {pillar.index}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
