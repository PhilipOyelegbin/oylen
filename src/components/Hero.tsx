import Image from "next/image";
import { Sparkles } from "lucide-react";

// const filters = ["All Companies", "Hosting & Dev", "PropTech", "FinTech & VTU"];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero.png"
          alt=""
          fill
          priority
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
        <div className="absolute inset-0 hero-vignette" />
      </div>

      <div className="relative px-gutter-mobile lg:px-margin pt-14 pb-16 lg:pt-24 lg:pb-24">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-surface-container-lowest/60 px-4 py-1.5 text-xs font-display font-medium tracking-[0.08em] text-primary mb-6">
          <Sparkles className="size-3.5" strokeWidth={2} />
          Institutional Portfolio &amp; Venture Engine
        </div>

        <h1 className="max-w-3xl font-display font-semibold text-headline-lg-mobile lg:text-display leading-[1.08] tracking-tight text-on-surface text-balance">
          A Group of{" "}
          <span className="squiggle-underline text-primary">
            Trailblazing Ventures
          </span>{" "}
          for Every Modern Challenge.
        </h1>

        <p className="mt-6 max-w-xl text-body-md lg:text-body-lg text-on-surface-variant leading-relaxed">
          OylenGroup engineers, scales, and operates sovereign-grade platforms
          spanning resilient cloud infrastructure, scam-free direct PropTech,
          ultra-fast fintech telecommunications, and high-impact venture
          incubation.
        </p>

        {/* <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3 max-w-2xl">
          <label className="flex-1 flex items-center gap-3 rounded-full bg-surface-container-lowest/80 border border-outline-variant/40 px-5 py-3.5 backdrop-blur-sm">
            <Search className="size-4 text-on-surface-variant shrink-0" strokeWidth={2} />
            <input
              type="text"
              placeholder="Search subsidiary, industry, or corporate solution"
              className="w-full bg-transparent text-sm text-on-surface placeholder:text-on-surface-variant/70 outline-none font-body"
            />
          </label>
        </div> */}

        {/* <div className="mt-4 flex flex-wrap gap-2.5">
          {filters.map((filter, i) => (
            <button
              key={filter}
              className={`rounded-full px-4 py-2 text-xs font-display font-medium transition-colors ${
                i === 0
                  ? "bg-primary text-on-primary"
                  : "bg-surface-container-lowest/70 text-on-surface-variant border border-outline-variant/40 hover:text-on-surface"
              }`}
            >
              {filter}
            </button>
          ))}
        </div> */}
      </div>
    </section>
  );
}
