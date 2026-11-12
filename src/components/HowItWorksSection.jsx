import React from 'react';
import { Cpu, RefreshCw, IndianRupee, Fingerprint, ScanFace, CreditCard } from 'lucide-react';
import SectionHeader from './site/SectionHeader';
import Reveal from './site/Reveal';
import Logo from './site/Logo';

/* ── Small decorative visuals for each step ── */
function ConnectVisual() {
  return (
    <div className="relative h-full flex items-center justify-center gap-0">
      <div className="w-20 h-24 rounded-2xl bg-ink text-white flex flex-col items-center justify-center gap-2 shadow-[0_14px_30px_-12px_rgba(10,15,28,0.5)]">
        <div className="w-10 h-7 rounded-md bg-gradient-to-br from-brand-400 to-brand-600" />
        <div className="w-5 h-5 rounded-md bg-emerald-400/90" />
      </div>
      <svg width="110" height="40" viewBox="0 0 110 40" className="text-brand-400" aria-hidden="true">
        <path d="M2 20 C 35 0, 75 40, 108 20" fill="none" stroke="currentColor" strokeWidth="2" className="flow-line" />
      </svg>
      <div className="relative w-20 h-20 rounded-full bg-white ring-1 ring-line flex items-center justify-center shadow-[0_14px_30px_-14px_rgba(0,90,200,0.5)] pulse-ring">
        <Logo className="h-3.5" />
      </div>
    </div>
  );
}

function SyncVisual() {
  const bars = [38, 55, 46, 82, 60, 70, 44];
  return (
    <div className="h-full flex flex-col justify-end px-6 pb-4">
      <div className="flex items-center justify-center gap-2 mb-4">
        {[Fingerprint, ScanFace, CreditCard].map((Icon, i) => (
          <span key={i} className="w-8 h-8 rounded-full bg-white ring-1 ring-line flex items-center justify-center text-brand-600 shadow-sm">
            <Icon className="w-4 h-4" />
          </span>
        ))}
      </div>
      <div className="flex items-end justify-between gap-2 h-24">
        {bars.map((h, i) => (
          <div
            key={i}
            className={`grow-bar flex-1 rounded-full ${i === 3 ? 'bg-gradient-to-b from-brand-400 to-brand-600' : 'bg-[repeating-linear-gradient(135deg,#EEF1F5_0_4px,#E2E7EE_4px_8px)]'}`}
            style={{ height: `${h}%`, animationDelay: `${i * 80}ms` }}
          />
        ))}
      </div>
    </div>
  );
}

function PayVisual() {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="relative w-52 bg-white rounded-2xl ring-1 ring-line p-4 shadow-[0_18px_36px_-18px_rgba(16,24,40,0.3)] float-y">
        <div className="flex items-center justify-between mb-3">
          <div className="h-2.5 w-20 rounded-full bg-ink/80" />
          <span className="w-7 h-7 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center">
            <IndianRupee className="w-3.5 h-3.5" />
          </span>
        </div>
        {[80, 64, 72].map((w, i) => (
          <div key={i} className="flex items-center justify-between py-1.5 border-t border-line first:border-t-0">
            <div className="h-2 rounded-full bg-line" style={{ width: `${w}px` }} />
            <div className="h-2 w-10 rounded-full bg-line" />
          </div>
        ))}
        <div className="mt-2 flex items-center justify-between pt-2 border-t border-line">
          <div className="h-2.5 w-14 rounded-full bg-emerald-400" />
          <div className="h-2.5 w-12 rounded-full bg-brand-500" />
        </div>
      </div>
    </div>
  );
}

const steps = [
  {
    number: '01',
    action: 'CONNECT',
    title: 'Connect your biometric device.',
    description: 'Point your ZKTeco device ADMS push URL to Bluetyk. Works in 2 minutes without opening router ports or installing software.',
    icon: Cpu,
    Visual: ConnectVisual,
  },
  {
    number: '02',
    action: 'SYNC',
    title: 'Attendance flows automatically.',
    description: 'Fingerprint, face, and card punches sync in real-time. Shifts, late arrivals, and overtime calculate instantly.',
    icon: RefreshCw,
    Visual: SyncVisual,
  },
  {
    number: '03',
    action: 'PAY',
    title: 'Turn attendance into payroll.',
    description: 'Run automated payroll with verified attendance. Generate payslips with PF, ESI, and TDS deductions included.',
    icon: IndianRupee,
    Visual: PayVisual,
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative bg-canvas py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="How It Works"
          title="How Bluetyk Works"
          subtitle="From hardware connection to salary disbursement in three seamless steps."
          className="mb-12 sm:mb-16"
        />

        <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const Visual = step.Visual;
            return (
              <Reveal key={step.number} delay={i * 120}>
                <article className="card card-hover group h-full p-3 flex flex-col">
                  <div className="h-52 rounded-[18px] bg-[linear-gradient(180deg,#F7F9FC_0%,#EEF3F9_100%)] ring-1 ring-line/70 overflow-hidden">
                    <Visual />
                  </div>
                  <div className="px-4 pt-6 pb-5 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <span className="w-10 h-10 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-white">
                        <Icon className="w-5 h-5" />
                      </span>
                      <span className="text-[11px] font-semibold tracking-[0.12em] text-ink-3 bg-canvas px-3 py-1.5 rounded-full">
                        {step.number} {step.action}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-ink tracking-tight mb-2">{step.title}</h3>
                    <p className="text-[15px] text-ink-3 leading-relaxed">{step.description}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
