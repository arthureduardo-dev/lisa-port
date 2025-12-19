
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { profile } from '../data/profile';
import Card from '../components/ui/Card';
import { Gamepad2, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  const { scrollYProgress } = useScroll();
  // Efeito de movimento horizontal sutil no título
  const titleX = useTransform(scrollYProgress, [0.1, 0.4], [-50, 50]);

  return (
    <section className="py-32 bg-white/40 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="space-y-10"
          >
            <div className="relative">
              <motion.div 
                animate={{ 
                  y: [0, -15, 0],
                  scale: [1, 1.1, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-16 -left-16 text-primary-100 opacity-60 pointer-events-none"
              >
                <Sparkles size={120} />
              </motion.div>
              
              <motion.h2 
                style={{ x: titleX }}
                className="text-6xl md:text-7xl font-cursive text-slate-dark mb-10 relative z-10"
              >
                Sobre a Artista
              </motion.h2>

              <div className="space-y-6 text-slate-500 leading-relaxed text-xl font-medium">
                <p>
                  Eu sou <strong className="text-slate-dark">NotLisanna</strong>, uma criadora de conteúdo versátil que une os mundos do 
                  hardcore gaming e a arte profissional de emotes. 
                </p>
                <p>
                  Minha jornada começou com a paixão por <em className="text-primary-500 not-italic font-bold">Resident Evil</em> e <em className="text-primary-500 not-italic font-bold">Dark Souls</em>, 
                  que evoluiu para uma plataforma onde me desafio com gameplays difíceis.
                </p>
                <p className="text-lg text-slate-400 italic">
                  "Unindo a paixão latina pela comunicação com a estética e disciplina oriental na criação de conteúdos gamer."
                </p>
              </div>
            </div>
          </motion.div>

          <div className="space-y-8">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-cursive text-slate-dark flex items-center gap-4"
            >
              <div className="p-3 bg-primary-100 rounded-[1.5rem] shadow-inner shadow-primary-200/50">
                <Gamepad2 className="w-8 h-8 text-primary-500" />
              </div>
              DNA Gamer
            </motion.h3>
            <div className="space-y-6">
              {profile.gaming.map((category, idx) => (
                <Card 
                  key={category.title} 
                  delay={idx * 0.2}
                  className="p-8 border border-slate-50 hover:border-primary-200 transition-all group relative overflow-hidden" 
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary-100 group-hover:bg-primary-400 transition-colors" />
                  <h4 className="font-black text-slate-dark mb-5 text-xl tracking-tight group-hover:text-primary-500 transition-colors">
                    {category.title}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {category.tags.map((tag, tIdx) => (
                      <motion.span 
                        key={tag} 
                        whileHover={{ 
                          scale: 1.2, 
                          rotate: tIdx % 2 === 0 ? 6 : -6,
                          borderColor: '#4DD0E1',
                          backgroundColor: '#E0F7FA',
                          color: '#006064'
                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="cursor-default px-5 py-2 bg-white border border-slate-100 rounded-full text-sm font-bold text-slate-500 shadow-sm select-none transition-all"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
