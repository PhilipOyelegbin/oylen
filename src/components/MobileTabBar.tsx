"use client";

import { LayoutGrid, Boxes, Rocket, Users } from "lucide-react";
import Link from "next/link";

const tabs = [
  { label: "Overview", icon: LayoutGrid, href: "#top" },
  { label: "Holdings", icon: Boxes, href: "#subsidiaries" },
  { label: "Ventures", icon: Rocket, href: "#ecosystem" },
  { label: "Investors", icon: Users, href: "#investors" },
];

export default function MobileTabBar() {
  return (
    <nav className="lg:hidden fixed bottom-0 inset-x-0 z-50 bg-surface-container-lowest/95 backdrop-blur-sm border-t border-outline-variant/30 px-2 py-2 flex items-center justify-around">
      {tabs.map((tab, i) => {
        const Icon = tab.icon;
        return (
          <Link
            key={tab.label}
            href={tab.href}
            className={`flex flex-col items-center gap-1 px-3 py-1.5 rounded-md text-[10px] font-display font-medium ${
              i === 0 ? "text-primary" : "text-on-surface-variant"
            }`}
          >
            <Icon className="size-4" strokeWidth={2} />
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
