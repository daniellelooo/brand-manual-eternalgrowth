"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function LogoShowcase() {
  return (
    <div className="space-y-8">
      {/* Versiones del Logo */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <h3 className="text-eternal-purple-primary font-semibold text-xl text-center mb-6">
          Versiones del Logo
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Logo Completo (Flor + Nombre) */}
          <div className="glow-border rounded-xl p-6 bg-eternal-black">
            <h4 className="text-eternal-white font-semibold mb-4 text-center">
              Logo Completo
            </h4>
            <div className="bg-eternal-black rounded-lg p-8 flex items-center justify-center min-h-[200px]">
              <div className="flex items-center space-x-4">
                <div className="relative w-16 h-16">
                  <Image
                    src="/assets/logo.jpeg"
                    alt="EternalGrowth Símbolo"
                    fill
                    className="object-contain"
                    style={{
                      filter: "drop-shadow(0 0 15px rgba(139, 92, 246, 0.6))",
                    }}
                  />
                </div>
                <div>
                  <h1 className="font-space-grotesk font-extrabold text-2xl glow-text">
                    EternalGrowth
                  </h1>
                  <p className="text-eternal-purple-primary text-sm font-jetbrains">
                    De lo básico a lo digital
                  </p>
                </div>
              </div>
            </div>
            <p className="text-eternal-white-soft text-sm mt-3 text-center">
              Símbolo + Nombre + Tagline
            </p>
            <p className="text-eternal-glow-subtle text-xs mt-1 text-center">
              Uso principal en headers, documentos y presentaciones
            </p>
          </div>

          {/* Solo Símbolo (Flor) */}
          <div className="glow-border rounded-xl p-6 bg-eternal-black">
            <h4 className="text-eternal-white font-semibold mb-4 text-center">
              Solo Símbolo
            </h4>
            <div className="bg-eternal-black rounded-lg p-8 flex items-center justify-center min-h-[200px]">
              <div className="relative w-20 h-20">
                <Image
                  src="/assets/logo.jpeg"
                  alt="EternalGrowth Símbolo"
                  fill
                  className="object-contain"
                  style={{
                    filter: "drop-shadow(0 0 15px rgba(139, 92, 246, 0.6))",
                  }}
                />
              </div>
            </div>
            <p className="text-eternal-white-soft text-sm mt-3 text-center">
              Solo el símbolo de la flor
            </p>
            <p className="text-eternal-glow-subtle text-xs mt-1 text-center">
              Para favicons, avatares y espacios reducidos
            </p>
          </div>
        </div>
      </motion.div>

      {/* Variaciones por Tamaño */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="space-y-6"
      >
        <h3 className="text-eternal-purple-primary font-semibold text-xl text-center">
          Variaciones por Tamaño
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Tamaño Grande */}
          <div className="glow-border rounded-xl p-6 bg-eternal-black">
            <h4 className="text-eternal-white font-semibold mb-4 text-center">
              Grande
            </h4>
            <div className="bg-eternal-black rounded-lg p-6 text-center min-h-[180px] flex flex-col justify-center">
              <div className="flex items-center justify-center space-x-3 mb-2">
                <div className="relative w-12 h-12">
                  <Image
                    src="/assets/logo.jpeg"
                    alt="EternalGrowth"
                    fill
                    className="object-contain"
                    style={{
                      filter: "drop-shadow(0 0 12px rgba(139, 92, 246, 0.6))",
                    }}
                  />
                </div>
                <div>
                  <h1 className="font-space-grotesk font-extrabold text-xl glow-text">
                    EternalGrowth
                  </h1>
                </div>
              </div>
            </div>
            <p className="text-eternal-white-soft text-xs mt-3 text-center">
              Headers, banners, documentos principales
            </p>
          </div>

          {/* Tamaño Mediano */}
          <div className="glow-border rounded-xl p-6 bg-eternal-black">
            <h4 className="text-eternal-white font-semibold mb-4 text-center">
              Mediano
            </h4>
            <div className="bg-eternal-black rounded-lg p-6 text-center min-h-[180px] flex flex-col justify-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <div className="relative w-8 h-8">
                  <Image
                    src="/assets/logo.jpeg"
                    alt="EternalGrowth"
                    fill
                    className="object-contain"
                    style={{
                      filter: "drop-shadow(0 0 8px rgba(139, 92, 246, 0.5))",
                    }}
                  />
                </div>
                <span className="font-space-grotesk font-bold text-lg text-eternal-purple-primary">
                  EternalGrowth
                </span>
              </div>
            </div>
            <p className="text-eternal-white-soft text-xs mt-3 text-center">
              Sidebars, footers, formularios
            </p>
          </div>

          {/* Tamaño Pequeño */}
          <div className="glow-border rounded-xl p-6 bg-eternal-black">
            <h4 className="text-eternal-white font-semibold mb-4 text-center">
              Pequeño
            </h4>
            <div className="bg-eternal-black rounded-lg p-6 text-center min-h-[180px] flex flex-col justify-center">
              <div className="relative w-12 h-12 mx-auto">
                <Image
                  src="/assets/logo.jpeg"
                  alt="EternalGrowth"
                  fill
                  className="object-contain"
                  style={{
                    filter: "drop-shadow(0 0 6px rgba(139, 92, 246, 0.4))",
                  }}
                />
              </div>
            </div>
            <p className="text-eternal-white-soft text-xs mt-3 text-center">
              Favicons, avatares, elementos pequeños
            </p>
          </div>
        </div>
      </motion.div>

      {/* Usos en Diferentes Fondos */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-6"
      >
        <h3 className="text-eternal-purple-primary font-semibold text-xl text-center">
          Aplicación en Diferentes Fondos
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Fondo Negro */}
          <div className="glow-border rounded-xl p-6 bg-eternal-black">
            <h4 className="text-eternal-white font-semibold mb-4 text-center">
              Fondo Negro
            </h4>
            <div className="bg-eternal-black rounded-lg p-6 text-center min-h-[120px] flex items-center justify-center">
              <div className="flex items-center space-x-2">
                <div className="relative w-8 h-8">
                  <Image
                    src="/assets/logo.jpeg"
                    alt="EternalGrowth"
                    fill
                    className="object-contain"
                    style={{
                      filter: "drop-shadow(0 0 10px rgba(139, 92, 246, 0.6))",
                    }}
                  />
                </div>
                <span className="font-space-grotesk font-bold text-eternal-purple-primary">
                  EternalGrowth
                </span>
              </div>
            </div>
            <p className="text-eternal-white-soft text-xs mt-3 text-center">
              ✅ Preferido - Con efecto glow
            </p>
          </div>

          {/* Fondo Blanco */}
          <div className="border border-eternal-glow-subtle rounded-xl p-6 bg-eternal-black">
            <h4 className="text-eternal-white font-semibold mb-4 text-center">
              Fondo Blanco
            </h4>
            <div className="bg-white rounded-lg p-6 text-center min-h-[120px] flex items-center justify-center">
              <div className="flex items-center space-x-2">
                <div className="relative w-8 h-8 bg-black rounded p-1">
                  <Image
                    src="/assets/logo.jpeg"
                    alt="EternalGrowth"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="font-space-grotesk font-bold text-black">
                  EternalGrowth
                </span>
              </div>
            </div>
            <p className="text-eternal-white-soft text-xs mt-3 text-center">
              ✅ Con caja negra de protección
            </p>
          </div>

          {/* Gradiente */}
          <div className="glow-border rounded-xl p-6 bg-eternal-black">
            <h4 className="text-eternal-white font-semibold mb-4 text-center">
              Gradiente
            </h4>
            <div className="bg-gradient-to-r from-eternal-purple-primary/20 to-eternal-black rounded-lg p-6 text-center min-h-[120px] flex items-center justify-center">
              <div className="flex items-center space-x-2">
                <div className="relative w-8 h-8">
                  <Image
                    src="/assets/logo.jpeg"
                    alt="EternalGrowth"
                    fill
                    className="object-contain"
                    style={{
                      filter: "drop-shadow(0 0 8px rgba(139, 92, 246, 0.4))",
                    }}
                  />
                </div>
                <span className="font-space-grotesk font-bold text-eternal-white">
                  EternalGrowth
                </span>
              </div>
            </div>
            <p className="text-eternal-white-soft text-xs mt-3 text-center">
              ✅ Solo gradientes púrpura-negro
            </p>
          </div>
        </div>
      </motion.div>

      {/* Descarga de Recursos */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="glow-border rounded-xl p-6 bg-eternal-black text-center"
      >
        <h3 className="text-eternal-purple-primary font-semibold text-xl mb-4">
          Recursos Disponibles
        </h3>
        <p className="text-eternal-white-soft mb-6">
          Descarga los archivos oficiales del logo en diferentes formatos
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="glow-button px-4 py-3 rounded-lg text-sm font-medium">
            📁 Logo Completo (.PNG)
          </button>
          <button className="glow-button px-4 py-3 rounded-lg text-sm font-medium">
            🌸 Solo Símbolo (.PNG)
          </button>
          <button className="glow-button px-4 py-3 rounded-lg text-sm font-medium">
            📄 Kit Completo (.ZIP)
          </button>
        </div>
      </motion.div>
    </div>
  );
}
