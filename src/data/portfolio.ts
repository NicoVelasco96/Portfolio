import {
  SiNodedotjs, SiTypescript, SiSpringboot,
  SiNestjs, SiVercel,
  SiPostgresql,
  SiPrisma,
  SiMercadopago,
  SiTypeorm,
  SiN8N,
  SiWhatsapp,
  SiDocker,
  SiNextdotjs,
  SiTailwindcss,
  SiAstro,
  SiGmail,
  SiGithub,
} from "react-icons/si";
import { JavaIcon, EvolutionAPIIcon } from "@/components/JavaIcon";
import type { Project, Education, Stat, TechPill, NavLink, ContactLink } from "@/types";
import { LiaLinkedin } from "react-icons/lia";

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
    iconBg: "bg-accent-green2/50",
    image: "/full-shop.jpg",
    tags: [
      { icon: SiNestjs, label: "NestJS", color: "blue" },
      { icon: SiTypescript, label: "TypeScript", color: "blue" },
      { icon: SiVercel, label: "Vercel", color: "green" },
      { icon: SiPrisma, label: "Prisma", color: "teal" },
      { icon: SiMercadopago, label: "Mercado Pago", color: "cream" },
      { icon: SiPostgresql, label: "PostgreSQL", color: "green" },
    ],
    href: "https://full-shop-frontend.vercel.app/",
  },
  {
    id: "turnos",
    title: "Sistema de Turnos Online",
    description:
      "Gestión de turnos con calendario interactivo, reserva en tiempo real y notificaciones automáticas por email/WhatsApp.",
    image: "/turnero.jpg",
    iconBg: "bg-accent-blue/50",
    tags: [
      { icon: SiNestjs, label: "NestJS", color: "blue" },
      { icon: SiTypescript, label: "TypeScript", color: "blue" },
      { icon: SiNodedotjs, label: "Node.js", color: "green" },
      { icon: SiTypeorm, label: "TypeORM", color: "cream" },
      { icon: SiPrisma, label: "Prisma", color: "teal" },
    ],
    href: "https://hospital-militar.fullsalud.com.ar/",
  },
  {
    id: "juridico",
    title: "Estudio Jurídico – Asesoramiento Legal",
    description:
      "Página para estudio legal con áreas de práctica, blog jurídico, reserva de entrevistas y contratación de servicios online.",
    image: "/legales.jpg",
    iconBg: "bg-accent-cream/50",
    tags: [
      { icon: SiNestjs, label: "NestJS", color: "blue" },
      { icon: SiTypescript, label: "TypeScript", color: "blue" },
      { icon: SiPostgresql, label: "PostgreSQL", color: "teal" },
      { icon: SiPrisma, label: "Prisma", color: "cream" },
    ],
    href: "https://rsl-legales.vercel.app/",
  },
  {
    id: "cobranzas",
    title: "Mensajes Automáticos a Deudores",
    description:
      "Sistema de cobranza automatizada con microservicios Java, orquestación de flujos via N8N y envío masivo de mensajes WhatsApp a través de EvolutionAPI. Dashboard de métricas en tiempo real.",
    image: "/buffet.jpg",
    iconBg: "bg-accent-pink/50",
    tags: [
      { icon: JavaIcon, label: "Java", color: "pink" },
      { icon: SiSpringboot, label: "Spring Boot", color: "pink" },
      { icon: SiN8N, label: "N8N", color: "cream" },
      { icon: EvolutionAPIIcon, label: "EvolutionAPI", color: "green" },
      { icon: SiWhatsapp, label: "WhatsApp", color: "green" },
      { icon: SiDocker, label: "Docker", color: "default" },
    ],
    href: "https://front-end-buffet.vercel.app/",
  },
  {
    id: "portfolio",
    title: "Portfolio Personal",
    description:
      "Este mismo portfolio, construido con Next.js, TypeScript, Tailwind y Astro. Animaciones CSS, i18n y despliegue en Vercel.",
    image: "/portfolio.jpg",
    iconBg: "bg-accent-green1/50",
    tags: [
      { icon: SiNextdotjs, label: "Next.js", color: "blue" },
      { icon: SiTypescript, label: "TypeScript", color: "blue" },
      { icon: SiTailwindcss, label: "Tailwind", color: "teal" },
      { icon: SiAstro, label: "Astro", color: "blue" },
      { icon: SiVercel, label: "Vercel", color: "green" },
    ],
    href: "https://portfolio-nicolas-velasco.vercel.app/",
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
  {
    id: "TodoCode",
    period: "27-02-2023",
    title: "Introducción a Git y GitHub",
    institution: "TodoCode Academy",
    certificateUrl: "https://todocodeacademy.com/certificate/2eb/",
    subjects: [
      "Git",
      "GitHub",
      "Control de versiones",
      "Colaboración en equipo",
    ],
    dotColor: "bg-accent-pink",
    dotShadow: "shadow-[0_0_0_3px_rgba(242,186,201,0.45)]",
  },
  {
    id: "TodoCode1",
    period: "27-02-2023",
    title: "Introducción a las Bases de Datos Relacionales (Con MySQL)",
    institution: "TodoCode Academy",
    certificateUrl: "https://todocodeacademy.com/certificate/rw3/",
    subjects: [
      "MySQL",
      "Base de Datos Relacionales",
      "SQL",
      "Diseño de Bases de Datos",
      "Modelado de Datos",
    ],
    dotColor: "bg-accent-pink",
    dotShadow: "shadow-[0_0_0_3px_rgba(242,186,201,0.45)]",
  },
  {
    id: "TodoCode2",
    period: "01-07-2024",
    title: "Introducción a los Algoritmos y la Programación",
    institution: "TodoCode Academy",
    certificateUrl: "https://todocodeacademy.com/certificate/introduccion-a-los-algoritmos-y-la-programacion-398/",
    subjects: [
      "Diseño de Algoritmos",
      "Estructuras de Datos",
      "Logica de Programación",
      "Resolución de Problemas",
      "JAVA",
    ],
    dotColor: "bg-accent-pink",
    dotShadow: "shadow-[0_0_0_3px_rgba(242,186,201,0.45)]",
  },
  {
    id: "TodoCode4",
    period: "06-08-2024",
    title: "Programación Orientada a Objetos con Java",
    institution: "TodoCode Academy",
    certificateUrl: "https://todocodeacademy.com/certificate/certificado-curso-poo-con-java-7vt/",
    subjects: [
      "Diseño de Sistemas",
      "Estructuras de Datos",
      "POO",
      "JAVA",
    ],
    dotColor: "bg-accent-pink",
    dotShadow: "shadow-[0_0_0_3px_rgba(242,186,201,0.45)]",
  },
  {
    id: "TodoCode3",
    period: "04-11-2023",
    title: "Desarrollo de APIs en Java con Spring Boot",
    institution: "TodoCode Academy",
    certificateUrl: "https://todocodeacademy.com/certificate/vei/",
    subjects: [
      "Diseño de APIs REST",
      "Arquitectura de Sistemas",
      "Seguridad en APIs",
      "Testing de APIs",
      "Spring Boot",
      "JAVA",
    ],
    dotColor: "bg-accent-pink",
    dotShadow: "shadow-[0_0_0_3px_rgba(242,186,201,0.45)]",
  },
];

export const stats: Stat[] = [
  { value: "5+", label: "Proyectos completados", bg: "bg-accent-green2" },
  { value: "3+", label: "Años de experiencia", bg: "bg-accent-blue" },
  { value: "10+", label: "Tecnologías", bg: "bg-accent-pink" },
];

export const contactLinks: ContactLink[] = [
  {
    icon: SiGmail,
    label: "Enviar email",
    href: "mailto:velasconico001@gmail.com",
    color: "#E0234E" // Usando el rosa de tu marca
  },
  {
    icon: SiGithub,
    label: "GitHub",
    href: "https://github.com/NicoVelasco96",
    color: "#333",
    isExternal: true
  },
  {
    icon: LiaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nicolasvelasco1996/",
    color: "#0077b5",
    isExternal: true
  },
];
