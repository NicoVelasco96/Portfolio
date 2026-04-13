import type { IconType } from "react-icons";

export type NavLink = {
  href: string;
};

export type TechPill = {
  icon: IconType;
  label: string;
  color: string;
};

export type ProjectTag = {
  icon?: IconType;
  label: string;
  color: string;
};

export type Project = {
  id: string;
  iconBg?: string;
  image: string;
  tags: ProjectTag[];
  href: string;
};

export type Education = {
  id: string;
  period: string;
  institutionLogo?: string;
  institution: string;
  subjects: string[];
  certificateUrl?: string;
  dotColor: string;
  dotShadow: string;
};

export type StatBase = {
  bg: string;
};

export type ContactLink = {
  icon: IconType;
  labelKey: string;
  href: string;
  color: string;
  hoverColor: string;
  isExternal?: boolean;
};
