"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/content";
import { Logo_Dark } from "@/componentsbk/Logo";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50">
      {/* Utility bar */}
      {/* <div className="hidden lg:flex items-center justify-between border-b border-outline-variant/40 bg-surface-container-lowest/80 px-margin py-2 text-xs text-on-surface-variant">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5">
            <Globe2 className="size-3.5 text-primary" strokeWidth={2} />
            Global Headquarters: Nigeria / Japan / Canada
          </span>
          <span className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-primary" />
            Ecosystem Index: +2.48% (OYLN)
          </span>
        </div>
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5">
            <Globe2 className="size-3.5" strokeWidth={2} />
            Global Presence
          </span>
          <Link
            href="#careers"
            className="flex items-center gap-1.5 hover:text-on-surface transition-colors"
          >
            <Briefcase className="size-3.5" strokeWidth={2} />
            Careers
          </Link>
          <Link
            href="#governance"
            className="flex items-center gap-1.5 hover:text-on-surface transition-colors"
          >
            <ShieldCheck className="size-3.5" strokeWidth={2} />
            Institutional Governance
          </Link>
        </div>
      </div> */}

      {/* Main nav */}
      <div className="flex items-center justify-between px-gutter-mobile lg:px-margin py-4 bg-surface/95 backdrop-blur-sm border-b border-outline-variant/30">
        <Link href="#top" className="flex items-center gap-2.5 shrink-0">
          <Logo_Dark />
        </Link>

        <nav className="hidden lg:flex items-center gap-8 font-display text-sm font-medium text-on-surface">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* <div className="hidden lg:flex items-center gap-3 shrink-0">
          <Link
            href="#partner"
            className="inline-flex items-center gap-2 rounded-full bg-primary-container px-5 py-2.5 font-display text-sm font-medium text-on-primary-container hover:bg-primary-container/85 transition-colors"
          >
            Partner With Us
            <ArrowRight className="size-4" strokeWidth={2} />
          </Link>
          <button
            aria-label="Account"
            className="flex items-center justify-center size-10 rounded-full bg-primary-container/40 text-primary hover:bg-primary-container/60 transition-colors"
          >
            <User className="size-4" strokeWidth={2} />
          </button>
        </div> */}

        {/* Mobile controls */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="flex items-center justify-center size-10 rounded-full bg-surface-container-high text-on-surface"
          >
            {open ? (
              <X className="size-4" strokeWidth={2} />
            ) : (
              <Menu className="size-4" strokeWidth={2} />
            )}
          </button>
          {/* <Link
            href="#partner"
            className="inline-flex items-center gap-1.5 rounded-full bg-primary-container px-4 py-2.5 font-display text-xs font-medium text-on-primary-container"
          >
            Contact
          </Link>
          <button
            aria-label="Account"
            className="flex items-center justify-center size-9 rounded-full bg-primary-container/40 text-primary"
          >
            <User className="size-3.5" strokeWidth={2} />
          </button> */}
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="lg:hidden absolute inset-x-0 top-full bg-surface-container-low border-b border-outline-variant/30 px-gutter-mobile py-5 flex flex-col gap-1 font-display text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 border-b border-outline-variant/20 last:border-none text-on-surface hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
