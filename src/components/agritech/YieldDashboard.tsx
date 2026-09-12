"use client";

import { useState, useEffect } from "react";
import { Sprout, Sun, Thermometer, Droplet, Sparkles, RefreshCw, BarChart2, Eye } from "lucide-react";

interface FarmNode {
  id: string;
  name: string;
  crop: string;
  hectares: number;
  baseMoisture: number;
  baseTemp: number;
  baseYield: number; // tons per hectare
}

const farmNodes: FarmNode[] = [
  { id: "node-1", name: "Harvest Valley - Node A (Cereal)", crop: "Wheat", hectares: 1200, baseMoisture: 58, baseTemp: 22.4, baseYield: 8.5 },
  { id: "node-2", name: "Highlands Plain - Node B (Legume)", crop: "Soybeans", hectares: 850, baseMoisture: 64, baseTemp: 19.8, baseYield: 4.2 },
  { id: "node-3", name: "Riverbed Delta - Node C (Starch)", crop: "Cassava", hectares: 2100, baseMoisture: 72, baseTemp: 27.2, baseYield: 15.8 },
  { id: "node-4", name: "Greenwood Ridge - Node D (Fruit)", crop: "Oranges", hectares: 600, baseMoisture: 52, baseTemp: 24.8, baseYield: 22.1 },
];

export default function YieldDashboard() {
  const [selectedNodeId, setSelectedNodeId] = useState(farmNodes[0].id);
  const [calibrating, setCalibrating] = useState(false);
  const [weatherShift, setWeatherShift] = useState<"Normal" | "Rain" | "Dry">("Normal");
  
  // Real-time sensor states derived from selected node & weather
  const [moisture, setMoisture] = useState(0);
  const [temp, setTemp] = useState(0);
  const [yieldEst, setYieldEst] = useState(0);
  const [nitrogen, setNitrogen] = useState(88);

  const selectedNode = farmNodes.find((node) => node.id === selectedNodeId) || farmNodes[0];

  useEffect(() => {
    let moistureMod = 0;
    let tempMod = 0;
    let yieldMod = 0;

    if (weatherShift === "Rain") {
      moistureMod = 15;
      tempMod = -3.5;
      yieldMod = 1.1;
    } else if (weatherShift === "Dry") {
      moistureMod = -18;
      tempMod = 4.2;
      yieldMod = -1.5;
    }

    setMoisture(Math.min(100, Math.max(10, Math.round(selectedNode.baseMoisture + moistureMod + (Math.random() * 2 - 1)))));
    setTemp(Number((selectedNode.baseTemp + tempMod + (Math.random() * 0.4 - 0.2)).toFixed(1)));
    setYieldEst(Number((selectedNode.baseYield + yieldMod + (Math.random() * 0.2 - 0.1)).toFixed(2)));
    setNitrogen(Math.round(85 + (Math.random() * 8 - 4)));
  }, [selectedNodeId, weatherShift]);

  const handleRecalibrate = () => {
    setCalibrating(true);
    setTimeout(() => {
      setCalibrating(false);
      // Small randomized fluctuation
      setMoisture((prev) => Math.min(100, Math.max(10, prev + Math.round(Math.random() * 4 - 2))));
      setTemp((prev) => Number((prev + (Math.random() * 0.6 - 0.3)).toFixed(1)));
      setYieldEst((prev) => Number((prev + (Math.random() * 0.3 - 0.15)).toFixed(2)));
      setNitrogen(Math.round(85 + (Math.random() * 10 - 5)));
    }, 1200);
  };

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-neutral-gray max-w-4xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Left Control Column */}
        <div className="flex-1 space-y-6">
          <div className="flex items-center space-x-2 pb-2 border-b border-neutral-gray">
            <Sprout className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-bold text-secondary">Farm Node Controller</h3>
          </div>

          {/* Node Selector */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Active Node</label>
            <select
              value={selectedNodeId}
              onChange={(e) => {
                setSelectedNodeId(e.target.value);
                setWeatherShift("Normal");
              }}
              className="w-full bg-light-bg border border-neutral-gray/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary text-secondary font-semibold"
            >
              {farmNodes.map((node) => (
                <option key={node.id} value={node.id}>
                  {node.name}
                </option>
              ))}
            </select>
          </div>

          {/* Weather Shift Simulator */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Weather Condition Simulation</label>
            <div className="grid grid-cols-3 gap-2">
              {(["Normal", "Rain", "Dry"] as const).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setWeatherShift(mode)}
                  className={`py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    weatherShift === mode
                      ? "bg-secondary text-white"
                      : "bg-light-bg text-secondary border border-neutral-gray hover:bg-neutral-gray/40"
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>

          {/* Operations */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Node Operations</h4>
            <div className="flex gap-2">
              <button
                onClick={handleRecalibrate}
                disabled={calibrating}
                className="flex-1 py-3 rounded-xl border border-primary text-primary hover:bg-primary hover:text-white transition-all text-xs font-bold tracking-wide uppercase flex items-center justify-center disabled:opacity-50 cursor-pointer"
              >
                <RefreshCw className={`mr-2 h-4 w-4 ${calibrating ? "animate-spin" : ""}`} />
                {calibrating ? "Sampling Soil..." : "Calibrate Sensors"}
              </button>
            </div>
          </div>
        </div>

        {/* Right Dashboard Data Column */}
        <div className="flex-1 bg-light-bg rounded-2xl p-6 border border-neutral-gray/50 flex flex-col justify-between space-y-6">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs uppercase tracking-widest font-extrabold text-primary">Live Sensor Feeds</span>
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            </div>

            {/* Farm node metadata */}
            <div className="flex items-center justify-between text-xs border-b border-neutral-gray/80 pb-4 mb-4">
              <div>
                <p className="text-slate-400 font-light">Crop Profile</p>
                <p className="font-bold text-secondary">{selectedNode.crop}</p>
              </div>
              <div className="text-right">
                <p className="text-slate-400 font-light">Area Managed</p>
                <p className="font-bold text-secondary font-mono">{selectedNode.hectares.toLocaleString()} Hectares</p>
              </div>
            </div>

            {/* Sensor readings grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* Soil Moisture */}
              <div className="bg-white p-4 rounded-xl border border-neutral-gray/50 flex items-center space-x-3">
                <Droplet className="h-8 w-8 text-blue-500 bg-blue-50 p-1.5 rounded-lg flex-shrink-0" />
                <div>
                  <p className="text-[10px] text-slate-400 font-light">Soil Moisture</p>
                  <p className="text-lg font-bold text-secondary font-mono">{moisture}%</p>
                </div>
              </div>

              {/* Temperature */}
              <div className="bg-white p-4 rounded-xl border border-neutral-gray/50 flex items-center space-x-3">
                <Thermometer className="h-8 w-8 text-orange-500 bg-orange-50 p-1.5 rounded-lg flex-shrink-0" />
                <div>
                  <p className="text-[10px] text-slate-400 font-light">Ambient Temp</p>
                  <p className="text-lg font-bold text-secondary font-mono">{temp}°C</p>
                </div>
              </div>

              {/* Nitrogen level */}
              <div className="bg-white p-4 rounded-xl border border-neutral-gray/50 flex items-center space-x-3">
                <Sparkles className="h-8 w-8 text-primary bg-emerald-50 p-1.5 rounded-lg flex-shrink-0" />
                <div>
                  <p className="text-[10px] text-slate-400 font-light">Nutrients (N-P-K)</p>
                  <p className="text-lg font-bold text-secondary font-mono">{nitrogen}%</p>
                </div>
              </div>

              {/* Harvest Estimation */}
              <div className="bg-white p-4 rounded-xl border border-neutral-gray/50 flex items-center space-x-3">
                <BarChart2 className="h-8 w-8 text-accent bg-amber-50 p-1.5 rounded-lg flex-shrink-0" />
                <div>
                  <p className="text-[10px] text-slate-400 font-light">Yield Forecast</p>
                  <p className="text-base font-bold text-secondary font-mono leading-none">{yieldEst} T/Ha</p>
                </div>
              </div>
            </div>
          </div>

          {/* Simple historical chart representation */}
          <div className="border-t border-neutral-gray/60 pt-4 mt-auto">
            <h5 className="text-[10px] uppercase font-bold text-slate-500 mb-2">Compounded Biomass Progress</h5>
            <div className="h-10 flex items-end justify-between gap-1.5">
              {[20, 35, 45, 55, 70, moisture].map((height, idx) => (
                <div key={idx} className="flex-1 bg-slate-200 rounded-t h-full relative overflow-hidden">
                  <div
                    style={{ height: `${height}%` }}
                    className="absolute bottom-0 left-0 right-0 bg-primary transition-all duration-500 rounded-t"
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
