import React from 'react';
import { Cpu, Fingerprint, Clock, DollarSign, FileText, ArrowDown, ArrowRight } from 'lucide-react';

export default function WorkflowArchitectureSection() {
  const nodes = [
    { name: 'ZKTeco Device', desc: 'Biometric Terminal', icon: Cpu },
    { name: 'Attendance Engine', desc: 'Real-time Punch Sync', icon: Fingerprint },
    { name: 'Leave + Overtime', desc: 'Shift & Holiday Rules', icon: Clock },
    { name: 'Payroll Engine', desc: 'PF, ESI, TDS Calculator', icon: DollarSign },
    { name: 'Reports & Payslips', desc: 'Automated Export', icon: FileText },
  ];

  return (
    <section className="py-24 bg-[#0B192C] text-white relative overflow-hidden border-b border-slate-800">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            From punch to payroll. Automatically.
          </h2>
          <p className="text-base sm:text-lg text-slate-400 font-normal">
            An uninterrupted data flow from hardware terminal touch to bank disbursement.
          </p>
        </div>

        {/* Visual Pipeline Flow */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 max-w-6xl mx-auto">
          {nodes.map((node, index) => {
            const IconComp = node.icon;
            return (
              <React.Fragment key={index}>
                <div className="w-full lg:w-auto bg-slate-900/90 p-5 border border-slate-800 flex flex-col items-center text-center space-y-2 relative group hover:border-[#0284C7] transition-all min-w-[190px]">
                  <div className="w-10 h-10 bg-[#0284C7]/20 text-[#0284C7] flex items-center justify-center font-bold">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div className="font-bold text-sm text-white">{node.name}</div>
                  <div className="text-[11px] text-slate-400 font-medium">{node.desc}</div>
                </div>

                {/* Arrow Connector */}
                {index < nodes.length - 1 && (
                  <div className="flex items-center justify-center my-2 lg:my-0 text-[#0284C7]">
                    <ArrowDown className="lg:hidden w-5 h-5 animate-pulse" />
                    <ArrowRight className="hidden lg:block w-6 h-6 animate-pulse" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

      </div>
    </section>
  );
}
