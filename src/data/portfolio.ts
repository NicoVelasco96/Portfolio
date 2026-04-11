import {
   SiNodedotjs, SiTypescript, SiSpringboot,
  SiNestjs, SiVercel} from "react-icons/si";
import { JavaIcon } from "@/components/JavaIcon";
import type { Project, Education, Stat, TechPill, NavLink } from "@/types";

export const navLinks: NavLink[] = [
  { href: "#proyectos", label: "Proyectos" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#educacion", label: "Educación" },
  { href: "#contacto", label: "Contacto" },
];

export const techPills: TechPill[] = [
  { icon: JavaIcon, label: "JAVA", color: "transparent" },
  { icon: SiNodedotjs, label: "Node.js", color: "#339933" },
  { icon: SiTypescript, label: "TypeScript", color: "#3178C6" },
  { icon: SiSpringboot, label: "Spring Boot", color: "#6DB33F" },
  { icon: SiNestjs, label: "NestJS", color: "#E0234E" },
  { icon: SiVercel, label: "Vercel", color: "#000000" },
];

export const projects: Project[] = [
  {
    id: "ecommerce",
    title: "E-Commerce Platform",
    description:
      "Tienda online con catálogo, carrito, checkout y panel de administración. Integración con pasarela de pagos y gestión de inventario en tiempo real.",
    icon: "🛒",
    iconBg: "bg-accent-green2/50",
    tags: [
      { label: "Next.js", color: "blue" },
      { label: "TypeScript", color: "blue" },
      { label: "Tailwind CSS", color: "teal" },
      { label: "Stripe", color: "cream" },
      { label: "PostgreSQL", color: "green" },
    ],
    href: "#",
  },
  {
    id: "turnos",
    title: "Sistema de Turnos Online",
    description:
      "Gestión de turnos con calendario interactivo, reserva en tiempo real y notificaciones automáticas por email/WhatsApp.",
    icon: "📅",
    iconBg: "bg-accent-blue/50",
    tags: [
      { label: "React", color: "blue" },
      { label: "TypeScript", color: "blue" },
      { label: "Node.js", color: "green" },
      { label: "MongoDB", color: "cream" },
      { label: "Tailwind", color: "teal" },
    ],
    href: "#",
  },
  {
    id: "juridico",
    title: "Estudio Jurídico – Asesoramiento Legal",
    description:
      "Página para estudio legal con áreas de práctica, blog jurídico, reserva de entrevistas y contratación de servicios online.",
    icon: "⚖️",
    iconBg: "bg-accent-cream/50",
    tags: [
      { label: "Astro", color: "blue" },
      { label: "TypeScript", color: "blue" },
      { label: "Tailwind CSS", color: "teal" },
      { label: "Sanity CMS", color: "cream" },
    ],
    href: "#",
  },
  {
    id: "cobranzas",
    title: "Mensajes Automáticos a Deudores",
    description:
      "Sistema de cobranza automatizada con microservicios Java, orquestación de flujos via N8N y envío masivo de mensajes WhatsApp a través de EvolutionAPI. Dashboard de métricas en tiempo real.",
    icon: "🤖",
    iconBg: "bg-accent-pink/50",
    tags: [
      { label: "Java", color: "pink" },
      { label: "Microservicios", color: "pink" },
      { label: "N8N", color: "cream" },
      { label: "EvolutionAPI", color: "green" },
      { label: "WhatsApp", color: "green" },
      { label: "Docker", color: "default" },
    ],
    href: "#",
  },
  {
    id: "portfolio",
    title: "Portfolio Personal",
    description:
      "Este mismo portfolio, construido con Next.js, TypeScript, Tailwind y Astro. Animaciones CSS, i18n y despliegue en Vercel.",
    icon: "💼",
    iconBg: "bg-accent-green1/50",
    tags: [
      { label: "Next.js", color: "blue" },
      { label: "TypeScript", color: "blue" },
      { label: "Tailwind", color: "teal" },
      { label: "Astro", color: "blue" },
      { label: "Vercel", color: "green" },
    ],
    href: "#",
  },
];

export const education: Education[] = [
  {
    id: "utn",
    period: "2022 – 2024",
    title: "Técnico Superior en Programación",
    institution: "Universidad Tecnológica Nacional (UTN)",
    subjects: [
      "Diseño de Sistemas",
      "Estructuras de Datos",
      "POO",
      "Bases de Datos",
      "Metodologías Ágiles",
      "JAVA",
    ],
    dotColor: "bg-accent-pink",
    dotShadow: "shadow-[0_0_0_3px_rgba(242,186,201,0.45)]",
  },
];

export const stats: Stat[] = [
  { value: "3+", label: "Proyectos completados", bg: "bg-accent-green2" },
  { value: "3+", label: "Años de experiencia", bg: "bg-accent-blue" },
  { value: "10+", label: "Tecnologías", bg: "bg-accent-pink" },
];
