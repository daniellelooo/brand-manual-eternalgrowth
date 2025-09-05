'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ApplicationShowcase() {
  return (
    <div className="space-y-8">
      {/* Redes Sociales */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <h3 className="text-eternal-purple-primary font-semibold text-xl text-center">
          Redes Sociales
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LinkedIn Post */}
          <div className="glow-border rounded-xl p-4 bg-eternal-black">
            <h4 className="text-eternal-white font-semibold mb-3 text-center text-sm">LinkedIn</h4>
            <div className="bg-white rounded-lg p-4 text-black">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 relative mr-3 bg-black rounded-full p-1">
                  <Image
                    src="/assets/logo.jpeg"
                    alt="EternalGrowth"
                    fill
                    className="object-contain rounded-full"
                  />
                </div>
                <div>
                  <h5 className="font-semibold text-sm">EternalGrowth</h5>
                  <p className="text-gray-600 text-xs">Transformación Digital</p>
                </div>
              </div>
              <p className="text-sm mb-2">
                🚀 <strong>¿Tu negocio está listo para el futuro digital?</strong>
              </p>
              <p className="text-xs text-gray-700">
                En EternalGrowth transformamos empresas tradicionales en líderes digitales...
              </p>
              <div className="mt-2 text-purple-600 text-xs">#TransformaciónDigital #Medellín</div>
            </div>
          </div>

          {/* Instagram Story */}
          <div className="glow-border rounded-xl p-4 bg-eternal-black">
            <h4 className="text-eternal-white font-semibold mb-3 text-center text-sm">Instagram Story</h4>
            <div className="bg-gradient-to-b from-purple-900 to-black rounded-2xl p-6 text-center aspect-[9/16] max-h-48">
              <div className="w-12 h-12 mx-auto mb-3 relative">
                <Image
                  src="/assets/logo.jpeg"
                  alt="EternalGrowth"
                  fill
                  className="object-contain rounded-full"
                  style={{
                    filter: 'drop-shadow(0 0 10px rgba(139, 92, 246, 0.8))'
                  }}
                />
              </div>
              <h5 className="font-space-grotesk font-bold text-sm glow-text mb-2">
                EternalGrowth
              </h5>
              <p className="text-eternal-white-soft text-xs font-jetbrains">
                De lo básico a lo digital_
              </p>
              <div className="mt-4">
                <button className="bg-purple-600 text-white px-4 py-1 rounded-full text-xs">
                  Conoce más
                </button>
              </div>
            </div>
          </div>

          {/* WhatsApp Business */}
          <div className="glow-border rounded-xl p-4 bg-eternal-black">
            <h4 className="text-eternal-white font-semibold mb-3 text-center text-sm">WhatsApp Business</h4>
            <div className="bg-green-100 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 relative mr-2 bg-black rounded-full p-1">
                  <Image
                    src="/assets/logo.jpeg"
                    alt="EternalGrowth"
                    fill
                    className="object-contain rounded-full"
                  />
                </div>
                <div>
                  <h5 className="font-semibold text-sm text-black">EternalGrowth</h5>
                  <p className="text-green-600 text-xs">En línea</p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-3 text-black">
                <p className="text-sm mb-2">
                  ¡Hola! 👋 Soy parte del equipo de EternalGrowth
                </p>
                <p className="text-xs text-gray-600">
                  ¿Te gustaría conocer cómo podemos digitalizar tu negocio?
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Web y Landing Pages */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="space-y-6"
      >
        <h3 className="text-eternal-purple-primary font-semibold text-xl text-center">
          Web y Landing Pages
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Landing Page Hero */}
          <div className="glow-border rounded-xl p-4 bg-eternal-black">
            <h4 className="text-eternal-white font-semibold mb-3 text-center text-sm">Landing Page</h4>
            <div className="bg-eternal-black border border-eternal-glow-subtle rounded-lg p-6">
              <div className="text-center space-y-4">
                <div className="w-12 h-12 mx-auto relative">
                  <Image
                    src="/assets/logo.jpeg"
                    alt="EternalGrowth Logo"
                    fill
                    className="object-contain"
                    style={{
                      filter: 'drop-shadow(0 0 15px rgba(139, 92, 246, 0.6))'
                    }}
                  />
                </div>
                
                <div>
                  <h1 className="font-space-grotesk font-extrabold text-2xl glow-text mb-2">
                    EternalGrowth
                  </h1>
                  <div className="font-jetbrains text-sm text-eternal-purple-primary typewriter-cursor">
                    De lo básico a lo digital_
                  </div>
                </div>
                
                <p className="text-eternal-white-soft text-xs max-w-xs mx-auto">
                  Transformamos negocios tradicionales en líderes digitales
                </p>
                
                <div className="flex justify-center space-x-2">
                  <button className="glow-button px-4 py-2 rounded-lg text-xs font-medium">
                    Comenzar
                  </button>
                  <button className="border border-eternal-purple-primary text-eternal-purple-primary px-4 py-2 rounded-lg text-xs font-medium">
                    Demo
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Dashboard/App Interface */}
          <div className="glow-border rounded-xl p-4 bg-eternal-black">
            <h4 className="text-eternal-white font-semibold mb-3 text-center text-sm">Dashboard</h4>
            <div className="bg-eternal-black border border-eternal-glow-subtle rounded-lg p-4">
              {/* Header */}
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-eternal-glow-background">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 relative">
                    <Image
                      src="/assets/logo.jpeg"
                      alt="EternalGrowth"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="font-space-grotesk font-bold text-eternal-purple-primary text-sm">
                    EternalGrowth
                  </span>
                </div>
                <div className="w-6 h-6 bg-eternal-purple-primary rounded-full"></div>
              </div>
              
              {/* Content */}
              <div className="space-y-3">
                <h3 className="font-inter font-semibold text-eternal-white text-sm">
                  Dashboard Principal
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-eternal-glow-background rounded p-2">
                    <div className="w-full h-8 bg-eternal-purple-primary rounded mb-1"></div>
                    <p className="text-eternal-white-soft text-xs">Ventas</p>
                  </div>
                  <div className="bg-eternal-glow-background rounded p-2">
                    <div className="w-full h-8 bg-eternal-purple-light rounded mb-1"></div>
                    <p className="text-eternal-white-soft text-xs">Clientes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Documentos y Presentaciones */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-6"
      >
        <h3 className="text-eternal-purple-primary font-semibold text-xl text-center">
          Documentos Corporativos
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Propuesta Comercial */}
          <div className="glow-border rounded-xl p-4 bg-eternal-black">
            <h4 className="text-eternal-white font-semibold mb-3 text-center text-sm">Propuesta Comercial</h4>
            <div className="bg-white rounded-lg p-4 text-black">
              {/* Header */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 relative bg-black rounded p-1">
                    <Image
                      src="/assets/logo.jpeg"
                      alt="EternalGrowth"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="font-space-grotesk font-bold text-purple-600 text-sm">
                      EternalGrowth
                    </h4>
                    <p className="text-gray-600 text-xs">Transformación Digital</p>
                  </div>
                </div>
                <div className="text-right text-xs text-gray-600">
                  <p>Propuesta #2025-001</p>
                  <p>05/09/2025</p>
                </div>
              </div>
              
              {/* Contenido */}
              <div className="space-y-3">
                <h2 className="font-inter font-semibold text-lg">
                  Digitalización Integral
                </h2>
                <p className="font-inter text-gray-700 text-sm">
                  Transformamos tu negocio con soluciones digitales personalizadas que garantizan crecimiento sostenible.
                </p>
                <ul className="font-inter text-gray-700 text-sm space-y-1 ml-4">
                  <li>• Desarrollo web profesional</li>
                  <li>• Marketing digital estratégico</li>
                  <li>• Automatización de procesos</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Presentación PowerPoint */}
          <div className="glow-border rounded-xl p-4 bg-eternal-black">
            <h4 className="text-eternal-white font-semibold mb-3 text-center text-sm">Presentación</h4>
            <div className="bg-eternal-black border border-eternal-glow-subtle rounded-lg p-4">
              {/* Slide */}
              <div className="bg-gradient-to-br from-eternal-black to-eternal-purple-primary/10 rounded p-4 text-center">
                <div className="w-8 h-8 mx-auto mb-2 relative">
                  <Image
                    src="/assets/logo.jpeg"
                    alt="EternalGrowth"
                    fill
                    className="object-contain"
                    style={{
                      filter: 'drop-shadow(0 0 10px rgba(139, 92, 246, 0.6))'
                    }}
                  />
                </div>
                <h1 className="font-space-grotesk font-bold text-lg glow-text mb-2">
                  EternalGrowth
                </h1>
                <h2 className="font-inter font-semibold text-eternal-white text-sm mb-3">
                  Resultados del Primer Trimestre
                </h2>
                
                {/* Gráfico simulado */}
                <div className="grid grid-cols-3 gap-2 mb-3">
                  <div className="bg-eternal-purple-primary h-8 rounded"></div>
                  <div className="bg-eternal-purple-light h-12 rounded"></div>
                  <div className="bg-eternal-purple-medium h-6 rounded"></div>
                </div>
                
                <p className="text-eternal-white-soft text-xs">
                  +150% crecimiento digital promedio
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Materiales de Marketing */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="space-y-6"
      >
        <h3 className="text-eternal-purple-primary font-semibold text-xl text-center">
          Materiales de Marketing
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Tarjeta de Presentación */}
          <div className="glow-border rounded-xl p-4 bg-eternal-black">
            <h4 className="text-eternal-white font-semibold mb-3 text-center text-sm">Tarjeta Personal</h4>
            <div className="bg-eternal-black border-2 border-eternal-purple-primary rounded-lg p-4 aspect-[1.75/1]">
              <div className="flex flex-col justify-between h-full">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 relative">
                    <Image
                      src="/assets/logo.jpeg"
                      alt="EternalGrowth"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="font-space-grotesk font-bold text-eternal-purple-primary text-xs">
                    EternalGrowth
                  </span>
                </div>
                
                <div>
                  <h5 className="font-inter font-semibold text-eternal-white text-sm">
                    Juan Pérez
                  </h5>
                  <p className="text-eternal-white-soft text-xs">CEO & Founder</p>
                  <p className="text-eternal-purple-primary text-xs font-jetbrains mt-1">
                    +57 300 123 4567
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Banner Web */}
          <div className="glow-border rounded-xl p-4 bg-eternal-black">
            <h4 className="text-eternal-white font-semibold mb-3 text-center text-sm">Banner Web</h4>
            <div className="bg-gradient-to-r from-eternal-black via-eternal-purple-primary/20 to-eternal-black rounded-lg p-4 aspect-[3/1]">
              <div className="flex items-center justify-between h-full">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 relative">
                    <Image
                      src="/assets/logo.jpeg"
                      alt="EternalGrowth"
                      fill
                      className="object-contain"
                      style={{
                        filter: 'drop-shadow(0 0 10px rgba(139, 92, 246, 0.8))'
                      }}
                    />
                  </div>
                  <div>
                    <h5 className="font-space-grotesk font-bold text-eternal-purple-primary text-sm">
                      EternalGrowth
                    </h5>
                    <p className="text-eternal-white-soft text-xs">
                      Digitaliza tu negocio hoy
                    </p>
                  </div>
                </div>
                <button className="glow-button px-3 py-1 rounded text-xs">
                  Comenzar
                </button>
              </div>
            </div>
          </div>

          {/* Email Signature */}
          <div className="glow-border rounded-xl p-4 bg-eternal-black">
            <h4 className="text-eternal-white font-semibold mb-3 text-center text-sm">Firma de Email</h4>
            <div className="bg-white rounded-lg p-4 text-black">
              <div className="border-l-4 border-purple-600 pl-3">
                <h5 className="font-inter font-semibold text-sm">Juan Pérez</h5>
                <p className="text-gray-600 text-xs mb-2">CEO & Founder</p>
                
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-4 h-4 relative bg-black rounded p-0.5">
                    <Image
                      src="/assets/logo.jpeg"
                      alt="EternalGrowth"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="font-space-grotesk font-bold text-purple-600 text-xs">
                    EternalGrowth
                  </span>
                </div>
                
                <div className="text-xs text-gray-600 space-y-1">
                  <p>📱 +57 300 123 4567</p>
                  <p>🌐 eternalgrowth.co</p>
                  <p className="text-purple-600">De lo básico a lo digital</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Guía de Mejores Prácticas */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="glow-border rounded-xl p-6 bg-eternal-black"
      >
        <h3 className="text-eternal-purple-primary font-semibold text-xl mb-6 text-center">
          Mejores Prácticas de Aplicación
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center space-y-3">
            <div className="w-12 h-12 mx-auto bg-eternal-purple-primary rounded-full flex items-center justify-center mb-3">
              <span className="text-eternal-white font-bold">✓</span>
            </div>
            <h4 className="text-eternal-white font-semibold text-sm">Consistencia</h4>
            <p className="text-eternal-white-soft text-xs">
              Mantén siempre la misma paleta de colores y tipografías en todos los materiales
            </p>
          </div>
          
          <div className="text-center space-y-3">
            <div className="w-12 h-12 mx-auto bg-eternal-purple-primary rounded-full flex items-center justify-center mb-3">
              <span className="text-eternal-white font-bold">⚡</span>
            </div>
            <h4 className="text-eternal-white font-semibold text-sm">Impacto Visual</h4>
            <p className="text-eternal-white-soft text-xs">
              Usa el efecto glow estratégicamente para destacar elementos importantes
            </p>
          </div>
          
          <div className="text-center space-y-3">
            <div className="w-12 h-12 mx-auto bg-eternal-purple-primary rounded-full flex items-center justify-center mb-3">
              <span className="text-eternal-white font-bold">📱</span>
            </div>
            <h4 className="text-eternal-white font-semibold text-sm">Adaptabilidad</h4>
            <p className="text-eternal-white-soft text-xs">
              Asegúrate de que el logo sea legible en todos los tamaños y dispositivos
            </p>
          </div>
          
          <div className="text-center space-y-3">
            <div className="w-12 h-12 mx-auto bg-eternal-purple-primary rounded-full flex items-center justify-center mb-3">
              <span className="text-eternal-white font-bold">🎯</span>
            </div>
            <h4 className="text-eternal-white font-semibold text-sm">Claridad</h4>
            <p className="text-eternal-white-soft text-xs">
              Prioriza la legibilidad y la comunicación clara del mensaje
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
