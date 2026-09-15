"use client";

import { useState } from "react";
import { ArrowUp, Mail, ChevronDown, ShieldCheck } from "lucide-react";
import { footerColumns } from "@/lib/content";
import Link from "next/link";
import { Logo_Dark } from "@/componentsbk/Logo";

const year = new Date().getFullYear();

export default function Footer() {
  const [openCol, setOpenCol] = useState<string | null>(null);

  return (
    <footer
      id="contact"
      className="relative px-gutter-mobile lg:px-margin pt-8 pb-8 lg:pb-10"
    >
      <div className="flex justify-center">
        <Link
          href="#top"
          className="inline-flex items-center gap-2 rounded-full border border-outline-variant/40 bg-surface-container-high px-5 py-2.5 text-xs font-display font-medium text-on-surface hover:text-primary transition-colors -mt-2 mb-10 lg:mb-12"
        >
          <ArrowUp className="size-3.5" strokeWidth={2} />
          Back to top
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr] gap-10 lg:gap-8">
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <Logo_Dark />
          </Link>
          <p className="mt-4 text-sm text-on-surface-variant leading-relaxed max-w-xs">
            A premier diversified multinational enterprise orchestrating
            sovereign-scale capital, transformative deep technologies,
            industrial modernization, and high-impact infrastructure ventures
            globally.
          </p>
          <div className="mt-5 text-xs font-display font-medium tracking-[0.08em] uppercase text-primary">
            Direct Corporate Inquiry
          </div>
          <Link
            href="mailto:hello@oylengroup.com.ng"
            className="mt-2 inline-flex items-center gap-2 text-sm text-on-surface hover:text-primary transition-colors"
          >
            <Mail className="size-4" strokeWidth={2} />
            hello@oylengroup.com.ng
          </Link>
        </div>

        {footerColumns.map((col) => (
          <div
            key={col.heading}
            className="border-b border-outline-variant/20 lg:border-none pb-3 lg:pb-0"
          >
            <button
              onClick={() =>
                setOpenCol((cur) => (cur === col.heading ? null : col.heading))
              }
              className="flex w-full items-center justify-between text-xs font-display font-medium tracking-[0.08em] uppercase text-primary py-3 lg:py-0 lg:pointer-events-none"
            >
              {col.heading}
              <ChevronDown
                className={`size-4 lg:hidden transition-transform ${
                  openCol === col.heading ? "rotate-180" : ""
                }`}
                strokeWidth={2}
              />
            </button>
            <ul
              className={`flex-col gap-2.5 mt-1 lg:mt-4 text-sm text-on-surface-variant ${
                openCol === col.heading ? "flex" : "hidden"
              } lg:flex`}
            >
              {col.links.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="hover:text-on-surface transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 lg:mt-16 pt-6 border-t border-outline-variant/20 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 text-xs text-on-surface-variant">
        <p>
          © {year} <span className="text-tertiary">OylenGroup</span>. All
          sovereign rights reserved.
        </p>
        <p className="flex items-center gap-2">
          <ShieldCheck className="size-3.5 text-primary" strokeWidth={2} />
          Encrypted Enterprise Protocol
        </p>
      </div>
    </footer>
  );
}
