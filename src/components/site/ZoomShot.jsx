import React from 'react';

/**
 * Crops a full app screenshot so it stays readable on small screens.
 * `sidebar` is the sidebar's share of the screenshot width (0–1); it gets cut off when zoomed.
 * `mobile` / `desktop` are zoom factors (1 = full screenshot, no crop) below / above the sm breakpoint.
 */
export default function ZoomShot({ sidebar = 0.14, mobile = 1.8, desktop = 1, children }) {
  const vars = {
    '--zs-m': mobile,
    '--zx-m': mobile > 1 ? sidebar : 0,
    '--zs-d': desktop,
    '--zx-d': desktop > 1 ? sidebar : 0,
  };
  return (
    <div className="overflow-hidden">
      <div className="zoom-shot" style={vars}>
        {children}
      </div>
    </div>
  );
}
