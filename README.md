# 🚀 EternalGrowth Brand Manual

<div align="center">

![EternalGrowth Logo](logo.jpeg)

**Manual de Marca Interactivo para EternalGrowth**

*De lo básico a lo digital*

[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com)
[![Next.js](https://img.shields.io/badge/Next.js-14.2.32-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.7-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com)

</div>

---

## 📋 Tabla de Contenidos

- [🎯 Descripción](#-descripción)
- [✨ Características](#-características)
- [🛠️ Stack Tecnológico](#️-stack-tecnológico)
- [📁 Estructura del Proyecto](#-estructura-del-proyecto)
- [🚀 Instalación y Configuración](#-instalación-y-configuración)
- [💻 Desarrollo Local](#-desarrollo-local)
- [🎨 Componentes Principales](#-componentes-principales)
- [🎭 Sistema de Diseño](#-sistema-de-diseño)
- [📱 Responsive Design](#-responsive-design)
- [🌐 Despliegue](#-despliegue)
- [📖 Uso del Manual](#-uso-del-manual)
- [🔧 Configuración Avanzada](#-configuración-avanzada)
- [🤝 Contribución](#-contribución)
- [📄 Licencia](#-licencia)

---

## 🎯 Descripción

**EternalGrowth Brand Manual** es una aplicación web interactiva desarrollada con Next.js que presenta de manera dinámica y profesional el manual de marca de EternalGrowth. 

### ¿Qué es EternalGrowth?
EternalGrowth es una empresa de **transformación digital** especializada en llevar negocios tradicionales hacia el futuro digital, ofreciendo soluciones innovadoras en e-commerce, aplicaciones móviles y consultoría estratégica.

### Objetivo del Proyecto
Crear una experiencia inmersiva que permita a clientes, colaboradores y partners comprender y aplicar correctamente la identidad visual de la marca EternalGrowth.

---

## ✨ Características

### 🎨 **Experiencia Visual Avanzada**
- **Efectos de glow** personalizados con la paleta de marca
- **Animaciones fluidas** con Framer Motion
- **Efectos typewriter** para textos dinámicos
- **Glassmorphism** en elementos de interfaz

### 📱 **Componentes Interactivos**
- **Showcases dinámicos** para logotipo, tipografías y colores
- **Ejemplos de aplicación** en redes sociales y materiales corporativos
- **Paleta de colores** interactiva con códigos y usos
- **Galería de recursos** descargables

### 🎯 **Navegación Intuitiva**
- **Sidebar responsive** con navegación fluida
- **Contenido modular** organizado por secciones
- **Búsqueda visual** de elementos de marca
- **Modo oscuro nativo** con tema EternalGrowth

### 📊 **Casos de Uso Reales**
- **Mockups de redes sociales** (LinkedIn, Instagram, WhatsApp)
- **Presentaciones corporativas** con métricas reales
- **Documentos comerciales** profesionales
- **Materiales de marketing** aplicados

---

## 🛠️ Stack Tecnológico

### **Frontend Framework**
- **Next.js 14.2.32** - React framework con App Router
- **React 18.3.1** - Biblioteca de interfaz de usuario
- **TypeScript** - Tipado estático para JavaScript

### **Styling & UI**
- **TailwindCSS 3.4.7** - Framework CSS utility-first
- **Framer Motion 11.3.21** - Biblioteca de animaciones
- **Custom CSS** - Efectos glow y glassmorphism personalizados

### **Content Management**
- **Markdown** - Gestión de contenido estático
- **Gray Matter 4.0.3** - Parser de front matter
- **React Markdown 9.0.1** - Renderizado de Markdown en React

### **Development Tools**
- **ESLint** - Linter para código JavaScript/TypeScript
- **PostCSS** - Procesador CSS
- **Autoprefixer** - Prefijos CSS automáticos

### **Deployment**
- **Vercel** - Plataforma de despliegue
- **Git** - Control de versiones
- **GitHub** - Repositorio remoto

---

## 📁 Estructura del Proyecto

```
brand-manual/
├── 📄 README.md                    # Documentación principal
├── 📄 vercel.json                 # Configuración de despliegue
├── 🖼️ logo.jpeg                   # Logo principal del proyecto
├── 📄 manual-marca.md              # Documentación del manual
├── 📄 tech-stack.md               # Stack tecnológico
│
└── 📁 web/                        # Aplicación Next.js
    ├── 📁 src/
    │   ├── 📁 app/                 # App Router (Next.js 13+)
    │   │   ├── 📄 globals.css      # Estilos globales
    │   │   ├── 📄 layout.tsx       # Layout principal
    │   │   └── 📄 page.tsx         # Página principal
    │   │
    │   ├── 📁 components/          # Componentes React
    │   │   ├── 📁 brand/           # Componentes específicos de marca
    │   │   │   ├── 📄 ApplicationShowcase.tsx
    │   │   │   ├── 📄 ColorPalette.tsx
    │   │   │   ├── 📄 LogoShowcase.tsx
    │   │   │   └── 📄 TypographyShowcase.tsx
    │   │   │
    │   │   ├── 📄 BackgroundEffects.tsx
    │   │   ├── 📄 Header.tsx
    │   │   ├── 📄 MarkdownRenderer.tsx
    │   │   └── 📄 Sidebar.tsx
    │   │
    │   └── 📁 lib/                 # Utilidades y helpers
    │       └── 📄 content.ts       # Gestión de contenido
    │
    ├── 📁 public/                  # Archivos estáticos
    │   └── 📁 assets/
    │       └── 🖼️ logo.jpeg        # Logo de la aplicación
    │
    ├── 📁 content/                 # Contenido en Markdown
    │   ├── 📄 aplicaciones.md
    │   ├── 📄 colores.md
    │   ├── 📄 logotipo.md
    │   └── 📄 tipografias.md
    │
    ├── 📄 package.json             # Dependencias del proyecto
    ├── 📄 next.config.js           # Configuración de Next.js
    ├── 📄 tailwind.config.ts       # Configuración de Tailwind
    ├── 📄 tsconfig.json           # Configuración de TypeScript
    └── 📄 postcss.config.mjs      # Configuración de PostCSS
```

---

## 🚀 Instalación y Configuración

### **Prerrequisitos**
- **Node.js** 18.0 o superior
- **npm** o **yarn** como gestor de paquetes
- **Git** para control de versiones

### **1. Clonar el Repositorio**
```bash
git clone https://github.com/daniellelooo/brand-manual-eternalgrowth.git
cd brand-manual-eternalgrowth
```

### **2. Instalar Dependencias**
```bash
cd web
npm install
```

### **3. Variables de Entorno (si aplica)**
```bash
# Crear archivo .env.local en /web
cp .env.example .env.local
```

### **4. Verificar Instalación**
```bash
npm run dev
```

La aplicación estará disponible en **http://localhost:3000**

---

## 💻 Desarrollo Local

### **Comandos Disponibles**

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo
npm run build        # Construye la aplicación para producción
npm run start        # Inicia servidor de producción
npm run lint         # Ejecuta linter ESLint

# Utilidades adicionales
npm run type-check   # Verifica tipos TypeScript (si configurado)
npm run analyze      # Analiza bundle size (si configurado)
```

### **Estructura de Desarrollo**

#### **Agregar Nuevo Contenido**
1. Crear archivo `.md` en `/web/content/`
2. Agregar front matter con metadata
3. El contenido se renderiza automáticamente

#### **Crear Componente de Showcase**
1. Crear componente en `/web/src/components/brand/`
2. Registrar en `MarkdownRenderer.tsx`
3. Asociar con slug de contenido

#### **Modificar Estilos**
- **Globales**: `src/app/globals.css`
- **Tailwind**: `tailwind.config.ts`
- **Componentes**: Clases CSS directamente

---

## 🎨 Componentes Principales

### **LogoShowcase.tsx**
- **Versiones del logo** (principal, versión reducida, símbolo)
- **Tamaños recomendados** con ejemplos visuales
- **Fondos de aplicación** (claro, oscuro, color)
- **Área de descarga** de recursos

### **TypographyShowcase.tsx**
- **Sistema tipográfico** completo (Space Grotesk, Inter, JetBrains Mono)
- **Jerarquía visual** H1-H6 con especificaciones
- **Casos de uso** prácticos y recomendaciones
- **Mejores prácticas** de implementación

### **ColorPalette.tsx**
- **Paleta principal** con códigos HEX/RGB/HSL
- **Combinaciones** recomendadas
- **Casos de uso** por color
- **Accesibilidad** y contraste

### **ApplicationShowcase.tsx**
- **Redes sociales** (LinkedIn, Instagram Stories, WhatsApp)
- **Web y landing pages** con ejemplos reales
- **Documentos corporativos** y presentaciones
- **Materiales de marketing** aplicados

---

## 🎭 Sistema de Diseño

### **Paleta de Colores**

```css
/* Colores Principales */
--eternal-black: #000000          /* Color primario */
--eternal-purple-primary: #8B5CF6  /* Acento principal */
--eternal-purple-light: #A78BFA    /* Acento claro */
--eternal-purple-medium: #9333EA   /* Acento medio */

/* Colores de Estado */
--eternal-white: #FFFFFF           /* Texto principal */
--eternal-white-soft: #F3F4F6      /* Texto secundario */
--eternal-glow-subtle: #6B7280     /* Elementos sutiles */
--eternal-glow-background: #1F2937 /* Fondos de elementos */
```

### **Tipografía**

#### **Space Grotesk** (Extra Bold 800)
- **Uso**: Logotipo y títulos de máximo impacto
- **Características**: Moderna, geométrica, fuerte presencia

#### **Inter** (Regular 400 - Bold 700)
- **Uso**: Contenido principal, navegación, interfaz
- **Características**: Altamente legible, versátil, profesional

#### **JetBrains Mono** (Regular 400)
- **Uso**: Efectos dinámicos, código, datos técnicos
- **Características**: Monoespaciada, técnica, efectos typewriter

### **Efectos Visuales**

#### **Glow Effects**
```css
.glow-text {
  text-shadow: 0 0 20px rgba(139, 92, 246, 0.8);
}

.glow-border {
  box-shadow: 0 0 20px rgba(139, 92, 246, 0.3);
  border: 1px solid rgba(139, 92, 246, 0.5);
}
```

#### **Glassmorphism**
```css
.glass-effect {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

---

## 📱 Responsive Design

### **Breakpoints**
- **sm**: 640px (móviles)
- **md**: 768px (tablets)
- **lg**: 1024px (laptops)
- **xl**: 1280px (desktops)
- **2xl**: 1536px (pantallas grandes)

### **Estrategia Mobile-First**
- Diseño inicial para móviles
- Progressive enhancement para pantallas grandes
- Componentes adaptativos con Tailwind CSS

### **Navegación Responsive**
- Sidebar colapsable en móviles
- Menú hamburguesa touch-friendly
- Contenido optimizado para scroll vertical

---

## 🌐 Despliegue

### **Vercel (Recomendado)**

#### **Despliegue Automático**
1. Fork o clona el repositorio
2. Conecta con Vercel GitHub App
3. El `vercel.json` maneja la configuración automáticamente

#### **Configuración Manual**
```json
{
  "buildCommand": "cd web && npm run build",
  "devCommand": "cd web && npm run dev",
  "installCommand": "cd web && npm install",
  "outputDirectory": "web/.next"
}
```

### **Otros Proveedores**

#### **Netlify**
```toml
# netlify.toml
[build]
  base = "web/"
  command = "npm run build"
  publish = ".next/"
```

#### **Railway/Render**
- Configurar build command: `cd web && npm run build`
- Start command: `cd web && npm start`

---

## 📖 Uso del Manual

### **Para Diseñadores**
1. **Consultar paleta de colores** para mantener consistencia
2. **Revisar tipografías** antes de crear nuevos materiales
3. **Descargar recursos** del logo en diferentes formatos
4. **Seguir ejemplos** de aplicación en redes sociales

### **Para Desarrolladores**
1. **Implementar colores** usando variables CSS definidas
2. **Utilizar tipografías** según jerarquía establecida
3. **Aplicar efectos** glow y glassmorphism consistentemente
4. **Mantener responsive design** según breakpoints

### **Para Marketing**
1. **Crear contenido** siguiendo ejemplos de redes sociales
2. **Desarrollar presentaciones** con templates establecidos
3. **Diseñar materiales** respetando casos de uso definidos
4. **Mantener coherencia** en todas las comunicaciones

---

## 🔧 Configuración Avanzada

### **Personalizar Tema**
```typescript
// tailwind.config.ts
module.exports = {
  theme: {
    extend: {
      colors: {
        'eternal-black': '#000000',
        'eternal-purple': {
          primary: '#8B5CF6',
          light: '#A78BFA',
          medium: '#9333EA'
        }
      },
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'jetbrains': ['JetBrains Mono', 'monospace']
      }
    }
  }
}
```

### **Agregar Nuevas Secciones**
1. Crear archivo markdown en `/content/`
2. Crear componente showcase en `/components/brand/`
3. Registrar en `MarkdownRenderer.tsx`

### **Optimizaciones de Performance**
- Lazy loading de componentes
- Optimización de imágenes con Next.js
- Code splitting automático
- Caching de contenido estático

---

## 🤝 Contribución

### **Workflow de Contribución**
1. **Fork** el repositorio
2. **Crear branch** de feature (`git checkout -b feature/nueva-funcionalidad`)
3. **Commit** cambios (`git commit -m 'Add: nueva funcionalidad'`)
4. **Push** al branch (`git push origin feature/nueva-funcionalidad`)
5. **Crear Pull Request**

### **Estándares de Código**
- **ESLint** para linting
- **Prettier** para formateo (si configurado)
- **Conventional Commits** para mensajes
- **TypeScript** para tipado estricto

### **Estructura de Commits**
```
feat: nueva funcionalidad
fix: corrección de bug
docs: actualización de documentación
style: cambios de formato/estilo
refactor: refactorización de código
test: agregar/modificar tests
chore: tareas de mantenimiento
```

---

## 📄 Licencia

Este proyecto está bajo la **Licencia MIT**. Consulta el archivo `LICENSE` para más detalles.

---

## 📞 Contacto

### **EternalGrowth**
- **Website**: [eternalgrowth.co](https://eternalgrowth.co)
- **Email**: contacto@eternalgrowth.co
- **LinkedIn**: [EternalGrowth](https://linkedin.com/company/eternalgrowth)

### **Desarrollador**
- **GitHub**: [@daniellelooo](https://github.com/daniellelooo)
- **Project Repository**: [brand-manual-eternalgrowth](https://github.com/daniellelooo/brand-manual-eternalgrowth)

---

<div align="center">

**⭐ Si este proyecto te fue útil, considera darle una estrella en GitHub ⭐**

*De lo básico a lo digital*

**EternalGrowth © 2025**

</div>
