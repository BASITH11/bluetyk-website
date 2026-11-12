import React, { useState, useEffect } from 'react';
import { Check, Loader2, Cpu, Users, Sparkles, Building2, Rocket, TrendingUp } from 'lucide-react';
import { fetchPlans, FALLBACK_PLANS } from '../services/api';
import SectionHeader from './site/SectionHeader';
import Reveal from './site/Reveal';

const colsClass = { 2: 'xl:grid-cols-2', 3: 'xl:grid-cols-3', 4: 'xl:grid-cols-4' };
const planIcon = { starter: Rocket, growth: TrendingUp, professional: Sparkles, enterprise: Building2 };

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
  // Four plans need a wider 4-up grid; three keep the original 3-up layout.
  const fourUp = paidPlans.length >= 4;

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
          <div
            className={`mt-12 sm:mt-16 mx-auto grid grid-cols-1 gap-5 md:grid-cols-2 xl:gap-0 xl:rounded-[32px] xl:border xl:border-line xl:bg-white/80 xl:backdrop-blur xl:shadow-[0_40px_80px_-48px_rgba(16,24,40,0.28)] ${
              colsClass[paidPlans.length] || 'xl:grid-cols-4'
            } ${fourUp ? 'max-w-xl md:max-w-4xl xl:max-w-none' : 'max-w-xl md:max-w-4xl xl:max-w-6xl'}`}
          >
            {paidPlans.map((plan, i) => {
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
                <Reveal key={plan.slug || plan.name} delay={i * 90} className="h-full">
                  <div
                    className={`relative h-full flex flex-col p-7 sm:p-8 rounded-[28px] border border-line bg-white xl:rounded-none xl:bg-transparent xl:border-y-0 xl:border-r-0 ${
                      i === 0 ? 'xl:border-l-0' : ''
                    }`}
                  >
                    {/* Name */}
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-10 h-10 rounded-xl flex items-center justify-center bg-brand-50 text-brand-600`}
                      >
                        <Icon className="w-5 h-5" />
                      </span>
                      <h3 className={`text-lg font-semibold text-ink`}>{plan.name}</h3>
                    </div>
                    <p className={`mt-4 text-sm leading-relaxed text-ink-3 min-h-[46px] xl:min-h-[68px]`}>{plan.description}</p>

                    {/* Price */}
                    <div className="mt-6">
                      <div key={`${billingCycle}-${plan.slug}`} className="fade-up flex items-start gap-1">
                        <span className={`mt-1.5 text-xl font-semibold text-ink-3`}>₹</span>
                        <span className={`font-display text-[2.75rem] leading-none font-semibold tracking-tight text-ink`}>
                          {priceDisplay}
                        </span>
                      </div>
                      <div className={`mt-2 text-xs font-medium text-ink-3`}>{subText}</div>
                    </div>

                    {/* CTA sits under the price so every button lines up */}
                    <a
                      href="#trial-signup"
                      className={`btn mt-6 w-full ${
                        plan.slug === 'enterprise'
                          ? 'btn-dark border border-transparent'
                          : 'btn-ghost'
                      }`}
                    >
                      {plan.slug === 'enterprise' ? 'Contact Sales' : 'Get Started'}
                    </a>

                    {/* Limits */}
                    <dl
                      className={`mt-7 rounded-2xl text-sm divide-y bg-canvas divide-line`}
                    >
                      {[
                        { icon: Cpu, label: 'Devices', value: devicesText },
                        { icon: Users, label: 'Members', value: membersText },
                      ].map(({ icon: LIcon, label, value }) => (
                        <div key={label} className="flex items-center justify-between px-4 py-3">
                          <dt className={`flex items-center gap-2 text-ink-3`}>
                            <LIcon className={`w-4 h-4 text-brand-600`} />
                            {label}
                          </dt>
                          <dd className={`font-semibold text-ink`}>{value}</dd>
                        </div>
                      ))}
                    </dl>

                    {/* Features */}
                    <div className="mt-7">
                      <div className={`text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-3`}>Features:</div>
                      <ul className="mt-4 space-y-3">
                        {(plan.features || []).map((feat) => (
                          <li key={feat} className={`flex items-start gap-2.5 text-sm text-ink-2`}>
                            <span
                              className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 bg-brand-100 text-brand-700`}
                            >
                              <Check className="w-2.5 h-2.5 stroke-[3.5]" />
                            </span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
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
