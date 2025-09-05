# EternalGrowth Brand Manual

Una aplicación web moderna y elegante que presenta el manual de marca completo de EternalGrowth con una interfaz visualmente impactante y navegación intuitiva.

## 🚀 Características

- **Diseño futurista**: Fondo negro con acentos neón púrpura y efectos glow
- **Animaciones suaves**: Transiciones con Framer Motion para una experiencia fluida
- **Renderizado markdown**: Contenido dinámico desde archivos `.md`
- **Responsive**: Adaptable a todos los dispositivos
- **Tipografías optimizadas**: Space Grotesk, Inter y JetBrains Mono
- **Efectos visuales**: Partículas, scanlines y texturas ambientales

## 🛠️ Stack Tecnológico

- **Next.js 14** - Framework React con App Router
- **TypeScript** - Tipado estático
- **TailwindCSS** - Estilos utilitarios
- **Framer Motion** - Animaciones y transiciones
- **React Markdown** - Renderizado de contenido markdown
- **Gray Matter** - Procesamiento de frontmatter

## 📦 Instalación

1. **Instalar dependencias**:
   ```bash
   npm install
   ```

2. **Ejecutar en desarrollo**:
   ```bash
   npm run dev
   ```

3. **Abrir en el navegador**:
   ```
   http://localhost:3000
   ```

## 📁 Estructura del Proyecto

```
web/
├── src/
│   ├── app/                    # App Router de Next.js
│   ├── components/             # Componentes React
│   │   ├── BackgroundEffects.tsx
│   │   ├── Header.tsx
│   │   ├── MarkdownRenderer.tsx
│   │   └── Sidebar.tsx
│   ├── lib/                    # Utilidades y funciones
│   │   └── content.ts
│   └── styles/                 # Estilos globales
│       └── globals.css
├── content/                    # Archivos markdown del manual
│   ├── marca.md
│   └── tech-stack.md
├── public/                     # Assets estáticos
│   └── assets/
│       └── logo.jpeg
└── ...configuración
```

## 🎨 Paleta de Colores

- **Negro Profundo**: `#000000`
- **Blanco Puro**: `#FFFFFF`
- **Púrpura Primario**: `#8B5CF6`
- **Púrpura Claro**: `#C084FC`
- **Púrpura Medio**: `#A855F7`

## ✨ Funcionalidades

### Navegación
- Sidebar fijo con navegación entre secciones
- Indicador visual de sección activa
- Animaciones suaves entre transiciones

### Contenido
- Renderizado automático de archivos markdown
- Soporte para tablas, listas, códigos y citas
- Efectos visuales para elementos como headings y tablas

### Efectos Visuales
- Partículas animadas en el fondo
- Efectos scanline sutiles
- Glow effects en elementos interactivos
- Gradientes y texturas ambientales

## 📝 Agregar Nuevo Contenido

1. Crear un nuevo archivo `.md` en la carpeta `content/`
2. Agregar frontmatter al inicio:
   ```yaml
   ---
   title: "Título de la Sección"
   slug: "slug-url"
   order: 3
   ---
   ```
3. Escribir el contenido en Markdown
4. El archivo aparecerá automáticamente en la navegación

## 🚀 Despliegue

### Vercel (Recomendado)
```bash
npm run build
vercel --prod
```

### Build estático
```bash
npm run build
npm run start
```

## 🎯 Mejoras Futuras

- [ ] Exportación a PDF
- [ ] Búsqueda de contenido
- [ ] Modo oscuro/claro
- [ ] Comentarios y anotaciones
- [ ] Versioning del manual
- [ ] API para gestión de contenido

## 📱 Responsive Design

El diseño se adapta automáticamente a:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🤝 Contribuir

1. Fork del repositorio
2. Crear branch de feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit de cambios (`git commit -am 'Agregar nueva funcionalidad'`)
4. Push al branch (`git push origin feature/nueva-funcionalidad`)
5. Crear Pull Request

## 📄 Licencia

Este proyecto es parte de EternalGrowth y está diseñado específicamente para el manual de marca de la empresa.

---

**Desarrollado con 💜 para EternalGrowth**
