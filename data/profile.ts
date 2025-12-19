
import { ProfileData } from '../types';

export const profile: ProfileData = {
  name: "NotLisanna",
  roles: ["Cosplayer", "Streamer", "Artista de Emotes"],
  bio: "Meu nome é Lisa Susan, tenho 23 anos. Nasci na Argentina e carrego com orgulho a rica herança da minha ascendência chinesa. Essa fusão cultural molda minha identidade como criadora, unindo a paixão latina pela comunicação com a estética e disciplina oriental na criação de conteúdos gamer e artes digitais.",
  location: "Brasil / Remoto",
  contactEmail: "contato@notlisanna.com",
  gaming: [
    {
      title: "Hardcore & RPG",
      tags: ["Souls-like", "Elden Ring", "Resident Evil"]
    },
    {
      title: "Competitivo",
      tags: ["Valorant", "Overwatch 2"]
    }
  ],
  gallery: [
    { url: "https://res.cloudinary.com/dprcbctmb/image/upload/v1766182021/Sem_t%C3%ADtulo_oumpjg.jpg", title: "1", size: "medium" },
    { url: "https://res.cloudinary.com/dprcbctmb/image/upload/v1766185457/Sem_t%C3%ADtulo_kvlxmq.jpg", title: "2", size: "medium" },
    { url: "https://res.cloudinary.com/dprcbctmb/image/upload/v1766185496/Sem_t%C3%ADtulo_mkyrcw.jpg", title: "3", size: "medium" },
    { url: "https://res.cloudinary.com/dprcbctmb/image/upload/v1766185522/Sem_t%C3%ADtulo_boiczg.jpg", title: "4", size: "medium" },
    { url: "https://res.cloudinary.com/dprcbctmb/image/upload/v1766185551/Sem_t%C3%ADtulo_kcso1l.jpg", title: "5", size: "medium" },
    { url: "https://res.cloudinary.com/dprcbctmb/image/upload/v1766185566/Sem_t%C3%ADtulo_bipbgk.jpg", title: "6", size: "medium" }
  ],
  socials: [
    {
      platform: "Instagram",
      username: "@notlisanna",
      followers: "45K+",
      link: "https://instagram.com/notlisanna",
      icon: "Instagram",
      description: "Onde compartilho meus cosplays e projetos artísticos."
    },
    {
      platform: "TikTok",
      username: "@clipsnotlisanna",
      followers: "120K+",
      link: "https://tiktok.com/@clipsnotlisanna",
      icon: "Video",
      description: "Onde posto meus clips e momentos de gameplay."
    },
    {
      platform: "Twitch",
      username: "NotLisanna",
      followers: "28K+",
      link: "https://twitch.tv/notlisanna",
      icon: "Twitch",
      description: "Lives focadas em gameplay hardcore e arte."
    }
  ],
  partnerships: [
    {
      name: "Bandai Namco",
      logo: "https://res.cloudinary.com/dprcbctmb/image/upload/v1766186204/Bandai_Namco_Holdings_logo.svg_e0duml.png",
      description: "Criadora de conteúdo oficial para lançamentos principais de souls-like e campanhas promocionais."
    },
    {
      name: "KS Cosmetic",
      logo: "https://res.cloudinary.com/dprcbctmb/image/upload/v1766186301/images_i2tpou.jpg",
      description: "Colaboração de longo prazo em maquiagem artística e cosplay."
    },
    {
      name: "Firmoo",
      logo: "https://res.cloudinary.com/dprcbctmb/image/upload/v1766186261/logo_firmoo_8gOeS6_jmqgrz.png",
      description: "Parceria de eyewear focada em soluções de fadiga ocular digital para gamers."
    },
    {
      name: "Ryumen",
      logo: "https://res.cloudinary.com/dprcbctmb/image/upload/v1766186328/logo-485835730-1733677766-fc91562dc3f13877982384725b552b2c1733677766_xyaick.png",
      description: "Colaboração de vestuário com linha exclusiva de streetwear inspirada em emotes."
    }
  ]
};
