import React from 'react';
import Reveal from './Reveal';

export default function SectionHeader({ eyebrow, title, subtitle, align = 'center', className = '', children }) {
  const centered = align === 'center';
  return (
    <Reveal className={`${centered ? 'text-center mx-auto' : 'text-left'} max-w-3xl space-y-4 ${className}`}>
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h2 className="text-[2rem] leading-[1.08] sm:text-5xl font-semibold text-ink text-balance">{title}</h2>
      {subtitle && (
        <p className={`text-base sm:text-lg text-ink-3 leading-relaxed text-pretty ${centered ? 'max-w-2xl mx-auto' : 'max-w-xl'}`}>
          {subtitle}
        </p>
      )}
      {children}
    </Reveal>
  );
}
