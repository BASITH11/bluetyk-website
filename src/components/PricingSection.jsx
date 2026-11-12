import React, { useState, useEffect } from 'react';
import { Check, Loader2, Cpu, Users, Sparkles, Building2, Rocket } from 'lucide-react';
import { fetchPlans, FALLBACK_PLANS } from '../services/api';
import SectionHeader from './site/SectionHeader';
import Reveal from './site/Reveal';

const planIcon = { starter: Rocket, professional: Sparkles, enterprise: Building2 };

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' | 'yearly'
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPlans() {
      setLoading(true);
      const data = await fetchPlans();
      setPlans(data && data.length > 0 ? data : FALLBACK_PLANS);
      setLoading(false);
    }
    loadPlans();
  }, []);

  const formatPrice = (amount) => new Intl.NumberFormat('en-IN').format(amount);
  const paidPlans = plans.filter((p) => !p.is_trial && p.slug !== 'trial');
  const yearly = billingCycle === 'yearly';

  return (
    <section
      id="pricing"
      className="relative py-20 sm:py-28 bg-[linear-gradient(180deg,#E6F1FE_0%,#F4F9FF_30%,#FFFFFF_70%)] overflow-hidden"
    >
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1100px] h-[500px] rounded-full bg-white/70 blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Pricing"
          title="Simple pricing that scales with your team."
          subtitle="Transparent pricing with zero hidden fees. Upgrade or adjust anytime."
        >
          {/* Billing switch */}
          <div className="pt-5 flex items-center justify-center gap-3 text-sm font-medium">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`transition-colors ${!yearly ? 'text-ink' : 'text-ink-3 hover:text-ink'}`}
            >
              Monthly Billing
            </button>
            <button
              role="switch"
              aria-checked={yearly}
              aria-label="Toggle yearly billing"
              onClick={() => setBillingCycle(yearly ? 'monthly' : 'yearly')}
              className={`relative w-14 h-8 rounded-full transition-colors duration-500 ${yearly ? 'bg-brand-500' : 'bg-ink/10'}`}
            >
              <span
                className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white shadow-[0_2px_6px_rgba(16,24,40,0.25)] transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] ${
                  yearly ? 'translate-x-6' : ''
                }`}
              />
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`flex items-center gap-2 transition-colors ${yearly ? 'text-ink' : 'text-ink-3 hover:text-ink'}`}
            >
              Yearly Billing
              <span className="text-[11px] font-semibold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full">Save 17%</span>
            </button>
          </div>
        </SectionHeader>

        {loading ? (
          <div className="flex items-center justify-center py-24">
            <Loader2 className="w-7 h-7 text-brand-500 animate-spin" />
          </div>
        ) : (
          <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch max-w-xl lg:max-w-6xl mx-auto">
            {paidPlans.map((plan, i) => {
              const isPopular = plan.slug === 'professional';
              const Icon = planIcon[plan.slug] || Sparkles;

              let priceDisplay;
              let subText;
              if (yearly) {
                const yearlyTotal = plan.yearly_price || plan.monthly_price * 10;
                priceDisplay = formatPrice(Math.round(yearlyTotal / 12));
                subText = `/mo (billed ₹${formatPrice(yearlyTotal)}/yr)`;
              } else {
                priceDisplay = formatPrice(plan.monthly_price);
                subText = '/month';
              }

              const devicesText = plan.max_devices >= 9999 ? 'Unlimited' : plan.max_devices;
              const membersText = plan.max_members >= 99999 ? 'Unlimited' : formatPrice(plan.max_members);

              return (
                <Reveal key={plan.slug || plan.name} delay={i * 110} className="h-full">
                  <div
                    className={`relative h-full flex flex-col rounded-[28px] p-2 transition-all duration-500 ${
                      isPopular
                        ? 'bg-[linear-gradient(180deg,#D6E9FF_0%,#EAF4FF_100%)] ring-1 ring-brand-200 shadow-[0_30px_60px_-30px_rgba(0,112,235,0.45)] lg:-translate-y-3'
                        : 'card card-hover'
                    }`}
                  >
                    <div className={`flex-1 flex flex-col rounded-[22px] p-6 sm:p-7 ${isPopular ? 'bg-white/70 backdrop-blur' : ''}`}>
                      <div className="flex items-center justify-between">
                        <span className={`w-10 h-10 rounded-2xl flex items-center justify-center ${isPopular ? 'bg-brand-500 text-white' : 'bg-brand-50 text-brand-600'}`}>
                          <Icon className="w-5 h-5" />
                        </span>
                      </div>

                      <h3 className="mt-5 text-xl font-semibold text-ink">{plan.name}</h3>
                      <p className="mt-1.5 text-sm text-ink-3 leading-relaxed min-h-[40px]">{plan.description}</p>

                      <div className="mt-6 flex items-baseline gap-1.5 flex-wrap">
                        <span key={`${billingCycle}-${plan.slug}`} className="fade-up font-display text-[2.6rem] leading-none font-semibold tracking-tight text-ink">
                          ₹{priceDisplay}
                        </span>
                        <span className="text-xs text-ink-3 font-medium">{subText}</span>
                      </div>

                      <div className="mt-6 grid grid-cols-2 gap-2 text-xs font-semibold text-ink-2">
                        <span className="flex items-center gap-1.5 rounded-xl bg-canvas px-3 py-2.5">
                          <Cpu className="w-3.5 h-3.5 text-brand-600" />
                          {devicesText} Devices
                        </span>
                        <span className="flex items-center gap-1.5 rounded-xl bg-canvas px-3 py-2.5">
                          <Users className="w-3.5 h-3.5 text-brand-600" />
                          {membersText} Members
                        </span>
                      </div>

                      <div className="mt-6 pt-6 border-t border-line space-y-3 flex-1">
                        <div className="text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-3">Features:</div>
                        {(plan.features || []).map((feat) => (
                          <div key={feat} className="flex items-start gap-2.5 text-sm text-ink-2">
                            <span className="mt-0.5 w-4 h-4 rounded-full bg-brand-500 flex items-center justify-center shrink-0">
                              <Check className="w-2.5 h-2.5 text-white stroke-[3.5]" />
                            </span>
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>

                      <a
                        href="#trial-signup"
                        className={`btn mt-8 w-full ${isPopular ? 'btn-primary' : plan.slug === 'enterprise' ? 'btn-dark' : 'btn-ghost'}`}
                      >
                        {plan.slug === 'enterprise' ? 'Contact Sales' : 'Get Started'}
                      </a>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
