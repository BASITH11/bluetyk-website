import React, { useEffect, useRef, useState } from 'react';

/**
 * Renders children at a fixed design width and scales them down to fit the
 * available width, so product mockups stay pixel-crisp and proportional on
 * every screen size.
 */
export default function ScaledFrame({ designWidth = 1100, maxScale = 1, className = '', children }) {
  const outerRef = useRef(null);
  const innerRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;
    const update = () => {
      const s = Math.min(maxScale, outer.clientWidth / designWidth);
      setScale(s);
      setHeight(inner.offsetHeight * s);
    };
    update();
    if (typeof ResizeObserver === 'undefined') return;
    const ro = new ResizeObserver(update);
    ro.observe(outer);
    ro.observe(inner);
    return () => ro.disconnect();
  }, [designWidth, maxScale]);

  return (
    <div ref={outerRef} className={`relative w-full ${className}`} style={{ height: height || undefined }}>
      <div
        ref={innerRef}
        className="absolute top-0 left-0 origin-top-left"
        style={{ width: designWidth, transform: `scale(${scale})` }}
      >
        {children}
      </div>
    </div>
  );
}
