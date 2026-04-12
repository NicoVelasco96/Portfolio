export const translations = {
  es: {
    nav: {
      projects: "Proyectos",
      about: "Sobre mí",
      education: "Educación",
      contact: "Contacto",
      cta: "Contactame",
    },
    hero: {
      available: "Disponible para proyectos",
      greeting: "Hola, soy",
      description: "Desarrollador Back-End apasionado por construir productos web modernos, escalables y con buena experiencia de usuario.",
      cta_projects: "Ver proyectos",
      cta_contact: "Contactame",
    },
    projects: {
      label: "Trabajos",
      title: "Proyectos destacados",
      description: "Algunos proyectos que construí, desde e-commerce hasta automatizaciones con microservicios.",
    },
    about: {
      label: "Sobre mí",
      title: "Desarrollador con ganas de crecer",
      description: "Soy desarrollador backend con experiencia construyendo aplicaciones web modernas. Trabajo con tecnologías del ecosistema TypeScript y JAVA, e integro microservicios Java con herramientas de automatización.",
      description2: "Me gusta resolver problemas reales con código limpio, escalable y bien documentado. Siempre aprendiendo algo nuevo.",
      available: "Disponible para proyectos freelance",
      view_profile: "Ver perfil",
    },
    education: {
      label: "Formación",
      title: "Educación",
      description: "Mi recorrido académico en tecnología y desarrollo de software.",
      certificate: "Ver Certificado",
    },
    contact: {
      label: "Contacto",
      title: "¿Tenés un proyecto en mente?",
      description: "Estoy disponible para proyectos freelance, colaboraciones y oportunidades laborales. ¡Hablemos!",
    },
    footer: {
      made_with: "Hecho con ☕ y mucho código",
    },
  },
  en: {
    nav: {
      projects: "Projects",
      about: "About me",
      education: "Education",
      contact: "Contact",
      cta: "Contact me",
    },
    hero: {
      available: "Available for projects",
      greeting: "Hi, I'm",
      description: "Back-End developer passionate about building modern, scalable web products with great user experience.",
      cta_projects: "View projects",
      cta_contact: "Contact me",
    },
    projects: {
      label: "Work",
      title: "Featured projects",
      description: "Some projects I built, from e-commerce to microservice automations.",
    },
    about: {
      label: "About me",
      title: "Developer eager to grow",
      description: "I'm a backend developer with experience building modern web applications. I work with TypeScript and Java ecosystems, integrating Java microservices with automation tools.",
      description2: "I enjoy solving real problems with clean, scalable and well-documented code. Always learning something new.",
      available: "Available for freelance projects",
      view_profile: "View profile",
    },
    education: {
      label: "Training",
      title: "Education",
      description: "My academic journey in technology and software development.",
      certificate: "View Certificate",
    },
    contact: {
      label: "Contact",
      title: "Got a project in mind?",
      description: "I'm available for freelance projects, collaborations and job opportunities. Let's talk!",
    },
    footer: {
      made_with: "Made with ☕ and lots of code",
    },
  },
} as const;

export type Locale = keyof typeof translations;
export type Translations = typeof translations.es;
