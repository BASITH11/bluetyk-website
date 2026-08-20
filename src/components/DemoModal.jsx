import React from 'react';
import { X, Play, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';
import dashboardImg from '../assets/dashboard.png';

export default function DemoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden flex flex-col my-auto text-left">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-slate-900">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-[#0284C7]/20 text-[#0284C7] flex items-center justify-center font-bold">
              <Play className="w-4 h-4 fill-current ml-0.5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Bluetyk Interactive Product Showcase</h3>
              <p className="text-xs text-slate-400">See how biometric attendance & payroll work in real time</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body / Demo Player Preview */}
        <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden group">
          <img
            src={dashboardImg}
            alt="Bluetyk Demo Preview"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col items-center justify-center p-6 text-center">
            <div className="w-16 h-16 rounded-full bg-[#0284C7] hover:bg-[#0369A1] text-white flex items-center justify-center transition-transform hover:scale-105 cursor-pointer mb-4">
              <Play className="w-8 h-8 fill-current ml-1" />
            </div>
            <h4 className="text-2xl font-extrabold text-white">Bluetyk 2-Minute Guided Tour</h4>
            <p className="text-sm text-slate-300 max-w-lg mt-2 font-normal">
              Learn how to connect ZKTeco devices via Push ADMS, setup shift rules, and generate monthly salary slips.
            </p>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="p-6 bg-slate-900 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Ready to test with your own ZKTeco device?</span>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Button
              onClick={onClose}
              variant="outline"
              className="w-full sm:w-auto border-slate-700 text-slate-300 hover:bg-slate-800 rounded-xl bg-transparent"
            >
              Close
            </Button>
            <a href="#trial-signup" onClick={onClose} className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold px-5 rounded-xl">
                Start Free Trial
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
