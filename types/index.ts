
export interface SocialMetric {
  platform: string;
  username: string;
  followers: string;
  link: string;
  icon: string;
  description?: string;
}

export interface Partnership {
  name: string;
  logo?: string;
  description: string;
}

export interface GamingPreference {
  title: string;
  tags: string[];
}

export interface GalleryItem {
  url: string;
  title: string;
  size: 'small' | 'medium' | 'large';
}

export interface ProfileData {
  name: string;
  roles: string[];
  bio: string;
  location: string;
  contactEmail: string;
  gaming: GamingPreference[];
  socials: SocialMetric[];
  partnerships: Partnership[];
  gallery?: GalleryItem[];
}
