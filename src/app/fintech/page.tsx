"use client";

import InvestmentCalc from "@/componentsbk/fintech/InvestmentCalc";
import {
  Shield,
  Sparkles,
  Zap,
  Smartphone,
  Landmark,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const features = [
  {
    icon: Smartphone,
    title: "Neobanking Infrastructure",
    description:
      "Full-suite checking, instant savings, and settlement routing on our proprietary mobile stack.",
  },
  {
    icon: Zap,
    title: "Fractional Yields",
    description:
      "Invest directly into real estate developments or smart farms starting with as little as $10.",
  },
  {
    icon: Landmark,
    title: "Institutional Asset Tokenization",
    description:
      "Converting physical warehouses, medical parks, and agriculture outputs into liquid digital assets.",
  },
  {
    icon: Shield,
    title: "Enterprise Grade Custody",
    description:
      "Secured by advanced cryptographic hardware, bank-grade licensing, and comprehensive insurance.",
  },
];

const highlights = [
  "Fully compliant with Central Bank rules & SEC guidelines",
  "Zero fees on internal peer-to-peer transfers",
  "Integrated smart contract audit reports on ledger transactions",
  "24/7 client desk and automated treasury advisory tools",
];

export default function FintechPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Sector Hero */}
      <section className="bg-secondary text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-widest font-extrabold text-primary bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-full w-fit">
              Oylen Fintech Division
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Democratizing Finance, <br />
              <span className="text-primary">Multiplying Value</span>
            </h1>
            <p className="text-slate-300 font-light text-base md:text-lg leading-relaxed">
              We leverage digital ledgers and custom neobank frameworks to
              connect institutional investments with micro-savings portals. From
              cross-border settlement to fractional real asset tokenization,
              Oylen is changing the rate of capital velocity.
            </p>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            {/* Visual element representing digital card */}
            <motion.div
              initial={{ y: 20, rotate: -2, opacity: 0 }}
              animate={{ y: 0, rotate: 2, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-[320px] aspect-[1.586/1] rounded-2xl bg-gradient-to-br from-primary via-slate-800 to-secondary p-6 shadow-2xl border border-white/15 text-white flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-accent/20 blur-2xl"></div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-slate-300">
                    Corporate Elite
                  </p>
                  <p className="text-sm font-bold mt-1">Oylen Group</p>
                </div>
                <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center border border-white/15">
                  <span className="text-xs font-black text-accent">O</span>
                </div>
              </div>

              <div className="my-auto pt-6">
                <p className="text-xs text-slate-400 font-mono tracking-widest">
                  •••• •••• •••• 8829
                </p>
                <p className="text-[10px] text-accent mt-1 tracking-wider uppercase">
                  Institutional Vault Card
                </p>
              </div>

              <div className="flex justify-between items-end">
                <div>
                  <p className="text-[8px] uppercase text-slate-400">
                    Cardholder
                  </p>
                  <p className="text-xs font-semibold text-slate-200">
                    Oylen Partner Node
                  </p>
                </div>
                <div className="flex space-x-1">
                  <span className="h-5 w-5 rounded-full bg-rose-500/80"></span>
                  <span className="h-5 w-5 rounded-full bg-amber-500/80 -ml-2.5"></span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Simulator Section */}
      <section className="py-20 bg-light-bg">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest font-extrabold text-primary">
              Live Calculator
            </span>
            <h2 className="text-3xl font-bold text-secondary mt-1">
              See Your Funds Grow
            </h2>
            <p className="text-xs text-slate-500 mt-2 font-light">
              Use our simulator to see how compounding annual interest yields
              (APY) compare to conventional banking deposits.
            </p>
          </div>
          <InvestmentCalc />
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white border-t border-neutral-gray/50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-extrabold text-primary">
              Financial Edge
            </span>
            <h2 className="text-3xl font-bold text-secondary mt-1">
              Modern Platform Capability
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <div
                  key={feat.title}
                  className="p-6 rounded-2xl bg-light-bg border border-neutral-gray/50 flex space-x-4"
                >
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-secondary mb-1">
                      {feat.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-light">
                      {feat.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Regulatory & Trust */}
      <section className="py-20 bg-light-bg border-t border-neutral-gray/50">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-widest font-extrabold text-primary">
              Security & Custody
            </span>
            <h2 className="text-3xl font-bold text-secondary">
              A Foundation Built on Absolute Trust
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed font-light">
              Compliance and client safety are our absolute priority. We operate
              strictly in regulated corridors under licensing and insurance
              schemes that keep institutional and retail deposits fully
              segregated.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {highlights.map((hl) => (
                <div key={hl} className="flex items-start space-x-2">
                  <CheckCircle className="h-4.5 w-4.5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-secondary">
                    {hl}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-neutral-gray shadow-md flex flex-col justify-between aspect-video relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-accent/5 blur-2xl"></div>
            <div>
              <div className="flex items-center space-x-2 text-primary font-bold text-xs uppercase tracking-wider mb-4">
                <Sparkles className="h-4 w-4 text-accent" />
                <span>Institutional Vault</span>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-2">
                Connect Your Institution
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed font-light mb-6">
                Receive dedicated API keys, customize lending terms for your
                nodes, and yield compound interest automatically from Oylen
                treasuries.
              </p>
            </div>
            <Link
              href="/contact"
              className="w-full sm:w-fit px-6 py-3 rounded-xl text-xs font-bold tracking-wide uppercase text-white bg-primary hover:bg-secondary transition-all text-center flex items-center justify-center shadow-md shadow-primary/10 cursor-pointer"
            >
              Consult Custody Team
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
