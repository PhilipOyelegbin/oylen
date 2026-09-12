"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  TrendingUp,
  Sprout,
  HeartPulse,
  Building2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo_Light } from "./Logo";

const sectors = [
  {
    name: "Fintech",
    href: "/fintech",
    icon: TrendingUp,
    desc: "Digital banking & assets",
    color: "text-emerald-600",
  },
  {
    name: "Real Estate",
    href: "/real-estate",
    icon: Building2,
    desc: "Premium properties & estates",
    color: "text-amber-600",
  },
  {
    name: "Agritech",
    href: "/agritech",
    icon: Sprout,
    desc: "Precision farming & yields",
    color: "text-green-600",
  },
  {
    name: "Healthtech",
    href: "/healthtech",
    icon: HeartPulse,
    desc: "Telemedicine & diagnostics",
    color: "text-rose-600",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-md py-3 bg-white/80" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Logo_Light />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === "/"
                  ? "text-primary font-semibold border-b-2 border-accent pb-1"
                  : "text-text-gray"
              }`}
            >
              Home
            </Link>

            {/* Sectors Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                onMouseEnter={() => setDropdownOpen(true)}
                className={`flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary ${
                  sectors.some((s) => pathname.startsWith(s.href))
                    ? "text-primary font-semibold"
                    : "text-text-gray"
                }`}
              >
                <span>Sectors</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.15 }}
                    onMouseLeave={() => setDropdownOpen(false)}
                    className="absolute left-1/2 -translate-x-1/2 mt-3 w-80 rounded-2xl bg-white p-4 shadow-xl border border-neutral-gray"
                  >
                    <div className="grid gap-2">
                      <p className="text-xs font-semibold text-slate-400 px-3 uppercase tracking-wider mb-1">
                        Our Business Divisions
                      </p>
                      {sectors.map((sector) => {
                        const Icon = sector.icon;
                        const isActive = pathname.startsWith(sector.href);
                        return (
                          <Link
                            key={sector.name}
                            href={sector.href}
                            className={`flex items-start space-x-3 p-3 rounded-xl transition-all duration-200 hover:bg-neutral-gray/50 ${
                              isActive
                                ? "bg-primary/5 border-l-4 border-accent"
                                : ""
                            }`}
                          >
                            <div
                              className={`p-2 rounded-lg bg-neutral-gray/30 ${sector.color}`}
                            >
                              <Icon className="h-5 w-5" />
                            </div>
                            <div>
                              <p
                                className={`text-sm font-semibold ${isActive ? "text-primary" : "text-secondary"}`}
                              >
                                {sector.name}
                              </p>
                              <p className="text-xs text-slate-500 mt-0.5">
                                {sector.desc}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/about"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === "/about"
                  ? "text-primary font-semibold border-b-2 border-accent pb-1"
                  : "text-text-gray"
              }`}
            >
              About Us
            </Link>

            <Link
              href="/contact"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === "/contact"
                  ? "text-primary font-semibold border-b-2 border-accent pb-1"
                  : "text-text-gray"
              }`}
            >
              Contact
            </Link>

            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-full text-xs font-bold tracking-wide uppercase text-white bg-primary hover:bg-secondary transition-all hover:shadow-md hover:scale-[1.02] active:scale-95"
            >
              Partner With Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-secondary hover:bg-neutral-gray/50 transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-neutral-gray bg-white/95 backdrop-blur-md overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col space-y-6">
              <Link
                href="/"
                className={`text-base font-semibold py-1 border-b border-transparent ${
                  pathname === "/"
                    ? "text-primary border-accent"
                    : "text-secondary"
                }`}
              >
                Home
              </Link>

              {/* Sectors list for mobile */}
              <div className="flex flex-col space-y-3">
                <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                  Business Sectors
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {sectors.map((sector) => {
                    const Icon = sector.icon;
                    const isActive = pathname.startsWith(sector.href);
                    return (
                      <Link
                        key={sector.name}
                        href={sector.href}
                        className={`flex items-center space-x-2 p-2 rounded-xl transition-colors ${
                          isActive
                            ? "bg-primary text-white"
                            : "bg-neutral-gray/30 text-secondary hover:bg-neutral-gray/50"
                        }`}
                      >
                        <Icon className="h-4 w-4 shrink-0" />
                        <span className="text-sm font-medium">
                          {sector.name}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>

              <Link
                href="/about"
                className={`text-base font-semibold py-1 border-b border-transparent ${
                  pathname === "/about"
                    ? "text-primary border-accent"
                    : "text-secondary"
                }`}
              >
                About Us
              </Link>

              <Link
                href="/contact"
                className={`text-base font-semibold py-1 border-b border-transparent ${
                  pathname === "/contact"
                    ? "text-primary border-accent"
                    : "text-secondary"
                }`}
              >
                Contact
              </Link>

              <Link
                href="/contact"
                className="w-full text-center px-6 py-3.5 rounded-xl text-sm font-bold tracking-wide uppercase text-white bg-primary hover:bg-secondary transition-all"
              >
                Partner With Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
