"use client";

import BookingForm from "@/componentsbk/healthtech/BookingForm";
import {
  HeartPulse,
  CheckSquare,
  ShieldCheck,
  ArrowRight,
  Activity,
  Eye,
  Stethoscope,
} from "lucide-react";
import Link from "next/link";

const offerings = [
  {
    icon: Stethoscope,
    title: "AI-Powered Diagnostics",
    description:
      "Utilizing deep learning models to parse symptoms, read radiology scans, and assist primary care doctors in early triage.",
  },
  {
    icon: Activity,
    title: "Unified Health Records",
    description:
      "A highly secure, portable patient records platform enabling seamless sharing between clinics, labs, and specialists globally.",
  },
  {
    icon: HeartPulse,
    title: "Automated Pharmacy Fulfillment",
    description:
      "Connecting telemedicine prescriptions directly to localized delivery nodes, ensuring same-day medication drop-off.",
  },
];

export default function HealthtechPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Sector Hero */}
      <section className="bg-secondary text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:16px_16px] opacity-35"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 space-y-6">
          <span className="text-xs uppercase tracking-widest font-extrabold text-primary bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-full w-fit block">
            Oylen Healthtech Division
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Accelerating Virtual Care, <br />
            <span className="text-primary">Protecting Human Health</span>
          </h1>
          <p className="text-slate-300 font-light text-base md:text-lg leading-relaxed max-w-3xl">
            We develop borderless virtual medical hubs, integrated diagnostic
            interfaces, and local fulfillment networks. By combining
            high-definition video consultations with secure health data
            registers, Oylen is making healthcare immediate, affordable, and
            accurate.
          </p>
        </div>
      </section>

      {/* Interactive Booking Scheduler */}
      <section className="py-20 bg-light-bg">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs uppercase tracking-widest font-extrabold text-primary">
              Patient Care Center
            </span>
            <h2 className="text-3xl font-bold text-secondary mt-1">
              Schedule a Telehealth Session
            </h2>
            <p className="text-sm text-slate-500 mt-2 font-light">
              Select one of our active staff practitioners and pick a date/time
              to book an instant high-definition video diagnostic call.
            </p>
          </div>

          <BookingForm />
        </div>
      </section>

      {/* Medical Technology Capabilities */}
      <section className="py-20 bg-white border-t border-neutral-gray/50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-widest font-extrabold text-primary">
                Digital Health Frameworks
              </span>
              <h2 className="text-3xl font-bold text-secondary">
                Advanced Care Capabilities
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed font-light">
                Our technology ecosystems allow healthcare networks to operate
                efficiently under strict HIPAA compliance rules. We focus on
                shortening diagnosis timelines and delivering medication
                quickly.
              </p>

              <div className="space-y-4 pt-2">
                {offerings.map((off) => {
                  const Icon = off.icon;
                  return (
                    <div key={off.title} className="flex items-start space-x-3">
                      <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                        <Icon className="h-4.5 w-4.5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-secondary">
                          {off.title}
                        </h4>
                        <p className="text-xs text-slate-500 leading-normal font-light mt-0.5">
                          {off.description}
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
                  <span>Secure HIPAA Data Vaults</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold">
                  Health System & Lab Integrations
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  Request API document integrations, sandbox keys, and clinical
                  pilot collaboration plans for hospitals.
                </p>
              </div>

              <Link
                href="/contact"
                className="w-full sm:w-fit px-6 py-3.5 rounded-xl text-xs font-bold tracking-wide uppercase text-white bg-primary hover:bg-emerald-600 transition-all text-center flex items-center justify-center cursor-pointer shadow-lg shadow-primary/20 mt-6"
              >
                Connect With Clinical Board
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
