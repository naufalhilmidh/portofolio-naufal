// Aturan bentuk data untuk seluruh website

export type Project = {
  slug: string;
  title: string;
  categories: string[];
  description: string;
  tools: string[];
  results: string[];
  github: string;
  featured: boolean;
};

export type Profile = {
  name: string;
  major: string;
  campus: string;
  photo: string;
  contact: {
    email: string;
    phone: string;
    linkedin: string;
    instagram: string;
    github: string;
  };
};

export type Interest = {
  id: string;
  title: string;
  priority: number;
  summary: string;
};

// Skills berbentuk: nama kelompok -> daftar skill
export type Skills = Record<string, string[]>;
