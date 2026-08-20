import React, { useState } from 'react';
import { Fingerprint, CalendarDays, Clock, DollarSign, BarChart3, Cpu, Terminal, Sparkles } from 'lucide-react';
import DashboardMockup from './ui/DashboardMockup';

export default function ProductIntroSection() {
  const [activeFeature, setActiveFeature] = useState('attendance');

  const modules = [
    {
      num: '01',
      id: 'attendance',
      icon: Fingerprint,
      title: 'Biometric Attendance',
      desc: 'Real-time punch logging via ZKTeco push technology with automated face & fingerprint verification.'
    },
    {
      num: '02',
      id: 'leave',
      icon: CalendarDays,
      title: 'Leave & Shift Management',
      desc: 'Configure flexible shifts, Sunday rules, national holidays, and automated leave approvals.'
    },
    {
      num: '03',
      id: 'overtime',
      icon: Clock,
      title: 'Overtime Engine',
      desc: 'Track early entries and late departures with automatic double-time or 1.5x overtime rates.'
    },
    {
      num: '04',
      id: 'payroll',
      icon: DollarSign,
      title: 'Automated Payroll',
      desc: 'Convert verified attendance records into net salary with instant PF, ESI, TDS & PDF payslips.'
    },
    {
      num: '05',
      id: 'reports',
      icon: BarChart3,
      title: 'Workforce Reports',
      desc: 'Export monthly muster rolls, department summaries, and employee logbooks directly to Excel.'
    },
    {
      num: '06',
      id: 'devices',
      icon: Cpu,
      title: 'ZKTeco Device Hub',
      desc: 'Monitor connection status, IP address, and firmware across all biometric terminals.'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      
      {/* Background Subtle Tech Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-70 pointer-events-none" />

      {/* Architectural Border Grid Frame */}
      <div className="absolute top-0 inset-x-0 h-px bg-slate-200 pointer-events-none z-10" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-slate-200 pointer-events-none z-10" />
      <div className="absolute top-0 bottom-0 left-3 sm:left-6 lg:left-8 w-px bg-slate-200 pointer-events-none z-10" />
      <div className="absolute top-0 bottom-0 right-3 sm:right-6 lg:right-8 w-px bg-slate-200 pointer-events-none z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            One platform for your entire workforce.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Eliminate fragmented software, paper registers, and manual monthly spreadsheet calculations.
          </p>
        </div>

        {/* Split Layout: Aesthetic Module Selector Left, Technical Half-Visible Peek UI Right */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Numbered Aesthetic Modules */}
          <div className="lg:col-span-5 space-y-2.5 text-left">
            {modules.map((mod) => {
              const IconComp = mod.icon;
              const isActive = activeFeature === mod.id;
              return (
                <div
                  key={mod.id}
                  onClick={() => setActiveFeature(mod.id)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer group ${
                    isActive
                      ? 'bg-white border-[#0284C7] bg-gradient-to-r from-sky-50/50 to-white'
                      : 'bg-white/70 border-slate-200 hover:border-slate-300 hover:bg-white'
                  }`}
                >
                  <div className="flex items-start space-x-3.5">
                    <div className={`font-mono text-xs font-bold px-2 py-1 rounded-md shrink-0 ${
                      isActive ? 'bg-[#0284C7] text-white' : 'bg-slate-100 text-slate-500'
                    }`}>
                      {mod.num}
                    </div>

                    <div className="grow">
                      <div className="flex items-center justify-between">
                        <h3 className={`text-sm font-bold ${isActive ? 'text-slate-900' : 'text-slate-700'}`}>
                          {mod.title}
                        </h3>
                        <IconComp className={`w-4 h-4 ${isActive ? 'text-[#0284C7]' : 'text-slate-400'}`} />
                      </div>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                        {mod.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Aesthetic Half-Visible Peek Application UI */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200 rounded-2xl p-2 relative overflow-hidden">
              
              {/* Technical Screen Bar */}
              <div className="bg-[#0B192C] text-slate-300 px-4 py-2 flex items-center justify-between border-b border-slate-800 text-[11px] font-mono mb-2 rounded-t-xl">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#0284C7] animate-pulse"></span>
                  <span className="font-bold text-white">BLUETYK_CORE_V3.2</span>
                </div>
                <div className="hidden sm:flex items-center gap-3 text-slate-400">
                  <span>LATENCY: &lt;0.5s</span>
                  <span>STATUTORY: PF/ESI</span>
                </div>
              </div>

              {/* Cropped Half-Visible Mockup Container */}
              <div className="relative h-[390px] sm:h-[420px] overflow-hidden rounded-b-xl">
                <DashboardMockup />

                {/* Gradient Fade Overlay for Half-Visible Peek */}
                <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-slate-50 via-slate-50/90 to-transparent pointer-events-none z-10 border-b border-slate-200" />

                {/* Aesthetic Status Banner Overlay */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#0B192C] text-white text-[11px] font-mono font-bold px-4 py-2 rounded-full border border-slate-700 flex items-center gap-2.5 z-20">
                  <Sparkles className="w-3.5 h-3.5 text-[#0284C7]" />
                  <span>LIVE DASHBOARD PEEK</span>
                  <span className="text-slate-500 font-normal">|</span>
                  <span className="text-slate-300 font-normal">SEE FULL DEMO BELOW ↓</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
