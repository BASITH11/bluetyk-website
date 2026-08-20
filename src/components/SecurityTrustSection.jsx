import React from 'react';
import { ShieldCheck, Lock, Database, KeyRound, Check, ArrowUpRight } from 'lucide-react';

export default function SecurityTrustSection() {
  const topFeatures = [
    {
      icon: ShieldCheck,
      title: 'Secure Cloud Infrastructure',
      desc: '256-bit SSL encryption for data in transit and completely isolated tenant schemas.',
      checks: [
        '256-bit SSL/TLS end-to-end encryption',
        'Dedicated multi-tenant isolated database schemas'
      ],
      cta: 'Explore Cloud Security'
    },
    {
      icon: KeyRound,
      title: 'Role-Based Access Control',
      desc: 'Granular permissions for Super Admin, HR Managers, Department Heads, and Site Supervisors.',
      checks: [
        'Super Admin, HR Manager, & Supervisor roles',
        'Branch-level granular permission scoping'
      ],
      cta: 'Explore Permissions'
    }
  ];

  const bottomFeatures = [
    {
      icon: Database,
      title: 'Automated Daily Backups & 99.9% Uptime',
      desc: 'Redundant automated backups with 30-day point-in-time recovery guarantees and high availability concurrency.',
      checks: [
        '30-day point-in-time recovery guarantees',
        'Multi-shift punch concurrency engine'
      ],
      cta: 'Check System Status'
    },
    {
      icon: Lock,
      title: 'Data Protection Compliance',
      desc: 'Strict compliance standards for workforce biometric data and statutory records.',
      checks: [
        'Indian statutory labor law compliance',
        'Encrypted biometric template vault'
      ],
      cta: 'View Compliance Standards'
    }
  ];

  return (
    <section id="security" className="bg-white relative overflow-hidden text-left">
      
      {/* Outer Left and Right Architectural Vertical Guide Lines */}
      <div className="absolute top-0 bottom-0 left-3 sm:left-6 lg:left-8 w-px bg-slate-200 pointer-events-none z-10" />
      <div className="absolute top-0 bottom-0 right-3 sm:right-6 lg:right-8 w-px bg-slate-200 pointer-events-none z-10" />

      {/* 1. TOP HEADER BLOCK (Clean Centered Header with NO center vertical line) */}
      <div className="relative border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-14 sm:py-16 relative z-20">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Built for enterprise security and privacy.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Your biometric logs and employee records are stored in fully isolated, protected databases.
            </p>
          </div>
        </div>
      </div>

      {/* 2. FEATURE CARDS BLOCK (Center Vertical Line Starts HERE After Header) */}
      <div className="relative border-t border-slate-200">
        
        {/* Center Vertical Divider Line (Starts here after header block) */}
        <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-slate-200 pointer-events-none z-10" />

        {/* Row 1 Feature Cards */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-16 relative z-20">
          <div className="grid lg:grid-cols-2 gap-x-12 gap-y-12 items-start">
            {topFeatures.map((feat, idx) => {
              const IconComp = feat.icon;
              return (
                <div key={idx} className="space-y-5 text-left group">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0284C7] flex items-center justify-center font-bold border border-sky-100 shrink-0">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                      {feat.title}
                    </h3>
                  </div>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                    {feat.desc}
                  </p>

                  <div className="space-y-2.5 pt-1 text-xs sm:text-sm font-semibold text-slate-700">
                    {feat.checks.map((checkText, cIdx) => (
                      <div key={cIdx} className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-[#FF2D20] stroke-[3] shrink-0" />
                        <span>{checkText}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3">
                    <a
                      href="#trial-signup"
                      className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-bold text-xs px-4 py-2.5 rounded-xl shadow-xs transition-colors group-hover:border-slate-400"
                    >
                      <span>{feat.cta}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#FF2D20] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. ROW 2 FEATURE CARDS (Separated by Middle Horizontal Divider Line) */}
      <div className="relative border-t border-slate-200">
        
        {/* Center Vertical Divider Line continues */}
        <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-slate-200 pointer-events-none z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-16 relative z-20">
          <div className="grid lg:grid-cols-2 gap-x-12 gap-y-12 items-start">
            {bottomFeatures.map((feat, idx) => {
              const IconComp = feat.icon;
              return (
                <div key={idx} className="space-y-5 text-left group">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0284C7] flex items-center justify-center font-bold border border-sky-100 shrink-0">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                      {feat.title}
                    </h3>
                  </div>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                    {feat.desc}
                  </p>

                  <div className="space-y-2.5 pt-1 text-xs sm:text-sm font-semibold text-slate-700">
                    {feat.checks.map((checkText, cIdx) => (
                      <div key={cIdx} className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-[#FF2D20] stroke-[3] shrink-0" />
                        <span>{checkText}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3">
                    <a
                      href="#trial-signup"
                      className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-bold text-xs px-4 py-2.5 rounded-xl shadow-xs transition-colors group-hover:border-slate-400"
                    >
                      <span>{feat.cta}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#FF2D20] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
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
