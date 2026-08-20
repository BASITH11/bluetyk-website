import React from 'react';

export default function StatsBar() {
  const stats = [
    { number: '50+', label: 'Businesses' },
    { number: '10,000+', label: 'Employees Tracked' },
    { number: '99.9%', label: 'Platform Uptime' },
    { number: '24/7', label: 'Support Available' },
  ];

  return (
    <section className="bg-white py-12 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center pt-4 sm:pt-0">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-500 mt-1 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
