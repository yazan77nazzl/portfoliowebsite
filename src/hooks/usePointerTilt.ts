import { useEffect, useRef, type PointerEvent } from 'react';

export function usePointerTilt(strength = 5) {
  const frame = useRef<number | null>(null);
  useEffect(() => () => {
    if (frame.current !== null) cancelAnimationFrame(frame.current);
  }, []);

  const onPointerMove = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType !== 'mouse' ||
      !window.matchMedia('(hover: hover) and (pointer: fine)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const element = event.currentTarget;
    // Offset dimensions stay stable while the surface rotates.
    const bounds = element.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (event.clientX - bounds.left) / bounds.width));
    const y = Math.max(0, Math.min(1, (event.clientY - bounds.top) / bounds.height));
    if (frame.current !== null) cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      element.style.setProperty('--tilt-axis', `${-(y - 0.5)} ${x - 0.5} 0`);
      element.style.setProperty('--tilt-angle', `${Math.hypot(x - 0.5, y - 0.5) * strength * 2}deg`);
      element.dataset.pointerActive = 'true';
      frame.current = null;
    });
  };

  const onPointerLeave = (event: PointerEvent<HTMLElement>) => {
    if (frame.current !== null) cancelAnimationFrame(frame.current);
    frame.current = null;
    event.currentTarget.style.setProperty('--tilt-angle', '0deg');
    delete event.currentTarget.dataset.pointerActive;
  };

  return { onPointerMove, onPointerLeave };
}
