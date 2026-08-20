import React, { useState } from 'react';
import { LayoutDashboard, Clock, DollarSign, BarChart2, Cpu, Check, ArrowUpRight } from 'lucide-react';
import DashboardMockup from './ui/DashboardMockup';
import AttendanceMockup from './ui/AttendanceMockup';
import PayrollMockup from './ui/PayrollMockup';
import ReportsMockup from './ui/ReportsMockup';

export default function DemoShowcaseSection() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', file: 'dashboard.overview', icon: LayoutDashboard },
    { id: 'attendance', label: 'Attendance', file: 'attendance.live', icon: Clock },
    { id: 'payroll', label: 'Payroll', file: 'payroll.calc', icon: DollarSign },
    { id: 'reports', label: 'Reports', file: 'reports.export', icon: BarChart2 },
    { id: 'devices', label: 'Devices', file: 'devices.zkteco', icon: Cpu }
  ];

  const currentTabObj = tabs.find((t) => t.id === activeTab) || tabs[0];

  return (
    <section id="demo" className="py-20 sm:py-24 bg-white relative overflow-hidden">
      
      {/* Laravel.com Architectural Border Frame: Top & Bottom Horizontal Lines + Left & Right Vertical Lines */}
      <div className="absolute top-0 inset-x-0 h-px bg-slate-200 pointer-events-none z-10" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-slate-200 pointer-events-none z-10" />
      
      <div className="absolute top-0 bottom-0 left-3 sm:left-6 lg:left-8 w-px bg-slate-200 pointer-events-none z-10" />
      <div className="absolute top-0 bottom-0 right-3 sm:right-6 lg:right-8 w-px bg-slate-200 pointer-events-none z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-20">
        
        {/* Direct 2-Column Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Headline, Text, Checkmarks & CTA */}
          <div className="lg:col-span-5 space-y-6 text-left pt-2">
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.12] tracking-tight">
              See Bluetyk in action
            </h2>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Bluetyk brings biometric punch streaming, leave tracking, shift rules, and statutory payroll into one unified enterprise platform.
            </p>

            {/* Red Accent Checkmarks */}
            <div className="space-y-3 pt-1 text-sm font-semibold text-slate-700">
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-[#FF2D20] stroke-[3] shrink-0" />
                <span>Real-time ZKTeco Push SDK attendance sync</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-[#FF2D20] stroke-[3] shrink-0" />
                <span>Automated PF, ESI, TDS statutory payroll engine</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-[#FF2D20] stroke-[3] shrink-0" />
                <span>Multi-shift rotation & overtime calculations</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-[#FF2D20] stroke-[3] shrink-0" />
                <span>One-click Excel muster rolls & bulk PDF payslips</span>
              </div>
            </div>

            {/* Action Button CTA matching screenshot */}
            <div className="pt-4">
              <a
                href="#trial-signup"
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-bold text-xs px-5 py-3 rounded-xl shadow-xs transition-colors group"
              >
                <span>Explore the platform</span>
                <ArrowUpRight className="w-4 h-4 text-[#FF2D20] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

          </div>

          {/* Right Column: Floating Pill Bar + Quarter-Screen Mockup Canvas */}
          <div className="lg:col-span-7 flex flex-col items-end w-full">
            
            {/* Floating Pill Bar Navigation */}
            <div className="bg-white/90 backdrop-blur-md p-1 rounded-full border border-slate-200/90 flex items-center gap-1 shadow-xs mb-6 overflow-x-auto max-w-full">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                      isActive
                        ? 'bg-[#0284C7] text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/60'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Quarter-Screen Application Canvas Container */}
            <div className="w-full relative h-[380px] sm:h-[440px] bg-white rounded-tl-3xl border-t border-l border-slate-200/90 overflow-hidden shadow-2xl">
              
              {/* Mockup Top Tab Bar */}
              <div className="bg-slate-100/90 px-4 py-2 border-b border-slate-200 flex items-center justify-between text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                  <div className="h-4 w-px bg-slate-300 mx-1" />
                  <div className="bg-white px-3 py-1 rounded-t-md border-t-2 border-[#0284C7] border-x border-slate-200 text-slate-900 font-bold flex items-center gap-1.5 text-[11px]">
                    <span className="text-[#0284C7]">app/</span>
                    <span>{currentTabObj.file}</span>
                  </div>
                </div>
                <div className="text-[10px] text-slate-400 font-mono hidden sm:block">
                  LIVE PREVIEW // 25% SCALE
                </div>
              </div>

              {/* Scaled Quarter-Screen Application Screen */}
              <div className="p-3 w-[160%] sm:w-[140%] transform origin-top-left">
                {activeTab === 'dashboard' && <DashboardMockup />}
                {activeTab === 'attendance' && <AttendanceMockup />}
                {activeTab === 'payroll' && <PayrollMockup />}
                {activeTab === 'reports' && <ReportsMockup />}
                {activeTab === 'devices' && <AttendanceMockup />}
              </div>

              {/* Subtle Right & Bottom Crop Gradient Fade */}
              <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white via-white/50 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none" />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
