
import React from 'react';
import { profile } from '../data/profile';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 border-t border-primary-50 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          {/* Branding Section */}
          <div className="mb-10">
            <span className="text-5xl font-cursive text-primary-500 block mb-2">NotLisanna</span>
          </div>
          
          {/* Social Links Section - Centralized Row */}
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 mb-16">
            {profile.socials.map(social => (
              <a 
                key={social.platform}
                href={social.link} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-primary-500 transition-all duration-300 text-sm font-black uppercase tracking-[0.25em] hover:scale-110"
              >
                {social.platform}
              </a>
            ))}
          </div>

          {/* Bottom Section: Copyright */}
          <div className="w-full pt-10 border-t border-slate-50">
            <p className="text-slate-300 text-[10px] md:text-[11px] uppercase tracking-[0.4em] font-black">
              © {new Date().getFullYear()} — Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
