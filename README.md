# Nicolas Velasco – Portfolio

Portfolio personal construido con el stack moderno de JavaScript/TypeScript.

## 🛠 Stack tecnológico

| Tecnología | Rol |
|---|---|
| **React 18** | Biblioteca de UI — componentes reutilizables |
| **Next.js 14** | Framework — App Router, SSR, metadata, optimización |
| **TypeScript** | Tipado estático en todo el proyecto |
| **Tailwind CSS** | Estilos utilitarios y sistema de diseño |
| **Astro** | Generador de sitios estáticos con renderizado en servidor y mínimo JavaScript |
| **Vitest** | Testing unitario y de componentes |

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

## 🧪 Cobertura de tests

Los tests cubren:
- **`utils.test.ts`** — `getTagClasses()` y `cn()` con todos los casos posibles
- **`data.test.ts`** — Validación de estructura de datos del portfolio
- **`ProjectCard.test.tsx`** — Renderizado correcto del componente principal

---
