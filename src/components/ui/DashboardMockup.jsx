import React from 'react';
import {
  Clock, UserX, IndianRupee, Cpu, CheckCircle2, Search, Activity,
  LayoutDashboard, BarChart2, Users, Bell, ArrowUpRight,
} from 'lucide-react';

const employees = [
  { id: 'EMP-104', name: 'Rajesh Kumar', shift: 'Morning (09:00 - 18:00)', inTime: '08:54 AM', outTime: '06:02 PM', status: 'Present' },
  { id: 'EMP-108', name: 'Priya Sharma', shift: 'Morning (09:00 - 18:00)', inTime: '09:18 AM', outTime: '06:15 PM', status: 'Late' },
  { id: 'EMP-112', name: 'Arun Nair', shift: 'Night (22:00 - 06:00)', inTime: '09:58 PM', outTime: '06:05 AM', status: 'Present' },
  { id: 'EMP-115', name: 'Sneha Patel', shift: 'Morning (09:00 - 18:00)', inTime: '-', outTime: '-', status: 'On Leave' },
];

const statusStyle = {
  Present: 'bg-emerald-50 text-emerald-700',
  Late: 'bg-amber-50 text-amber-700',
  'On Leave': 'bg-brand-50 text-brand-600',
};

const week = [
  { day: 'Mon', count: 148, h: 85 },
  { day: 'Tue', count: 152, h: 92 },
  { day: 'Wed', count: 146, h: 80 },
  { day: 'Thu', count: 150, h: 88 },
  { day: 'Fri', count: 154, h: 95, highlight: true },
  { day: 'Sat', count: 130, h: 65 },
  { day: 'Sun', count: 42, h: 25 },
];

const sideNav = [
  { label: 'Dashboard', icon: LayoutDashboard, active: true },
  { label: 'Attendance', icon: Clock },
  { label: 'Payroll', icon: IndianRupee },
  { label: 'Reports', icon: BarChart2 },
  { label: 'Devices', icon: Cpu },
];

function Kpi({ label, pill, pillClass, value, unit, foot, FootIcon, footIconClass, valueClass = 'text-ink' }) {
  return (
    <div className="bg-white p-4 rounded-2xl border border-line">
      <div className="flex items-center justify-between text-[11px] text-ink-3 mb-2">
        <span className="font-medium">{label}</span>
        <span className={`font-semibold px-2 py-0.5 rounded-full text-[10px] ${pillClass}`}>{pill}</span>
      </div>
      <div className={`font-display text-[26px] leading-none font-semibold tracking-tight ${valueClass}`}>
        {value} {unit && <span className="text-xs font-medium text-ink-3 tracking-normal">{unit}</span>}
      </div>
      <div className="text-[11px] text-ink-3 mt-2.5 flex items-center gap-1.5">
        <FootIcon className={`w-3.5 h-3.5 ${footIconClass}`} />
        <span>{foot}</span>
      </div>
    </div>
  );
}

export default function DashboardMockup() {
  return (
    <div className="w-full bg-white rounded-[20px] overflow-hidden font-sans text-ink text-left flex">
      {/* Sidebar */}
      <aside className="w-[200px] shrink-0 border-r border-line p-4">
        <div className="flex items-center gap-2 px-2 pb-5">
          <img src={`${import.meta.env.BASE_URL}bluetyk_logo_mark.png`} alt="" className="h-5 w-auto" />
        </div>
        <div className="text-[10px] font-semibold uppercase tracking-wider text-ink-3 px-2 mb-2">Menu</div>
        <nav className="space-y-1">
          {sideNav.map(({ label, icon: Icon, active }) => (
            <div
              key={label}
              className={`relative flex items-center gap-2.5 px-3 py-2 rounded-xl text-[12px] font-medium ${
                active ? 'bg-brand-50 text-brand-600' : 'text-ink-2'
              }`}
            >
              {active && <span className="absolute -left-4 top-1.5 bottom-1.5 w-1 rounded-r-full bg-brand-500" />}
              <Icon className="w-4 h-4" />
              {label}
            </div>
          ))}
        </nav>
      </aside>

      <div className="flex-1 min-w-0">
        {/* Top bar */}
        <div className="px-6 py-3.5 flex items-center justify-between border-b border-line text-xs">
          <div>
            <div className="text-[11px] text-ink-3">Bluetyk Enterprise</div>
            <div className="font-display font-semibold text-[15px] tracking-tight">ABC Manufacturing Ltd.</div>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-2 bg-canvas px-3 py-2 rounded-full text-[11px] text-ink-3 w-56">
              <Search className="w-3.5 h-3.5" />
              <span>Search employee or log...</span>
            </div>
            <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-3 py-2 rounded-full text-[11px] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              ZKTeco Push Live
            </div>
            <div className="w-8 h-8 rounded-full bg-canvas flex items-center justify-center text-ink-2">
              <Bell className="w-3.5 h-3.5" />
            </div>
            <div className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center">
              <Users className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>

        <div className="p-5 bg-canvas/60 space-y-4">
          {/* KPI cards */}
          <div className="grid grid-cols-4 gap-3">
            <Kpi label="Present Today" pill="92.2%" pillClass="bg-emerald-50 text-emerald-700" value="142" unit="/ 154"
              foot="Punches synced from 3 devices" FootIcon={CheckCircle2} footIconClass="text-emerald-500" />
            <Kpi label="Late Arrivals" pill="Grace: 15m" pillClass="bg-amber-50 text-amber-700" value="8" unit="Employees"
              foot="Avg delay: 14 minutes" FootIcon={Clock} footIconClass="text-amber-500" valueClass="text-amber-600" />
            <Kpi label="Absent / On Leave" pill="4 Unexcused" pillClass="bg-rose-50 text-rose-600" value="4" unit="Absences"
              foot="Leave approval pending" FootIcon={UserX} footIconClass="text-rose-500" />
            <Kpi label="Estimated Net Payroll" pill="Aug 2026" pillClass="bg-brand-50 text-brand-600" value="₹4,28,500"
              foot="Auto PF, ESI, TDS computed" FootIcon={IndianRupee} footIconClass="text-brand-500" />
          </div>

          {/* Chart + terminals */}
          <div className="grid grid-cols-12 gap-3 items-stretch">
            <div className="col-span-8 bg-white p-5 rounded-2xl border border-line flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h4 className="text-[14px] font-semibold">Weekly Attendance Trend</h4>
                  <p className="text-[11px] text-ink-3">Live ZKTeco punch volume for Aug 12 - Aug 19</p>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-brand-600 bg-brand-50 px-2.5 py-1 rounded-full">
                  <Activity className="w-3.5 h-3.5" />
                  Real-Time Sync
                </div>
              </div>

              <div className="relative h-40 flex items-end justify-between gap-4 pt-6">
                {/* guide lines */}
                <div className="absolute inset-x-0 top-6 bottom-6 flex flex-col justify-between pointer-events-none">
                  {[0, 1, 2, 3].map((i) => (
                    <div key={i} className="border-t border-dashed border-line" />
                  ))}
                </div>
                {week.map((item, i) => (
                  <div key={item.day} className="relative flex-1 h-full flex flex-col items-center justify-end gap-2">
                    <div className="relative w-full max-w-[38px] flex-1 flex items-end">
                      {item.highlight && (
                        <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-ink text-white text-[10px] font-semibold px-2 py-1 rounded-md whitespace-nowrap">
                          {item.count}
                        </div>
                      )}
                      <div
                        className={`grow-bar w-full rounded-full ${
                          item.highlight
                            ? 'bg-gradient-to-b from-brand-400 to-brand-600'
                            : 'bg-[repeating-linear-gradient(135deg,#EEF1F5_0_4px,#E4E8EE_4px_8px)]'
                        }`}
                        style={{ height: `${item.h}%`, animationDelay: `${i * 70}ms` }}
                      />
                    </div>
                    <span className="text-[11px] text-ink-3 font-medium">{item.day}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-span-4 bg-white p-5 rounded-2xl border border-line flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-[14px] font-semibold flex items-center gap-1.5">
                    <Cpu className="w-4 h-4 text-brand-500" />
                    Terminal Status
                  </h4>
                  <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">3 Online</span>
                </div>
                <div className="space-y-2 text-xs">
                  {[
                    ['ZKTeco MB20 (Gate A)', 'IP: 192.168.1.102 · Push ADMS'],
                    ['ZKTeco K40 (Gate B)', 'IP: 192.168.1.104 · Push ADMS'],
                    ['ZKTeco uFace 800 (HQ)', 'IP: 192.168.2.50 · Wi-Fi Push'],
                  ].map(([name, meta]) => (
                    <div key={name} className="p-2.5 rounded-xl bg-canvas flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-[12px]">{name}</div>
                        <div className="text-[10px] text-ink-3">{meta}</div>
                      </div>
                      <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_0_3px_rgba(16,185,129,0.18)]" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-3 mt-3 border-t border-line text-[10px] text-ink-3 flex items-center justify-between">
                <span>Push Protocol Version: 3.2.1</span>
                <span className="text-brand-600 font-semibold flex items-center gap-0.5">Manage Devices <ArrowUpRight className="w-3 h-3" /></span>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-2xl border border-line overflow-hidden">
            <div className="px-5 py-3.5 flex items-center justify-between">
              <h4 className="text-[14px] font-semibold">Real-Time Punch Logs</h4>
              <span className="text-[11px] text-brand-600 font-semibold">View All 154 Logs →</span>
            </div>
            <table className="w-full text-left text-xs">
              <thead className="text-ink-3 font-semibold uppercase text-[10px] tracking-wider border-y border-line bg-canvas/70">
                <tr>
                  <th className="px-5 py-2.5 font-semibold">Emp ID & Name</th>
                  <th className="px-5 py-2.5 font-semibold">Shift Assigned</th>
                  <th className="px-5 py-2.5 font-semibold">Punch IN</th>
                  <th className="px-5 py-2.5 font-semibold">Punch OUT</th>
                  <th className="px-5 py-2.5 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line text-ink-2">
                {employees.map((emp) => (
                  <tr key={emp.id}>
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center text-[11px] font-semibold">
                          {emp.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-semibold text-ink text-[12px]">{emp.name}</div>
                          <div className="text-[10px] text-ink-3">{emp.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-3">{emp.shift}</td>
                    <td className="px-5 py-3 font-semibold text-ink">{emp.inTime}</td>
                    <td className="px-5 py-3">{emp.outTime}</td>
                    <td className="px-5 py-3">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-semibold ${statusStyle[emp.status]}`}>
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
