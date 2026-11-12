import React from 'react';
import { MessageCircle, Mail, Globe } from 'lucide-react';
import Logo from './site/Logo';

const columns = [
  {
    title: 'Product',
    span: 'lg:col-span-2',
    links: [
      ['Features Overview', '#features'],
      ['Plans & Pricing', '#pricing'],
      ['ZKTeco Hardware', '#devices'],
      ['3-Step Setup', '#how-it-works'],
    ],
  },
  {
    title: 'Company & Resources',
    span: 'lg:col-span-3',
    links: [
      ['FAQ & Support', '#faq'],
      ['Contact Support', 'mailto:support@bluewhyteapps.com'],
      ['HR Tech Guide', '#'],
    ],
  },
  {
    title: 'Legal',
    span: 'lg:col-span-2',
    links: [
      ['Privacy Policy', '#'],
      ['Terms of Service', '#'],
      ['Refund Policy', '#'],
      ['Data Security', '#'],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-white text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-10">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-5 space-y-5">
            <a href="#home" className="inline-block" aria-label="Bluetyk home">
              <Logo className="h-8" />
            </a>
            <p className="text-sm text-ink-3 leading-relaxed max-w-sm">
              Biometric attendance & automated payroll management platform for modern businesses in India.
            </p>
            <div className="space-y-2.5 text-sm">
              <a href="mailto:support@bluewhyteapps.com" className="flex items-center gap-2.5 text-ink-2 hover:text-brand-600 transition-colors w-fit">
                <span className="w-8 h-8 rounded-full bg-canvas flex items-center justify-center">
                  <Mail className="w-3.5 h-3.5" />
                </span>
                support@bluewhyteapps.com
              </a>
              <div className="flex items-center gap-2.5 text-ink-2">
                <span className="w-8 h-8 rounded-full bg-canvas flex items-center justify-center">
                  <Globe className="w-3.5 h-3.5" />
                </span>
                BlueWhyte Software Solutions
              </div>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title} className={col.span}>
              <h4 className="text-[13px] font-semibold text-ink mb-4 tracking-tight">{col.title}</h4>
              <ul className="space-y-3 text-sm">
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    <a href={href} className="text-ink-3 hover:text-ink transition-colors">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-6 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-3">
          <p>© 2026 BlueWhyte Software Solutions. All rights reserved.</p>
          <Logo className="h-4 opacity-40 grayscale" />
        </div>
      </div>

      {/* Floating WhatsApp support button */}
      <a
        href="https://wa.me/919000000000?text=Hi%20Bluetyk%20Team%2C%20I%20have%20a%20question%20about%20biometric%20attendance"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#22C55E] text-white flex items-center justify-center shadow-[0_14px_30px_-10px_rgba(34,197,94,0.7)] transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
      </a>
    </footer>
  );
}
