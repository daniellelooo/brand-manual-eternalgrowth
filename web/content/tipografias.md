---
title: "Tipografías"
slug: "tipografias"
order: 3
---

# Sistema Tipográfico

## Nuestras Fuentes

Utilizamos tres familias tipográficas que trabajan en armonía para crear una identidad visual consistente y moderna.

### Uso y Características
**Space Grotesk** es nuestra tipografía de marca, reservada para el logotipo y elementos de máximo impacto visual.

```css
font-family: 'Space Grotesk', sans-serif;
font-weight: 800; /* Extra Bold */
letter-spacing: 0.08em;
```

### Aplicaciones Específicas
- **🎯 Logotipo**: Texto "EternalGrowth"
- **🎯 Títulos principales**: Headers de máximo nivel
- **🎯 CTAs importantes**: Botones de acción críticos
- **🎯 Elementos de marca**: Cuando se requiere máximo impacto

### Pesos Disponibles
- **300**: Light (uso limitado)
- **400**: Regular (títulos secundarios)
- **500**: Medium (subtítulos)
- **600**: SemiBold (destacados)
- **700**: Bold (títulos importantes)
- **800**: Extra Bold (logotipo, títulos principales)

---

## Tipografía Corporativa: Inter

### Uso y Características
**Inter** es nuestra tipografía corporativa, optimizada para legibilidad digital y versatilidad en aplicaciones diversas.

```css
font-family: 'Inter', 'Segoe UI', sans-serif;
font-weight: 400-700;
letter-spacing: normal;
```

### Aplicaciones Principales
- **📄 Textos de párrafo**: Contenido principal
- **📋 Documentos**: Reportes, propuestas, contratos
- **🌐 Interfaz web**: Navegación, formularios, menús
- **📱 Aplicaciones**: UI/UX de productos digitales

### Jerarquía Tipográfica

#### H1 - Títulos Principales
```css
font-size: 2.5rem; /* 40px */
font-weight: 700; /* Bold */
line-height: 1.2;
color: #FFFFFF;
```

#### H2 - Títulos Secundarios
```css
font-size: 2rem; /* 32px */
font-weight: 600; /* SemiBold */
line-height: 1.3;
color: #FFFFFF;
```

#### H3 - Subtítulos
```css
font-size: 1.5rem; /* 24px */
font-weight: 500; /* Medium */
line-height: 1.4;
color: #FFFFFF;
```

#### Texto Cuerpo
```css
font-size: 1rem; /* 16px */
font-weight: 400; /* Regular */
line-height: 1.6;
color: rgba(255, 255, 255, 0.95);
```

#### Texto Pequeño
```css
font-size: 0.875rem; /* 14px */
font-weight: 400; /* Regular */
line-height: 1.5;
color: rgba(255, 255, 255, 0.8);
```

---

## Tipografía Técnica: JetBrains Mono

### Uso y Características
**JetBrains Mono** aporta un toque tecnológico y se usa para elementos que requieren distinción técnica.

```css
font-family: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
font-weight: 400;
letter-spacing: 0.05em;
```

### Aplicaciones Específicas
- **⚡ Efectos typewriter**: Animaciones dinámicas
- **💻 Código y técnico**: Snippets, documentación técnica
- **🔢 Datos y métricas**: Números, estadísticas, analytics
- **⏰ Información temporal**: Fechas, horas, timestamps

### Efectos Especiales

#### Efecto Typewriter
```css
.typewriter-effect {
  font-family: 'JetBrains Mono';
  font-weight: 400;
  color: #8B5CF6;
  letter-spacing: 0.05em;
  border-right: 2px solid #8B5CF6;
  animation: typewriter 3s steps(20) infinite;
}
```

#### Texto de Código
```css
.code-text {
  font-family: 'JetBrains Mono';
  background: rgba(139, 92, 246, 0.1);
  border: 1px solid rgba(139, 92, 246, 0.3);
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.9em;
}
```

---

## Combinaciones Tipográficas

### Combinación Principal
```css
/* Títulos impactantes */
H1: Space Grotesk Extra Bold
/* Contenido legible */
Body: Inter Regular
/* Detalles técnicos */
Code: JetBrains Mono Regular
```

### Combinación Corporativa
```css
/* Todo en Inter para consistencia */
H1-H6: Inter Bold/SemiBold
Body: Inter Regular
Small: Inter Regular
```

### Combinación Técnica
```css
/* Documentación técnica */
H1: Space Grotesk Bold
H2-H6: Inter SemiBold
Body: Inter Regular
Code: JetBrains Mono Regular
```

---

## Fallbacks y Compatibilidad

### Sistema de Fallbacks
```css
/* Tipografía principal */
font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Tipografía corporativa */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

/* Tipografía técnica */
font-family: 'JetBrains Mono', 'SF Mono', 'Monaco', 'Inconsolata', 'Fira Code', monospace;
```

### Carga de Fuentes
```css
/* Google Fonts - Optimizada */
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700;800&display=swap');
```

---

## Especificaciones por Medio

### Digital (Web/Apps)
- **Tamaño base**: 16px
- **Escala modular**: 1.250 (Major Third)
- **Line height**: 1.4-1.6
- **Contraste mínimo**: 4.5:1 (WCAG AA)

### Impreso
- **Tamaño base**: 11pt
- **Escala modular**: 1.200
- **Line height**: 1.3-1.5
- **Resolución mínima**: 300 DPI

### Móvil
- **Tamaño mínimo**: 14px
- **Área de toque**: 44px mínimo
- **Contraste aumentado**: 7:1 (WCAG AAA)
- **Optimización de legibilidad**: Active

---

## Mejores Prácticas

### ✅ Recomendaciones

1. **Jerarquía clara**
   - Máximo 3 niveles de jerarquía por pantalla
   - Contraste suficiente entre niveles
   - Espaciado consistente

2. **Legibilidad óptima**
   - Longitud de línea: 45-75 caracteres
   - Espaciado entre párrafos: 1-1.5x line-height
   - Alineación: izquierda para textos largos

3. **Consistencia**
   - Usar la escala tipográfica definida
   - Mantener pesos y estilos consistentes
   - Aplicar las combinaciones recomendadas

### ❌ Evitar

1. **Mezclas incorrectas**
   - No combinar más de 3 tipografías
   - No usar pesos intermedios no definidos
   - No alterar el letter-spacing sin autorización

2. **Problemas de legibilidad**
   - No usar tamaños por debajo del mínimo
   - No comprometer el contraste
   - No alinear textos largos al centro

---

> **Recordatorio**: La tipografía es la voz visual de EternalGrowth. Su aplicación correcta transmite profesionalismo, modernidad y confianza en cada comunicación.
