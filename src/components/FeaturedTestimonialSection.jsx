import React from 'react';
import { Star } from 'lucide-react';

export default function FeaturedTestimonialSection() {
  return (
    <section className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-slate-50 p-8 sm:p-12 border border-slate-200 relative text-left">
          
          <div className="grid md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-8 space-y-6">
              
              {/* Star Rating */}
              <div className="flex items-center space-x-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug tracking-tight">
                "Bluetyk reduced our monthly payroll processing time from 3 days to 30 minutes. The biometric integration with our ZKTeco devices worked instantly."
              </blockquote>

              {/* Author */}
              <div>
                <div className="text-base font-black text-slate-900">Rajesh Kumar</div>
                <div className="text-xs text-slate-500 font-semibold">
                  HR Manager · <span className="text-slate-700">ABC Manufacturing Ltd.</span>
                </div>
              </div>

            </div>

            {/* Big Outcome Metric Badge */}
            <div className="md:col-span-4 flex justify-center md:justify-end">
              <div className="bg-white p-6 border border-slate-200 text-center space-y-1 min-w-[200px]">
                <div className="text-4xl sm:text-5xl font-black text-emerald-600 tracking-tight">
                  90%
                </div>
                <div className="text-xs font-extrabold uppercase tracking-widest text-slate-500">
                  TIME SAVED
                </div>
                <div className="text-[10px] text-slate-400 font-medium">In Monthly Payroll</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
