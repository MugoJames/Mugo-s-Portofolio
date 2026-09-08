// Type definitions for the portfolio

export interface PersonalInfo {
  name: string;
  title: string;
  intro: string;
  description: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  profileImage: string;
  logo: string;
}

export interface SocialLink {
  id: number;
  name: string;
  url: string;
  icon: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Skill {
  id: number;
  name: string;
  level: number;
}

export interface Education {
  id: number;
  school: string;
  degree: string;
  year: string;
  description: string;
}

export interface Experience {
  id: number;
  position: string;
  company: string;
  year: string;
  description: string;
}

export interface Project {
  id: number;
  title: string;
  category: "WebDevelopment" | "WebDesign";
  description: string;
  image: string;
  link: string;
}

export interface Stat {
  id: number;
  label: string;
  value: string;
}
