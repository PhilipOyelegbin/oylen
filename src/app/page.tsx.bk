"use client";

import Link from "next/link";
import {
  ArrowRight,
  TrendingUp,
  Building2,
  Sprout,
  HeartPulse,
  Shield,
  Users,
  Award,
  Globe,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";

const sectors = [
  {
    name: "Fintech",
    description:
      "Empowering millions with borderless payments, micro-lending networks, and asset tokenization.",
    href: "/fintech",
    icon: TrendingUp,
    color:
      "from-emerald-500/20 to-teal-500/10 border-emerald-500/20 hover:border-emerald-500/40 text-emerald-600",
    stats: "$2.5B+ Vol",
    accent: "bg-emerald-500",
  },
  {
    name: "Real Estate",
    description:
      "Developing smart, carbon-neutral master-planned communities and high-yield commercial developments.",
    href: "/real-estate",
    icon: Building2,
    color:
      "from-amber-500/20 to-orange-500/10 border-amber-500/20 hover:border-amber-500/40 text-amber-600",
    stats: "12k+ Units",
    accent: "bg-amber-500",
  },
  {
    name: "Agritech",
    description:
      "Scaling high-yield precision farming, supply chain tracing, and institutional farmer finance structures.",
    href: "/agritech",
    icon: Sprout,
    color:
      "from-green-500/20 to-emerald-500/10 border-green-500/20 hover:border-green-500/40 text-green-600",
    stats: "50k+ Hec",
    accent: "bg-green-500",
  },
  {
    name: "Healthtech",
    description:
      "Unlocking borderless virtual diagnostics, AI-assisted pharmacies, and integrated cloud healthcare networks.",
    href: "/healthtech",
    icon: HeartPulse,
    color:
      "from-rose-500/20 to-pink-500/10 border-rose-500/20 hover:border-rose-500/40 text-rose-600",
    stats: "2.4M+ Lives",
    accent: "bg-rose-500",
  },
];

const stats = [
  {
    value: "4+",
    label: "Sectors Reimagined",
    desc: "Leading tech hubs in finance, farming, building, & wellness.",
  },
  {
    value: "$2.5B+",
    label: "Capital Flow",
    desc: "Total transactional volume and real asset value managed.",
  },
  {
    value: "10+",
    label: "Global Offices",
    desc: "Coordinating inter-continental expansion and regulatory links.",
  },
  {
    value: "98%",
    label: "Client Retention",
    desc: "Across B2B enterprise partnerships and retail platforms.",
  },
];

const values = [
  {
    title: "Ecosystem Synergy",
    description:
      "Fostering collaboration across our sectors to yield compounded industrial value.",
    icon: Globe,
  },
  {
    title: "Deep-Tech Integration",
    description:
      "Deploying proprietary AI models and IoT sensory grids in traditional markets.",
    icon: Award,
  },
  {
    title: "Sustainable Governance",
    description:
      "Every project conforms to strict carbon offsetting and clean energy benchmarks.",
    icon: Shield,
  },
  {
    title: "Human-Centric Design",
    description:
      "Creating platforms that democratize investment, healthcare, and housing.",
    icon: Users,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-secondary text-white py-24 md:py-36 flex items-center justify-center">
        {/* Decorative Background Glows */}
        <div className="absolute top-1/4 left-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-accent/10 blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] bg-size-[16px_16px] opacity-40"></div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-8 text-center md:text-left grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 self-center md:self-start w-fit text-xs font-semibold tracking-wider text-accent uppercase"
            >
              <span>Introducing Oylen Group</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight leading-none text-white"
            >
              Building the{" "}
              <span className="text-primary font-black">Infrastructure</span> of
              Tomorrow
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-slate-300 max-w-2xl leading-relaxed font-light"
            >
              A leading global conglomerate driving next-generation tech
              breakthroughs across{" "}
              <span className="font-semibold text-white">Fintech</span>,{" "}
              <span className="font-semibold text-white">Real Estate</span>,{" "}
              <span className="font-semibold text-white">Agritech</span>, and{" "}
              <span className="font-semibold text-white">Healthtech</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4"
            >
              <Link
                href="#sectors"
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold tracking-wide uppercase text-white bg-primary hover:bg-emerald-600 transition-all text-center flex items-center justify-center shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 cursor-pointer"
              >
                Explore Divisions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold tracking-wide uppercase text-slate-200 border border-white/20 hover:border-white/50 hover:bg-white/5 transition-all text-center cursor-pointer"
              >
                Institutional Inquiry
              </Link>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative hidden lg:block">
            {/* Visual Abstract Graphic representing conglomerate */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-square w-full max-w-100 mx-auto flex items-center justify-center"
            >
              <div className="absolute inset-0 rounded-full border border-dashed border-white/10 animate-[spin_60s_linear_infinite]"></div>
              <div className="absolute inset-10 rounded-full border border-double border-white/5 animate-[spin_40s_linear_infinite_reverse]"></div>

              {/* Central hub */}
              <div className="h-28 w-28 rounded-3xl bg-linear-to-br from-primary to-secondary p-0.5 shadow-2xl flex items-center justify-center relative z-10 border border-white/10">
                <span className="text-4xl font-extrabold text-accent">O</span>
              </div>

              {/* Orbiting nodes */}
              {[
                {
                  icon: TrendingUp,
                  top: "5%",
                  left: "50%",
                  label: "Fintech",
                  color: "text-emerald-400",
                },
                {
                  icon: Building2,
                  top: "50%",
                  left: "95%",
                  label: "Real Estate",
                  color: "text-amber-400",
                },
                {
                  icon: Sprout,
                  top: "95%",
                  left: "50%",
                  label: "Agritech",
                  color: "text-green-400",
                },
                {
                  icon: HeartPulse,
                  top: "50%",
                  left: "5%",
                  label: "Healthtech",
                  color: "text-rose-400",
                },
              ].map((node, i) => {
                const Icon = node.icon;
                return (
                  <motion.div
                    key={node.label}
                    animate={{
                      y: [0, -6, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: i * 0.8,
                      ease: "easeInOut",
                    }}
                    style={{
                      top: node.top,
                      left: node.left,
                      transform: "translate(-50%, -50%)",
                    }}
                    className="absolute h-14 w-14 rounded-2xl bg-secondary/90 border border-white/10 flex flex-col items-center justify-center shadow-lg hover:border-accent hover:bg-secondary cursor-pointer transition-colors"
                  >
                    <Icon className={`h-5 w-5 ${node.color}`} />
                    <span className="text-[8px] uppercase tracking-wider mt-1 text-slate-400 font-bold">
                      {node.label}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Strategic Vision / Metrics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-5">
              <span className="text-xs uppercase tracking-widest font-extrabold text-primary">
                Strategic Footprint
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mt-2 leading-tight">
                Empowering Markets. Enhancing Global Futures.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-slate-600 leading-relaxed font-light text-base md:text-lg">
                Oylen Group aggregates growth equity, deep engineering
                resources, and local partnerships to modernize legacy sectors.
                By deploying proprietary tech, we secure higher agricultural
                yields, lower carbon-footprints in housing, enable borderless
                finance, and increase telemedicine reach.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-light-bg rounded-2xl p-6 border border-neutral-gray/50 hover-lift flex flex-col justify-between"
              >
                <div>
                  <span className="text-4xl font-black text-secondary tracking-tight block mb-2">
                    {stat.value}
                  </span>
                  <span className="text-sm font-semibold text-primary block mb-3">
                    {stat.label}
                  </span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed mt-auto">
                  {stat.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Sectors Grid */}
      <section
        id="sectors"
        className="py-20 bg-light-bg border-t border-neutral-gray/50"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-extrabold text-primary">
              Divisional Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mt-2">
              Our Core Pillars of Impact
            </h2>
            <p className="text-sm text-slate-500 mt-3 font-light">
              Explore the individual business groups representing our commitment
              to global tech solutions and high-yield real assets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sectors.map((sector, i) => {
              const Icon = sector.icon;
              return (
                <motion.div
                  key={sector.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`bg-linear-to-br ${sector.color} border rounded-3xl p-8 flex flex-col justify-between hover:shadow-xl hover:scale-[1.01] transition-all duration-300 group`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`p-4 rounded-2xl bg-white shadow-sm flex items-center justify-center ${sector.color.split(" ").slice(-1)[0]}`}
                      >
                        <Icon className="h-7 w-7" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider bg-white px-3 py-1.5 rounded-full border border-neutral-gray text-secondary">
                        {sector.stats}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-secondary mb-3">
                      {sector.name} Division
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-light mb-8">
                      {sector.description}
                    </p>
                  </div>

                  <Link
                    href={sector.href}
                    className="flex items-center text-sm font-bold tracking-wide uppercase text-secondary group-hover:text-primary transition-colors mt-auto w-fit"
                  >
                    <span>Launch Divisional Portal</span>
                    <ArrowUpRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Corporate Values */}
      <section className="py-20 bg-white border-t border-neutral-gray/50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-extrabold text-primary">
              Ethos & Execution
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mt-2">
              Driven by Core Principles
            </h2>
            <p className="text-sm text-slate-500 mt-3 font-light">
              We anchor our international investments and code bases with values
              that guarantee resilience and return.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, i) => {
              const Icon = val.icon;
              return (
                <div key={i} className="flex flex-col space-y-3 p-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-2">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-bold text-secondary">
                    {val.title}
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed font-light">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Partner Section */}
      <section className="bg-linear-to-br from-secondary to-slate-900 text-white py-20 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-accent/5 blur-3xl"></div>

        <div className="relative max-w-4xl mx-auto px-6 md:px-8 flex flex-col items-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Ready to Build the Future with Oylen?
          </h2>
          <p className="text-sm md:text-base text-slate-300 max-w-xl leading-relaxed font-light">
            We collaborate with institutions, sovereigns, developers, and local
            farmers. Contact our investment division to structure joint ventures
            or integrate technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold tracking-wide uppercase text-white bg-primary hover:bg-emerald-600 transition-all text-center flex items-center justify-center cursor-pointer shadow-lg shadow-primary/20"
            >
              Initiate Contact
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/about"
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold tracking-wide uppercase text-slate-300 border border-white/20 hover:border-white/50 hover:bg-white/5 transition-all text-center cursor-pointer"
            >
              Read Corporate Deck
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
