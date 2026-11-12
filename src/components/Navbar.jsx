import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import Logo from './site/Logo';

const navLinks = [
  { name: 'Features', href: '#features' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Devices', href: '#devices' },
  { name: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Highlight the nav pill for the section currently in view
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!sections.length || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-3 sm:px-5 pt-3 sm:pt-4">
      <div
        className={`mx-auto flex items-center justify-between rounded-full transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] ${
          scrolled
            ? 'max-w-6xl glass pl-5 pr-2 py-2 shadow-[0_10px_30px_-12px_rgba(16,24,40,0.18)]'
            : 'max-w-7xl px-2 sm:px-4 py-2 border border-transparent'
        }`}
      >
        {/* Logo */}
        <a href="#home" className="flex items-center shrink-0" aria-label="Bluetyk home">
          <Logo className="h-6 sm:h-7" />
        </a>

        {/* Desktop navigation pill */}
        <nav
          className={`hidden lg:flex items-center gap-1 rounded-full p-1 transition-all duration-500 ${
            scrolled ? 'bg-transparent' : 'glass shadow-[0_8px_24px_-14px_rgba(16,24,40,0.25)]'
          }`}
        >
          {navLinks.map((link) => {
            const isActive = active === link.href;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-white text-ink shadow-[0_1px_3px_rgba(16,24,40,0.12)]'
                    : 'text-ink-2 hover:text-ink hover:bg-white/60'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Desktop actions */}
        <div className="hidden lg:flex items-center gap-2">
          <a
            href="https://app.bluetyk.in"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-[13px] font-semibold text-ink hover:text-brand-600 transition-colors"
          >
            Login
          </a>
          <a href="#trial-signup" className="btn btn-primary btn-sm">
            Start Free Trial
          </a>
        </div>

        {/* Mobile actions */}
        <div className="lg:hidden flex items-center gap-1.5">
          <a
            href="https://app.bluetyk.in"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 text-xs font-semibold text-ink"
          >
            Login
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 rounded-full glass flex items-center justify-center text-ink"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden mx-auto max-w-7xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] ${
          mobileMenuOpen ? 'max-h-[420px] opacity-100 mt-2' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="glass rounded-3xl p-3 shadow-[0_20px_40px_-20px_rgba(16,24,40,0.3)]">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-2xl text-[15px] font-medium text-ink hover:bg-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <a
            href="#trial-signup"
            onClick={() => setMobileMenuOpen(false)}
            className="btn btn-primary w-full mt-2"
          >
            Start 7-Day Free Trial
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
