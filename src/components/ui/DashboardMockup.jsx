import React from 'react';
import { Users, Clock, UserX, DollarSign, Cpu, CheckCircle2, Search, Activity } from 'lucide-react';

export default function DashboardMockup() {
  const employees = [
    { id: 'EMP-104', name: 'Rajesh Kumar', shift: 'Morning (09:00 - 18:00)', inTime: '08:54 AM', outTime: '06:02 PM', status: 'Present', statusColor: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
    { id: 'EMP-108', name: 'Priya Sharma', shift: 'Morning (09:00 - 18:00)', inTime: '09:18 AM', outTime: '06:15 PM', status: 'Late', statusColor: 'bg-amber-50 text-amber-700 border-amber-200' },
    { id: 'EMP-112', name: 'Arun Nair', shift: 'Night (22:00 - 06:00)', inTime: '09:58 PM', outTime: '06:05 AM', status: 'Present', statusColor: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
    { id: 'EMP-115', name: 'Sneha Patel', shift: 'Morning (09:00 - 18:00)', inTime: '-', outTime: '-', status: 'On Leave', statusColor: 'bg-[#0284C7]/10 text-[#0284C7] border-[#0284C7]/20' },
  ];

  return (
    <div className="w-full bg-white border border-slate-200 rounded-2xl overflow-hidden font-sans text-slate-900 text-left">
      
      {/* Top Application Header Bar */}
      <div className="bg-[#0B192C] text-white px-5 py-3 flex items-center justify-between border-b border-slate-800 text-xs">
        <div className="flex items-center space-x-3">
          <div className="flex space-x-1.5">
            <div className="w-3 h-3 rounded-full bg-[#0284C7]" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          </div>
          <div className="h-4 w-px bg-slate-800 mx-1" />
          <span className="font-bold tracking-tight text-white flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#0284C7]"></span>
            Bluetyk Enterprise · ABC Manufacturing Ltd.
          </span>
        </div>

        <div className="hidden sm:flex items-center space-x-4 text-slate-400">
          <div className="flex items-center gap-1.5 bg-slate-800 px-3 py-1 rounded-md text-[11px]">
            <Search className="w-3.5 h-3.5" />
            <span>Search employee or log...</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="text-emerald-400 font-semibold">ZKTeco Push Live</span>
          </div>
        </div>
      </div>

      {/* Main App Workspace Canvas */}
      <div className="p-6 bg-slate-50/60 space-y-6">
        
        {/* KPI Summary Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div className="bg-white p-4 rounded-xl border border-slate-200">
            <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
              <span>Present Today</span>
              <span className="text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded text-[10px]">92.2%</span>
            </div>
            <div className="text-2xl font-black text-slate-900">142 <span className="text-xs font-semibold text-slate-400">/ 154</span></div>
            <div className="text-[11px] text-slate-500 mt-1 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              <span>Punches synced from 3 devices</span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200">
            <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
              <span>Late Arrivals</span>
              <span className="text-amber-600 font-bold bg-amber-50 px-1.5 py-0.5 rounded text-[10px]">Grace: 15m</span>
            </div>
            <div className="text-2xl font-black text-amber-600">8 <span className="text-xs font-semibold text-slate-400">Employees</span></div>
            <div className="text-[11px] text-slate-500 mt-1 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-amber-500" />
              <span>Avg delay: 14 minutes</span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200">
            <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
              <span>Absent / On Leave</span>
              <span className="text-rose-600 font-bold bg-rose-50 px-1.5 py-0.5 rounded text-[10px]">4 Unexcused</span>
            </div>
            <div className="text-2xl font-black text-slate-900">4 <span className="text-xs font-semibold text-slate-400">Absences</span></div>
            <div className="text-[11px] text-slate-500 mt-1 flex items-center gap-1">
              <UserX className="w-3.5 h-3.5 text-rose-500" />
              <span>Leave approval pending</span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200">
            <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
              <span>Estimated Net Payroll</span>
              <span className="text-[#0284C7] font-bold bg-[#0284C7]/10 px-1.5 py-0.5 rounded text-[10px]">Aug 2026</span>
            </div>
            <div className="text-2xl font-black text-slate-900">₹4,28,500</div>
            <div className="text-[11px] text-slate-500 mt-1 flex items-center gap-1">
              <DollarSign className="w-3.5 h-3.5 text-[#0284C7]" />
              <span>Auto PF, ESI, TDS computed</span>
            </div>
          </div>

        </div>

        {/* Middle Graph & Terminal Grid */}
        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          
          <div className="lg:col-span-8 bg-white p-5 rounded-xl border border-slate-200 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="text-sm font-bold text-slate-900">Weekly Attendance Trend</h4>
                <p className="text-[11px] text-slate-500">Live ZKTeco punch volume for Aug 12 - Aug 19</p>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#0284C7]">
                <Activity className="w-4 h-4" />
                <span>Real-Time Sync</span>
              </div>
            </div>

            <div className="w-full h-36 flex items-end justify-between gap-3 pt-4 border-b border-slate-100 pb-2">
              {[
                { day: 'Mon', count: 148, h: '85%' },
                { day: 'Tue', count: 152, h: '92%' },
                { day: 'Wed', count: 146, h: '80%' },
                { day: 'Thu', count: 150, h: '88%' },
                { day: 'Fri', count: 154, h: '95%' },
                { day: 'Sat', count: 130, h: '65%' },
                { day: 'Sun', count: 42, h: '25%' },
              ].map((item, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1 group">
                  <div className="text-[10px] font-bold text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.count}
                  </div>
                  <div className="w-full bg-slate-100 group-hover:bg-[#0284C7] rounded-t-md transition-all duration-300 relative" style={{ height: item.h }}>
                    <div className="absolute top-0 left-0 right-0 h-1 bg-[#0284C7] rounded-t-md" />
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">{item.day}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 bg-white p-5 rounded-xl border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                  <Cpu className="w-4 h-4 text-[#0284C7]" />
                  Terminal Status
                </h4>
                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  3 Online
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-slate-900">ZKTeco MB20 (Gate A)</div>
                    <div className="text-[10px] text-slate-500">IP: 192.168.1.102 · Push ADMS</div>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>

                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-slate-900">ZKTeco K40 (Gate B)</div>
                    <div className="text-[10px] text-slate-500">IP: 192.168.1.104 · Push ADMS</div>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>

                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-slate-900">ZKTeco uFace 800 (HQ)</div>
                    <div className="text-[10px] text-slate-500">IP: 192.168.2.50 · Wi-Fi Push</div>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between">
              <span>Push Protocol Version: 3.2.1</span>
              <span className="text-[#0284C7] font-bold cursor-pointer">Manage Devices →</span>
            </div>
          </div>

        </div>

        {/* Live Employee Attendance Table */}
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <div className="px-5 py-3 border-b border-slate-200 flex items-center justify-between">
            <h4 className="text-sm font-bold text-slate-900">Real-Time Punch Logs</h4>
            <span className="text-xs text-[#0284C7] font-semibold cursor-pointer">View All 154 Logs →</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-500 font-semibold border-b border-slate-200 uppercase text-[10px] tracking-wider">
                <tr>
                  <th className="px-5 py-3">Emp ID & Name</th>
                  <th className="px-5 py-3">Shift Assigned</th>
                  <th className="px-5 py-3">Punch IN</th>
                  <th className="px-5 py-3">Punch OUT</th>
                  <th className="px-5 py-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                {employees.map((emp) => (
                  <tr key={emp.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="px-5 py-3">
                      <div className="font-bold text-slate-900">{emp.name}</div>
                      <div className="text-[10px] text-slate-400">{emp.id}</div>
                    </td>
                    <td className="px-5 py-3 text-slate-600">{emp.shift}</td>
                    <td className="px-5 py-3 font-semibold text-slate-900">{emp.inTime}</td>
                    <td className="px-5 py-3 text-slate-600">{emp.outTime}</td>
                    <td className="px-5 py-3">
                      <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold border ${emp.statusColor}`}>
                        {emp.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
