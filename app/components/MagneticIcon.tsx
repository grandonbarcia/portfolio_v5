'use client';

import { motion } from 'framer-motion';
import { ReactNode, useRef, useState } from 'react';

export default function MagneticIcon({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const mouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const domRect = ref?.current?.getBoundingClientRect() as DOMRect;
    const { width, height, left, top } = domRect;
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x, y });
  };

  const mouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };
  const { x, y } = position;
  return (
    <motion.div
      ref={ref}
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      animate={{ x, y }}
    >
      {children}
    </motion.div>
  );
}
