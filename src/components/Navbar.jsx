import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Devices', href: '#devices' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 bg-white transition-all duration-200 ${
        scrolled ? 'border-b border-slate-200' : 'border-b border-slate-200/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Official Bluetyk Brand Logo (Enlarged with Scale Transform) */}
          <a href="#" className="flex items-center group overflow-visible py-2 pr-8">
            <img
              src="/bluetyk_logo.png"
              alt="Bluetyk Logo"
              className="h-8 sm:h-11 w-auto object-contain scale-[1.8] sm:scale-[2.2] origin-left transition-transform"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-600 hover:text-[#0284C7] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="https://app.bluetyk.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-slate-700 hover:text-slate-900 px-4 py-2 transition-colors border border-slate-200 hover:border-slate-300 bg-white"
            >
              Login
            </a>
            <a href="#trial-signup">
              <Button className="bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold text-sm px-4.5 py-2.5 transition-colors flex items-center gap-1.5 rounded-none">
                <span>Start Free Trial</span>
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <a
              href="https://app.bluetyk.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-slate-700 px-3 py-1.5 border border-slate-200"
            >
              Login
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Slide-Down Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-100 bg-white animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-slate-700 hover:text-[#0284C7] text-base font-semibold px-2 py-1.5 hover:bg-slate-50 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 border-t border-slate-100">
                <a
                  href="#trial-signup"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold py-3 flex items-center justify-center gap-2 text-sm"
                >
                  Start 7-Day Free Trial
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}
