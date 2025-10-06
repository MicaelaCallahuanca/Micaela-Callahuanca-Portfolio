export interface Project {
  title: string;
  description: string;
  technologies: string[];
  metrics: string[];
}

export interface Skill {
  icon: React.ReactNode;
  title: string;
  items: string[];
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  achievements: string[];
}

export interface ContactInfo {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}
