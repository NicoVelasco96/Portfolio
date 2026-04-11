import type { IconType } from "react-icons";

// src/types/index.ts

export interface Project {
  id: string;
  title: string;
  description: string;
  icon: string;
  iconBg: string;
  tags: Tag[];
  href: string;
}

export interface Tag {
  label: string;
  color: TagColor;
}

export type TagColor = "blue" | "green" | "teal" | "pink" | "cream" | "default";

export interface Education {
  id: string;
  period: string;
  title: string;
  institution: string;
  subjects: string[];
  dotColor: string;
  dotShadow: string;
}

export interface Stat {
  value: string;
  label: string;
  bg: string;
}

export interface TechPill {
  icon: IconType;
  label: string;
  color?: string;
}

export interface NavLink {
  href: string;
  label: string;
}
