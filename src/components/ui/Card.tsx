import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  delay?: number;
  hoverEffect?: 'lift' | 'slide' | 'scale';
  className?: string;
}

function Card({ children, delay = 0, hoverEffect = 'lift', className = '' }: CardProps) {
  const hoverAnimation = {
    lift: { y: -8, scale: 1.02 },
    slide: { x: 10 },
    scale: { scale: 1.05 }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={hoverAnimation[hoverEffect]}
      className={`bg-white/5 backdrop-blur-sm border border-[#793EAB]/20 rounded-2xl p-8 hover:bg-white/10 hover:border-[#793EAB]/40 hover:shadow-2xl hover:shadow-[#793EAB]/20 transition-all ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default Card;
