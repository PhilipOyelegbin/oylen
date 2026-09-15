import {
  ArrowUpRight,
  Server,
  Lock,
  Zap,
  FlaskConical,
  Check,
} from "lucide-react";
import { glyphMap } from "./CardGlyphs";
import type { Subsidiary } from "@/lib/content";
import Link from "next/link";

const tagIcons = {
  server: Server,
  lock: Lock,
  zap: Zap,
  flask: FlaskConical,
};

const tagStyles: Record<Subsidiary["tagTone"], string> = {
  primary: "bg-primary-container/25 text-primary border border-primary/20",
  tertiary: "bg-tertiary-container/25 text-tertiary border border-tertiary/25",
  neutral:
    "bg-surface-container-high text-on-surface-variant border border-outline-variant/40",
  outline: "bg-transparent text-primary border border-primary/40",
};

const bulletIconStyles: Record<Subsidiary["tagTone"], string> = {
  primary: "text-primary",
  tertiary: "text-tertiary",
  neutral: "text-on-surface-variant",
  outline: "text-primary",
};

const ctaStyles: Record<Subsidiary["ctaTone"], string> = {
  primary: "bg-primary-container text-white hover:bg-primary-container/85",
  outline:
    "bg-surface-container-high/70 text-on-surface border border-outline-variant/40 hover:bg-surface-container-high",
  secondary:
    "bg-secondary-container text-on-secondary-container hover:bg-secondary-container/85",
};

export default function SubsidiaryCard({ item }: { item: Subsidiary }) {
  const TagIcon = tagIcons[item.tagIcon];
  const Glyph = glyphMap[item.glyph];

  return (
    <article className="flex flex-col rounded-lg border border-outline-variant/25 bg-surface-container-low overflow-hidden card-glow">
      <div className="relative h-44 lg:h-48 border-b border-outline-variant/20 bg-linear-to-br from-surface-container-high to-surface-container-lowest text-primary p-5">
        <div className="relative z-10 flex items-start justify-between">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] font-display font-medium tracking-wider uppercase leading-tight max-w-[70%] ${tagStyles[item.tagTone]}`}
          >
            {item.tagLabel}
          </span>
          <span className="shrink-0 mt-0.5">
            <TagIcon className="size-4" strokeWidth={2} />
          </span>
        </div>
        <Glyph />
        <div className="absolute left-5 bottom-5 right-5 z-10">
          <p className="text-[11px] font-display font-medium tracking-[0.08em] uppercase text-on-surface-variant">
            {item.systemMode}
          </p>
          <h3 className="mt-1 font-display font-semibold text-xl text-on-surface">
            {item.name}
          </h3>
        </div>
      </div>

      <div className="flex flex-1 flex-col px-5 py-5">
        <p className="text-sm text-on-surface-variant leading-relaxed">
          {item.description}
        </p>

        <ul className="mt-4 flex flex-col gap-2.5">
          {item.bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex items-start gap-2 text-sm text-on-surface"
            >
              <Check
                className={`size-4 mt-0.5 shrink-0 ${bulletIconStyles[item.tagTone]}`}
                strokeWidth={2.25}
              />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        <Link
          href={item.url}
          className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-display font-medium transition-colors ${ctaStyles[item.ctaTone]}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.cta}
          <ArrowUpRight className="size-4" strokeWidth={2} />
        </Link>
      </div>
    </article>
  );
}
