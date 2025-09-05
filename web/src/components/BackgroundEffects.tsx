'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function BackgroundEffects() {
  const [particles, setParticles] = useState<Array<{ id: number, x: number, y: number, delay: number }>>([])

  useEffect(() => {
    const particleArray = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 4
    }))
    setParticles(particleArray)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-eternal-glow-background via-transparent to-eternal-glow-scanline opacity-30" />
      
      {/* Animated Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-eternal-purple-primary rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 4,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Scanlines Effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full bg-gradient-to-b from-transparent via-eternal-glow-scanline to-transparent animate-scanline" />
      </div>
      
      {/* Corner Glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-eternal-purple-primary opacity-5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-eternal-purple-primary opacity-5 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
      
      {/* Noise Texture */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  )
}
