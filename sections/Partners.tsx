
import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import Card from '../components/ui/Card';

const Partners: React.FC = () => {
  const partners = profile.partnerships;
  const extendedPartners = useMemo(() => [...partners, ...partners, ...partners], [partners]);
  
  const [activeIndex, setActiveIndex] = useState(partners.length);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isAutoPlayPaused, setIsAutoPlayPaused] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  
  const autoPlayTimeoutRef = useRef<number | null>(null);

  const cardWidth = 320; 
  const gap = 32; 
  const totalItemWidth = cardWidth + gap;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextStep = useCallback(() => {
    setIsTransitioning(true);
    setActiveIndex((prev) => prev + 1);
  }, []);

  const prevStep = useCallback(() => {
    setIsTransitioning(true);
    setActiveIndex((prev) => prev - 1);
  }, []);

  const handleManualInteraction = useCallback(() => {
    setIsAutoPlayPaused(true);
    if (autoPlayTimeoutRef.current) {
      window.clearTimeout(autoPlayTimeoutRef.current);
    }
    autoPlayTimeoutRef.current = window.setTimeout(() => {
      setIsAutoPlayPaused(false);
    }, 15000);
  }, []);

  useEffect(() => {
    if (activeIndex >= partners.length * 2) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setActiveIndex(partners.length);
      }, 600);
      return () => clearTimeout(timer);
    }
    if (activeIndex < partners.length) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setActiveIndex(partners.length * 2 - 1);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [activeIndex, partners.length]);

  useEffect(() => {
    if (isAutoPlayPaused) return;
    const timer = setInterval(nextStep, 5000);
    return () => clearInterval(timer);
  }, [nextStep, isAutoPlayPaused]);

  const xOffset = (windowWidth / 2) - (activeIndex * totalItemWidth) - (cardWidth / 2) + (gap / 2);

  return (
    <section id="partnerships" className="py-24 bg-surface-50 overflow-hidden select-none scroll-mt-20">
      <div className="container mx-auto px-6 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-cursive text-slate-dark mb-4">
            Parcerias Estratégicas
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-medium">
            Colaborações globais que impulsionam o cenário gamer.
          </p>
        </motion.div>
      </div>

      <div className="relative h-[400px] flex items-center">
        <motion.div
          className="flex items-center cursor-grab active:cursor-grabbing"
          animate={{ x: xOffset }}
          transition={isTransitioning ? { 
            type: "spring", 
            stiffness: 120, 
            damping: 20,
            mass: 0.8 
          } : { duration: 0 }}
          drag="x"
          dragConstraints={{ left: xOffset, right: xOffset }}
          onDragStart={handleManualInteraction}
          onDragEnd={(_, info) => {
            if (info.offset.x < -40) nextStep();
            else if (info.offset.x > 40) prevStep();
          }}
        >
          {extendedPartners.map((partner, idx) => {
            const isCenter = idx === activeIndex;
            return (
              <motion.div
                key={`${partner.name}-${idx}`}
                animate={{
                  scale: isCenter ? 1.08 : 0.85,
                  opacity: isCenter ? 1 : 0.25,
                  filter: isCenter ? 'blur(0px)' : 'blur(4px)',
                }}
                transition={{ duration: 0.5 }}
                className="flex-shrink-0"
                style={{ width: cardWidth, marginRight: gap }}
              >
                <Card 
                  className={`h-[300px] flex flex-col justify-between border-none transition-all duration-700 ${
                    isCenter 
                      ? 'shadow-[0_40px_80px_-15px_rgba(0,188,212,0.25)] ring-1 ring-primary-100/50' 
                      : 'shadow-none bg-white/50'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div className="h-16 w-16 bg-white rounded-2xl flex items-center justify-center p-2 shadow-sm border border-slate-50 overflow-hidden">
                      <img 
                        src={partner.logo} 
                        alt={partner.name} 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    {/* Tier removed per request */}
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-slate-dark tracking-tighter leading-none">
                      {partner.name}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                      {partner.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-50 flex justify-end items-center mt-auto">
                    <div className="flex gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-100" />
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-200" />
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-300/40" />
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="absolute inset-y-0 left-0 w-[15%] md:w-[25%] bg-gradient-to-r from-surface-50 via-surface-50/80 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-[15%] md:w-[25%] bg-gradient-to-l from-surface-50 via-surface-50/80 to-transparent pointer-events-none z-10" />
      </div>

      <div className="flex justify-center items-center gap-3 mt-12">
        {partners.map((_, i) => {
          const isActive = (activeIndex % partners.length) === i;
          return (
            <button
              key={i}
              onClick={() => {
                handleManualInteraction();
                setIsTransitioning(true);
                setActiveIndex(partners.length + i);
              }}
              className={`transition-all duration-500 rounded-full h-2 ${
                isActive ? 'w-10 bg-primary-400 shadow-[0_0_15px_rgba(0,188,212,0.3)]' : 'w-2 bg-slate-200 hover:bg-slate-300'
              }`}
              aria-label={`Ver parceria ${i + 1}`}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Partners;
