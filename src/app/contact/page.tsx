"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, CheckCircle, Send, Globe, ChevronRight } from "lucide-react";

const offices = [
  { city: "New York", address: "100 Conglomerate Tower, Financial District, NY 10005", phone: "+1 (212) 555-0199", email: "ny@oylengroup.com" },
  { city: "London", address: "88 Canopy Chambers, City of London, EC2V 6EE", phone: "+44 (20) 7946-0955", email: "ldn@oylengroup.com" },
  { city: "Singapore", address: "Marina Bay Trade Node, Tower 2, Singapore 018989", phone: "+65 6789-0122", email: "sg@oylengroup.com" },
];

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [sector, setSector] = useState("General");
  const [message, setMessage] = useState("");
  
  const [submitted, setSubmitted] = useState(false);
  const [ticketRef, setTicketRef] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = "OYL-REQ-" + Math.floor(100000 + Math.random() * 900000);
    setTicketRef(ref);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName("");
    setEmail("");
    setCompany("");
    setSector("General");
    setMessage("");
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Hero */}
      <section className="bg-secondary text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:16px_16px] opacity-35"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 space-y-4">
          <span className="text-xs uppercase tracking-widest font-extrabold text-primary bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-full w-fit block">
            Contact Oylen Group
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight max-w-4xl">
            Route Your Inquiries <br />
            To Our <span className="text-primary">Executive Teams</span>
          </h1>
          <p className="text-slate-300 font-light text-base md:text-lg leading-relaxed max-w-3xl">
            Select the appropriate business division to expedite response times. General institutional partnerships, commodities queries, and custody audits are handled by corresponding directors.
          </p>
        </div>
      </section>

      {/* Main Form and Info Grid */}
      <section className="py-20 bg-light-bg">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Contact Form Container */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-neutral-gray">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-lg font-bold text-secondary pb-2 border-b border-neutral-gray flex items-center">
                    Inquiry Intake Form
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Your Name</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-light-bg border border-neutral-gray rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary text-secondary placeholder:text-slate-400"
                        required
                      />
                    </div>

                    {/* Business Email */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Corporate Email</label>
                      <input
                        type="email"
                        placeholder="j.doe@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-light-bg border border-neutral-gray rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary text-secondary placeholder:text-slate-400"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Company */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Institution / Entity</label>
                      <input
                        type="text"
                        placeholder="Acme Holdings"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full bg-light-bg border border-neutral-gray rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary text-secondary placeholder:text-slate-400"
                        required
                      />
                    </div>

                    {/* Sector Routing */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Target Division</label>
                      <select
                        value={sector}
                        onChange={(e) => setSector(e.target.value)}
                        className="w-full bg-light-bg border border-neutral-gray rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary text-secondary font-semibold"
                      >
                        <option value="General">General / Board Administration</option>
                        <option value="Fintech">Fintech Division (Custody/Tokenization)</option>
                        <option value="Real Estate">Real Estate Division (Smart Cities/JV)</option>
                        <option value="Agritech">Agritech Division (Commodities/IoT)</option>
                        <option value="Healthtech">Healthtech Division (Clinical/HIPAA)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Inquiry Brief</label>
                    <textarea
                      placeholder="Detail your request, project scale, or joint-venture goals..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={5}
                      className="w-full bg-light-bg border border-neutral-gray rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary text-secondary placeholder:text-slate-400"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-primary hover:bg-secondary text-white transition-all text-xs font-bold tracking-wide uppercase flex items-center justify-center cursor-pointer"
                  >
                    Submit Secure Inquiry
                    <Send className="ml-2 h-4 w-4" />
                  </button>
                </form>
              ) : (
                /* Inquiry Sent Confirmation */
                <div className="text-center max-w-md mx-auto py-12 space-y-6">
                  <div className="mx-auto h-16 w-16 rounded-full bg-emerald-100 flex items-center justify-center text-primary">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-secondary">Inquiry Logged</h3>
                    <p className="text-xs text-slate-500 font-light">
                      Your business request has been generated in our CRM database. A representative from the <span className="font-semibold text-primary">{sector}</span> board will contact you shortly.
                    </p>
                  </div>

                  <div className="bg-light-bg border border-neutral-gray rounded-2xl p-5 text-left font-mono text-xs space-y-2">
                    <p className="text-slate-400">Reference: <span className="text-secondary font-bold">{ticketRef}</span></p>
                    <p className="text-slate-400">Status: <span className="text-emerald-600 font-bold">Assigned to Sector Lead</span></p>
                    <p className="text-slate-400">Response SLA: <span className="text-secondary font-bold">12 Business Hours</span></p>
                  </div>

                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-xl border border-neutral-gray text-secondary hover:bg-neutral-gray/40 transition-all text-xs font-bold uppercase tracking-wider cursor-pointer"
                  >
                    Send Another Request
                  </button>
                </div>
              )}
            </div>

            {/* Global Office Locations Column */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-secondary text-white rounded-3xl p-6 md:p-8 border border-white/5 space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
                <h3 className="text-lg font-bold text-accent border-b border-white/10 pb-2">Global Headquarters</h3>
                
                <div className="space-y-6">
                  {offices.map((office) => (
                    <div key={office.city} className="space-y-2">
                      <h4 className="text-sm font-bold text-white flex items-center">
                        <Globe className="h-4 w-4 mr-1.5 text-primary" />
                        Oylen Group {office.city}
                      </h4>
                      <div className="space-y-1 pl-5 text-xs text-slate-300 font-light leading-relaxed">
                        <p className="flex items-start">
                          <MapPin className="h-3.5 w-3.5 text-primary flex-shrink-0 mr-1.5 mt-0.5" />
                          <span>{office.address}</span>
                        </p>
                        <p className="flex items-center">
                          <Phone className="h-3.5 w-3.5 text-primary mr-1.5" />
                          <span>{office.phone}</span>
                        </p>
                        <p className="flex items-center">
                          <Mail className="h-3.5 w-3.5 text-primary mr-1.5" />
                          <span>{office.email}</span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
