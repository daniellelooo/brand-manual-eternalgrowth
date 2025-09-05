'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Header() {
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString('es-ES', { 
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit'
      }))
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-10 bg-eternal-black/80 backdrop-blur-md border-b glow-border"
    >
      <div className="flex items-center justify-between p-6">
        <div>
          <h2 className="text-2xl font-space-grotesk font-bold glow-text">
            Brand Manual
          </h2>
          <p className="text-eternal-white-soft text-sm mt-1">
            Guía completa de identidad visual
          </p>
        </div>
        
        <div className="flex items-center space-x-6">
          <div className="text-right">
            <p className="text-eternal-white-soft text-sm">
              Medellín, Colombia
            </p>
            <p className="text-eternal-purple-primary font-jetbrains text-sm">
              {currentTime}
            </p>
          </div>
          
          <div className="w-px h-8 bg-eternal-glow-subtle"></div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glow-button px-4 py-2 rounded-lg text-sm font-medium"
          >
            Exportar PDF
          </motion.button>
        </div>
      </div>
    </motion.header>
  )
}
