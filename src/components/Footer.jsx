import React from 'react';
import { Fingerprint, MessageCircle, Mail, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0B192C] text-slate-400 pt-16 pb-12 border-t border-slate-800 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Logo Column */}
          <div className="space-y-4">
            <a href="#" className="inline-block overflow-visible py-1">
              <img
                src="/bluetyk_logo.png"
                alt="Bluetyk Logo"
                className="h-10 sm:h-12 w-auto object-contain scale-[1.8] origin-left mix-blend-screen brightness-125"
              />
            </a>
            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              Biometric attendance & automated payroll management platform for modern businesses in India.
            </p>
            <div className="pt-2 text-xs text-slate-400 space-y-2 font-medium">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#0284C7]" />
                <a href="mailto:support@bluewhyteapps.com" className="hover:text-white transition-colors">
                  support@bluewhyteapps.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-slate-400" />
                <span>BlueWhyte Software Solutions</span>
              </div>
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">Product</h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li><a href="#features" className="hover:text-[#0284C7] transition-colors">Features Overview</a></li>
              <li><a href="#pricing" className="hover:text-[#0284C7] transition-colors">Plans & Pricing</a></li>
              <li><a href="#devices" className="hover:text-[#0284C7] transition-colors">ZKTeco Hardware</a></li>
              <li><a href="#how-it-works" className="hover:text-[#0284C7] transition-colors">3-Step Setup</a></li>
            </ul>
          </div>

          {/* Company & Resources Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">Company & Resources</h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li><a href="#faq" className="hover:text-[#0284C7] transition-colors">FAQ & Support</a></li>
              <li><a href="mailto:support@bluewhyteapps.com" className="hover:text-[#0284C7] transition-colors">Contact Support</a></li>
              <li><a href="#" className="hover:text-[#0284C7] transition-colors">HR Tech Guide</a></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">Legal</h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li><a href="#" className="hover:text-[#0284C7] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#0284C7] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[#0284C7] transition-colors">Refund Policy</a></li>
              <li><a href="#" className="hover:text-[#0284C7] transition-colors">Data Security</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800/80 text-center text-xs text-slate-500 font-medium">
          <p>© 2026 BlueWhyte Software Solutions. All rights reserved.</p>
        </div>

      </div>

      {/* Floating WhatsApp Support Button with rounded-full border-radius */}
      <a
        href="https://wa.me/919000000000?text=Hi%20Bluetyk%20Team%2C%20I%20have%20a%20question%20about%20biometric%20attendance"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#0284C7] hover:bg-[#0369A1] text-white p-3.5 rounded-full hover:scale-105 transition-all flex items-center justify-center border border-white/20"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
      </a>
    </footer>
  );
}
