// Semua halaman membaca data lewat file ini (satu pintu)

import profileData from "@/data/profile.json";
import projectsData from "@/data/projects.json";
import skillsData from "@/data/skills.json";
import interestsData from "@/data/interests.json";
import type { Profile, Project, Skills, Interest } from "@/lib/types";

export function getProfile(): Profile {
  return profileData as Profile;
}

export function getProjects(): Project[] {
  return projectsData as Project[];
}

export function getFeaturedProjects(): Project[] {
  return getProjects().filter((project) => project.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getProjects().find((project) => project.slug === slug);
}

export function getSkills(): Skills {
  return skillsData as Skills;
}

// Urutkan bidang minat dari prioritas terkecil (paling penting) dulu
export function getInterests(): Interest[] {
  const interests = interestsData as Interest[];
  return [...interests].sort((a, b) => a.priority - b.priority);
}
