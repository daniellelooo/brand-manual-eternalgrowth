'use client'

import { motion } from 'framer-motion'

export default function TypographyShowcase() {
  return (
    <div className="space-y-6">
      {/* Grid Principal de Tipografías */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Space Grotesk */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glow-border rounded-xl p-6 bg-eternal-black"
        >
          <div className="text-center">
            <span className="text-eternal-glow-subtle text-xs bg-eternal-glow-background px-2 py-1 rounded mb-4 inline-block">
              LOGO & TÍTULOS
            </span>
            <h3 className="text-eternal-purple-primary font-semibold mb-2 font-space-grotesk">
              Space Grotesk
            </h3>
            <p className="text-eternal-white-soft text-sm mb-6">
              Extra Bold (800)
            </p>
            <div className="font-space-grotesk font-extrabold text-3xl glow-text mb-4">
              EternalGrowth
            </div>
            <p className="text-eternal-white-soft text-xs">
              Logotipo y elementos destacados
            </p>
          </div>
        </motion.div>

        {/* JetBrains Mono */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glow-border rounded-xl p-6 bg-eternal-black"
        >
          <div className="text-center">
            <span className="text-eternal-glow-subtle text-xs bg-eternal-glow-background px-2 py-1 rounded mb-4 inline-block">
              DINÁMICO & TÉCNICO
            </span>
            <h3 className="text-eternal-purple-primary font-semibold mb-2 font-jetbrains">
              JetBrains Mono
            </h3>
            <p className="text-eternal-white-soft text-sm mb-6">
              Regular (400)
            </p>
            <div className="font-jetbrains text-xl text-eternal-purple-primary typewriter-cursor mb-4">
              De lo básico a lo digital_
            </div>
            <p className="text-eternal-white-soft text-xs">
              Efectos typewriter y código
            </p>
          </div>
        </motion.div>

        {/* Inter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glow-border rounded-xl p-6 bg-eternal-black"
        >
          <div className="text-center">
            <span className="text-eternal-glow-subtle text-xs bg-eternal-glow-background px-2 py-1 rounded mb-4 inline-block">
              CONTENIDO GENERAL
            </span>
            <h3 className="text-eternal-purple-primary font-semibold mb-2 font-inter">
              Inter
            </h3>
            <p className="text-eternal-white-soft text-sm mb-6">
              Regular / SemiBold
            </p>
            <div className="space-y-2">
              <h4 className="font-inter font-semibold text-lg">
                Títulos y subtítulos
              </h4>
              <p className="font-inter text-eternal-white-soft text-sm">
                Párrafos y contenido de interfaz con máxima legibilidad
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Tabla de Especificaciones Simplificada */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="glow-border rounded-xl p-6 bg-eternal-black"
      >
        <h3 className="text-eternal-purple-primary font-semibold mb-4 text-center">
          Especificaciones de Uso
        </h3>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-eternal-glow-subtle">
                <th className="text-left py-3 text-eternal-purple-primary font-semibold">Fuente</th>
                <th className="text-left py-3 text-eternal-purple-primary font-semibold">Peso</th>
                <th className="text-left py-3 text-eternal-purple-primary font-semibold">Uso Principal</th>
                <th className="text-left py-3 text-eternal-purple-primary font-semibold">Espaciado</th>
              </tr>
            </thead>
            <tbody className="text-eternal-white-soft">
              <tr className="border-b border-eternal-glow-background">
                <td className="py-3 font-space-grotesk font-bold">Space Grotesk</td>
                <td className="py-3">Extra Bold (800)</td>
                <td className="py-3">Logo, títulos principales</td>
                <td className="py-3 font-jetbrains">0.08em</td>
              </tr>
              <tr className="border-b border-eternal-glow-background">
                <td className="py-3 font-jetbrains">JetBrains Mono</td>
                <td className="py-3">Regular (400)</td>
                <td className="py-3">Typewriter, elementos técnicos</td>
                <td className="py-3 font-jetbrains">0.05em</td>
              </tr>
              <tr>
                <td className="py-3 font-inter">Inter</td>
                <td className="py-3">Regular / SemiBold</td>
                <td className="py-3">Párrafos, textos de interfaz</td>
                <td className="py-3">Normal</td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  )
}
