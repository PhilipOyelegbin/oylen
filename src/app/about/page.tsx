"use client";

import { motion } from "framer-motion";
import { Mail, CheckCircle2, ShieldAlert, Users, Award, Target, Landmark } from "lucide-react";
import Link from "next/link";

const milestones = [
  { year: "2018", title: "Oylen Real Estate Inception", desc: "Founded with a mission to develop carbon-neutral commercial buildings and smart housing units in Metropolis East." },
  { year: "2020", title: "Fintech Platform Deployment", desc: "Launched fractional asset tokenization systems and digital checking/wallet neobanking features." },
  { year: "2022", title: "Agritech IoT Grid Launch", desc: "Deployed drone telemetry, multispectral mapping, and farmer co-funding platforms across 12,000 hectares." },
  { year: "2024", title: "Healthtech Network Integration", desc: "Acquired regional diagnostics networks, scaling HIPAA-secure telemedicine consultations and virtual pharmacies." },
];

const leaders = [
  {
    name: "Alexander Oylen-Vance",
    title: "Group Chairman & Chief Executive",
    bio: "Pioneered structured real estate investments for 18 years before unifying capital models under the Oylen Group umbrella.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
  },
  {
    name: "Dr. Sarah Jenkins",
    title: "Chief Medical Officer (Oylen Health)",
    bio: "Former Director of Digital Diagnostics at City Clinical. Leads HIPAA audit compliance and clinical specialist routing.",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300",
  },
  {
    name: "Engr. Marcus Chen",
    title: "Chief Technology Officer (Group Platforms)",
    bio: "Ex-lead systems architect. Built Oylen's neobanking ledger, telemetry IoT pipelines, and diagnosis neural networks.",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300",
  },
  {
    name: "Amina Kojo-Larsson",
    title: "Director of Agronomic Operations",
    bio: "12 years managing agricultural cooperatives. Oversees farm telemetry arrays and commodity broker off-takes.",
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Hero */}
      <section className="bg-secondary text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:16px_16px] opacity-35"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 space-y-4">
          <span className="text-xs uppercase tracking-widest font-extrabold text-primary bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-full w-fit block">
            About Oylen Group
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight max-w-4xl">
            Integrating Tech and Capital <br />
            To Modernize <span className="text-primary">Legacy Industries</span>
          </h1>
          <p className="text-slate-300 font-light text-base md:text-lg leading-relaxed max-w-3xl">
            Oylen Group is an international conglomerate structured to address critical human requirements. We deploy data-science networks, ecological design, and structured funding models across four core business sectors.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-light-bg rounded-3xl p-8 border border-neutral-gray flex flex-col justify-between space-y-6">
              <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <Target className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-secondary mb-3">Our Corporate Mission</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-light">
                  To democratize access to wealth, carbon-neutral housing, precision agricultural output, and primary healthcare through the systematic application of software, data models, and local operations.
                </p>
              </div>
            </div>

            <div className="bg-light-bg rounded-3xl p-8 border border-neutral-gray flex flex-col justify-between space-y-6">
              <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <Landmark className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-secondary mb-3">Our Long-term Vision</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-light">
                  To become the primary structural node connecting capital markets to high-efficiency real assets, making industrial value chains completely transparent, eco-positive, and resilient.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Milestone Timeline */}
      <section className="py-20 bg-light-bg border-t border-neutral-gray/50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-extrabold text-primary">Historical Registry</span>
            <h2 className="text-3xl font-bold text-secondary mt-1">Our Milestones of Growth</h2>
            <p className="text-sm text-slate-500 mt-2 font-light">
              From our roots in real estate development to scaling telehealth diagnostic networks.
            </p>
          </div>

          <div className="relative border-l-2 border-primary/20 max-w-3xl mx-auto pl-6 md:pl-8 space-y-12">
            {milestones.map((ms, idx) => (
              <div key={ms.year} className="relative">
                {/* Timeline node dot */}
                <span className="absolute -left-[31px] md:-left-[39px] top-1 h-4 w-4 rounded-full border-4 border-light-bg bg-primary shadow-sm"></span>
                <div>
                  <span className="text-lg font-mono font-bold text-primary">{ms.year}</span>
                  <h3 className="text-lg font-bold text-secondary mt-0.5">{ms.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-light mt-1.5">{ms.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Directory */}
      <section id="leadership" className="py-20 bg-white border-t border-neutral-gray/50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-extrabold text-primary">Corporate Governance</span>
            <h2 className="text-3xl font-bold text-secondary mt-1">Executive Board</h2>
            <p className="text-sm text-slate-500 mt-2 font-light">
              Our directors combine decades of research, capital deployment, and technical systems design.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leaders.map((leader) => (
              <div
                key={leader.name}
                className="bg-light-bg rounded-3xl overflow-hidden border border-neutral-gray shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                {/* Profile placeholder shape */}
                <div className="h-48 w-full bg-slate-800 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900 flex items-center justify-center text-slate-500 text-xs font-bold">
                    Executive Profile Picture
                  </div>
                  <img
                    src={leader.imageUrl}
                    alt={leader.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                  />
                </div>

                <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-base font-bold text-secondary tracking-tight">{leader.name}</h3>
                    <p className="text-[11px] font-bold text-primary uppercase tracking-wide mt-0.5">{leader.title}</p>
                    <p className="text-xs text-slate-500 leading-relaxed font-light mt-3">
                      {leader.bio}
                    </p>
                  </div>

                  <div className="flex items-center space-x-2 border-t border-neutral-gray/50 pt-4 mt-auto">
                    <a href="#" className="h-7 w-7 rounded-full bg-white flex items-center justify-center text-slate-400 hover:text-primary hover:shadow-sm border border-neutral-gray/80 transition-colors" aria-label="LinkedIn">
                      <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="h-7 w-7 rounded-full bg-white flex items-center justify-center text-slate-400 hover:text-primary hover:shadow-sm border border-neutral-gray/80 transition-colors">
                      <Mail className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
