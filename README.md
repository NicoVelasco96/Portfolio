# Nicolas Velasco – Portfolio

Portfolio personal construido con el stack moderno de JavaScript/TypeScript.

## 🛠 Stack tecnológico

| Tecnología | Rol |
|---|---|
| **React 18** | Biblioteca de UI — componentes reutilizables |
| **Next.js 14** | Framework — App Router, SSR, metadata, optimización |
| **TypeScript** | Tipado estático en todo el proyecto |
| **Tailwind CSS** | Estilos utilitarios y sistema de diseño |
| **Astro** | Mencionado en el stack del portfolio (ideal para páginas estáticas) |
| **Vitest** | Testing unitario y de componentes |

## 📁 Estructura del proyecto

```
nicolas-portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css        # Tailwind + fuentes + animaciones globales
│   │   ├── layout.tsx         # RootLayout con metadata
│   │   └── page.tsx           # Página principal — ensambla todas las secciones
│   ├── components/
│   │   ├── Navbar.tsx         # Navegación fija con blur
│   │   ├── HeroSection.tsx    # Hero con blobs, badge de disponibilidad
│   │   ├── ProjectCard.tsx    # Tarjeta individual de proyecto
│   │   ├── ProjectsSection.tsx# Grid de proyectos
│   │   ├── AboutSection.tsx   # Sobre mí + stats
│   │   ├── EducationSection.tsx # Timeline de educación
│   │   ├── ContactSection.tsx # Sección de contacto
│   │   ├── Footer.tsx         # Pie de página
│   │   └── RevealObserver.tsx # Client component — animaciones de scroll
│   ├── data/
│   │   └── portfolio.ts       # Todos los datos del portfolio (proyectos, educación, stats)
│   ├── lib/
│   │   ├── utils.ts           # cn(), getTagClasses()
│   │   └── test-setup.ts      # Setup de @testing-library/jest-dom
│   ├── types/
│   │   └── index.ts           # Interfaces TypeScript: Project, Tag, Education...
│   └── __tests__/
│       ├── utils.test.ts      # Tests de funciones utilitarias
│       ├── data.test.ts       # Tests de integridad de datos
│       └── ProjectCard.test.tsx # Tests de componente React
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── vitest.config.ts
└── package.json
```

## 🚀 Cómo correr el proyecto

### 1. Instalar dependencias

```bash
npm install
```

### 2. Servidor de desarrollo

```bash
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000) en tu navegador.

### 3. Build de producción

```bash
npm run build
npm run start
```

### 4. Tests con Vitest

```bash
# Correr tests una vez
npm test

# Modo watch interactivo
npm run test:ui

# Con cobertura
npm run test:coverage
```

## 🎨 Paleta de colores

Los colores están definidos como CSS variables y extendidos en `tailwind.config.ts`:

| Variable | Valor | Uso |
|---|---|---|
| `--bg` | `#f8fbf6` | Fondo principal |
| `--bg2` | `#eef8ea` | Fondo alternado |
| `--text` | `#253225` | Texto principal |
| `--muted` | `#5e7560` | Texto secundario |
| `accent-pink` | `#f2bac9` | Acentos rosa |
| `accent-blue` | `#bad7f2` | Acentos azul |

## 📝 Personalización

Para actualizar el contenido del portfolio, editá únicamente el archivo:

```
src/data/portfolio.ts
```

Ahí están todos los proyectos, educación, stats y tech pills. Los componentes leen los datos desde ese archivo, así que no hace falta tocar el código de los componentes.

## 🧪 Cobertura de tests

Los tests cubren:
- **`utils.test.ts`** — `getTagClasses()` y `cn()` con todos los casos posibles
- **`data.test.ts`** — Validación de estructura de datos del portfolio
- **`ProjectCard.test.tsx`** — Renderizado correcto del componente principal

---
