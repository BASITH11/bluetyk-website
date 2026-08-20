import React from 'react';
import { Cpu, RefreshCw, DollarSign } from 'lucide-react';

export default function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      action: 'CONNECT',
      title: 'Connect your biometric device.',
      description: 'Point your ZKTeco device ADMS push URL to Bluetyk. Works in 2 minutes without opening router ports or installing software.',
      icon: Cpu
    },
    {
      number: '02',
      action: 'SYNC',
      title: 'Attendance flows automatically.',
      description: 'Fingerprint, face, and card punches sync in real-time. Shifts, late arrivals, and overtime calculate instantly.',
      icon: RefreshCw
    },
    {
      number: '03',
      action: 'PAY',
      title: 'Turn attendance into payroll.',
      description: 'Run automated payroll with verified attendance. Generate payslips with PF, ESI, and TDS deductions included.',
      icon: DollarSign
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
      
      {/* Architectural Border Grid Frame */}
      <div className="absolute top-0 inset-x-0 h-px bg-slate-200 pointer-events-none z-10" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-slate-200 pointer-events-none z-10" />
      <div className="absolute top-0 bottom-0 left-3 sm:left-6 lg:left-8 w-px bg-slate-200 pointer-events-none z-10" />
      <div className="absolute top-0 bottom-0 right-3 sm:right-6 lg:right-8 w-px bg-slate-200 pointer-events-none z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-20">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            How Bluetyk Works
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            From hardware connection to salary disbursement in three seamless steps.
          </p>
        </div>

        {/* 3 Step Workflow */}
        <div className="relative grid md:grid-cols-3 gap-8">
          
          {/* Thin Connecting Line between steps for desktop */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-slate-200 -z-0" />

          {steps.map((step) => {
            const IconComp = step.icon;
            return (
              <div
                key={step.number}
                className="relative z-10 bg-white p-8 rounded-2xl border border-slate-200 hover:border-[#0284C7] transition-all text-left flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#0284C7] flex items-center justify-center font-black">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-black tracking-widest text-slate-500 uppercase bg-slate-100 px-2.5 py-1 rounded">
                      {step.number} {step.action}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
