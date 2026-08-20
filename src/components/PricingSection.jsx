import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Check, Loader2, Cpu } from 'lucide-react';
import { fetchPlans, FALLBACK_PLANS } from '../services/api';

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

  const formatPrice = (amount) => {
    return new Intl.NumberFormat('en-IN').format(amount);
  };

  const paidPlans = plans.filter((p) => !p.is_trial && p.slug !== 'trial');

  return (
    <section id="pricing" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Simple pricing that scales with your team.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Transparent pricing with zero hidden fees. Upgrade or adjust anytime.
          </p>

          {/* Monthly / Yearly Toggle */}
          <div className="pt-4 flex items-center justify-center">
            <div className="bg-slate-100 p-1 flex items-center gap-1 rounded-full border border-slate-200">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                  billingCycle === 'monthly'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Monthly Billing
              </button>

              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                  billingCycle === 'yearly'
                    ? 'bg-[#0284C7] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>Yearly Billing</span>
                <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded font-extrabold">
                  Save 17%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Loading Spinner */}
        {loading ? (
          <div className="flex items-center justify-center py-16">
            <Loader2 className="w-8 h-8 text-[#0284C7] animate-spin" />
          </div>
        ) : (
          /* Minimal Cards Grid */
          <div className="grid md:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto">
            {paidPlans.map((plan) => {
              const isPopular = plan.slug === 'professional';

              let priceDisplay = '0';
              let subText = '/month';

              if (billingCycle === 'yearly') {
                const yearlyTotal = plan.yearly_price || plan.monthly_price * 10;
                const monthlyEquiv = Math.round(yearlyTotal / 12);
                priceDisplay = formatPrice(monthlyEquiv);
                subText = `/mo (billed ₹${formatPrice(yearlyTotal)}/yr)`;
              } else {
                priceDisplay = formatPrice(plan.monthly_price);
                subText = '/month';
              }

              const devicesText = plan.max_devices >= 9999 ? 'Unlimited' : plan.max_devices;
              const membersText = plan.max_members >= 99999 ? 'Unlimited' : formatPrice(plan.max_members);

              return (
                <div
                  key={plan.slug || plan.name}
                  className={`relative p-7 rounded-2xl flex flex-col justify-between transition-all text-left ${
                    isPopular
                      ? 'bg-white border-2 border-[#0284C7]'
                      : 'bg-white border border-slate-200 hover:border-slate-300'
                  }`}
                >

                  <div>
                    <div className="mb-4">
                      <h3 className="text-2xl font-black text-slate-900">{plan.name}</h3>
                      <p className="text-xs text-slate-500 mt-1 min-h-[32px]">{plan.description}</p>
                    </div>

                    {/* Price */}
                    <div className="mb-6 pb-6 border-b border-slate-100 flex items-baseline gap-1">
                      <span className="text-4xl font-black text-slate-900 tracking-tight">₹{priceDisplay}</span>
                      <span className="text-xs text-slate-500 font-medium">{subText}</span>
                    </div>

                    {/* Limits */}
                    <div className="mb-6 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs font-semibold text-slate-700 flex items-center justify-between">
                      <span className="flex items-center gap-1">
                        <Cpu className="w-3.5 h-3.5 text-[#0284C7]" />
                        {devicesText} Devices
                      </span>
                      <span>·</span>
                      <span>{membersText} Members</span>
                    </div>

                    {/* Features */}
                    <div className="space-y-2.5 mb-8">
                      <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Features:</div>
                      {(plan.features || []).map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs">
                          <Check className="w-4 h-4 text-emerald-500 shrink-0 stroke-[3] mt-0.5" />
                          <span className="text-slate-700 font-medium">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a href="#trial-signup" className="w-full block">
                    <Button
                      className={`w-full py-5 font-bold text-sm rounded-xl transition-all ${
                        isPopular
                          ? 'bg-[#0284C7] hover:bg-[#0369A1] text-white'
                          : 'bg-slate-900 hover:bg-slate-800 text-white'
                      }`}
                    >
                      {plan.slug === 'enterprise' ? 'Contact Sales' : 'Get Started'}
                    </Button>
                  </a>

                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
