import React from 'react';

export default function Logo({ className = 'h-7' }) {
  return (
    <img
      src={`${import.meta.env.BASE_URL}bluetyk_logo_mark.png`}
      alt="Bluetyk"
      className={`${className} w-auto object-contain select-none`}
      draggable="false"
    />
  );
}
