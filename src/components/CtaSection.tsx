import { ArrowRight, Building2 } from "lucide-react";
import Link from "next/link";

export default function CtaSection() {
  return (
    <section
      id="investors"
      className="px-gutter-mobile lg:px-margin py-8 lg:py-12"
    >
      <div className="rounded-lg lg:rounded-xl border border-outline-variant/25 bg-surface-container-low px-6 py-10 lg:px-12 lg:py-14">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-lg">
            <div className="text-xs font-display font-medium tracking-[0.1em] uppercase text-primary mb-3">
              Corporate Syndicate
            </div>
            <h2 className="font-display font-semibold text-headline-lg-mobile lg:text-headline-lg text-on-surface tracking-tight text-balance">
              Ready to build with or leverage an OylenGroup subsidiary?
            </h2>
            <p className="mt-4 text-sm lg:text-base text-on-surface-variant leading-relaxed">
              Connect directly with our corporate development desk for
              subsidiary licensing, B2B wholesale API contracts, institutional
              property portfolio integration, or strategic venture syndication.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="mailto:hello@oylengroup.com.ng"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-display font-medium text-on-primary hover:bg-primary/90 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Initiate Partnership Inquiry
              <ArrowRight className="size-4" strokeWidth={2} />
            </Link>
            <Link
              href="mailto:hello@oylengroup.com.ng"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-surface-container-high px-6 py-3.5 text-sm font-display font-medium text-on-surface border border-outline-variant/40 hover:bg-surface-container-highest transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Executive Contact Desk
              <Building2 className="size-4" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
