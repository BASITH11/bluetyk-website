import React, { useState } from 'react';
import { ArrowRight, Loader2, AlertCircle, CheckCircle, Check } from 'lucide-react';
import Reveal from './site/Reveal';
import { checkEmailAvailability, submitTrialSignup } from '../services/api';

const inputCls =
  'w-full h-11 rounded-xl bg-canvas border border-transparent px-3.5 text-sm text-ink placeholder:text-ink-3/70 outline-none transition-all duration-300 focus:bg-white focus:border-brand-300 focus:ring-4 focus:ring-brand-100';

function Field({ id, label, error, aside, children }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <label htmlFor={id} className="text-xs font-semibold text-ink-2">{label}</label>
        {aside}
      </div>
      {children}
      {error && <p className="text-[11px] text-rose-600 mt-1.5">{error}</p>}
    </div>
  );
}

export default function TrialSignupSection() {
  const [formData, setFormData] = useState({
    company_name: '',
    name: '',
    email: '',
    phone: '',
    password: '',
    password_confirmation: '',
    website: '' // honeypot
  });

  const [emailStatus, setEmailStatus] = useState({ checking: false, available: null, message: '' });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [serverMessage, setServerMessage] = useState(null);
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState('https://app.bluetyk.in');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleEmailBlur = async () => {
    if (!formData.email || !formData.email.includes('@')) return;
    setEmailStatus({ checking: true, available: null, message: '' });
    const result = await checkEmailAvailability(formData.email);
    setEmailStatus({
      checking: false,
      available: result.available !== false,
      message: result.reason || (result.available === false ? 'Email is already registered' : 'Email is available')
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setServerMessage(null);

    if (formData.website) {
      return;
    }

    const newErrors = {};
    if (!formData.company_name.trim()) newErrors.company_name = 'Company name is required';
    if (!formData.name.trim()) newErrors.name = 'Your name is required';
    if (!formData.email.trim()) newErrors.email = 'Work email is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (formData.password !== formData.password_confirmation) {
      newErrors.password_confirmation = 'Passwords do not match';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    const response = await submitTrialSignup(formData);
    setLoading(false);

    if (response.ok) {
      setSignupSuccess(true);
      if (response.data && response.data.redirect_url) {
        setRedirectUrl(response.data.redirect_url);
      }
      if (response.data && response.data.token) {
        setRedirectUrl(`https://app.bluetyk.in/login?token=${response.data.token}`);
      }
    } else {
      if (response.data && response.data.errors) {
        setErrors(response.data.errors);
      } else {
        setServerMessage(response.data?.message || 'Trial creation completed. You can log in now.');
        if (response.status === 200 || response.status === 201) {
          setSignupSuccess(true);
        }
      }
    }
  };

  return (
    <section id="trial-signup" className="relative overflow-hidden py-20 sm:py-28 glow-bg-soft">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Copy */}
          <Reveal className="lg:col-span-6 space-y-6">
            <h2 className="text-[2.1rem] leading-[1.06] sm:text-[3.4rem] font-semibold text-ink text-balance">
              Ready to simplify attendance and payroll?
            </h2>
            <p className="text-base sm:text-lg text-ink-2/80 leading-relaxed max-w-lg">
              Start your 7-day free trial and see how much time your team can save.
            </p>
            <div className="flex flex-wrap items-center gap-2.5">
              {['No credit card', '7-day trial', 'Setup support'].map((t) => (
                <span key={t} className="glass rounded-full px-3.5 py-2 text-[13px] font-medium text-ink flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-brand-600 stroke-[3]" />
                  {t}
                </span>
              ))}
            </div>
            <div className="pt-2">
              <a
                href="mailto:sales@bluewhyteapps.com"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:text-brand-700 transition-colors group"
              >
                Need custom enterprise plan? Talk to Sales
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={150} className="lg:col-span-6">
            <div className="rounded-[32px] p-2 glass shadow-[0_40px_80px_-30px_rgba(0,70,160,0.45)]">
              <div className="bg-white rounded-[26px] p-6 sm:p-8">
                {signupSuccess ? (
                  <div className="text-center py-8 space-y-5 fade-up">
                    <div className="w-16 h-16 bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto rounded-full">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-semibold text-ink">Your Trial Workspace is Ready!</h3>
                    <p className="text-sm text-ink-3 max-w-sm mx-auto">
                      Click below to enter your newly created Bluetyk dashboard.
                    </p>
                    <a href={redirectUrl} className="btn btn-primary w-full">
                      Go to Workspace Dashboard
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-left">
                    <div className="pb-2">
                      <h3 className="text-xl font-semibold text-ink">Start Your Free 7-Day Trial</h3>
                      <p className="text-sm text-ink-3 mt-1">Fill out your business details below</p>
                    </div>

                    {serverMessage && (
                      <div className="p-3 rounded-xl bg-amber-50 text-amber-800 text-xs flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0 text-amber-600" />
                        <span>{serverMessage}</span>
                      </div>
                    )}

                    <input
                      type="text"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      className="hidden"
                      tabIndex="-1"
                      autoComplete="off"
                    />

                    <div className="grid sm:grid-cols-2 gap-3.5">
                      <Field id="company_name" label="Company Name *" error={errors.company_name}>
                        <input id="company_name" name="company_name" placeholder="e.g. ABC Technologies"
                          value={formData.company_name} onChange={handleChange} className={inputCls} />
                      </Field>
                      <Field id="name" label="Your Full Name *" error={errors.name}>
                        <input id="name" name="name" placeholder="e.g. Rajesh Kumar"
                          value={formData.name} onChange={handleChange} className={inputCls} />
                      </Field>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3.5">
                      <Field
                        id="email"
                        label="Work Email *"
                        error={errors.email}
                        aside={emailStatus.checking && <span className="text-[10px] font-semibold text-brand-600">Checking...</span>}
                      >
                        <input id="email" name="email" type="email" placeholder="name@company.com"
                          value={formData.email} onChange={handleChange} onBlur={handleEmailBlur} className={inputCls} />
                      </Field>
                      <Field id="phone" label="Phone Number *" error={errors.phone}>
                        <input id="phone" name="phone" placeholder="+91 98765 43210"
                          value={formData.phone} onChange={handleChange} className={inputCls} />
                      </Field>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3.5">
                      <Field id="password" label="Password *" error={errors.password}>
                        <input id="password" name="password" type="password" placeholder="••••••••"
                          value={formData.password} onChange={handleChange} className={inputCls} />
                      </Field>
                      <Field id="password_confirmation" label="Confirm Password *" error={errors.password_confirmation}>
                        <input id="password_confirmation" name="password_confirmation" type="password" placeholder="••••••••"
                          value={formData.password_confirmation} onChange={handleChange} className={inputCls} />
                      </Field>
                    </div>

                    <button
                      type="submit"
                      disabled={loading || emailStatus.available === false}
                      className="btn btn-primary btn-lg w-full mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Creating Account...</span>
                        </>
                      ) : (
                        <>
                          <span>Start Free Trial</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <div className="text-center pt-1">
                      <a
                        href="https://app.bluetyk.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-ink-3 hover:text-brand-600 transition-colors"
                      >
                        Already registered? Login here →
                      </a>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
