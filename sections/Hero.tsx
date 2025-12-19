
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { profile } from '../data/profile';
import Button from '../components/ui/Button';
import { Instagram, Star, Heart } from 'lucide-react';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const rotate = useTransform(scrollY, [0, 500], [0, 45]);

  const instagramUrl = profile.socials.find(s => s.platform === 'Instagram')?.link || '#';
  const mainImageUrl = "https://res.cloudinary.com/dprcbctmb/image/upload/v1766182021/Sem_t%C3%ADtulo_oumpjg.jpg";

  return (
    <section id="home" className="relative pt-24 pb-12 lg:pt-40 lg:pb-32 overflow-hidden scroll-mt-20">
      {/* Background Decor com Paralaxe */}
      <div className="absolute top-0 right-0 -z-10 w-full h-full opacity-30 pointer-events-none">
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary-200 rounded-full blur-[120px]" 
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute bottom-[10%] left-[-5%] w-[450px] h-[450px] bg-primary-100 rounded-full blur-[100px]" 
        />
      </div>

      {/* Ícones Flutuantes Cute */}
      <motion.div 
        style={{ y: y2, rotate }}
        className="absolute top-40 left-[10%] text-primary-200 opacity-40 hidden lg:block"
      >
        <Star size={48} fill="currentColor" />
      </motion.div>
      <motion.div 
        style={{ y: y1, rotate: -rotate }}
        className="absolute bottom-40 right-[15%] text-primary-200 opacity-40 hidden lg:block"
      >
        <Heart size={48} fill="currentColor" />
      </motion.div>

      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-20">
        {/* Imagem com Efeito de Camadas */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, x: -50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full lg:w-1/2 flex justify-center lg:justify-start"
        >
          <div className="relative w-72 h-72 md:w-[450px] md:h-[450px] lg:w-[540px] lg:h-[540px]">
            <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-tr from-primary-200 to-primary-50 transform rotate-6 scale-105 opacity-40 shadow-inner" />
            <div className="absolute inset-0 rounded-[3rem] border-2 border-primary-300 transform -rotate-3 scale-102 opacity-30" />
            
            <motion.img 
              whileHover={{ scale: 1.02, rotate: -1 }}
              src={mainImageUrl} 
              alt={profile.name} 
              className="absolute inset-0 w-full h-full object-cover rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] z-10 border-8 border-white"
            />
            
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute -bottom-6 -right-2 md:-bottom-8 md:-right-6 bg-white/95 backdrop-blur-md px-8 py-5 rounded-[2rem] shadow-2xl z-20 flex items-center gap-4 border border-white"
            >
              <div className="relative flex items-center justify-center">
                <div className="w-3 h-3 bg-primary-400 rounded-full animate-ping absolute" />
                <div className="w-3 h-3 bg-primary-500 rounded-full border-2 border-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-black text-slate-300 uppercase tracking-[0.2em] leading-none mb-1.5">Status</span>
                <span className="font-bold text-slate-dark text-sm tracking-tight">Disponível para Projetos</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Conteúdo de Texto */}
        <div className="w-full lg:w-1/2 space-y-12">
          <div className="space-y-6">
            <div className="flex flex-wrap gap-3">
              {profile.roles.map((role, idx) => (
                <motion.span 
                  key={role}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + (idx * 0.1) }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: idx % 2 === 0 ? 5 : -5,
                    backgroundColor: '#B2EBF2'
                  }}
                  className="cursor-pointer px-6 py-2 bg-white/60 text-primary-900 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border border-primary-100 shadow-sm backdrop-blur-sm transition-all"
                >
                  {role}
                </motion.span>
              ))}
            </div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[10rem] font-cursive text-slate-dark leading-tight tracking-tighter"
            >
              Lisa
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="text-xl md:text-2xl text-slate-400 max-w-lg leading-relaxed font-medium"
            >
              {profile.bio}
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Button size="lg" className="rounded-[2rem] h-20 px-12 shadow-2xl shadow-primary-300/40 text-xl tracking-tight group" onClick={() => window.open(instagramUrl, '_blank')}>
              <Instagram className="w-7 h-7 group-hover:rotate-12 transition-transform" /> 
              Vamos Conversar?
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
