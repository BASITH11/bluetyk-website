import React from 'react';
import { ShieldCheck, Lock, Database, KeyRound, Check, ArrowUpRight } from 'lucide-react';
import SectionHeader from './site/SectionHeader';
import Reveal from './site/Reveal';

const features = [
  {
    icon: ShieldCheck,
    title: 'Secure Cloud Infrastructure',
    desc: '256-bit SSL encryption for data in transit and completely isolated tenant schemas.',
    checks: ['256-bit SSL/TLS end-to-end encryption', 'Dedicated multi-tenant isolated database schemas'],
    cta: 'Explore Cloud Security',
  },
  {
    icon: KeyRound,
    title: 'Role-Based Access Control',
    desc: 'Granular permissions for Super Admin, HR Managers, Department Heads, and Site Supervisors.',
    checks: ['Super Admin, HR Manager, & Supervisor roles', 'Branch-level granular permission scoping'],
    cta: 'Explore Permissions',
  },
  {
    icon: Database,
    title: 'Automated Daily Backups & 99.9% Uptime',
    desc: 'Redundant automated backups with 30-day point-in-time recovery guarantees and high availability concurrency.',
    checks: ['30-day point-in-time recovery guarantees', 'Multi-shift punch concurrency engine'],
    cta: 'Check System Status',
  },
  {
    icon: Lock,
    title: 'Data Protection Compliance',
    desc: 'Strict compliance standards for workforce biometric data and statutory records.',
    checks: ['Indian statutory labor law compliance', 'Encrypted biometric template vault'],
    cta: 'View Compliance Standards',
  },
];

export default function SecurityTrustSection() {
  return (
    <section id="security" className="relative bg-canvas py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Security"
          title="Built for enterprise security and privacy."
          subtitle="Your biometric logs and employee records are stored in fully isolated, protected databases."
          className="mb-12 sm:mb-16"
        />

        <div className="grid md:grid-cols-2 gap-5 sm:gap-6 max-w-6xl mx-auto">
          {features.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <Reveal key={feat.title} delay={(i % 2) * 120}>
                <article className="card card-hover group h-full p-6 sm:p-8 flex flex-col">
                  <div className="flex items-center justify-between">
                    <span className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center transition-all duration-500 group-hover:bg-brand-500 group-hover:text-white">
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className="w-9 h-9 rounded-full ring-1 ring-line flex items-center justify-center text-ink-3 transition-all duration-500 group-hover:bg-ink group-hover:text-white group-hover:ring-ink">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl sm:text-2xl font-semibold text-ink leading-tight">{feat.title}</h3>
                  <p className="mt-3 text-[15px] text-ink-3 leading-relaxed">{feat.desc}</p>

                  <ul className="mt-5 space-y-2.5 flex-1">
                    {feat.checks.map((c) => (
                      <li key={c} className="flex items-center gap-2.5 text-sm font-medium text-ink-2">
                        <span className="w-5 h-5 rounded-full bg-brand-50 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-brand-600 stroke-[3]" />
                        </span>
                        {c}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7">
                    <a href="#trial-signup" className="btn btn-ghost btn-sm">
                      {feat.cta}
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
