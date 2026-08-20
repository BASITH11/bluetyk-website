import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Building, Award } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      quote: "Bluetyk reduced our monthly payroll processing time from 3 days to 30 minutes. The automated payslips and PF/ESI calculations saved our HR team completely.",
      author: "Rajesh Kumar",
      designation: "HR Manager",
      company: "ABC Manufacturing Ltd.",
      location: "Mumbai, Maharashtra",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      impact: "90% Time Saved in Payroll"
    },
    {
      id: 2,
      quote: "The biometric integration just works. We connected our existing ZKTeco device ADMS URL and attendance started flowing immediately into the cloud.",
      author: "Priya Sharma",
      designation: "Admin Head",
      company: "XYZ International School",
      location: "Bengaluru, Karnataka",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      impact: "Zero Hardware Replacement Cost"
    },
    {
      id: 3,
      quote: "Managing 3 shifts across 200 employees was a nightmare before Bluetyk. The auto shift detection and multi-location gate logs solved our biggest headache.",
      author: "Arun Nair",
      designation: "Operations Head",
      company: "PQR Healthcare & Hospitals",
      location: "Kochi, Kerala",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      impact: "200+ Employees Synced"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-blue-50/80 via-sky-50/50 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Trusted by Businesses Across India
          </h2>
          <p className="text-lg text-slate-600 font-normal">
            See how manufacturing plants, schools, hospitals, and corporate offices rely on Bluetyk daily.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between relative"
            >
              <div>
                {/* Quote Icon & Rating */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    <Quote className="w-5 h-5 fill-current" />
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Quote Text */}
                <p className="text-slate-700 text-base leading-relaxed mb-6 font-medium italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-6 border-t border-slate-100">
                <div className="flex items-center gap-4">
                  <img
                    src={item.avatar}
                    alt={item.author}
                    className="w-12 h-12 rounded-full object-cover border-2 border-blue-500 shadow-md"
                  />
                  <div>
                    <h4 className="text-base font-bold text-slate-900">{item.author}</h4>
                    <p className="text-xs text-slate-500 font-medium">
                      {item.designation} · <span className="text-slate-700 font-semibold">{item.company}</span>
                    </p>
                    <p className="text-[11px] text-blue-600 font-semibold mt-0.5">
                      ⚡ {item.impact}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
