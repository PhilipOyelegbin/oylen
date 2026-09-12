"use client";

import { useState, useMemo } from "react";
import { Search, MapPin, Building, Ruler, ArrowRight, X, Sparkles, SlidersHorizontal, Check } from "lucide-react";

interface Property {
  id: string;
  title: string;
  type: "Residential" | "Commercial" | "Industrial" | "Healthcare";
  price: number;
  location: string;
  size: number; // sq ft
  desc: string;
  features: string[];
  imageUrl: string;
  sustainableFeatures: string[];
}

const properties: Property[] = [
  {
    id: "prop-1",
    title: "Oylen Emerald Mansions",
    type: "Residential",
    price: 1850000,
    location: "Eco District, Metropolis East",
    size: 4500,
    desc: "Luxury smart-homes equipped with complete solar shingle roofs, high-efficiency geothermal heating, and automated greywater recycling. Completely integrated with Oylen Health sensors.",
    features: ["4 Bedrooms", "4.5 Bathrooms", "Tesla Powerwall 3", "Smart-lock ecosystem"],
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    sustainableFeatures: ["Zero Carbon Footprint", "Leed Platinum rating", "Geothermal loop"],
  },
  {
    id: "prop-2",
    title: "Oylen Fintech Plaza",
    type: "Commercial",
    price: 8900000,
    location: "Financial Core, Hub South",
    size: 24000,
    desc: "A grade-A smart office commercial complex built using recycled steel and carbon-infused concrete. Features structural solar glass facade panels and high-speed satellite downlinks.",
    features: ["20 Office units", "Centrally zoned HVAC", "Rooftop helipad", "Fiber backbone"],
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    sustainableFeatures: ["Smart solar glazing", "Greywater irrigation", "Kinetic step power tiles"],
  },
  {
    id: "prop-3",
    title: "Oylen Agritech Logistics Terminal",
    type: "Industrial",
    price: 3400000,
    location: "Harvest Valley Corridor",
    size: 48000,
    desc: "Cold storage facility and processing hub powered entirely by dual wind turbines. Includes temperature and oxygen sensor suites connected directly to the Oylen Agritech ledger.",
    features: ["Cold-chain ready", "4 Loading bays", "Drone helipads", "Automated sorting area"],
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    sustainableFeatures: ["Wind-powered grid", "Thermal insulation shell", "Bio-waste fuel converter"],
  },
  {
    id: "prop-4",
    title: "Oylen Medical Park",
    type: "Healthcare",
    price: 6200000,
    location: "Wellness District, City North",
    size: 15500,
    desc: "High-spec modern diagnostics clinic designed to reduce cross-contamination. Complete air filtration scrubbers, clean-room suites, and dedicated telemedicine booths.",
    features: ["12 Surgical units", "HEPA-14 filters", "Telehealth uplink", "Emergency backup microgrid"],
    imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
    sustainableFeatures: ["Advanced air scrubbing", "Solar microgrid", "Anti-microbial copper surfaces"],
  },
  {
    id: "prop-5",
    title: "Oylen Sustainable Residences",
    type: "Residential",
    price: 650000,
    location: "Greenway Suburbs",
    size: 1950,
    desc: "Affordable luxury zero-energy townhomes designed for small families. Double wall insulation, smart thermostats, and shared neighborhood solar bank grids.",
    features: ["3 Bedrooms", "2.5 Bathrooms", "EV Charging port", "Rainwater storage"],
    imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800",
    sustainableFeatures: ["Net-zero ready", "Recycled structural timber", "Dual-pane argon windows"],
  },
];

export default function PropertyList() {
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState<string>("All");
  const [maxPrice, setMaxPrice] = useState<number>(10000000);
  const [sortBy, setSortBy] = useState<string>("price-asc");
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [inquired, setInquired] = useState(false);

  const filteredProperties = useMemo(() => {
    return properties
      .filter((prop) => {
        const matchesSearch =
          prop.title.toLowerCase().includes(search.toLowerCase()) ||
          prop.location.toLowerCase().includes(search.toLowerCase()) ||
          prop.desc.toLowerCase().includes(search.toLowerCase());
        const matchesType = selectedType === "All" || prop.type === selectedType;
        const matchesPrice = prop.price <= maxPrice;
        return matchesSearch && matchesType && matchesPrice;
      })
      .sort((a, b) => {
        if (sortBy === "price-asc") return a.price - b.price;
        if (sortBy === "price-desc") return b.price - a.price;
        return 0;
      });
  }, [search, selectedType, maxPrice, sortBy]);

  const handleInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setInquired(true);
    setTimeout(() => {
      setInquired(false);
      setSelectedProperty(null);
    }, 2500);
  };

  return (
    <div className="space-y-8">
      {/* Control Panel */}
      <div className="bg-white rounded-3xl p-6 shadow-md border border-neutral-gray flex flex-col gap-6 lg:flex-row lg:items-end justify-between">
        {/* Search */}
        <div className="flex-1 space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center">
            <Search className="h-3.5 w-3.5 mr-1 text-primary" />
            Search Properties
          </label>
          <input
            type="text"
            placeholder="Search by title, location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-light-bg border border-neutral-gray/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors text-secondary"
          />
        </div>

        {/* Filter Type */}
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Property Division</label>
          <div className="flex flex-wrap gap-2">
            {["All", "Residential", "Commercial", "Industrial", "Healthcare"].map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedType === type
                    ? "bg-primary text-white"
                    : "bg-light-bg text-secondary border border-neutral-gray hover:bg-neutral-gray/40"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Sort & Price Range */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Price Range Slider */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-slate-500">
              <span>Max Value:</span>
              <span className="font-mono text-primary font-extrabold">${(maxPrice / 1000000).toFixed(1)}M</span>
            </div>
            <input
              type="range"
              min="500000"
              max="10000000"
              step="250000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="accent-primary w-full sm:w-40 h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          {/* Sort selector */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Sort By</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full bg-light-bg border border-neutral-gray/80 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-primary text-secondary font-semibold"
            >
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Grid Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((prop) => (
            <div
              key={prop.id}
              className="bg-white rounded-3xl border border-neutral-gray overflow-hidden shadow-sm hover:shadow-xl hover:scale-[1.01] transition-all flex flex-col group"
            >
              {/* Image section */}
              <div className="relative h-52 w-full bg-slate-200 overflow-hidden">
                {/* Fallback pattern in case image fails */}
                <div className="absolute inset-0 bg-slate-800 flex items-center justify-center text-slate-500 text-xs font-bold">
                  Property Portfolio Preview
                </div>
                {/* Render simple style block with background or default img representation */}
                <img
                  src={prop.imageUrl}
                  alt={prop.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-secondary text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1.5 rounded-full">
                  {prop.type}
                </span>
                <span className="absolute bottom-4 right-4 bg-primary text-accent text-xs font-bold font-mono px-3 py-1.5 rounded-xl border border-primary/20">
                  ${(prop.price / 1000).toLocaleString()}k
                </span>
              </div>

              {/* Text info */}
              <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-1 text-slate-400 text-xs font-light">
                    <MapPin className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                    <span>{prop.location}</span>
                  </div>
                  <h3 className="text-lg font-bold text-secondary tracking-tight group-hover:text-primary transition-colors">
                    {prop.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed font-light">
                    {prop.desc}
                  </p>
                </div>

                <div className="border-t border-neutral-gray/50 pt-4 flex items-center justify-between text-slate-500 text-[11px] font-semibold">
                  <div className="flex items-center space-x-1">
                    <Building className="h-4 w-4 text-primary" />
                    <span>Type: {prop.type}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Ruler className="h-4 w-4 text-primary" />
                    <span>{prop.size.toLocaleString()} sq ft</span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedProperty(prop)}
                  className="w-full py-3 rounded-xl border border-primary text-primary hover:bg-primary hover:text-white transition-all text-xs font-bold tracking-wide uppercase flex items-center justify-center cursor-pointer"
                >
                  View Details & Invest
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full bg-white rounded-3xl p-12 text-center border border-neutral-gray text-slate-400 text-sm">
            No properties found matching the filter options. Try expanding your parameters.
          </div>
        )}
      </div>

      {/* Modal Popup Details */}
      {selectedProperty && (
        <div className="fixed inset-0 z-50 bg-secondary/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-2xl w-full border border-neutral-gray max-h-[90vh] overflow-y-auto">
            {/* Header image details */}
            <div className="relative h-60 w-full bg-slate-800">
              <img
                src={selectedProperty.imageUrl}
                alt={selectedProperty.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedProperty(null)}
                className="absolute top-4 right-4 h-9 w-9 rounded-full bg-white/80 hover:bg-white text-secondary flex items-center justify-center transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="absolute bottom-4 left-4 bg-secondary/90 text-white rounded-xl px-4 py-2 border border-white/10 flex flex-col">
                <span className="text-[9px] uppercase tracking-wider text-slate-300 font-bold">{selectedProperty.type} Project</span>
                <span className="text-lg font-mono font-bold text-accent">${selectedProperty.price.toLocaleString()}</span>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8 space-y-6">
              <div>
                <div className="flex items-center space-x-1 text-slate-400 text-xs font-light mb-1">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>{selectedProperty.location}</span>
                </div>
                <h3 className="text-2xl font-bold text-secondary tracking-tight">{selectedProperty.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-light mt-3">
                  {selectedProperty.desc}
                </p>
              </div>

              {/* Sustainability block */}
              <div className="bg-primary/5 rounded-2xl p-4 border border-primary/20 space-y-2">
                <h4 className="text-xs uppercase tracking-widest font-extrabold text-primary flex items-center">
                  <Sparkles className="h-4 w-4 text-accent mr-1" />
                  Eco-Impact Matrix
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-secondary">
                  {selectedProperty.sustainableFeatures.map((sf) => (
                    <div key={sf} className="flex items-center space-x-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent"></span>
                      <span>{sf}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features and specifications list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-b border-neutral-gray/50 py-4">
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold text-slate-500 mb-2">Specifications</h4>
                  <ul className="space-y-1 text-xs text-secondary font-medium">
                    <li>Size: {selectedProperty.size.toLocaleString()} sq ft</li>
                    <li>Energy Efficiency Class: A+</li>
                    <li>Smart-integration ready: Yes</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold text-slate-500 mb-2">Key Features</h4>
                  <ul className="space-y-1 text-xs text-secondary font-medium">
                    {selectedProperty.features.map((feat) => (
                      <li key={feat} className="flex items-center space-x-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Inquiry form inside modal */}
              <form onSubmit={handleInquiry} className="space-y-3 pt-2">
                <h4 className="text-xs uppercase tracking-widest font-bold text-secondary">Institutional Inquiry & Joint Venture Offer</h4>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter business email"
                    className="flex-grow bg-light-bg border border-neutral-gray rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-primary text-secondary"
                    required
                    disabled={inquired}
                  />
                  <button
                    type="submit"
                    disabled={inquired}
                    className="px-6 py-3 rounded-xl bg-primary hover:bg-secondary text-white transition-all text-xs font-bold tracking-wide uppercase flex items-center justify-center disabled:bg-emerald-800 cursor-pointer"
                  >
                    {inquired ? (
                      <>
                        <Check className="h-4.5 w-4.5 text-accent mr-1" />
                        Sent
                      </>
                    ) : (
                      "Submit Offer"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
