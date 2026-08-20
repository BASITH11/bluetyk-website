import React from 'react';
import { Fingerprint } from 'lucide-react';

export default function AttendanceMockup() {
  return (
    <div className="w-full bg-white border border-slate-200 rounded-2xl overflow-hidden text-left font-sans text-xs">
      <div className="bg-[#0B192C] text-white px-4 py-3 flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center space-x-2">
          <Fingerprint className="w-4 h-4 text-[#0284C7]" />
          <span className="font-bold text-white text-xs">ZKTeco Push Attendance Engine</span>
        </div>
        <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded border border-emerald-500/30">
          Push Sync Active
        </span>
      </div>

      <div className="p-5 bg-slate-50 space-y-4">
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white p-3 rounded-xl border border-slate-200">
            <div className="text-slate-400 text-[10px]">Today's Total Punches</div>
            <div className="text-xl font-black text-slate-900 mt-0.5">312</div>
          </div>
          <div className="bg-white p-3 rounded-xl border border-slate-200">
            <div className="text-slate-400 text-[10px]">Biometric Terminals</div>
            <div className="text-xl font-black text-[#0284C7] mt-0.5">3 Terminals</div>
          </div>
          <div className="bg-white p-3 rounded-xl border border-slate-200">
            <div className="text-slate-400 text-[10px]">Verification Type</div>
            <div className="text-xl font-black text-emerald-600 mt-0.5">Face + FP</div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-4 space-y-3">
          <div className="text-xs font-bold text-slate-900">Recent ZKTeco Biometric Logs</div>
          <div className="space-y-2">
            {[
              { name: 'Vikram Mehta', terminal: 'Gate 1 - MB20', time: '08:59:12 AM', type: 'Fingerprint IN', status: 'On Time' },
              { name: 'Ananya Verma', terminal: 'Gate 2 - K40', time: '09:02:44 AM', type: 'Face Recognition IN', status: 'On Time' },
              { name: 'Siddharth Rao', terminal: 'HQ Entrance', time: '09:14:02 AM', type: 'RFID Card IN', status: 'Late (+14m)' }
            ].map((log, i) => (
              <div key={i} className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-sky-100 text-[#0284C7] flex items-center justify-center font-bold text-xs">
                    {log.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{log.name}</div>
                    <div className="text-[10px] text-slate-400">{log.terminal} · {log.type}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-slate-900">{log.time}</div>
                  <span className={`text-[9px] font-extrabold px-1.5 py-0.5 rounded ${
                    log.status.includes('Late') ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'
                  }`}>
                    {log.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
