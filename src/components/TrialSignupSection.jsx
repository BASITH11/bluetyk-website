import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { ArrowRight, Loader2, AlertCircle, CheckCircle } from 'lucide-react';
import { checkEmailAvailability, submitTrialSignup } from '../services/api';

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
    <section id="trial-signup" className="py-24 bg-[#0B192C] text-white relative overflow-hidden">
      
      {/* Architectural Border Grid Frame */}
      <div className="absolute top-0 inset-x-0 h-px bg-slate-800 pointer-events-none z-10" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-slate-800 pointer-events-none z-10" />
      <div className="absolute top-0 bottom-0 left-3 sm:left-6 lg:left-8 w-px bg-slate-800 pointer-events-none z-10" />
      <div className="absolute top-0 bottom-0 right-3 sm:right-6 lg:right-8 w-px bg-slate-800 pointer-events-none z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Headline & Copy */}
          <div className="lg:col-span-6 space-y-6 text-left">

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
              Ready to simplify attendance and payroll?
            </h2>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              Start your 7-day free trial and see how much time your team can save.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-400">
              <span>✓ No credit card</span>
              <span>·</span>
              <span>✓ 7-day trial</span>
              <span>·</span>
              <span>✓ Setup support</span>
            </div>

            <div className="pt-6 border-t border-slate-800 flex items-center gap-4">
              <a
                href="mailto:sales@bluewhyteapps.com"
                className="text-xs font-bold text-slate-400 hover:text-white transition-colors underline"
              >
                Need custom enterprise plan? Talk to Sales →
              </a>
            </div>

          </div>

          {/* Right Side: Inline Registration Form */}
          <div className="lg:col-span-6">
            <div className="bg-slate-900 p-7 sm:p-9 rounded-2xl border border-slate-800">
              
              {signupSuccess ? (
                <div className="text-center py-8 space-y-5">
                  <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto rounded-xl border border-emerald-500/30">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Your Trial Workspace is Ready!</h3>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto">
                    Click below to enter your newly created Bluetyk dashboard.
                  </p>
                  <a
                    href={redirectUrl}
                    className="inline-flex items-center justify-center gap-2 w-full py-3.5 bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold text-sm rounded-xl transition-colors"
                  >
                    Go to Workspace Dashboard
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <div className="border-b border-slate-800 pb-3 mb-2">
                    <h3 className="text-lg font-bold text-white">Start Your Free 7-Day Trial</h3>
                    <p className="text-xs text-slate-400 mt-0.5">Fill out your business details below</p>
                  </div>

                  {serverMessage && (
                    <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 text-amber-400" />
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

                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <Label htmlFor="company_name" className="text-xs font-semibold text-slate-300 mb-1 block">
                        Company Name *
                      </Label>
                      <Input
                        id="company_name"
                        name="company_name"
                        placeholder="e.g. ABC Technologies"
                        value={formData.company_name}
                        onChange={handleChange}
                        className="bg-slate-950 border-slate-800 text-white placeholder:text-slate-600 text-xs rounded-xl"
                      />
                      {errors.company_name && (
                        <p className="text-[11px] text-rose-400 mt-1">{errors.company_name}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="name" className="text-xs font-semibold text-slate-300 mb-1 block">
                        Your Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="e.g. Rajesh Kumar"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-slate-950 border-slate-800 text-white placeholder:text-slate-600 text-xs rounded-xl"
                      />
                      {errors.name && (
                        <p className="text-[11px] text-rose-400 mt-1">{errors.name}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <Label htmlFor="email" className="text-xs font-semibold text-slate-300">
                          Work Email *
                        </Label>
                        {emailStatus.checking && <span className="text-[10px] text-[#0284C7]">Checking...</span>}
                      </div>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleEmailBlur}
                        className="bg-slate-950 border-slate-800 text-white placeholder:text-slate-600 text-xs rounded-xl"
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-400 mt-1">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-xs font-semibold text-slate-300 mb-1 block">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-slate-950 border-slate-800 text-white placeholder:text-slate-600 text-xs rounded-xl"
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-rose-400 mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <Label htmlFor="password" className="text-xs font-semibold text-slate-300 mb-1 block">
                        Password *
                      </Label>
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="••••••••"
                        value={formData.password}
                        onChange={handleChange}
                        className="bg-slate-950 border-slate-800 text-white placeholder:text-slate-600 text-xs rounded-xl"
                      />
                      {errors.password && (
                        <p className="text-[11px] text-rose-400 mt-1">{errors.password}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="password_confirmation" className="text-xs font-semibold text-slate-300 mb-1 block">
                        Confirm Password *
                      </Label>
                      <Input
                        id="password_confirmation"
                        name="password_confirmation"
                        type="password"
                        placeholder="••••••••"
                        value={formData.password_confirmation}
                        onChange={handleChange}
                        className="bg-slate-950 border-slate-800 text-white placeholder:text-slate-600 text-xs rounded-xl"
                      />
                      {errors.password_confirmation && (
                        <p className="text-[11px] text-rose-400 mt-1">{errors.password_confirmation}</p>
                      )}
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={loading || emailStatus.available === false}
                    className="w-full py-5 bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold text-sm rounded-xl transition-colors mt-3 flex items-center justify-center gap-2"
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
                  </Button>

                  <div className="text-center pt-2">
                    <a
                      href="https://app.bluetyk.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-semibold text-slate-400 hover:text-white transition-colors underline"
                    >
                      Already registered? Login here →
                    </a>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
