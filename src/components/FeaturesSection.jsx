import React from 'react';
import { Fingerprint, Clock, Banknote, BarChart3, CalendarDays, Building2, Sparkles, CheckCircle2 } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      id: 1,
      icon: Fingerprint,
      title: 'Biometric Attendance',
      description: 'Real-time attendance tracking with ZKTeco biometric devices. Face, fingerprint, and card support with zero delay.',
      gradient: 'from-blue-500 to-indigo-600',
      badge: 'ZKTeco Push SDK'
    },
    {
      id: 2,
      icon: Clock,
      title: 'Multi-Shift Management',
      description: 'Morning, evening, night shifts — even split shifts across multiple periods. Automatic shift detection and flexible grace time.',
      gradient: 'from-sky-500 to-blue-600',
      badge: 'Auto Shift Detect'
    },
    {
      id: 3,
      icon: Banknote,
      title: 'Payroll & Salary Engine',
      description: 'Fixed and hourly pay, overtime, shift allowances, PF, ESI, TDS — fully automated payroll calculation with 1-click payslip PDF generation.',
      gradient: 'from-emerald-500 to-teal-600',
      badge: 'Statutory Compliant'
    },
    {
      id: 4,
      icon: BarChart3,
      title: 'Smart Analytics & Reports',
      description: 'Daily, monthly, department-wise attendance reports. Export clean Excel workbooks and visualize workforce trends with charts.',
      gradient: 'from-purple-500 to-indigo-600',
      badge: 'Excel Export'
    },
    {
      id: 5,
      icon: CalendarDays,
      title: 'Holiday & Leave Management',
      description: 'Configure holidays per shift. Sunday, national holidays, custom days. Automatic attendance status calculation for non-working days.',
      gradient: 'from-amber-500 to-orange-600',
      badge: 'Shift Rules'
    },
    {
      id: 6,
      icon: Building2,
      title: 'Multi-Location Support',
      description: 'Multiple locations with parent-child hierarchy. IN devices at front gate, OUT devices at back gate — punches merge automatically.',
      gradient: 'from-cyan-500 to-blue-600',
      badge: 'Multi-Branch Hierarchy'
    }
  ];

  return (
    <section id="features" className="py-24 bg-slate-50/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Everything You Need to Manage Your Workforce
          </h2>
          <p className="text-lg text-slate-600 font-normal">
            From biometric attendance to payslip generation — one cloud platform does it all without manual errors.
          </p>
        </div>

        {/* 3x2 Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComp = feature.icon;
            return (
              <div
                key={feature.id}
                className="group relative bg-white rounded-2xl p-8 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  {/* Top Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg text-white group-hover:scale-110 transition-transform duration-300`}>
                      <IconComp className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                      {feature.badge}
                    </span>
                  </div>

                  {/* Card Title & Content */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom Highlight Line */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-blue-600 gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Fully Integrated in Bluetyk</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
