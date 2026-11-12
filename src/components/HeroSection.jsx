import React from 'react';
import { ArrowRight, Sparkles, Fingerprint, Monitor, FileText } from 'lucide-react';
import DashboardShot from './ui/DashboardShot';
import ZoomShot from './site/ZoomShot';
import Reveal from './site/Reveal';

/** Floating glass stat card that overlaps the product screen. */
function FloatCard({ className = '', style, children }) {
  return (
    <div
      className={`absolute z-20 hidden xl:block glass rounded-[22px] p-2 shadow-[0_24px_50px_-24px_rgba(0,70,160,0.45)] float-y ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}

export default function HeroSection() {
  return (
    <section id="home" className="relative glow-bg overflow-hidden pt-32 sm:pt-40">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="fade-up inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-[22px] sm:rounded-full glass px-1.5 sm:pr-4 py-1.5 text-[12px] sm:text-[13px] text-ink-2 shadow-[0_6px_20px_-12px_rgba(0,70,160,0.4)]">
            <span className="inline-flex items-center gap-1 whitespace-nowrap rounded-full bg-brand-50 text-brand-600 font-semibold px-2.5 py-1 text-[12px]">
              <Sparkles className="w-3.5 h-3.5" />
              7-day free trial
            </span>
            <span className="whitespace-nowrap pr-2 sm:pr-0">No credit card · Works with ZKTeco</span>
          </div>

          {/* Headline */}
          <h1
            className="fade-up mt-7 text-[2.6rem] leading-[1.06] sm:text-6xl lg:text-[4.6rem] font-medium tracking-[-0.04em] text-balance"
            style={{ animationDelay: '80ms' }}
          >
            <span className="bg-gradient-to-r from-brand-500 to-[#3B6BFF] bg-clip-text text-transparent font-semibold">
              Turn attendance
            </span>{' '}
            <span className="text-ink-3/90">into</span>
            <br className="hidden sm:block" />{' '}
            <span className="text-ink-3/90">effortless</span>{' '}
            <span className="text-ink font-semibold">payroll.</span>
          </h1>

          <p
            className="fade-up mt-6 text-base sm:text-lg text-ink-3 leading-relaxed max-w-2xl mx-auto text-pretty"
            style={{ animationDelay: '160ms' }}
          >
            Connect your biometric devices, automate attendance and payroll, and manage your entire workforce from one intelligent platform.
          </p>

          <div
            className="fade-up mt-9 flex flex-col sm:flex-row items-center justify-center gap-3"
            style={{ animationDelay: '240ms' }}
          >
            <a href="#trial-signup" className="btn btn-primary btn-lg w-full sm:w-auto group">
              Start 7-Day Free Trial
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
            <a href="#how-it-works" className="btn btn-lg w-full sm:w-auto glass text-ink hover:bg-white group shadow-[0_6px_20px_-12px_rgba(0,70,160,0.4)]">
              How It Works
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        {/* Product stage */}
        <div className="relative mt-16 sm:mt-20 mx-auto max-w-[1080px]">
          {/* Left stat cards */}
          <FloatCard className="-left-20 top-16">
            <div className="flex gap-2">
              <div className="bg-white rounded-2xl px-4 py-3 w-[170px]">
                <div className="flex items-center justify-between text-[11px] text-ink-3">
                  Checked In Today
                  <span className="w-6 h-6 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center">
                    <Fingerprint className="w-3.5 h-3.5" />
                  </span>
                </div>
                <div className="font-display text-2xl font-semibold tracking-tight text-ink mt-0.5">428</div>
                <div className="text-[10px] font-medium text-ink-3 mt-1">82% of 521 students</div>
              </div>
              <div className="bg-white rounded-2xl px-4 py-3 w-[150px]">
                <div className="flex items-center justify-between text-[11px] text-ink-3">
                  Devices Online
                  <span className="w-6 h-6 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                    <Monitor className="w-3.5 h-3.5" />
                  </span>
                </div>
                <div className="font-display text-2xl font-semibold tracking-tight text-ink mt-0.5">18 / 24</div>
                <div className="text-[10px] font-medium text-ink-3 mt-1">6 offline</div>
              </div>
            </div>
          </FloatCard>

          {/* Right report card */}
          <FloatCard className="-right-16 top-6" style={{ animationDelay: '-3s' }}>
            <div className="bg-white rounded-2xl pl-3 pr-2 py-2 flex items-center gap-3 w-[290px]">
              <span className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                <FileText className="w-[18px] h-[18px]" />
              </span>
              <div className="flex-1 min-w-0">
                <div className="text-[13px] font-semibold text-ink truncate">Monthly Attendance Report</div>
                <div className="text-[11px] text-ink-3 truncate">November · Excel export</div>
              </div>
              <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-semibold px-2.5 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Ready
              </span>
            </div>
          </FloatCard>

          <Reveal delay={300}>
            <div className="relative mx-auto max-w-[960px] rounded-[22px] sm:rounded-[26px] p-2 sm:p-2.5 glass shadow-[0_50px_100px_-40px_rgba(0,70,160,0.5)]">
              <div className="rounded-[14px] sm:rounded-[16px] overflow-hidden bg-white ring-1 ring-line">
                <ZoomShot sidebar={0.143} mobile={1.9}>
                  <DashboardShot eager />
                </ZoomShot>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* fade into page */}
      <div className="relative z-20 -mt-24 sm:-mt-36 h-32 sm:h-48 bg-gradient-to-b from-transparent via-white/90 to-white pointer-events-none" />
    </section>
  );
}
