"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Send, ArrowUpRight } from "lucide-react";
import { Logo_Dark } from "./Logo";
// import { motion } from "framer-motion";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail("");
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <footer className="bg-secondary text-white border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center space-x-2 group">
              <Logo_Dark />
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed pt-2">
              Transforming industries, enriching communities. Oylen Group is a
              leading global conglomerate driving innovation across Fintech,
              Real Estate, Agritech, and Healthtech.
            </p>
            <div className="flex items-center space-x-4 pt-4">
              <a
                href="#"
                className="h-9 w-9 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-accent hover:bg-white/10 transition-all"
                aria-label="LinkedIn"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="h-9 w-9 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-accent hover:bg-white/10 transition-all"
                aria-label="Twitter"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                className="h-9 w-9 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-accent hover:bg-white/10 transition-all"
                aria-label="Instagram"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="#"
                className="h-9 w-9 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-accent hover:bg-white/10 transition-all"
                aria-label="Facebook"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.78 9-5.11 9-9.95z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-sm font-semibold text-accent uppercase tracking-wider">
              Business Sectors
            </h4>
            <ul className="space-y-2.5">
              {[
                { name: "Fintech Division", href: "/fintech" },
                { name: "Real Estate Division", href: "/real-estate" },
                { name: "Agritech Division", href: "/agritech" },
                { name: "Healthtech Division", href: "/healthtech" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 ml-1 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:translate-y-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-sm font-semibold text-accent uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2.5">
              {[
                { name: "About Oylen", href: "/about" },
                { name: "Our Leadership", href: "/about#leadership" },
                { name: "Strategic Partners", href: "/about#partners" },
                { name: "Contact & Support", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-sm font-semibold text-accent uppercase tracking-wider">
              Stay Informed
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Subscribe to the Oylen Digest for global market research and
              conglomerate updates.
            </p>
            <form onSubmit={handleSubscribe} className="relative mt-2">
              <input
                type="email"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={subscribed}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all pr-12 text-white"
                required
              />
              <button
                type="submit"
                disabled={subscribed}
                className="absolute right-1.5 top-1.5 bottom-1.5 bg-primary hover:bg-primary-hover px-3 rounded-lg flex items-center justify-center transition-colors text-white disabled:bg-emerald-800"
              >
                {subscribed ? (
                  <span className="text-xs font-semibold text-accent">
                    Done
                  </span>
                ) : (
                  <Send className="h-4 w-4" />
                )}
              </button>
            </form>

            <div className="space-y-2 pt-4">
              <div className="flex items-center space-x-2 text-xs text-slate-400">
                <MapPin className="h-4 w-4 text-primary" />
                <span>100 Conglomerate Tower, Financial District</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-slate-400">
                <Phone className="h-4 w-4 text-primary" />
                <span>+1 (555) OYLEN-GP</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-slate-400">
                <Mail className="h-4 w-4 text-primary" />
                <span>invest@oylengroup.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 mt-12 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Oylen Group. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Use
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Tax Disclosures
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
