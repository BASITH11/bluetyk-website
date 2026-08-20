import React from 'react';
import { ArrowRight, CheckCircle2, Cpu, ChevronRight } from 'lucide-react';

export default function DeviceCatalogSection({ onOpenDevicePage }) {
  const supportedHighlights = [
    { title: 'Instant Push SDK Sync', desc: 'Punch logs stream to cloud under 0.5s via eSSL ADMS.' },
    { title: 'Zero Port Forwarding', desc: 'Works behind standard firewalls with zero static IP.' },
    { title: 'Multi-Branch Pairing', desc: 'Central management across 100+ office locations.' }
  ];

  return (
    <section id="devices" className="bg-[#0B192C] text-white relative overflow-hidden text-center py-20 sm:py-24 border-b border-slate-800">
      
      {/* Translucent White Radial Gradient starting from the center over Dark Navy #0B192C */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.20)_0%,rgba(2,132,199,0.15)_40%,transparent_75%)] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black/20 pointer-events-none" />

      {/* Architectural Left and Right Vertical Guide Lines */}
      <div className="absolute top-0 bottom-0 left-3 sm:left-6 lg:left-8 w-px bg-slate-800 pointer-events-none z-10" />
      <div className="absolute top-0 bottom-0 right-3 sm:right-6 lg:right-8 w-px bg-slate-800 pointer-events-none z-10" />

      {/* Top and Bottom Horizontal Border Lines */}
      <div className="absolute top-0 inset-x-0 h-px bg-slate-800 pointer-events-none z-10" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-slate-800 pointer-events-none z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-20">
        
        {/* 1. CENTERED HEADER BLOCK */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Works with the devices you already use.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Connect your eSSL & ZKTeco biometric terminals and keep your existing hardware with zero replacement costs.
          </p>
        </div>

        {/* 2. CENTERED BIOMETRIC HARDWARE SHOWCASE IMAGE */}
        <div className="max-w-5xl mx-auto space-y-10">
          
          {/* Centered Image Frame showcasing ZKTeco & eSSL hardware terminals */}
          <div
            onClick={onOpenDevicePage}
            className="relative max-w-4xl mx-auto cursor-pointer group text-center"
          >
            {/* High-Quality Centered Hardware Image */}
            <div className="relative overflow-hidden p-2 group-hover:scale-102 transition-transform duration-500">
              <img
                src="/zkteco_devices_showcase.png"
                alt="ZKTeco and eSSL Biometric Terminals"
                className="w-full max-h-[520px] sm:max-h-[600px] object-contain mx-auto drop-shadow-2xl"
              />
            </div>

            <div className="pt-3 text-sm font-bold text-sky-400 group-hover:text-white transition-colors flex items-center justify-center gap-1">
              <span>Click to Open Full Devices Directory Screen →</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Centered Highlights Bar (Matching #0B192C Dark Navy cards) */}
          <div className="grid sm:grid-cols-3 gap-5 text-left max-w-4xl mx-auto pt-2">
            {supportedHighlights.map((item, idx) => (
              <div key={idx} className="bg-slate-900/90 backdrop-blur-md p-5 border border-slate-800 shadow-xs space-y-1.5 hover:border-[#0284C7] transition-colors">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-white">
                  <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0" />
                  <span>{item.title}</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Centered Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenDevicePage}
              className="inline-flex items-center justify-center gap-2.5 bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold text-sm px-8 py-4 shadow-xl hover:scale-105 transition-all group cursor-pointer"
            >
              <span>View Compatible Devices</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenDevicePage}
              className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-200 font-bold text-xs px-6 py-4 border border-slate-800 transition-colors shadow-md"
            >
              <Cpu className="w-4 h-4 text-[#0284C7]" />
              <span>Check ADMS Setup Guide</span>
            </button>
          </div>

        </div>

      </div>

    </section>
  );
}
