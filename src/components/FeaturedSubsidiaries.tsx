import { Star } from "lucide-react";
import { subsidiaries } from "@/lib/content";
import SubsidiaryCard from "./SubsidiaryCard";

export default function FeaturedSubsidiaries() {
  return (
    <section
      id="subsidiaries"
      className="px-gutter-mobile lg:px-margin py-16 lg:py-24"
    >
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 lg:mb-12">
        <div>
          <div className="flex items-center gap-2 text-xs font-display font-medium tracking-widest uppercase text-primary mb-3">
            <Star className="size-3.5" strokeWidth={2} />
            Flagship Portfolio
          </div>
          <h2 className="font-display font-semibold text-headline-lg-mobile lg:text-headline-lg text-on-surface tracking-tight">
            Featured Subsidiaries
          </h2>
          <p className="mt-3 max-w-lg text-sm lg:text-base text-on-surface-variant">
            Explore our specialized corporate units driving critical
            modernization across sovereign cloud operations, property
            transaction security, and automated micro-fintech rails.
          </p>
        </div>
        {/* <Link
          href="#"
          className="inline-flex items-center gap-2 self-start rounded-full border border-outline-variant/40 bg-surface-container-low px-5 py-3 text-sm font-display font-medium text-on-surface hover:border-primary/40 transition-colors shrink-0"
        >
          Corporate Division Index
          <ArrowUpRight className="size-4" strokeWidth={2} />
        </Link> */}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
        {subsidiaries.map((item) => (
          <SubsidiaryCard key={item.name} item={item} />
        ))}
      </div>
    </section>
  );
}
