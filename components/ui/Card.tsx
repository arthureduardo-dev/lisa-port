
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glass?: boolean;
  delay?: number;
}

const Card: React.FC<CardProps> = ({ children, className, glass = false, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 40, rotate: -2 }}
      whileInView={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay 
      }}
      className={cn(
        "rounded-[2.5rem] p-6 shadow-soft transition-shadow duration-500",
        glass ? "glass" : "bg-white",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default Card;
