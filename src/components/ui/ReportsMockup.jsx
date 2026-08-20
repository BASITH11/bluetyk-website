import React from 'react';
import { BarChart3, Download, FileSpreadsheet } from 'lucide-react';

export default function ReportsMockup() {
  return (
    <div className="w-full bg-white border border-slate-200 rounded-2xl overflow-hidden text-left font-sans text-xs">
      <div className="bg-[#0B192C] text-white px-4 py-3 flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center space-x-2">
          <BarChart3 className="w-4 h-4 text-[#0284C7]" />
          <span className="font-bold text-white text-xs">Workforce Analytics & Export Engine</span>
        </div>
        <span className="bg-[#0284C7]/20 text-[#0284C7] text-[10px] font-bold px-2 py-0.5 rounded border border-[#0284C7]/30">
          Excel & PDF
        </span>
      </div>

      <div className="p-5 bg-slate-50 space-y-4">
        <div className="bg-white rounded-xl border border-slate-200 p-4 space-y-3">
          <div className="text-xs font-bold text-slate-900">Available Pre-formatted Export Modules</div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div>
                <div className="font-bold text-slate-900">Monthly Muster Roll</div>
                <div className="text-[10px] text-slate-400">Complete attendance matrix</div>
              </div>
              <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
            </div>

            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div>
                <div className="font-bold text-slate-900">Overtime & Shift Summary</div>
                <div className="text-[10px] text-slate-400">Hours breakdown</div>
              </div>
              <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
            </div>

            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div>
                <div className="font-bold text-slate-900">PF & ESI Deduction File</div>
                <div className="text-[10px] text-slate-400">Statutory format</div>
              </div>
              <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
            </div>

            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div>
                <div className="font-bold text-slate-900">Individual Logbook PDF</div>
                <div className="text-[10px] text-slate-400">Employee specific</div>
              </div>
              <Download className="w-4 h-4 text-[#0284C7]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
