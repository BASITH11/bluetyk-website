import React from 'react';
import { Check, ArrowUpRight } from 'lucide-react';
import AttendanceMockup from './ui/AttendanceMockup';
import PayrollMockup from './ui/PayrollMockup';
import ReportsMockup from './ui/ReportsMockup';
import DashboardMockup from './ui/DashboardMockup';

export default function FeatureStorytellingSection() {
  const topFeatures = [
    {
      title: 'Attendance that works automatically.',
      desc: "Connect your ZKTeco biometric terminals to Bluetyk's cloud push server. Punch logs from face recognition, fingerprints, and RFID cards stream instantly with zero manual downloads.",
      checks: [
        'Instant Push SDK sync under 0.5 seconds',
        'Multi-branch IN and OUT punch pairing'
      ],
      cta: 'Explore Attendance',
      mockup: AttendanceMockup,
      colSpan: 'lg:col-span-7' // Wider side (7 cols)
    },
    {
      title: 'Payroll without spreadsheet chaos.',
      desc: 'Stop spending days calculating salary formulas on Excel. Bluetyk combines punch logs, approved leaves, shift rules, and statutory deductions.',
      checks: [
        'Automated PF, ESI, & TDS tax deductions',
        'Overtime hours & night shift allowance'
      ],
      cta: 'Explore Payroll Engine',
      mockup: PayrollMockup,
      colSpan: 'lg:col-span-5' // Narrower side (5 cols)
    }
  ];

  const bottomFeatures = [
    {
      title: 'Know what is happening across your workforce.',
      desc: 'Get complete visibility into daily attendance trends, shift coverage, branch performance, and labor cost distribution.',
      checks: [
        'Monthly muster roll Excel exports',
        'Department-wise absenteeism analytics'
      ],
      cta: 'Explore Reports & Analytics',
      mockup: ReportsMockup,
      colSpan: 'lg:col-span-5' // Reversed: Narrower side (5 cols)
    },
    {
      title: 'Centralized Multi-Branch Administration.',
      desc: 'Manage multiple office locations, site supervisors, department permission roles, and ZKTeco hardware terminals from a single intelligent platform.',
      checks: [
        'Multi-branch location & shift hierarchy',
        'Real-time ZKTeco device status monitoring'
      ],
      cta: 'Explore Dashboard',
      mockup: DashboardMockup,
      colSpan: 'lg:col-span-7' // Reversed: Wider side (7 cols)
    }
  ];

  return (
    <section id="features" className="bg-white relative overflow-hidden text-left">
      
      {/* Outer Left and Right Architectural Vertical Guide Lines */}
      <div className="absolute top-0 bottom-0 left-3 sm:left-6 lg:left-8 w-px bg-slate-200 pointer-events-none z-10" />
      <div className="absolute top-0 bottom-0 right-3 sm:right-6 lg:right-8 w-px bg-slate-200 pointer-events-none z-10" />

      {/* 1. TOP HEADER BLOCK */}
      <div className="relative border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-14 sm:py-16 relative z-20">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              One platform for your entire workforce.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Eliminate fragmented software, paper registers, and manual monthly spreadsheet calculations.
            </p>
          </div>
        </div>
      </div>

      {/* 2. ROW 1: TOP 2 FEATURE QUADRANTS (7:5 Split - Wider Left, Narrower Right) */}
      <div className="relative border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-12 sm:pt-16 pb-12 relative z-20">
          
          {/* Row 1 Vertical Divider Line at 58.333% (7/12 split) aligned to grid container */}
          <div className="hidden lg:block absolute top-0 bottom-0 left-[58.333%] -translate-x-1/2 w-px bg-slate-200 pointer-events-none z-30" />

          <div className="grid lg:grid-cols-12 gap-x-12 gap-y-14 items-start relative z-20">
            {topFeatures.map((feat, idx) => {
              const MockupComp = feat.mockup;
              return (
                <div key={idx} className={`${feat.colSpan} space-y-6 text-left group flex flex-col justify-between h-full`}>
                  
                  <div className="space-y-6">
                    {/* Text Content with Fixed Equal Minimum Heights for Perfect Alignment */}
                    <div className="space-y-3">
                      <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight min-h-[64px] sm:min-h-[72px] flex items-start">
                        <span>{feat.title}</span>
                      </h3>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal min-h-[72px] sm:min-h-[80px]">
                        {feat.desc}
                      </p>
                    </div>

                    {/* Bullet Checks with Ocean Blue Checkmarks */}
                    <div className="space-y-2.5 text-xs sm:text-sm font-semibold text-slate-700 min-h-[56px]">
                      {feat.checks.map((checkText, cIdx) => (
                        <div key={cIdx} className="flex items-center gap-2.5">
                          <Check className="w-4 h-4 text-[#0284C7] stroke-[3] shrink-0" />
                          <span>{checkText}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <div>
                      <a
                        href="#trial-signup"
                        className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-bold text-xs px-4 py-2.5 rounded-none shadow-xs transition-colors group-hover:border-[#0284C7]"
                      >
                        <span>{feat.cta}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#0284C7] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    </div>
                  </div>

                  {/* Cropped Half-Fit Mockup Container */}
                  <div className="pt-3 mt-auto">
                    <div className="relative h-[250px] sm:h-[280px] overflow-hidden rounded-t-2xl border-t border-x border-slate-200 bg-slate-50/80 p-2 shadow-xs group-hover:border-slate-300 transition-colors">
                      <div className="w-full">
                        <MockupComp />
                      </div>
                      {/* Bottom Gradient Fade for Half-Fit Peek Effect */}
                      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white via-white/70 to-transparent pointer-events-none z-10" />
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. ROW 2: BOTTOM 2 FEATURE QUADRANTS (Opposite 5:7 Split - Narrower Left, Wider Right) */}
      <div className="relative border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-12 sm:pt-16 pb-12 relative z-20">
          
          {/* Row 2 Vertical Divider Line at 41.667% (5/12 split) aligned to grid container */}
          <div className="hidden lg:block absolute top-0 bottom-0 left-[41.667%] -translate-x-1/2 w-px bg-slate-200 pointer-events-none z-30" />

          <div className="grid lg:grid-cols-12 gap-x-12 gap-y-14 items-start relative z-20">
            {bottomFeatures.map((feat, idx) => {
              const MockupComp = feat.mockup;
              return (
                <div key={idx} className={`${feat.colSpan} space-y-6 text-left group flex flex-col justify-between h-full`}>
                  
                  <div className="space-y-6">
                    {/* Text Content with Fixed Equal Minimum Heights for Perfect Alignment */}
                    <div className="space-y-3">
                      <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight min-h-[64px] sm:min-h-[72px] flex items-start">
                        <span>{feat.title}</span>
                      </h3>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal min-h-[72px] sm:min-h-[80px]">
                        {feat.desc}
                      </p>
                    </div>

                    {/* Bullet Checks with Ocean Blue Checkmarks */}
                    <div className="space-y-2.5 text-xs sm:text-sm font-semibold text-slate-700 min-h-[56px]">
                      {feat.checks.map((checkText, cIdx) => (
                        <div key={cIdx} className="flex items-center gap-2.5">
                          <Check className="w-4 h-4 text-[#0284C7] stroke-[3] shrink-0" />
                          <span>{checkText}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <div>
                      <a
                        href="#trial-signup"
                        className="inline-flex items-center gap-2 bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold text-xs px-4 py-2.5 rounded-none shadow-xs transition-colors"
                      >
                        <span>{feat.cta}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    </div>
                  </div>

                  {/* Cropped Half-Fit Mockup Container */}
                  <div className="pt-3 mt-auto">
                    <div className="relative h-[250px] sm:h-[280px] overflow-hidden rounded-t-2xl border-t border-x border-slate-200 bg-slate-50/80 p-2 shadow-xs group-hover:border-slate-300 transition-colors">
                      <div className="w-full">
                        <MockupComp />
                      </div>
                      {/* Bottom Gradient Fade for Half-Fit Peek Effect */}
                      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white via-white/70 to-transparent pointer-events-none z-10" />
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 4. BOTTOM SECTION BORDER LINE */}
      <div className="relative border-b border-slate-200" />

    </section>
  );
}
