import React from 'react';

/** Real screenshot of a Bluetyk app screen. */
export default function AppShot({ src, alt, width, height, eager = false, className = '' }) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      draggable="false"
      className={`block w-full h-auto select-none ${className}`}
    />
  );
}
