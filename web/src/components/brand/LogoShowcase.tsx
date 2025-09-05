'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function LogoShowcase() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {/* Logo Principal */}
        <div className="glow-border rounded-xl p-6 bg-eternal-black">
          <h3 className="text-eternal-purple-primary font-semibold mb-4 text-center">
            Logo Principal
          </h3>
          <div className="bg-eternal-black rounded-lg p-8 flex items-center justify-center min-h-[200px]">
            <div className="relative w-24 h-24">
              <Image
                src="/assets/logo.jpeg"
                alt="EternalGrowth Logo Principal"
                fill
                className="object-contain rounded-lg"
                style={{
                  filter: 'drop-shadow(0 0 15px rgba(139, 92, 246, 0.6))'
                }}
              />
            </div>
          </div>
          <p className="text-eternal-white-soft text-sm mt-3 text-center">
            Con efecto glow púrpura
          </p>
        </div>

        {/* Logo Negativo */}
        <div className="glow-border rounded-xl p-6 bg-eternal-black">
          <h3 className="text-eternal-purple-primary font-semibold mb-4 text-center">
            Logo Negativo
          </h3>
          <div className="bg-eternal-black rounded-lg p-8 flex items-center justify-center min-h-[200px]">
            <div className="relative w-24 h-24">
              <Image
                src="/assets/logo.jpeg"
                alt="EternalGrowth Logo Negativo"
                fill
                className="object-contain rounded-lg"
              />
            </div>
          </div>
          <p className="text-eternal-white-soft text-sm mt-3 text-center">
            Sin glow, fondo negro
          </p>
        </div>

        {/* Ícono Reducido */}
        <div className="glow-border rounded-xl p-6 bg-eternal-black">
          <h3 className="text-eternal-purple-primary font-semibold mb-4 text-center">
            Ícono Reducido
          </h3>
          <div className="bg-eternal-black rounded-lg p-8 flex items-center justify-center min-h-[200px]">
            <div className="relative w-16 h-16">
              <Image
                src="/assets/logo.jpeg"
                alt="EternalGrowth Ícono"
                fill
                className="object-contain rounded-lg"
                style={{
                  filter: 'drop-shadow(0 0 10px rgba(139, 92, 246, 0.4))'
                }}
              />
            </div>
          </div>
          <p className="text-eternal-white-soft text-sm mt-3 text-center">
            Para favicons y avatares
          </p>
        </div>
      </motion.div>

      {/* Usos Correctos e Incorrectos */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
      >
        <div className="glow-border rounded-xl p-6 bg-eternal-black">
          <h3 className="text-green-400 font-semibold mb-4 flex items-center">
            <span className="mr-2">✅</span> Usos Correctos
          </h3>
          <ul className="space-y-2 text-eternal-white-soft">
            <li>• Mantener proporciones</li>
            <li>• Usar solo en negro o gradientes púrpura</li>
            <li>• Glow respetando paleta definida</li>
          </ul>
        </div>

        <div className="glow-border rounded-xl p-6 bg-eternal-black">
          <h3 className="text-red-400 font-semibold mb-4 flex items-center">
            <span className="mr-2">❌</span> Usos Incorrectos
          </h3>
          <ul className="space-y-2 text-eternal-white-soft">
            <li>• Deformar el logo</li>
            <li>• Cambiar colores fuera de la paleta</li>
            <li>• Usarlo sobre fondos claros sin caja negra</li>
          </ul>
        </div>
      </motion.div>
    </div>
  )
}
