import React, { useState } from 'react';
import { Plus, Mail, Globe } from 'lucide-react';
import Reveal from './site/Reveal';

const faqs = [
  {
    q: 'Does Bluetyk work with ZKTeco terminals?',
    a: 'Yes. Bluetyk supports all ZKTeco biometric terminals using Push SDK & ADMS protocol, including face recognition, fingerprint, and card-based devices (e.g. K40, MB20, uFace800, iClock series, SilkFP).',
  },
  {
    q: 'Can I manage multiple branches?',
    a: 'Yes. You can create multiple locations and assign biometric devices to each location. Bluetyk supports parent-child location hierarchy for multi-branch companies.',
  },
  {
    q: 'How does the free trial work?',
    a: 'Sign up and get instant access to all features for 7 days. No credit card needed. Your data is preserved when you choose a plan.',
  },
  {
    q: 'Can Bluetyk calculate payroll automatically?',
    a: 'Yes. Bluetyk reads attendance data and applies your salary structure (fixed or hourly), overtime rules, shift allowances, and statutory deductions (PF, ESI, TDS) to calculate net salary automatically.',
  },
  {
    q: 'Can I manage shifts?',
    a: 'Yes. Bluetyk supports morning, evening, night, and split shifts with automatic shift detection and grace time rules.',
  },
  {
    q: 'Can I export reports?',
    a: 'Yes. Export monthly muster rolls, department summaries, overtime logs, and employee logbooks directly to Excel or PDF.',
  },
  {
    q: 'Is employee data secure?',
    a: 'Yes. Each business receives an isolated database with 256-bit SSL encryption and strict data protection policies.',
  },
  {
    q: 'How do I connect my biometric device?',
    a: 'Simply enter Bluetyk’s cloud server IP/domain and port into your ZKTeco device’s ADMS/Comm settings. Setup takes less than 2 minutes.',
  },
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="relative bg-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        {/* Left column */}
        <Reveal className="lg:col-span-5 lg:sticky lg:top-28 self-start space-y-5">
          <div className="eyebrow">FAQ</div>
          <h2 className="text-[2rem] leading-[1.08] sm:text-5xl font-semibold text-ink">Frequently Asked Questions</h2>
          <p className="text-base sm:text-lg text-ink-3 leading-relaxed max-w-md">
            Everything you need to know about Bluetyk, ZKTeco terminals, and payroll automation.
          </p>
          <a href="mailto:support@bluewhyteapps.com" className="btn btn-primary btn-sm">
            Contact Support
          </a>

          <div className="pt-6 space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <span className="w-10 h-10 rounded-full bg-canvas flex items-center justify-center text-ink-2 shrink-0">
                <Mail className="w-4 h-4" />
              </span>
              <div>
                <div className="text-xs text-ink-3">Email</div>
                <a href="mailto:support@bluewhyteapps.com" className="font-semibold text-ink hover:text-brand-600 transition-colors">
                  support@bluewhyteapps.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-10 h-10 rounded-full bg-canvas flex items-center justify-center text-ink-2 shrink-0">
                <Globe className="w-4 h-4" />
              </span>
              <div>
                <div className="text-xs text-ink-3">Company</div>
                <div className="font-semibold text-ink">BlueWhyte Software Solutions</div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Accordion */}
        <div className="lg:col-span-7 space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <Reveal key={faq.q} delay={idx * 50}>
                <div
                  className={`rounded-3xl transition-all duration-500 ${
                    isOpen ? 'bg-canvas ring-1 ring-line' : 'bg-white ring-1 ring-line hover:ring-[#D0D5DD]'
                  }`}
                >
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full px-5 sm:px-6 py-5 text-left flex items-center justify-between gap-4"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-[16px] sm:text-[17px] font-semibold text-ink tracking-tight">{faq.q}</span>
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-500 ${
                        isOpen ? 'bg-brand-500 text-white rotate-45' : 'bg-canvas text-ink-2'
                      }`}
                    >
                      <Plus className="w-4 h-4" />
                    </span>
                  </button>
                  <div className="accordion-panel" data-open={isOpen}>
                    <div>
                      <p className="px-5 sm:px-6 pb-6 -mt-1 text-[15px] text-ink-3 leading-relaxed max-w-2xl">{faq.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
