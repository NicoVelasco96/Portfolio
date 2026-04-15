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
      description: "Desarrollador Back-End dedicado a la creación de sistemas de alto rendimiento y arquitecturas escalables. Especialista en optimizar la infraestructura para potenciar experiencias de usuario modernas y fluidas.",
      cta_projects: "Ver proyectos",
      cta_contact: "Contactame",
    },
    projects: {
      label: "Trabajos",
      title: "Proyectos destacados",
      description: "Algunos proyectos que construí, desde e-commerce hasta automatizaciones con microservicios.",
      view: "Ver proyecto",
      items: {
        ecommerce: {
          title: "E-Commerce Platform",
          description: "Tienda online con catálogo, carrito, checkout y panel de administración. Integración con pasarela de pagos y gestión de inventario en tiempo real.",
        },
        turnos: {
          title: "Sistema de Turnos Online",
          description: "Gestión de turnos con calendario interactivo, reserva en tiempo real y notificaciones automáticas por email/WhatsApp.",
        },
        juridico: {
          title: "Estudio Jurídico – Asesoramiento Legal",
          description: "Página para estudio legal con áreas de práctica, blog jurídico, reserva de entrevistas y contratación de servicios online.",
        },
        cobranzas: {
          title: "Mensajes Automáticos a Deudores",
          description: "Sistema de cobranza automatizada con microservicios Java, orquestación de flujos via N8N y envío masivo de mensajes WhatsApp a través de EvolutionAPI. Dashboard de métricas en tiempo real.",
        },
        portfolio: {
          title: "Portfolio Personal",
          description: "Este mismo portfolio, construido con Next.js, TypeScript, Tailwind y Astro. Animaciones CSS, i18n y despliegue en Vercel.",
        },
      },
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
      items: {
        utn: { title: "Técnico Superior en Programación" },
        TodoCode: { title: "Introducción a Git y GitHub" },
        TodoCode1: { title: "Introducción a las Bases de Datos Relacionales (Con MySQL)" },
        TodoCode2: { title: "Introducción a los Algoritmos y la Programación" },
        TodoCode4: { title: "Programación Orientada a Objetos con Java" },
        TodoCode3: { title: "Desarrollo de APIs en Java con Spring Boot" },
      },
    },
    contact: {
      label: "Contacto",
      title: "¿Tenés un proyecto en mente?",
      description: "Estoy disponible para proyectos freelance, colaboraciones y oportunidades laborales. ¡Hablemos!",
      email: "Enviar email",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    stats: [
      { value: "5+", label: "Proyectos completados" },
      { value: "2+", label: "Años de experiencia" },
      { value: "10+", label: "Tecnologías" },
    ],
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
      description: "Back-end developer focused on building high-performance systems and scalable architectures. Specialist in optimizing infrastructure to deliver modern, seamless user experiences.",
      cta_projects: "View projects",
      cta_contact: "Contact me",
    },
    projects: {
      label: "Work",
      title: "Featured projects",
      description: "Some projects I built, from e-commerce to microservice automations.",
      view: "View project",
      items: {
        ecommerce: {
          title: "E-Commerce Platform",
          description: "Online store with catalog, cart, checkout and admin panel. Payment gateway integration and real-time inventory management.",
        },
        turnos: {
          title: "Online Appointment System",
          description: "Appointment management with interactive calendar, real-time booking and automatic email/WhatsApp notifications.",
        },
        juridico: {
          title: "Law Firm – Legal Consulting",
          description: "Website for a law firm with practice areas, legal blog, interview booking and online service contracting.",
        },
        cobranzas: {
          title: "Automated Debt Collection Messages",
          description: "Automated collection system with Java microservices, flow orchestration via N8N and bulk WhatsApp messaging through EvolutionAPI. Real-time metrics dashboard.",
        },
        portfolio: {
          title: "Personal Portfolio",
          description: "This very portfolio, built with Next.js, TypeScript, Tailwind and Astro. CSS animations, i18n and deployed on Vercel.",
        },
      },
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
      items: {
        utn: { title: "Higher Technician in Programming" },
        TodoCode: { title: "Introduction to Git and GitHub" },
        TodoCode1: { title: "Introduction to Relational Databases (With MySQL)" },
        TodoCode2: { title: "Introduction to Algorithms and Programming" },
        TodoCode4: { title: "Object-Oriented Programming with Java" },
        TodoCode3: { title: "Java API Development with Spring Boot" },
      },
    },
    contact: {
      label: "Contact",
      title: "Got a project in mind?",
      description: "I'm available for freelance projects, collaborations and job opportunities. Let's talk!",
      email: "Send email",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    stats: [
      { value: "5+", label: "Completed projects" },
      { value: "2+", label: "Years of experience" },
      { value: "10+", label: "Technologies" },
    ],
    footer: {
      made_with: "Made with ☕ and lots of code",
    },
  },
} as const;

export type Locale = keyof typeof translations;
export type Translations = typeof translations.es;
