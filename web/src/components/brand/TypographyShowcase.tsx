'use client'

import { motion } from 'framer-motion'

export default function TypographyShowcase() {
  return (
    <div className="space-y-8">
      {/* Fuentes Principales */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <h3 className="text-eternal-purple-primary font-semibold text-xl text-center mb-6">
          Fuentes del Sistema
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Space Grotesk */}
          <div className="glow-border rounded-xl p-6 bg-eternal-black">
            <div className="text-center mb-6">
              <span className="text-eternal-glow-subtle text-xs bg-eternal-glow-background px-2 py-1 rounded mb-3 inline-block">
                MARCA & IMPACTO
              </span>
              <h4 className="text-eternal-purple-primary font-semibold mb-2 font-space-grotesk">
                Space Grotesk
              </h4>
              <p className="text-eternal-white-soft text-sm">
                Extra Bold • Logotipo y títulos principales
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="font-space-grotesk font-extrabold text-2xl glow-text text-center">
                EternalGrowth
              </div>
              
              <div className="text-center">
                <p className="text-eternal-white-soft text-xs mb-2">Usos:</p>
                <ul className="text-eternal-white-soft text-xs space-y-1">
                  <li>• Logotipo principal</li>
                  <li>• Títulos de máximo impacto</li>
                  <li>• CTAs importantes</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Inter */}
          <div className="glow-border rounded-xl p-6 bg-eternal-black">
            <div className="text-center mb-6">
              <span className="text-eternal-glow-subtle text-xs bg-eternal-glow-background px-2 py-1 rounded mb-3 inline-block">
                CORPORATIVA & LEGIBLE
              </span>
              <h4 className="text-eternal-purple-primary font-semibold mb-2 font-inter">
                Inter
              </h4>
              <p className="text-eternal-white-soft text-sm">
                Regular a Bold • Textos y navegación
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="font-inter text-lg font-semibold text-eternal-white text-center">
                Contenido Principal
              </div>
              
              <div className="text-center">
                <p className="text-eternal-white-soft text-xs mb-2">Usos:</p>
                <ul className="text-eternal-white-soft text-xs space-y-1">
                  <li>• Párrafos y textos largos</li>
                  <li>• Interfaz y navegación</li>
                  <li>• Documentos corporativos</li>
                </ul>
              </div>
            </div>
          </div>

          {/* JetBrains Mono */}
          <div className="glow-border rounded-xl p-6 bg-eternal-black">
            <div className="text-center mb-6">
              <span className="text-eternal-glow-subtle text-xs bg-eternal-glow-background px-2 py-1 rounded mb-3 inline-block">
                TÉCNICA & DINÁMICA
              </span>
              <h4 className="text-eternal-purple-primary font-semibold mb-2 font-jetbrains">
                JetBrains Mono
              </h4>
              <p className="text-eternal-white-soft text-sm">
                Regular • Efectos dinámicos y código
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="font-jetbrains text-lg text-eternal-purple-primary text-center typewriter-cursor">
                digitalización_
              </div>
              
              <div className="text-center">
                <p className="text-eternal-white-soft text-xs mb-2">Usos:</p>
                <ul className="text-eternal-white-soft text-xs space-y-1">
                  <li>• Efectos typewriter</li>
                  <li>• Código y datos técnicos</li>
                  <li>• Métricas y timestamps</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Jerarquía Tipográfica */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="space-y-6"
      >
        <h3 className="text-eternal-purple-primary font-semibold text-xl text-center">
          Jerarquía y Escalas
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Escala Principal */}
          <div className="glow-border rounded-xl p-6 bg-eternal-black">
            <h4 className="text-eternal-white font-semibold mb-6 text-center">
              Escala Principal (Space Grotesk + Inter)
            </h4>
            
            <div className="space-y-6">
              {/* H1 */}
              <div>
                <h1 className="font-space-grotesk font-extrabold text-3xl glow-text mb-2">
                  Título Principal H1
                </h1>
                <p className="text-eternal-glow-subtle text-xs">
                  Space Grotesk Extra Bold • 48px • Logotipo y máximo impacto
                </p>
              </div>
              
              {/* H2 */}
              <div>
                <h2 className="font-inter font-bold text-2xl text-eternal-purple-primary mb-2">
                  Título Secundario H2
                </h2>
                <p className="text-eternal-glow-subtle text-xs">
                  Inter Bold • 32px • Secciones principales
                </p>
              </div>
              
              {/* H3 */}
              <div>
                <h3 className="font-inter font-semibold text-xl text-eternal-white mb-2">
                  Subtítulo H3
                </h3>
                <p className="text-eternal-glow-subtle text-xs">
                  Inter SemiBold • 24px • Subsecciones
                </p>
              </div>
              
              {/* Body */}
              <div>
                <p className="font-inter text-eternal-white-soft mb-2">
                  Texto de párrafo regular que demuestra la legibilidad de Inter en contenido largo.
                </p>
                <p className="text-eternal-glow-subtle text-xs">
                  Inter Regular • 16px • Contenido principal
                </p>
              </div>
              
              {/* Small */}
              <div>
                <p className="font-inter text-sm text-eternal-white-soft mb-2">
                  Texto pequeño para detalles y anotaciones secundarias.
                </p>
                <p className="text-eternal-glow-subtle text-xs">
                  Inter Regular • 14px • Detalles y metadatos
                </p>
              </div>
            </div>
          </div>

          {/* Escala Técnica */}
          <div className="glow-border rounded-xl p-6 bg-eternal-black">
            <h4 className="text-eternal-white font-semibold mb-6 text-center">
              Escala Técnica (JetBrains Mono)
            </h4>
            
            <div className="space-y-6">
              {/* Code Large */}
              <div>
                <div className="font-jetbrains text-lg text-eternal-purple-primary mb-2 bg-eternal-glow-background p-3 rounded">
                  const eternalgrowth = "digital"
                </div>
                <p className="text-eternal-glow-subtle text-xs">
                  JetBrains Mono • 18px • Código destacado
                </p>
              </div>
              
              {/* Typewriter Effect */}
              <div>
                <div className="font-jetbrains text-base text-eternal-purple-primary mb-2 typewriter-cursor">
                  De lo básico a lo digital_
                </div>
                <p className="text-eternal-glow-subtle text-xs">
                  JetBrains Mono • 16px • Efecto typewriter
                </p>
              </div>
              
              {/* Data/Metrics */}
              <div>
                <div className="font-jetbrains text-sm text-eternal-white mb-2">
                  +150% crecimiento | 2025-09-05 | 14:30:45
                </div>
                <p className="text-eternal-glow-subtle text-xs">
                  JetBrains Mono • 14px • Métricas y timestamps
                </p>
              </div>
              
              {/* Code Inline */}
              <div>
                <p className="font-inter text-eternal-white-soft mb-2">
                  Para ejecutar usa <code className="font-jetbrains text-xs bg-eternal-glow-background px-2 py-1 rounded text-eternal-purple-primary">npm run dev</code>
                </p>
                <p className="text-eternal-glow-subtle text-xs">
                  JetBrains Mono • 12px • Código inline
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Casos de Uso Prácticos */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-6"
      >
        <h3 className="text-eternal-purple-primary font-semibold text-xl text-center">
          Casos de Uso Prácticos
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Landing Page */}
          <div className="glow-border rounded-xl p-6 bg-eternal-black">
            <h4 className="text-eternal-white font-semibold mb-4 text-center">Landing Page</h4>
            
            <div className="space-y-3">
              <h1 className="font-space-grotesk font-extrabold text-xl glow-text">
                EternalGrowth
              </h1>
              <p className="font-jetbrains text-sm text-eternal-purple-primary typewriter-cursor">
                transformación_digital
              </p>
              <p className="font-inter text-sm text-eternal-white-soft">
                Llevamos tu negocio al siguiente nivel con soluciones digitales innovadoras.
              </p>
              <button className="glow-button px-4 py-2 rounded font-inter font-medium text-sm">
                Comenzar
              </button>
            </div>
          </div>

          {/* Documento Corporativo */}
          <div className="glow-border rounded-xl p-6 bg-eternal-black">
            <h4 className="text-eternal-white font-semibold mb-4 text-center">Documento</h4>
            
            <div className="space-y-3">
              <h2 className="font-inter font-bold text-lg text-eternal-purple-primary">
                Propuesta Comercial
              </h2>
              <h3 className="font-inter font-semibold text-base text-eternal-white">
                Objetivos del Proyecto
              </h3>
              <p className="font-inter text-sm text-eternal-white-soft leading-relaxed">
                Implementar una estrategia de digitalización integral que optimize los procesos comerciales.
              </p>
              <div className="font-jetbrains text-xs text-eternal-white-soft">
                Fecha: 2025-09-05 | Versión: 1.0
              </div>
            </div>
          </div>

          {/* Interfaz de App */}
          <div className="glow-border rounded-xl p-6 bg-eternal-black">
            <h4 className="text-eternal-white font-semibold mb-4 text-center">Interfaz App</h4>
            
            <div className="space-y-3">
              <nav className="flex space-x-4 text-sm">
                <span className="font-inter text-eternal-purple-primary font-medium">Dashboard</span>
                <span className="font-inter text-eternal-white-soft">Clientes</span>
                <span className="font-inter text-eternal-white-soft">Reportes</span>
              </nav>
              
              <div className="border-t border-eternal-glow-subtle pt-3">
                <h3 className="font-inter font-semibold text-eternal-white mb-2">
                  Métricas de Hoy
                </h3>
                <div className="font-jetbrains text-sm text-eternal-purple-primary">
                  Ventas: $12,450 | Usuarios: 847
                </div>
                <p className="font-inter text-xs text-eternal-white-soft mt-2">
                  Actualizado hace 5 minutos
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mejores Prácticas */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="glow-border rounded-xl p-6 bg-eternal-black"
      >
        <h3 className="text-eternal-purple-primary font-semibold text-xl mb-6 text-center">
          Mejores Prácticas
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Do's */}
          <div>
            <h4 className="text-green-400 font-semibold mb-4 flex items-center">
              <span className="mr-2">✅</span> Recomendaciones
            </h4>
            <ul className="space-y-3 text-eternal-white-soft text-sm">
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                <span>Usar Space Grotesk solo para elementos de máximo impacto</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                <span>Inter para todo el contenido legible y navegación</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                <span>JetBrains Mono para datos, código y efectos especiales</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                <span>Mantener jerarquía clara con máximo 3 niveles</span>
              </li>
            </ul>
          </div>

          {/* Don'ts */}
          <div>
            <h4 className="text-red-400 font-semibold mb-4 flex items-center">
              <span className="mr-2">❌</span> Evitar
            </h4>
            <ul className="space-y-3 text-eternal-white-soft text-sm">
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                <span>Mezclar más de 3 tipografías en un diseño</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                <span>Usar tamaños menores a 14px en móvil</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                <span>Comprometer legibilidad por estética</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                <span>Alterar letter-spacing sin autorización</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
