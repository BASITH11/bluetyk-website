import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import DashboardShot from './ui/DashboardShot';
import AttendanceMockup from './ui/AttendanceMockup';
import AttendanceShot from './ui/AttendanceShot';
import PayrollMockup from './ui/PayrollMockup';
import ReportsMockup from './ui/ReportsMockup';
import Reveal from './site/Reveal';
import ScaledFrame from './site/ScaledFrame';
import ZoomShot from './site/ZoomShot';

const tabs = [
  { id: 'dashboard', label: 'Dashboard', Comp: DashboardShot, width: 1180, shot: { sidebar: 0.143 } },
  { id: 'attendance', label: 'Attendance', Comp: AttendanceShot, width: 1180, shot: { sidebar: 0.133 } },
  { id: 'payroll', label: 'Payroll', Comp: PayrollMockup, width: 680 },
  { id: 'reports', label: 'Reports', Comp: ReportsMockup, width: 640 },
  { id: 'devices', label: 'Devices', Comp: AttendanceMockup, width: 680 },
];

const checks = [
  'Real-time ZKTeco Push SDK attendance sync',
  'Automated PF, ESI, TDS statutory payroll engine',
  'Multi-shift rotation & overtime calculations',
  'One-click Excel muster rolls & bulk PDF payslips',
];

export default function DemoShowcaseSection() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const current = tabs.find((t) => t.id === activeTab) || tabs[0];
  const Current = current.Comp;

  return (
    <section id="demo" className="relative bg-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Copy */}
          <Reveal className="lg:col-span-5 space-y-6">
            <h2 className="text-[2rem] leading-[1.08] sm:text-5xl font-semibold text-ink">See Bluetyk in action</h2>
            <p className="text-base sm:text-lg text-ink-3 leading-relaxed">
              Bluetyk brings biometric punch streaming, leave tracking, shift rules, and statutory payroll into one unified enterprise platform.
            </p>
            <ul className="space-y-3 pt-1">
              {checks.map((c) => (
                <li key={c} className="flex items-center gap-3 text-[15px] font-medium text-ink-2">
                  <span className="w-5 h-5 rounded-full bg-brand-500 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-white stroke-[3.5]" />
                  </span>
                  {c}
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <a href="#trial-signup" className="btn btn-primary group">
                Explore the platform
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
            </div>
          </Reveal>

          {/* Product canvas */}
          <Reveal delay={150} className="lg:col-span-7">
            <div className="relative rounded-[28px] sm:rounded-[32px] p-3 sm:p-6 overflow-hidden bg-[linear-gradient(160deg,#CFE5FF_0%,#E9F3FF_45%,#F6FAFF_100%)] ring-1 ring-brand-100">
              <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-white/70 blur-3xl pointer-events-none" />

              {/* Tabs */}
              <div className="relative flex justify-center mb-5">
                <div className="glass rounded-full p-1 flex items-center gap-1 overflow-x-auto no-scrollbar max-w-full shadow-[0_8px_24px_-14px_rgba(16,24,40,0.3)]">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-3 sm:px-4 py-2 rounded-full text-[13px] font-medium whitespace-nowrap transition-all duration-300 ${
                        activeTab === tab.id
                          ? 'bg-ink text-white shadow-sm'
                          : 'text-ink-2 hover:text-ink hover:bg-white/70'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Screen */}
              <div className="relative h-[280px] sm:h-[420px] overflow-hidden rounded-t-[22px] bg-white/60 ring-1 ring-white p-2 pb-0">
                <div key={activeTab} className="fade-up" style={{ animationDuration: '0.7s' }}>
                  {current.shot ? (
                    <div className="rounded-t-[16px] overflow-hidden bg-white">
                      <ZoomShot sidebar={current.shot.sidebar} mobile={1.9}>
                        <Current />
                      </ZoomShot>
                    </div>
                  ) : (
                    <ScaledFrame designWidth={current.width}>
                      <Current />
                    </ScaledFrame>
                  )}
                </div>
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#F3F8FF] to-transparent pointer-events-none" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
