import React, { useEffect } from 'react';
import { X, Play, ArrowRight, CheckCircle2 } from 'lucide-react';
import DashboardMockup from './ui/DashboardMockup';
import ScaledFrame from './site/ScaledFrame';

export default function DemoModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0A0F1C]/40 backdrop-blur-md animate-in fade-in duration-300"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-modal-title"
    >
      <div
        className="relative w-full max-w-4xl rounded-[32px] p-2 glass shadow-[0_50px_100px_-30px_rgba(10,15,28,0.5)] animate-in zoom-in-95 fade-in duration-500"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-white rounded-[26px] overflow-hidden text-left">
          {/* Header */}
          <div className="flex items-center justify-between px-5 sm:px-6 py-4">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center">
                <Play className="w-4 h-4 fill-current ml-0.5" />
              </span>
              <div>
                <h3 id="demo-modal-title" className="text-base sm:text-lg font-semibold text-ink">Bluetyk Interactive Product Showcase</h3>
                <p className="text-xs text-ink-3">See how biometric attendance & payroll work in real time</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-canvas text-ink-2 hover:bg-ink hover:text-white flex items-center justify-center transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Player */}
          <div className="relative mx-3 sm:mx-4 aspect-video rounded-[20px] overflow-hidden bg-[linear-gradient(160deg,#CFE5FF,#EEF6FF)]">
            <div className="absolute inset-0 p-4 sm:p-6 opacity-70">
              <ScaledFrame designWidth={1180}>
                <DashboardMockup />
              </ScaledFrame>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-white/10 flex flex-col items-center justify-center p-6 text-center">
              <button className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full btn-primary flex items-center justify-center pulse-ring transition-transform duration-500 hover:scale-105" aria-label="Play demo">
                <Play className="w-7 h-7 fill-white text-white ml-1" />
              </button>
              <h4 className="mt-5 text-xl sm:text-2xl font-semibold text-ink">Bluetyk 2-Minute Guided Tour</h4>
              <p className="text-sm text-ink-3 max-w-lg mt-2">
                Learn how to connect ZKTeco devices via Push ADMS, setup shift rules, and generate monthly salary slips.
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="px-5 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-ink-2 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Ready to test with your own ZKTeco device?</span>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button onClick={onClose} className="btn btn-ghost btn-sm w-full sm:w-auto">
                Close
              </button>
              <a href="#trial-signup" onClick={onClose} className="btn btn-primary btn-sm w-full sm:w-auto">
                Start Free Trial
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
