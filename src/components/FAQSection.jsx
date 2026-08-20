import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const faqs = [
    {
      q: 'Does Bluetyk work with ZKTeco terminals?',
      a: 'Yes. Bluetyk supports all ZKTeco biometric terminals using Push SDK & ADMS protocol, including face recognition, fingerprint, and card-based devices (e.g. K40, MB20, uFace800, iClock series, SilkFP).'
    },
    {
      q: 'Can I manage multiple branches?',
      a: 'Yes. You can create multiple locations and assign biometric devices to each location. Bluetyk supports parent-child location hierarchy for multi-branch companies.'
    },
    {
      q: 'How does the free trial work?',
      a: 'Sign up and get instant access to all features for 7 days. No credit card needed. Your data is preserved when you choose a plan.'
    },
    {
      q: 'Can Bluetyk calculate payroll automatically?',
      a: 'Yes. Bluetyk reads attendance data and applies your salary structure (fixed or hourly), overtime rules, shift allowances, and statutory deductions (PF, ESI, TDS) to calculate net salary automatically.'
    },
    {
      q: 'Can I manage shifts?',
      a: 'Yes. Bluetyk supports morning, evening, night, and split shifts with automatic shift detection and grace time rules.'
    },
    {
      q: 'Can I export reports?',
      a: 'Yes. Export monthly muster rolls, department summaries, overtime logs, and employee logbooks directly to Excel or PDF.'
    },
    {
      q: 'Is employee data secure?',
      a: 'Yes. Each business receives an isolated database with 256-bit SSL encryption and strict data protection policies.'
    },
    {
      q: 'How do I connect my biometric device?',
      a: 'Simply enter Bluetyk’s cloud server IP/domain and port into your ZKTeco device’s ADMS/Comm settings. Setup takes less than 2 minutes.'
    }
  ];

  const [openIdx, setOpenIdx] = useState(0);

  const toggleFaq = (index) => {
    setOpenIdx(openIdx === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      
      {/* Architectural Border Grid Frame */}
      <div className="absolute top-0 inset-x-0 h-px bg-slate-200 pointer-events-none z-10" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-slate-200 pointer-events-none z-10" />
      <div className="absolute top-0 bottom-0 left-3 sm:left-6 lg:left-8 w-px bg-slate-200 pointer-events-none z-10" />
      <div className="absolute top-0 bottom-0 right-3 sm:right-6 lg:right-8 w-px bg-slate-200 pointer-events-none z-10" />

      <div className="max-w-3xl mx-auto px-4 sm:px-8 lg:px-12 text-left relative z-20">
        
        {/* Header */}
        <div className="text-center mb-14 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-slate-600 font-normal">
            Everything you need to know about Bluetyk, ZKTeco terminals, and payroll automation.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200 rounded-xl overflow-hidden transition-all bg-white"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-slate-900">
                    {faq.q}
                  </span>
                  <div className={`p-1 text-slate-500 transition-transform ${isOpen ? 'rotate-180 text-[#0284C7]' : ''}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-3 font-normal">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
