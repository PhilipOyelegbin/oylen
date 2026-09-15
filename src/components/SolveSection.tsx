import Image from "next/image";
import { Layers, ShieldCheck, ServerCog } from "lucide-react";
import { solveFeatures } from "@/lib/content";

const icons = { shield: ShieldCheck, server: ServerCog };

export default function SolveSection() {
  return (
    <section
      id="ecosystem"
      className="px-gutter-mobile lg:px-margin py-14 lg:py-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="relative rounded-lg overflow-hidden border border-outline-variant/25 bg-surface-container-lowest">
          <div className="flex justify-between items-center gap-2 px-4 py-3 border-b border-outline-variant/20 bg-surface-container-low">
            <span className="font-display text-xs font-semibold text-on-surface">
              OylenGroup
            </span>
            <span className="ml-auto flex items-center gap-3 text-[10px] text-on-surface-variant font-display">
              {/* <span className="hidden sm:inline">Home</span> */}
              <span className="hidden sm:inline">
                Engineers Operations Control
              </span>
              {/* <span className="hidden sm:inline">Contracts</span>
              <span className="hidden sm:inline">Corporate Help</span>
              <span className="rounded-full bg-primary-container px-2.5 py-1 text-on-primary-container">
                Bot
              </span> */}
            </span>
          </div>
          <div className="relative h-56 lg:h-72">
            <Image
              src="/images/hero.png"
              alt="OylenGroup unified orchestration control room"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-surface-container-lowest via-surface-container-lowest/10 to-transparent" />
          </div>
          <div className="px-5 py-4 bg-surface-container-low border-t border-outline-variant/20">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-xs font-display font-medium tracking-[0.06em] uppercase text-primary">
                <Layers className="size-3.5" strokeWidth={2} />
                Unified Orchestration Fabric
              </span>
              <span className="text-[10px] font-display text-on-surface-variant tabular-nums">
                v4.9-LTS
              </span>
            </div>
            <p className="mt-2 text-sm text-on-surface-variant leading-relaxed">
              Every OylenGroup company shares a common backbone of cryptographic
              auditing, zero-trust infrastructure, and instant cross-subsidiary
              liquidity.
            </p>
          </div>
        </div>

        <div>
          <div className="inline-flex items-center rounded-full bg-surface-container-high px-4 py-1.5 text-xs font-display font-medium tracking-[0.08em] uppercase text-primary mb-4">
            Enterprise Architecture
          </div>
          <h2 className="font-display font-semibold text-headline-lg-mobile lg:text-headline-lg text-on-surface tracking-tight text-balance">
            How We Solve Systemic Market Failures.
          </h2>
          <p className="mt-4 text-sm lg:text-base text-on-surface-variant leading-relaxed max-w-lg">
            In every vertical we enter, from high-stakes server devops to
            residential leasing and real-time telecom top-ups, legacy actors
            profit from artificial friction and hidden markups. We engineer
            structural transparency.
          </p>

          <div className="mt-7 flex flex-col gap-4">
            {solveFeatures.map((feature) => {
              const Icon = icons[feature.icon as keyof typeof icons];
              return (
                <div
                  key={feature.title}
                  className="flex gap-4 rounded-md border border-outline-variant/25 bg-surface-container-low px-5 py-5"
                >
                  <div className="flex items-center justify-center size-9 rounded-full bg-primary-container/25 text-primary shrink-0">
                    <Icon className="size-4" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="font-display font-medium text-base text-on-surface">
                      {feature.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-on-surface-variant leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-display font-medium text-on-primary hover:bg-primary/90 transition-colors"
            >
              Read The Oylen Manifesto
              <FileDown className="size-4" strokeWidth={2} />
            </Link>
            <Link
              href="#"
              className="inline-flex items-center gap-1 text-sm font-display font-medium text-on-surface hover:text-primary transition-colors"
            >
              Corporate Governance
              <ChevronRight className="size-4" strokeWidth={2} />
            </Link>
          </div> */}
        </div>
      </div>
    </section>
  );
}
