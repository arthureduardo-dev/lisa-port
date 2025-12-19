
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { profile } from '../../data/profile';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<'gathering' | 'merging'>('gathering');
  
  const galleryImages = profile.gallery?.map(img => img.url) || [];
  const mainImage = "https://res.cloudinary.com/dprcbctmb/image/upload/v1766182021/Sem_t%C3%ADtulo_oumpjg.jpg";

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage('merging'), 800),
      setTimeout(() => onComplete(), 1800),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden pointer-events-none">
      {/* Overlay que desaparece revelando o site */}
      <motion.div 
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="absolute inset-0 bg-surface-50"
      />

      {/* Grid Espelhado do Hero */}
      <div className="relative w-full h-full pt-24 pb-12 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-6 h-full flex flex-col lg:flex-row items-center gap-20">
          
          {/* Posicionamento Exato da Imagem */}
          <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-start h-72 md:h-[450px] lg:h-[540px]">
            <div className="relative w-72 h-72 md:w-[450px] md:h-[450px] lg:w-[540px] lg:h-[540px]">
              
              {/* Fotos da galeria voando para compor o centro */}
              <AnimatePresence>
                {stage === 'gathering' && (
                  <>
                    {galleryImages.map((url, i) => (
                      <motion.div
                        key={i}
                        initial={{ 
                          x: i % 2 === 0 ? -1200 : 1200, 
                          y: (i * 200) - 500,
                          rotate: i * 45,
                          opacity: 0,
                          scale: 0.8
                        }}
                        animate={{ 
                          x: 0, 
                          y: 0,
                          rotate: 0,
                          scale: 0.1,
                          opacity: 0.3
                        }}
                        exit={{ opacity: 0 }}
                        transition={{ 
                          duration: 0.6, 
                          delay: i * 0.02,
                          ease: [0.22, 1, 0.36, 1] 
                        }}
                        className="absolute inset-0 border-4 border-white shadow-2xl rounded-3xl overflow-hidden"
                      >
                        <img src={url} className="w-full h-full object-cover" alt="" />
                      </motion.div>
                    ))}
                  </>
                )}
              </AnimatePresence>

              {/* Imagem Principal Estabilizada */}
              <AnimatePresence>
                {stage === 'merging' && (
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 z-10 border-8 border-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] rounded-[3rem] overflow-hidden"
                  >
                    <img src={mainImage} className="w-full h-full object-cover" alt="NotLisanna" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="w-full lg:w-1/2" />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
