import React from 'react';
import { DollarSign, FileText } from 'lucide-react';

export default function PayrollMockup() {
  return (
    <div className="w-full bg-white border border-slate-200 rounded-2xl overflow-hidden text-left font-sans text-xs">
      <div className="bg-[#0B192C] text-white px-4 py-3 flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center space-x-2">
          <DollarSign className="w-4 h-4 text-[#0284C7]" />
          <span className="font-bold text-white text-xs">Automated Statutory Payroll Calculation</span>
        </div>
        <span className="bg-[#0284C7]/20 text-[#0284C7] text-[10px] font-bold px-2 py-0.5 rounded border border-[#0284C7]/30">
          August 2026 Batch
        </span>
      </div>

      <div className="p-5 bg-slate-50 space-y-4">
        <div className="grid grid-cols-4 gap-2">
          <div className="bg-white p-3 rounded-xl border border-slate-200">
            <div className="text-slate-400 text-[9px]">Gross Salary</div>
            <div className="text-base font-black text-slate-900 mt-0.5">₹5,12,000</div>
          </div>
          <div className="bg-white p-3 rounded-xl border border-slate-200">
            <div className="text-slate-400 text-[9px]">PF Deductions</div>
            <div className="text-base font-black text-slate-900 mt-0.5">₹48,200</div>
          </div>
          <div className="bg-white p-3 rounded-xl border border-slate-200">
            <div className="text-slate-400 text-[9px]">ESI & TDS</div>
            <div className="text-base font-black text-slate-900 mt-0.5">₹35,300</div>
          </div>
          <div className="bg-white p-3 rounded-xl border border-slate-200">
            <div className="text-slate-400 text-[9px]">Net Payable</div>
            <div className="text-base font-black text-emerald-600 mt-0.5">₹4,28,500</div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-900">Payslip Queue (154 Employees)</span>
            <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">
              ✓ All Calculations Verified
            </span>
          </div>

          <div className="space-y-2">
            {[
              { name: 'Rajesh Kumar', designation: 'Senior CNC Operator', base: '₹35,000', ot: '₹2,400', net: '₹33,600' },
              { name: 'Priya Sharma', designation: 'Quality Inspector', base: '₹28,000', ot: '₹0', net: '₹24,800' },
              { name: 'Arun Nair', designation: 'Maintenance Tech', base: '₹32,000', ot: '₹1,800', net: '₹30,200' }
            ].map((p, i) => (
              <div key={i} className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                <div>
                  <div className="font-bold text-slate-900">{p.name}</div>
                  <div className="text-[10px] text-slate-400">{p.designation} · Base: {p.base}</div>
                </div>
                <div className="text-right flex items-center space-x-3">
                  <div>
                    <div className="font-black text-slate-900">{p.net}</div>
                    <div className="text-[9px] text-emerald-600 font-semibold">OT: {p.ot}</div>
                  </div>
                  <button className="bg-white border border-slate-200 p-1.5 rounded text-slate-600 hover:text-[#0284C7]">
                    <FileText className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
