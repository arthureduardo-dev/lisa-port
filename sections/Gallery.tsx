
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { profile } from '../data/profile';
import { X, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery: React.FC = () => {
  const items = profile.gallery || [];
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedIndex]);

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % items.length);
    }
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + items.length) % items.length);
    }
  };

  return (
    <section id="gallery" className="py-32 bg-white relative overflow-hidden scroll-mt-20">
      {/* Background Watermark - Estilo Editorial Apple */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0">
        <h2 className="text-[20vw] font-black uppercase tracking-[0.4em] text-primary-50/20 leading-none whitespace-nowrap blur-[2px]">
          NOTLISANNA
        </h2>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-24 text-center">
          {/* Removed Apple Concept label per request */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-7xl md:text-9xl font-cursive text-slate-dark leading-tight"
          >
            Galeria
          </motion.h2>
        </div>

        {/* Bento Grid Estática e Refinada */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[350px] md:auto-rows-[450px]">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setSelectedIndex(idx)}
              className={`relative overflow-hidden rounded-[3rem] bg-slate-50 group cursor-pointer shadow-soft hover:shadow-2xl transition-all duration-700 ${
                idx === 0 ? 'md:col-span-8 md:row-span-2' : 
                idx === 1 ? 'md:col-span-4 md:row-span-1' :
                idx === 2 ? 'md:col-span-4 md:row-span-1' :
                idx === 3 ? 'md:col-span-4 md:row-span-1' :
                idx === 4 ? 'md:col-span-4 md:row-span-1' :
                'md:col-span-4 md:row-span-1'
              }`}
            >
              {/* Overlay suave de hover */}
              <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-t from-black/20 to-transparent flex items-center justify-center">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-3xl rounded-full flex items-center justify-center text-white border border-white/40 shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-500">
                  <Maximize2 size={32} />
                </div>
              </div>
              <motion.img 
                src={item.url} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Minimalista com Z-Index Ultra Alto e Botão X Seguro */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] flex items-center justify-center bg-white/80 backdrop-blur-[100px] p-6 md:p-12"
            onClick={() => setSelectedIndex(null)}
          >
            {/* Botão Fechar - Estilo Flutuante Seguro (Apple Pro) */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-24 right-8 md:top-12 md:right-12 z-[10001] w-16 h-16 bg-slate-dark text-white rounded-full flex items-center justify-center shadow-[0_20px_40px_rgba(0,0,0,0.2)] transition-all"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex(null);
              }}
            >
              <X size={32} />
            </motion.button>

            {/* Navegação de Fotos Lateral */}
            <div className="absolute inset-x-4 md:inset-x-12 top-1/2 -translate-y-1/2 flex justify-between z-[10001] pointer-events-none">
              <button 
                className="w-16 h-16 md:w-20 md:h-20 bg-white/40 hover:bg-white backdrop-blur-2xl rounded-full flex items-center justify-center text-slate-dark pointer-events-auto transition-all shadow-xl border border-white/50 active:scale-90"
                onClick={prevImage}
              >
                <ChevronLeft size={40} />
              </button>
              <button 
                className="w-16 h-16 md:w-20 md:h-20 bg-white/40 hover:bg-white backdrop-blur-2xl rounded-full flex items-center justify-center text-slate-dark pointer-events-auto transition-all shadow-xl border border-white/50 active:scale-90"
                onClick={nextImage}
              >
                <ChevronRight size={40} />
              </button>
            </div>

            {/* Foco da Imagem */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 100 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 100 }}
              transition={{ type: "spring", damping: 35, stiffness: 250 }}
              className="relative max-w-6xl w-full h-[80vh] flex flex-col items-center justify-center gap-10"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={items[selectedIndex].url} 
                className="max-w-full max-h-full object-contain rounded-[4rem] shadow-[0_80px_160px_-40px_rgba(0,0,0,0.25)] border-[16px] border-white"
                alt="Highlight" 
              />
              
              {/* Paginação Estilizada Apple */}
              <div className="flex gap-3">
                {items.map((_, i) => (
                  <div 
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      i === selectedIndex ? 'w-12 bg-primary-500 shadow-[0_0_15px_rgba(0,188,212,0.4)]' : 'w-1.5 bg-slate-200'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
