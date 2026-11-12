import React from 'react';
import { IndianRupee, FileText } from 'lucide-react';

const rows = [
  { name: 'Rajesh Kumar', designation: 'Senior CNC Operator', base: '₹35,000', ot: '₹2,400', net: '₹33,600' },
  { name: 'Priya Sharma', designation: 'Quality Inspector', base: '₹28,000', ot: '₹0', net: '₹24,800' },
  { name: 'Arun Nair', designation: 'Maintenance Tech', base: '₹32,000', ot: '₹1,800', net: '₹30,200' },
];

export default function PayrollMockup() {
  return (
    <div className="w-full bg-white border border-line rounded-[20px] overflow-hidden text-left font-sans text-xs text-ink">
      <div className="px-5 py-3.5 flex items-center justify-between border-b border-line">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
            <IndianRupee className="w-4 h-4" />
          </div>
          <span className="font-display font-semibold text-[14px] tracking-tight">Automated Statutory Payroll Calculation</span>
        </div>
        <span className="bg-brand-50 text-brand-600 text-[10px] font-semibold px-2.5 py-1 rounded-full">August 2026 Batch</span>
      </div>

      <div className="p-5 bg-canvas/60 space-y-3">
        <div className="grid grid-cols-4 gap-2.5">
          {[
            ['Gross Salary', '₹5,12,000', 'text-ink'],
            ['PF Deductions', '₹48,200', 'text-ink'],
            ['ESI & TDS', '₹35,300', 'text-ink'],
            ['Net Payable', '₹4,28,500', 'text-emerald-600'],
          ].map(([label, value, cls]) => (
            <div key={label} className="bg-white p-3 rounded-2xl border border-line">
              <div className="text-ink-3 text-[10px] font-medium">{label}</div>
              <div className={`font-display text-[17px] font-semibold tracking-tight mt-1 ${cls}`}>{value}</div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl border border-line p-4 space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="text-[13px] font-semibold">Payslip Queue (154 Employees)</span>
            <span className="text-[10px] text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-1 rounded-full">✓ All Calculations Verified</span>
          </div>
          {rows.map((p) => (
            <div key={p.name} className="flex items-center justify-between p-2.5 rounded-xl bg-canvas">
              <div>
                <div className="font-semibold">{p.name}</div>
                <div className="text-[10px] text-ink-3">{p.designation} · Base: {p.base}</div>
              </div>
              <div className="flex items-center gap-3 text-right">
                <div>
                  <div className="font-semibold">{p.net}</div>
                  <div className="text-[9px] text-emerald-600 font-semibold">OT: {p.ot}</div>
                </div>
                <span className="w-7 h-7 rounded-full bg-white border border-line flex items-center justify-center text-ink-2">
                  <FileText className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
