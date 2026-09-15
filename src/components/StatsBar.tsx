import { Briefcase, ShieldCheck, Activity, RadioTower } from "lucide-react";
import { statBar } from "@/lib/content";

const icons = {
  briefcase: Briefcase,
  shield: ShieldCheck,
  activity: Activity,
  radar: RadioTower,
};

const accents: Record<string, string> = {
  Entities: "text-primary",
  "Lease Integrity": "text-tertiary",
  "SLA Benchmark": "text-secondary",
  Engineering: "text-primary",
};

export default function StatsBar() {
  return (
    <section className="relative -mt-1">
      <div className="px-gutter-mobile lg:px-margin">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px rounded-md overflow-hidden border border-outline-variant/30 bg-outline-variant/20">
          {statBar.map((stat) => {
            const Icon = icons[stat.icon as keyof typeof icons];
            return (
              <div
                key={stat.label}
                className="bg-surface-container-low px-5 py-6 lg:px-7 lg:py-7"
              >
                <div className="flex items-center gap-1.5 text-[11px] font-display font-medium tracking-widest uppercase text-on-surface-variant">
                  <Icon
                    className={`size-3.5 ${accents[stat.label]}`}
                    strokeWidth={2}
                  />
                  {stat.label}
                </div>
                <div className="mt-2 font-display font-semibold text-2xl lg:text-3xl text-on-surface tabular-nums">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs lg:text-sm text-on-surface-variant">
                  {stat.caption}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
