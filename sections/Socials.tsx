
import React from 'react';
import { profile } from '../data/profile';
import Card from '../components/ui/Card';
import { Instagram, Video, Twitch, ArrowUpRight, Ghost } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const iconMap: Record<string, any> = {
  Instagram,
  Video,
  Twitch
};

const Socials: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const titleY = useTransform(scrollYProgress, [0.4, 0.7], [50, -50]);

  return (
    <section id="socials" className="py-32 relative overflow-hidden bg-white/40 scroll-mt-20">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          style={{ y: titleY }}
          className="text-center mb-24"
        >
          <div className="inline-block p-2 bg-primary-50 rounded-2xl mb-6 text-primary-400">
            <Ghost size={32} />
          </div>
          <h2 className="text-6xl md:text-7xl font-cursive text-slate-dark mb-6">Presença Digital</h2>
          <p className="text-slate-400 font-medium text-xl max-w-2xl mx-auto">
            Acompanhe minha jornada criativa e participe das nossas lives cheias de energia e arte.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {profile.socials.map((social, idx) => {
            const Icon = iconMap[social.icon] || Instagram;
            return (
              <motion.a 
                key={social.platform}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
                whileHover={{ y: -15 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card 
                  delay={idx * 0.1} 
                  className="h-full relative overflow-hidden group-hover:shadow-[0_50px_100px_-20px_rgba(0,188,212,0.25)] transition-all duration-700 border border-white hover:border-primary-100 p-12 bg-white/90 backdrop-blur-md"
                >
                  {/* Decorative Background Element */}
                  <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-primary-50 rounded-full opacity-30 group-hover:scale-150 transition-transform duration-1000" />
                  
                  <div className="absolute top-12 right-12 p-3 rounded-2xl bg-primary-50 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                    <ArrowUpRight className="w-6 h-6 text-primary-500" />
                  </div>
                  
                  <div className="flex flex-col gap-8 mb-8 relative z-10">
                    <motion.div 
                      whileHover={{ 
                        rotate: [0, -15, 15, -10, 10, 0],
                        scale: 1.15
                      }}
                      className="w-24 h-24 rounded-[2.5rem] bg-gradient-to-tr from-primary-50 to-white text-primary-500 flex items-center justify-center group-hover:from-primary-500 group-hover:to-primary-300 group-hover:text-white transition-all duration-500 shadow-soft border border-primary-100/20"
                    >
                      <Icon className="w-12 h-12" />
                    </motion.div>
                    <div>
                      <h3 className="font-black text-slate-dark text-4xl tracking-tighter mb-2">{social.platform}</h3>
                      <p className="text-sm text-primary-400 font-bold tracking-[0.3em] uppercase">{social.username}</p>
                    </div>
                  </div>

                  <div className="space-y-6 relative z-10">
                    <p className="text-xl font-medium text-slate-500 leading-relaxed">
                      {social.description}
                    </p>
                    <div className="h-1.5 w-16 bg-primary-50 rounded-full group-hover:w-full transition-all duration-1000 ease-out overflow-hidden">
                      <div className="h-full bg-primary-400/30 w-full animate-shimmer" />
                    </div>
                  </div>
                </Card>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Socials;
