import React from 'react';
import { Fingerprint } from 'lucide-react';

const logs = [
  { name: 'Vikram Mehta', terminal: 'Gate 1 - MB20', time: '08:59:12 AM', type: 'Fingerprint IN', status: 'On Time' },
  { name: 'Ananya Verma', terminal: 'Gate 2 - K40', time: '09:02:44 AM', type: 'Face Recognition IN', status: 'On Time' },
  { name: 'Siddharth Rao', terminal: 'HQ Entrance', time: '09:14:02 AM', type: 'RFID Card IN', status: 'Late (+14m)' },
];

export default function AttendanceMockup() {
  return (
    <div className="w-full bg-white border border-line rounded-[20px] overflow-hidden text-left font-sans text-xs text-ink">
      <div className="px-5 py-3.5 flex items-center justify-between border-b border-line">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
            <Fingerprint className="w-4 h-4" />
          </div>
          <span className="font-display font-semibold text-[14px] tracking-tight">ZKTeco Push Attendance Engine</span>
        </div>
        <span className="flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-[10px] font-semibold px-2.5 py-1 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          Push Sync Active
        </span>
      </div>

      <div className="p-5 bg-canvas/60 space-y-3">
        <div className="grid grid-cols-3 gap-3">
          {[
            ["Today's Total Punches", '312', 'text-ink'],
            ['Biometric Terminals', '3 Terminals', 'text-brand-600'],
            ['Verification Type', 'Face + FP', 'text-emerald-600'],
          ].map(([label, value, cls]) => (
            <div key={label} className="bg-white p-3.5 rounded-2xl border border-line">
              <div className="text-ink-3 text-[10px] font-medium">{label}</div>
              <div className={`font-display text-xl font-semibold tracking-tight mt-1 ${cls}`}>{value}</div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl border border-line p-4 space-y-2.5">
          <div className="text-[13px] font-semibold">Recent ZKTeco Biometric Logs</div>
          {logs.map((log) => (
            <div key={log.name} className="flex items-center justify-between p-2.5 rounded-xl bg-canvas">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-semibold">
                  {log.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold">{log.name}</div>
                  <div className="text-[10px] text-ink-3">{log.terminal} · {log.type}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-semibold">{log.time}</div>
                <span className={`text-[9px] font-semibold px-2 py-0.5 rounded-full ${
                  log.status.includes('Late') ? 'bg-amber-50 text-amber-700' : 'bg-emerald-50 text-emerald-700'
                }`}>
                  {log.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
