"use client";

import { useState, useEffect } from "react";
import { TrendingUp, DollarSign, Calendar, Percent, RefreshCw } from "lucide-react";

export default function InvestmentCalc() {
  const [initial, setInitial] = useState(5000);
  const [monthly, setMonthly] = useState(200);
  const [rate, setRate] = useState(8);
  const [years, setYears] = useState(10);
  
  const [total, setTotal] = useState(0);
  const [totalContributed, setTotalContributed] = useState(0);
  const [interestEarned, setInterestEarned] = useState(0);

  useEffect(() => {
    let currentTotal = initial;
    let contributions = initial;
    const monthlyRate = rate / 12 / 100;
    const totalMonths = years * 12;

    for (let i = 0; i < totalMonths; i++) {
      currentTotal = currentTotal * (1 + monthlyRate) + monthly;
      contributions += monthly;
    }

    setTotal(Math.round(currentTotal));
    setTotalContributed(Math.round(contributions));
    setInterestEarned(Math.round(Math.max(0, currentTotal - contributions)));
  }, [initial, monthly, rate, years]);

  const contributionPercentage = total > 0 ? (totalContributed / total) * 100 : 0;
  const interestPercentage = total > 0 ? (interestEarned / total) * 100 : 0;

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-neutral-gray max-w-4xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Inputs Column */}
        <div className="flex-1 space-y-6">
          <div className="flex items-center space-x-2 pb-2 border-b border-neutral-gray">
            <TrendingUp className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-bold text-secondary">Wealth Growth Simulator</h3>
          </div>

          {/* Initial Investment */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <label className="font-semibold text-slate-600">Initial Deposit</label>
              <span className="text-secondary font-bold font-mono">${initial.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="500"
              max="100000"
              step="500"
              value={initial}
              onChange={(e) => setInitial(Number(e.target.value))}
              className="w-full accent-primary h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          {/* Monthly Savings */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <label className="font-semibold text-slate-600">Monthly Contribution</label>
              <span className="text-secondary font-bold font-mono">${monthly.toLocaleString()}/mo</span>
            </div>
            <input
              type="range"
              min="0"
              max="5000"
              step="50"
              value={monthly}
              onChange={(e) => setMonthly(Number(e.target.value))}
              className="w-full accent-primary h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          {/* Interest Rate */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <label className="font-semibold text-slate-600">Estimated Annual APY</label>
              <span className="text-secondary font-bold font-mono">{rate}%</span>
            </div>
            <input
              type="range"
              min="1"
              max="20"
              step="0.5"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-full accent-primary h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          {/* Duration */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <label className="font-semibold text-slate-600">Investment Horizon</label>
              <span className="text-secondary font-bold font-mono">{years} Years</span>
            </div>
            <input
              type="range"
              min="1"
              max="40"
              step="1"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="w-full accent-primary h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>

        {/* Outputs / Results Column */}
        <div className="flex-1 bg-light-bg rounded-2xl p-6 border border-neutral-gray/50 flex flex-col justify-between">
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-widest font-extrabold text-primary">Estimated Value</h4>
            
            <div className="space-y-1">
              <p className="text-sm text-slate-500 font-light">Future Balance</p>
              <p className="text-4xl md:text-5xl font-black text-secondary tracking-tight font-mono">
                ${total.toLocaleString()}
              </p>
            </div>

            {/* Graphical representation bar */}
            <div className="space-y-3 pt-2">
              <div className="h-6 w-full bg-slate-200 rounded-full overflow-hidden flex shadow-inner">
                <div
                  style={{ width: `${contributionPercentage}%` }}
                  className="bg-secondary transition-all duration-300 h-full flex items-center justify-center text-[9px] font-bold text-white tracking-widest"
                  title="Your Contributions"
                >
                  {contributionPercentage > 20 && `${Math.round(contributionPercentage)}%`}
                </div>
                <div
                  style={{ width: `${interestPercentage}%` }}
                  className="bg-accent transition-all duration-300 h-full flex items-center justify-center text-[9px] font-bold text-white tracking-widest"
                  title="Interest Compound"
                >
                  {interestPercentage > 20 && `${Math.round(interestPercentage)}%`}
                </div>
              </div>

              <div className="flex items-center justify-between text-xs font-semibold pt-1">
                <div className="flex items-center space-x-2">
                  <span className="h-3.5 w-3.5 rounded bg-secondary"></span>
                  <span className="text-slate-500">Deposit Total:</span>
                  <span className="text-secondary font-bold font-mono">${totalContributed.toLocaleString()}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="h-3.5 w-3.5 rounded bg-accent"></span>
                  <span className="text-slate-500">Interest Earned:</span>
                  <span className="text-secondary font-bold font-mono">${interestEarned.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-neutral-gray/60 pt-4 mt-6">
            <p className="text-[10px] text-slate-400 leading-normal">
              Disclaimer: This is a simulation showing compounded growth at a constant APY. Real market yields fluctuate. Standard investment terms apply.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
