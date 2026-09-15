"use client";

import YieldDashboard from "@/componentsbk/agritech/YieldDashboard";
import {
  Sprout,
  ShieldCheck,
  Database,
  ArrowRight,
  LineChart,
  Globe,
  HelpCircle,
} from "lucide-react";
import Link from "next/link";

const modules = [
  {
    icon: LineChart,
    title: "Yield Risk Modeling",
    description:
      "Our machine learning frameworks process historical satellite metrics, predictive meteorology, and soil telemetry to hedge crop risk.",
  },
  {
    icon: Database,
    title: "Blockchain Tracing",
    description:
      "Securing end-to-end provenance checklists. Every crop shipment logs temperature, sorting time, and carbon metrics onto a public ledger.",
  },
  {
    icon: Globe,
    title: "Farmer Finance Program",
    description:
      "Democratizing agricultural funding by connecting smallholder cooperatives directly with capital partners under structured repayment terms.",
  },
];

export default function AgritechPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Sector Hero */}
      <section className="bg-secondary text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:16px_16px] opacity-35"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 space-y-6">
          <span className="text-xs uppercase tracking-widest font-extrabold text-primary bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-full w-fit block">
            Oylen Agritech Division
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Nourishing Communities <br />
            Through <span className="text-primary">Precision Farming</span>
          </h1>
          <p className="text-slate-300 font-light text-base md:text-lg leading-relaxed max-w-3xl">
            We deploy advanced IoT sensory networks, automated drone mapping,
            and secure farmer funding structures to stabilize agricultural value
            chains. By replacing guesswork with real-time data, we increase
            global yields while reducing nitrogen waste.
          </p>
        </div>
      </section>

      {/* Interactive Yield Dashboard */}
      <section className="py-20 bg-light-bg">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs uppercase tracking-widest font-extrabold text-primary">
              Farm Operations Desk
            </span>
            <h2 className="text-3xl font-bold text-secondary mt-1">
              Live Soil & Crop Telemetry
            </h2>
            <p className="text-sm text-slate-500 mt-2 font-light">
              Select one of our active farming nodes to review real-time soil
              moisture levels, ambient temperatures, and estimated biomass
              yields.
            </p>
          </div>

          <YieldDashboard />
        </div>
      </section>

      {/* Agritech Capabilities */}
      <section className="py-20 bg-white border-t border-neutral-gray/50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-widest font-extrabold text-primary">
                Precision Agriscience
              </span>
              <h2 className="text-3xl font-bold text-secondary">
                Securing High Yield Ecosystems
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed font-light">
                Our platforms bring together data science and hardware to
                increase crop resistance and logistics efficiency. Through
                structured programs, we empower thousands of local farmers with
                soil calibration kits and secure capital.
              </p>

              <div className="space-y-4 pt-2">
                {modules.map((m) => {
                  const Icon = m.icon;
                  return (
                    <div key={m.title} className="flex items-start space-x-3">
                      <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                        <Icon className="h-4.5 w-4.5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-secondary">
                          {m.title}
                        </h4>
                        <p className="text-xs text-slate-500 leading-normal font-light mt-0.5">
                          {m.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTA Box */}
            <div className="bg-gradient-to-br from-secondary to-slate-900 text-white p-8 md:p-10 rounded-3xl border border-white/5 relative overflow-hidden flex flex-col justify-between aspect-video">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-accent font-bold text-xs uppercase tracking-wider">
                  <ShieldCheck className="h-5 w-5" />
                  <span>Verified Supply Chain</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold">
                  Commodity & Off-taker Inquiries
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  Request access to our export ledger documents, crop grading
                  certificates, and smart warehouse storage leases.
                </p>
              </div>

              <Link
                href="/contact"
                className="w-full sm:w-fit px-6 py-3.5 rounded-xl text-xs font-bold tracking-wide uppercase text-white bg-primary hover:bg-emerald-600 transition-all text-center flex items-center justify-center cursor-pointer shadow-lg shadow-primary/20 mt-6"
              >
                Connect With Commodities Division
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
