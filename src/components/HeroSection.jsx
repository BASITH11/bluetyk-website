import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Play, Check } from 'lucide-react';

export default function HeroSection({ onOpenDemoModal }) {
  return (
    <section className="relative pt-16 pb-16 sm:pt-20 sm:pb-24 overflow-hidden bg-slate-50/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Text Area */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          
          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.08] tracking-tight">
            Turn attendance into <br className="hidden sm:inline" />
            <span className="text-[#0284C7]">effortless payroll.</span>
          </h1>

          {/* Supporting Text */}
          <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
            Connect your biometric devices, automate attendance and payroll, and manage your entire workforce from one intelligent platform.
          </p>

          {/* CTAs (Unboxed, Sharp Edges, No Border Radius) */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#trial-signup" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-[#0284C7] hover:bg-[#0369A1] text-white font-extrabold text-base px-8 py-6 rounded-none transition-all flex items-center justify-center gap-2 group shadow-sm">
                <span>Start 7-Day Free Trial</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </a>

            <Button
              onClick={onOpenDemoModal}
              variant="outline"
              className="w-full sm:w-auto border border-slate-300 hover:border-slate-400 text-slate-700 font-bold text-base px-7 py-6 rounded-none bg-white hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4 fill-slate-700 text-slate-700 ml-0.5" />
              <span>Watch Demo</span>
            </Button>
          </div>

          {/* Reassurance Checkmarks */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-semibold text-slate-500">
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-500 stroke-[3]" />
              7-day free trial
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-500 stroke-[3]" />
              No credit card
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-500 stroke-[3]" />
              Works with ZKTeco
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
