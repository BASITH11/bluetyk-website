import React from 'react';
import { Cpu, Fingerprint, Clock, IndianRupee, FileText } from 'lucide-react';
import SectionHeader from './site/SectionHeader';
import Reveal from './site/Reveal';

const nodes = [
  { name: 'ZKTeco Device', desc: 'Biometric Terminal', icon: Cpu, tint: 'bg-slate-900 text-white' },
  { name: 'Attendance Engine', desc: 'Real-time Punch Sync', icon: Fingerprint, tint: 'bg-emerald-50 text-emerald-600' },
  { name: 'Leave + Overtime', desc: 'Shift & Holiday Rules', icon: Clock, tint: 'bg-amber-50 text-amber-600' },
  { name: 'Payroll Engine', desc: 'PF, ESI, TDS Calculator', icon: IndianRupee, tint: 'bg-violet-50 text-violet-600' },
  { name: 'Reports & Payslips', desc: 'Automated Export', icon: FileText, tint: 'bg-white/20 text-white', final: true },
];

export default function WorkflowArchitectureSection() {
  return (
    <section className="relative bg-white py-20 sm:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="From punch to payroll. Automatically."
          subtitle="An uninterrupted data flow from hardware terminal touch to bank disbursement."
          className="mb-14 sm:mb-20"
        />

        <div className="relative max-w-6xl mx-auto">
          {/* Track (desktop: horizontal, mobile: vertical) */}
          <div className="absolute hidden lg:block left-[8%] right-[8%] top-1/2 -translate-y-1/2 h-px">
            <svg className="absolute inset-0 w-full h-6 -translate-y-1/2 overflow-visible" preserveAspectRatio="none" aria-hidden="true">
              <line x1="0" y1="12" x2="100%" y2="12" stroke="#B9DBFF" strokeWidth="2" className="flow-line" />
            </svg>
            <div className="absolute top-1/2 -translate-y-1/2 h-1.5 w-28 rounded-full bg-gradient-to-r from-transparent via-brand-500 to-transparent blur-[1px] comet" />
          </div>
          <div className="absolute lg:hidden top-[6%] bottom-[6%] left-1/2 -translate-x-1/2 w-px">
            <svg className="absolute inset-0 h-full w-6 -translate-x-1/2 overflow-visible" preserveAspectRatio="none" aria-hidden="true">
              <line x1="12" y1="0" x2="12" y2="100%" stroke="#B9DBFF" strokeWidth="2" className="flow-line" />
            </svg>
          </div>

          <div className="relative grid lg:grid-cols-5 gap-5 lg:gap-6">
            {nodes.map((node, i) => {
              const Icon = node.icon;
              return (
                <Reveal key={node.name} delay={i * 110}>
                  <div
                    className={`group relative mx-auto w-full max-w-[260px] rounded-3xl p-5 text-center transition-all duration-500 ${
                      node.final ? 'card-blue' : 'card card-hover'
                    }`}
                  >
                    <div className={`mx-auto w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 ${node.tint}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className={`mt-4 font-display text-[16px] font-semibold tracking-tight ${node.final ? 'text-white' : 'text-ink'}`}>
                      {node.name}
                    </div>
                    <div className={`mt-1 text-[13px] ${node.final ? 'text-white/80' : 'text-ink-3'}`}>{node.desc}</div>
                    <span className={`absolute top-3 right-4 text-[10px] font-semibold ${node.final ? 'text-white/60' : 'text-ink-3/60'}`}>
                      0{i + 1}
                    </span>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
