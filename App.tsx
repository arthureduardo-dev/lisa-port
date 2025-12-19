
import React, { useState } from 'react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import Hero from './sections/Hero';
import About from './sections/About';
import Gallery from './sections/Gallery';
import Partners from './sections/Partners';
import Socials from './sections/Socials';
import Footer from './layout/Footer';
import Preloader from './components/ui/Preloader';
import { Star, Heart, Sparkles } from 'lucide-react';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const starRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const starX = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div className="min-h-screen selection:bg-primary-100 selection:text-primary-900 bg-surface-50 overflow-x-hidden">
      <AnimatePresence>
        {isLoading && (
          <Preloader key="preloader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <motion.div
        key="content"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Barra de Progresso */}
        <div className="fixed top-0 left-0 right-0 h-1.5 z-[70] pointer-events-none">
          <motion.div
            className="h-full bg-gradient-to-r from-primary-200 via-primary-500 to-primary-300 origin-left shadow-[0_0_20px_rgba(0,188,212,0.5)]"
            style={{ scaleX }}
          />
          <motion.div 
            style={{ left: starX, rotate: starRotate }}
            className="absolute top-[-8px] -ml-4 text-primary-500 drop-shadow-[0_0_8px_rgba(0,188,212,0.8)]"
          >
            <Star size={24} fill="currentColor" />
          </motion.div>
        </div>

        {/* Partículas de Fundo */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <ParallaxParticle yRange={[-100, 1000]} xPos="10%" delay={0} icon={<Heart size={20} />} />
          <ParallaxParticle yRange={[200, 1500]} xPos="85%" delay={2} icon={<Star size={16} />} />
          <ParallaxParticle yRange={[800, 2500]} xPos="5%" delay={1} icon={<Sparkles size={18} />} />
          <ParallaxParticle yRange={[1500, 3500]} xPos="90%" delay={3} icon={<Heart size={22} />} />
        </div>

        <header className="fixed top-0 left-0 right-0 z-50 glass h-16 flex items-center border-b border-primary-50/50">
          <div className="container mx-auto px-6 flex justify-between items-center">
            <div 
              className="text-2xl tracking-tight font-cursive cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <span className="text-primary-500">Not</span>
              <span className="text-slate-dark">Lisanna</span>
            </div>
            <nav className="hidden md:flex gap-8 text-sm font-semibold text-slate-500">
              <a href="#home" className="hover:text-primary-500 transition-colors">Início</a>
              <a href="#gallery" className="hover:text-primary-500 transition-colors">Galeria</a>
              <a href="#partnerships" className="hover:text-primary-500 transition-colors">Parcerias</a>
              <a href="#socials" className="hover:text-primary-500 transition-colors">Redes</a>
            </nav>
          </div>
        </header>

        <main className="relative z-10">
          <Hero />
          <About />
          <Gallery />
          <Socials />
          <Partners />
        </main>

        <Footer />
      </motion.div>
    </div>
  );
};

const ParallaxParticle = ({ yRange, xPos, delay, icon }: any) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], yRange);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 0.4, 0.4, 0]);

  return (
    <motion.div
      style={{ y, opacity, left: xPos }}
      className="absolute text-primary-200/40"
      initial={{ scale: 0 }}
      animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
      transition={{ duration: 5, repeat: Infinity, delay }}
    >
      {icon}
    </motion.div>
  );
};

export default App;
