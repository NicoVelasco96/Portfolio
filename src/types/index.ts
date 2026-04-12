import type { IconType } from "react-icons";

export interface Project {
  id: string;
  title: string;
  description: string;
  iconBg: string;
  tags: Tag[];
  href: string;
  image: string;
}

export interface Tag {
  label: string;
  color: TagColor;
  icon?: IconType;
}

export type TagColor = "blue" | "green" | "teal" | "pink" | "cream" | "default";

export interface Education {
  id: string;
  period: string;
  title: string;
  institutionLogo: string;
  institution: string;
  subjects: string[];
  dotColor: string;
  dotShadow: string;
  certificateUrl?: string;
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

export interface ContactLink {
  icon: React.ElementType;
  label: string;
  href: string;
  color: string;
  hoverColor: string;
  isExternal?: boolean;
}
