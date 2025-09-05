'use client'

import { motion } from 'framer-motion'

interface ColorBlockProps {
  name: string
  hex: string
  rgb: string
  description?: string
  isGlow?: boolean
}

function ColorBlock({ name, hex, rgb, description, isGlow = false }: ColorBlockProps) {
  const isPurple = hex.includes('#8B5CF6') || hex.includes('#C084FC') || hex.includes('#A855F7')
  
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="glow-border rounded-xl p-4 bg-eternal-black"
    >
      <div 
        className={`w-full h-24 rounded-lg mb-3 ${
          isPurple ? 'shadow-lg' : ''
        }`}
        style={{ 
          backgroundColor: hex,
          boxShadow: isPurple ? `0 0 20px ${hex}40, 0 0 40px ${hex}20` : 'none'
        }}
      ></div>
      
      <h4 className="font-semibold text-eternal-white mb-1">{name}</h4>
      <div className="space-y-1 text-sm">
        <p className="text-eternal-purple-primary font-jetbrains">{hex}</p>
        <p className="text-eternal-white-soft">{rgb}</p>
        {description && (
          <p className="text-eternal-glow-subtle text-xs mt-2">{description}</p>
        )}
      </div>
    </motion.div>
  )
}

export default function ColorPalette() {
  const baseColors = [
    {
      name: 'Negro Profundo',
      hex: '#000000',
      rgb: 'RGB: 0, 0, 0',
      description: 'Fondos principales'
    },
    {
      name: 'Blanco Puro',
      hex: '#FFFFFF',
      rgb: 'RGB: 255, 255, 255',
      description: 'Texto principal'
    },
    {
      name: 'Blanco Suave',
      hex: 'rgba(255, 255, 255, 0.95)',
      rgb: 'RGBA: 255, 255, 255, 0.95',
      description: 'Texto secundario'
    }
  ]

  const brandColors = [
    {
      name: 'Púrpura Primario',
      hex: '#8B5CF6',
      rgb: 'RGB: 139, 92, 246',
      description: 'CTAs y elementos destacados'
    },
    {
      name: 'Púrpura Claro',
      hex: '#C084FC',
      rgb: 'RGB: 192, 132, 252',
      description: 'Hover states'
    },
    {
      name: 'Púrpura Intermedio',
      hex: '#A855F7',
      rgb: 'RGB: 168, 85, 247',
      description: 'Acentos y enlaces'
    }
  ]

  const glowVariations = [
    { name: 'Glow Intenso', opacity: '0.8', use: 'Efectos destacados' },
    { name: 'Glow Medio', opacity: '0.6', use: 'Hover states' },
    { name: 'Glow Suave', opacity: '0.4', use: 'Bordes y marcos' },
    { name: 'Glow Sutil', opacity: '0.2', use: 'Elementos sutiles' },
    { name: 'Glow de Fondo', opacity: '0.05', use: 'Fondos ambientales' }
  ]

  return (
    <div className="space-y-8">
      {/* Colores Base */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-eternal-purple-primary font-semibold text-xl mb-6 text-center">
          Colores Base
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {baseColors.map((color, index) => (
            <ColorBlock key={index} {...color} />
          ))}
        </div>
      </motion.div>

      {/* Colores de Marca */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h3 className="text-eternal-purple-primary font-semibold text-xl mb-6 text-center">
          Púrpura de Marca
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {brandColors.map((color, index) => (
            <ColorBlock key={index} {...color} />
          ))}
        </div>
      </motion.div>

      {/* Variaciones de Glow */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="glow-border rounded-xl p-6 bg-eternal-black"
      >
        <h3 className="text-eternal-purple-primary font-semibold text-xl mb-6 text-center">
          Transparencias para Efectos
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {glowVariations.map((variation, index) => (
            <div key={index} className="text-center">
              <div 
                className="w-full h-16 rounded-lg mb-3 border border-eternal-glow-background"
                style={{ 
                  backgroundColor: `rgba(139, 92, 246, ${variation.opacity})`,
                  boxShadow: `0 0 15px rgba(139, 92, 246, ${parseFloat(variation.opacity) * 0.5})`
                }}
              ></div>
              <h4 className="font-semibold text-eternal-white text-sm mb-1">{variation.name}</h4>
              <p className="text-eternal-purple-primary font-jetbrains text-xs mb-2">
                rgba(139, 92, 246, {variation.opacity})
              </p>
              <p className="text-eternal-glow-subtle text-xs">
                {variation.use}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Ejemplos de Aplicación */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Botones */}
        <div className="glow-border rounded-xl p-6 bg-eternal-black">
          <h4 className="text-eternal-white font-semibold mb-4 text-center">Botones</h4>
          <div className="space-y-3">
            <button className="w-full glow-button px-4 py-3 rounded-lg font-semibold">
              Botón Primario
            </button>
            <button className="w-full border border-eternal-purple-primary text-eternal-purple-primary px-4 py-3 rounded-lg font-semibold hover:bg-eternal-glow-background transition-all">
              Botón Secundario
            </button>
          </div>
        </div>

        {/* Texto con Efectos */}
        <div className="glow-border rounded-xl p-6 bg-eternal-black">
          <h4 className="text-eternal-white font-semibold mb-4 text-center">Texto con Glow</h4>
          <div className="text-center space-y-3">
            <h2 className="font-space-grotesk font-bold text-2xl glow-text">
              EternalGrowth
            </h2>
            <p className="text-eternal-purple-primary font-jetbrains">
              De lo básico a lo digital
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
