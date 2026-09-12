"use client";

import PropertyList from "@/components/realestate/PropertyList";
import { Sparkles, Map, Landmark, ArrowRight, ShieldCheck, TreePine, FlameKindling } from "lucide-react";
import Link from "next/link";

const principles = [
  {
    icon: TreePine,
    title: "Carbon-Neutral Development",
    description: "Every building uses low-carbon concrete cores, structural timber framing, and localized clean-power grids.",
  },
  {
    icon: Landmark,
    title: "Institutional Joint-Ventures",
    description: "Collaborating directly with pension boards, sovereign funds, and REITs to structure high-yield assets.",
  },
  {
    icon: Map,
    title: "Smart Master-Planned Zoning",
    description: "Ensuring close spatial integration of clean logistics corridors, medical clinics, and retail hubs.",
  },
];

export default function RealEstatePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Sector Hero */}
      <section className="bg-secondary text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:16px_16px] opacity-35"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 space-y-6">
          <span className="text-xs uppercase tracking-widest font-extrabold text-accent bg-accent/10 border border-accent/20 px-3 py-1.5 rounded-full w-fit block">
            Oylen Real Estate Division
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Structuring the <span className="text-primary">Physical Assets</span> <br />
            of a Sustainable World
          </h1>
          <p className="text-slate-300 font-light text-base md:text-lg leading-relaxed max-w-3xl">
            We develop premium carbon-neutral residential complexes, smart commercial towers, medical diagnostic parks, and agritech storage hubs. Every Oylen asset integrates localized solar-microgrids and advanced neobank ledger support.
          </p>
        </div>
      </section>

      {/* Property Listings Explorer */}
      <section className="py-20 bg-light-bg">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs uppercase tracking-widest font-extrabold text-primary">Active Portfolio</span>
            <h2 className="text-3xl font-bold text-secondary mt-1">Smart Developments Directory</h2>
            <p className="text-sm text-slate-500 mt-2 font-light">
              Explore available corporate leases, smart-residential units, and logistics spaces currently structured within our property portfolios.
            </p>
          </div>
          
          <PropertyList />
        </div>
      </section>

      {/* Sustainable Development Principles */}
      <section className="py-20 bg-white border-t border-neutral-gray/50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-widest font-extrabold text-primary">Green Building Core</span>
              <h2 className="text-3xl font-bold text-secondary">Our Architectural Framework</h2>
              <p className="text-sm text-slate-500 leading-relaxed font-light">
                We believe that modern assets must protect global ecology while guaranteeing commercial returns. Our construction techniques lower structural load requirements and use advanced spatial analytics to design high-performance districts.
              </p>
              
              <div className="space-y-4 pt-2">
                {principles.map((p, i) => {
                  const Icon = p.icon;
                  return (
                    <div key={p.title} className="flex items-start space-x-3">
                      <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                        <Icon className="h-4.5 w-4.5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-secondary">{p.title}</h4>
                        <p className="text-xs text-slate-500 leading-normal font-light mt-0.5">{p.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Visual Callout */}
            <div className="bg-gradient-to-br from-secondary to-slate-900 text-white p-8 md:p-10 rounded-3xl border border-white/5 relative overflow-hidden flex flex-col justify-between aspect-video">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-accent font-bold text-xs uppercase tracking-wider">
                  <ShieldCheck className="h-5 w-5" />
                  <span>Asset Security</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold">Institutional Investment Inquiries</h3>
                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  Request detailed energy audits, structural surveys, tenant rolls, and yield tables for our global property portfolios.
                </p>
              </div>

              <Link
                href="/contact"
                className="w-full sm:w-fit px-6 py-3.5 rounded-xl text-xs font-bold tracking-wide uppercase text-white bg-primary hover:bg-emerald-600 transition-all text-center flex items-center justify-center cursor-pointer shadow-lg shadow-primary/20 mt-6"
              >
                Connect With Real Estate Board
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
