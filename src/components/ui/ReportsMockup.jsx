import React from 'react';
import { BarChart3, Download, FileSpreadsheet } from 'lucide-react';

const modules = [
  ['Monthly Muster Roll', 'Complete attendance matrix', 'sheet'],
  ['Overtime & Shift Summary', 'Hours breakdown', 'sheet'],
  ['PF & ESI Deduction File', 'Statutory format', 'sheet'],
  ['Individual Logbook PDF', 'Employee specific', 'pdf'],
];

export default function ReportsMockup() {
  return (
    <div className="w-full bg-white border border-line rounded-[20px] overflow-hidden text-left font-sans text-xs text-ink">
      <div className="px-5 py-3.5 flex items-center justify-between border-b border-line">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
            <BarChart3 className="w-4 h-4" />
          </div>
          <span className="font-display font-semibold text-[14px] tracking-tight">Workforce Analytics & Export Engine</span>
        </div>
        <span className="bg-brand-50 text-brand-600 text-[10px] font-semibold px-2.5 py-1 rounded-full">Excel & PDF</span>
      </div>

      <div className="p-5 bg-canvas/60">
        <div className="bg-white rounded-2xl border border-line p-4 space-y-3">
          <div className="text-[13px] font-semibold">Available Pre-formatted Export Modules</div>
          <div className="grid grid-cols-2 gap-2.5">
            {modules.map(([title, sub, kind]) => (
              <div key={title} className="p-3 rounded-xl bg-canvas flex items-center justify-between">
                <div>
                  <div className="font-semibold">{title}</div>
                  <div className="text-[10px] text-ink-3">{sub}</div>
                </div>
                <span className={`w-7 h-7 rounded-full flex items-center justify-center ${kind === 'pdf' ? 'bg-brand-50 text-brand-600' : 'bg-emerald-50 text-emerald-600'}`}>
                  {kind === 'pdf' ? <Download className="w-3.5 h-3.5" /> : <FileSpreadsheet className="w-3.5 h-3.5" />}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
