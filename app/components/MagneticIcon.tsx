'use client';

import { motion, useMotionValue, useSpring } from 'motion/react';
import { ReactNode, useRef } from 'react';

export default function MagneticIcon({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 300, damping: 25, mass: 0.4 });
  const y = useSpring(rawY, { stiffness: 300, damping: 25, mass: 0.4 });

  const mouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const domRect = ref?.current?.getBoundingClientRect() as DOMRect;
    const { width, height, left, top } = domRect;
    const nextX = clientX - (left + width / 2);
    const nextY = clientY - (top + height / 2);
    rawX.set(nextX);
    rawY.set(nextY);
  };

  const mouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };
  return (
    <motion.div
      ref={ref}
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      style={{ x, y }}
    >
      {children}
    </motion.div>
  );
}
