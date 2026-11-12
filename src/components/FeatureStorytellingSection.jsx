import React from 'react';
import { Check, ArrowUpRight, ArrowRight } from 'lucide-react';
import AttendanceShot from './ui/AttendanceShot';
import PayrollMockup from './ui/PayrollMockup';
import ReportsMockup from './ui/ReportsMockup';
import DashboardShot from './ui/DashboardShot';
import Reveal from './site/Reveal';
import ScaledFrame from './site/ScaledFrame';
import ZoomShot from './site/ZoomShot';

const features = [
  {
    title: 'Attendance that works automatically.',
    desc: "Connect your ZKTeco biometric terminals to Bluetyk's cloud push server. Punch logs from face recognition, fingerprints, and RFID cards stream instantly with zero manual downloads.",
    checks: ['Instant Push SDK sync under 0.5 seconds', 'Multi-branch IN and OUT punch pairing'],
    cta: 'Explore Attendance',
    mockup: AttendanceShot,
    designWidth: 1180,
    zoom: { sidebar: 0.133, mobile: 2.2, desktop: 1.5 },
    span: 'lg:col-span-7',
  },
  {
    title: 'Payroll without spreadsheet chaos.',
    desc: 'Stop spending days calculating salary formulas on Excel. Bluetyk combines punch logs, approved leaves, shift rules, and statutory deductions.',
    checks: ['Automated PF, ESI, & TDS tax deductions', 'Overtime hours & night shift allowance'],
    cta: 'Explore Payroll Engine',
    mockup: PayrollMockup,
    designWidth: 600,
    span: 'lg:col-span-5',
    highlight: true,
  },
  {
    title: 'Know what is happening across your workforce.',
    desc: 'Get complete visibility into daily attendance trends, shift coverage, branch performance, and labor cost distribution.',
    checks: ['Monthly muster roll Excel exports', 'Department-wise absenteeism analytics'],
    cta: 'Explore Reports & Analytics',
    mockup: ReportsMockup,
    designWidth: 560,
    span: 'lg:col-span-5',
  },
  {
    title: 'Centralized Multi-Branch Administration.',
    desc: 'Manage multiple office locations, site supervisors, department permission roles, and ZKTeco hardware terminals from a single intelligent platform.',
    checks: ['Multi-branch location & shift hierarchy', 'Real-time ZKTeco device status monitoring'],
    cta: 'Explore Dashboard',
    mockup: DashboardShot,
    designWidth: 1180,
    zoom: { sidebar: 0.143, mobile: 2.2, desktop: 1.45 },
    span: 'lg:col-span-7',
  },
];

function FeatureCard({ feat, index }) {
  const Mockup = feat.mockup;
  const blue = feat.highlight;
  return (
    <Reveal delay={(index % 2) * 120} className={`${feat.span} h-full`}>
      <article
        className={`group h-full flex flex-col overflow-hidden rounded-[28px] ${
          blue ? 'card-blue' : 'card card-hover'
        }`}
      >
        <div className="p-6 sm:p-8 pb-6 space-y-5">
          <div className="flex items-start gap-4">
            <span className={`shrink-0 ${blue ? 'w-9 h-9 rounded-full bg-white text-brand-600 flex items-center justify-center shadow-sm' : 'arrow-badge'}`}>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-500 group-hover:rotate-45" />
            </span>
            <h3 className={`text-xl sm:text-2xl font-semibold leading-tight pt-1 ${blue ? 'text-white' : 'text-ink'}`}>
              {feat.title}
            </h3>
          </div>

          <p className={`text-[15px] leading-relaxed ${blue ? 'text-white/85' : 'text-ink-3'}`}>{feat.desc}</p>

          <ul className="space-y-2.5">
            {feat.checks.map((c) => (
              <li key={c} className={`flex items-center gap-2.5 text-sm font-medium ${blue ? 'text-white' : 'text-ink-2'}`}>
                <span className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${blue ? 'bg-white/20' : 'bg-brand-50'}`}>
                  <Check className={`w-3 h-3 stroke-[3] ${blue ? 'text-white' : 'text-brand-600'}`} />
                </span>
                {c}
              </li>
            ))}
          </ul>

          <a
            href="#trial-signup"
            className={`btn btn-sm group/btn ${blue ? 'bg-white text-brand-700 hover:bg-brand-50' : 'btn-ghost'}`}
          >
            {feat.cta}
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
          </a>
        </div>

        {/* Mockup peek */}
        <div className="relative mt-auto px-5 sm:px-8 h-[230px] sm:h-[270px] overflow-hidden">
          <div
            className={`rounded-t-[22px] p-2 pb-0 transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:-translate-y-2 ${
              blue ? 'bg-white/20 ring-1 ring-white/30' : 'bg-canvas ring-1 ring-line'
            }`}
          >
            {feat.zoom ? (
              /* Real screenshot: zoom past the sidebar onto the content */
              <div className="overflow-hidden rounded-t-[16px] bg-white">
                <ZoomShot {...feat.zoom}>
                  <Mockup />
                </ZoomShot>
              </div>
            ) : (
              <ScaledFrame designWidth={feat.designWidth}>
                <Mockup />
              </ScaledFrame>
            )}
          </div>
          <div
            className={`absolute inset-x-0 bottom-0 h-24 pointer-events-none bg-gradient-to-t ${
              blue ? 'from-[#0059D6] via-[#0059D6]/60 to-transparent' : 'from-white via-white/70 to-transparent'
            }`}
          />
        </div>
      </article>
    </Reveal>
  );
}

export default function FeatureStorytellingSection() {
  return (
    <section id="features" className="relative bg-white pt-12 sm:pt-16 pb-20 sm:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 sm:mb-16">
          <Reveal className="max-w-2xl space-y-4">
            <div className="eyebrow">Features</div>
            <h2 className="text-[2rem] leading-[1.08] sm:text-5xl font-semibold text-ink text-balance">
              One platform for your entire workforce.
            </h2>
            <p className="text-base sm:text-lg text-ink-3 leading-relaxed max-w-xl">
              Eliminate fragmented software, paper registers, and manual monthly spreadsheet calculations.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <a href="#how-it-works" className="btn btn-ghost btn-sm">
              How It Works
            </a>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
          {features.map((feat, i) => (
            <FeatureCard key={feat.title} feat={feat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
