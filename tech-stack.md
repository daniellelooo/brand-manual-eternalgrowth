# ⚙️ Tech Stack – Manual de Marca EternalGrowth

## Framework

- **Next.js (React)**
- Renderizado estático de archivos Markdown con `next-mdx-remote` o `react-markdown`.

## Funcionalidades requeridas

1. **Carga de contenido**

   - Todos los `.md` en carpeta `/content`.
   - Cada archivo se renderiza como sección `/manual/<slug>`.

2. **Navegación**

   - Menú lateral fijo con las secciones:
     - Introducción
     - Logo
     - Tipografías
     - Colores
     - Aplicaciones
     - Tono de comunicación

3. **Estilos**

   - Usar Tailwind CSS para consistencia.
   - Fondo negro (`#000000`) en toda la UI.
   - Textos en blanco puro, acentos en púrpura.

4. **Assets**

   - Incluir el archivo de logo (flor pixelada con fondo negro) en `/public/assets/logo.png`.

5. **Diseño**

   - Similar a la landing actual (`landingpage-eternalgrowth`).
   - Minimalista, con efectos glow sutiles en acentos.

6. **Extensibilidad**
   - Posibilidad de agregar nuevas secciones Markdown en el futuro.
   - Sistema modular para crecer como documentación oficial.
