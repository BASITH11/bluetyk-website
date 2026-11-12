import React from 'react';
import { ArrowRight, Cpu, Zap, ShieldCheck, Network } from 'lucide-react';
import Reveal from './site/Reveal';

const supportedHighlights = [
  { title: 'Instant Push SDK Sync', desc: 'Punch logs stream to cloud under 0.5s via eSSL ADMS.', icon: Zap },
  { title: 'Zero Port Forwarding', desc: 'Works behind standard firewalls with zero static IP.', icon: ShieldCheck },
  { title: 'Multi-Branch Pairing', desc: 'Central management across 100+ office locations.', icon: Network },
];

export default function DeviceCatalogSection({ onOpenDevicePage }) {
  return (
    <section
      id="devices"
      className="relative overflow-hidden py-20 sm:py-28 bg-[linear-gradient(180deg,#FFFFFF_0%,#F1F7FF_45%,#E3EFFE_100%)]"
    >
      {/* soft rings */}
      <div className="absolute left-1/2 top-[52%] -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-brand-200/40 pointer-events-none" />
      <div className="absolute left-1/2 top-[52%] -translate-x-1/2 -translate-y-1/2 w-[640px] h-[640px] rounded-full border border-brand-200/50 pointer-events-none" />
      <div className="absolute left-1/2 top-[52%] -translate-x-1/2 -translate-y-1/2 w-[520px] h-[360px] rounded-full bg-white blur-[80px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal className="max-w-3xl mx-auto space-y-4">
          <div className="eyebrow">Devices</div>
          <h2 className="text-[2rem] leading-[1.08] sm:text-5xl font-semibold text-ink text-balance">
            Works with the devices you already use.
          </h2>
          <p className="text-base sm:text-lg text-ink-3 leading-relaxed max-w-2xl mx-auto">
            Connect your eSSL & ZKTeco biometric terminals and keep your existing hardware with zero replacement costs.
          </p>
          <div className="pt-3">
            <button onClick={onOpenDevicePage} className="btn btn-dark">
              <span className="live-dot" />
              View Compatible Devices
            </button>
          </div>
        </Reveal>

        {/* Device showcase */}
        <Reveal delay={120} className="relative max-w-4xl mx-auto mt-10 sm:mt-14">
          <button
            type="button"
            onClick={onOpenDevicePage}
            className="group block w-full cursor-pointer"
            aria-label="Open full devices directory"
          >
            <img
              src={`${import.meta.env.BASE_URL}zkteco_devices_showcase.png`}
              alt="ZKTeco and eSSL Biometric Terminals"
              className="w-full max-h-[520px] object-contain mx-auto drop-shadow-[0_40px_50px_rgba(0,50,120,0.28)] transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.025] group-hover:-translate-y-1"
            />
            <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 group-hover:text-brand-700 transition-colors">
              Click to Open Full Devices Directory Screen
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </button>
        </Reveal>

        {/* Highlights */}
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-5 max-w-5xl mx-auto mt-12 text-left">
          {supportedHighlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={i * 100}>
                <div className="glass card-hover h-full rounded-3xl p-5 sm:p-6 shadow-[0_10px_30px_-18px_rgba(0,60,140,0.35)] transition-all duration-500">
                  <div className="w-10 h-10 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="font-display text-[17px] font-semibold text-ink tracking-tight">{item.title}</div>
                  <p className="mt-1.5 text-sm text-ink-3 leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={150} className="mt-10 flex items-center justify-center">
          <button onClick={onOpenDevicePage} className="btn btn-ghost w-full sm:w-auto">
            <Cpu className="w-4 h-4 text-brand-600" />
            Check ADMS Setup Guide
          </button>
        </Reveal>
      </div>
    </section>
  );
}
