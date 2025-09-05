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
            
            {/* Story Preview - Solo la parte superior */}
            <div className="bg-gradient-to-b from-purple-900 via-purple-800 to-black rounded-2xl p-4">
              {/* Story Progress Bar */}
              <div className="flex space-x-1 mb-3">
                <div className="h-0.5 bg-white/90 rounded-full flex-1"></div>
                <div className="h-0.5 bg-white/30 rounded-full flex-1"></div>
                <div className="h-0.5 bg-white/30 rounded-full flex-1"></div>
              </div>
              
              {/* Profile Header */}
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 relative ring-2 ring-white/50 rounded-full">
                  <Image
                    src="/assets/logo.jpeg"
                    alt="EternalGrowth"
                    fill
                    className="object-contain rounded-full"
                    style={{
                      filter: 'drop-shadow(0 0 8px rgba(139, 92, 246, 0.8))'
                    }}
                  />
                </div>
                <div className="flex-1">
                  <span className="text-white text-sm font-semibold">eternalgrowth_co</span>
                  <p className="text-white/70 text-xs">hace 2h</p>
                </div>
                <div className="w-6 h-6 flex items-center justify-center">
                  <span className="text-white">⋯</span>
                </div>
              </div>
              
              {/* Story Content Preview */}
              <div className="text-center space-y-3">
                <h5 className="font-space-grotesk font-extrabold text-lg glow-text">
                  ¿Tu negocio está listo para 2025?
                </h5>
                
                <div className="font-jetbrains text-eternal-purple-primary text-sm typewriter-cursor">
                  transformación_digital
                </div>
                
                <p className="text-white/90 text-sm">
                  Convierte tu empresa tradicional en un líder digital
                </p>
                
                {/* Simple CTA */}
                <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 inline-block">
                  <span className="text-white text-sm font-medium">Conoce más ➜</span>
                </div>
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
          {/* Website Homepage */}
          <div className="glow-border rounded-xl p-4 bg-eternal-black">
            <h4 className="text-eternal-white font-semibold mb-3 text-center text-sm">Sitio Web Principal</h4>
            <div className="bg-eternal-black border border-eternal-glow-subtle rounded-lg p-4">
              {/* Header */}
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-eternal-glow-subtle/30">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 relative">
                    <Image
                      src="/assets/logo.jpeg"
                      alt="EternalGrowth"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h5 className="font-space-grotesk font-bold text-sm glow-text">EternalGrowth</h5>
                </div>
                <nav className="flex space-x-3 text-xs text-eternal-white-soft">
                  <span>Inicio</span>
                  <span>Servicios</span>
                  <span>Contacto</span>
                </nav>
              </div>
              
              {/* Hero Section */}
              <div className="text-center space-y-2">
                <h1 className="font-inter font-bold text-eternal-purple-primary text-lg">
                  Transformación Digital
                </h1>
                <div className="font-jetbrains text-eternal-purple-primary text-xs typewriter-cursor">
                  De lo básico a lo digital_
                </div>
                <p className="text-eternal-white-soft text-xs">
                  Llevamos tu negocio al siguiente nivel
                </p>
                <div className="glow-button px-3 py-1 rounded text-xs inline-block">
                  Comenzar
                </div>
              </div>
            </div>
          </div>

          {/* Landing Page de Servicios */}
          <div className="glow-border rounded-xl p-4 bg-eternal-black">
            <h4 className="text-eternal-white font-semibold mb-3 text-center text-sm">Landing de Servicios</h4>
            <div className="bg-gradient-to-br from-eternal-black to-eternal-purple-primary/5 rounded-lg p-4">
              <div className="text-center space-y-3">
                <div className="w-8 h-8 mx-auto relative mb-2">
                  <Image
                    src="/assets/logo.jpeg"
                    alt="EternalGrowth"
                    fill
                    className="object-contain"
                    style={{
                      filter: 'drop-shadow(0 0 8px rgba(139, 92, 246, 0.6))'
                    }}
                  />
                </div>
                <h2 className="font-space-grotesk font-bold text-lg glow-text">
                  ¿Listo para Crecer?
                </h2>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-eternal-white-soft">E-commerce</span>
                    <span className="text-eternal-purple-primary">+200%</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-eternal-white-soft">Apps Móviles</span>
                    <span className="text-eternal-purple-primary">24/7</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-eternal-white-soft">Consultoría</span>
                    <span className="text-eternal-purple-primary">100+</span>
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
          Documentos y Presentaciones
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Propuesta Comercial */}
          <div className="glow-border rounded-xl p-4 bg-eternal-black">
            <h4 className="text-eternal-white font-semibold mb-3 text-center text-sm">Propuesta Comercial</h4>
            <div className="bg-white rounded-lg p-4 text-black">
              {/* Header */}
              <div className="flex items-center space-x-2 mb-3 pb-2 border-b">
                <div className="w-6 h-6 relative">
                  <Image
                    src="/assets/logo.jpeg"
                    alt="EternalGrowth"
                    fill
                    className="object-contain"
                  />
                </div>
                <h5 className="font-space-grotesk font-bold text-purple-600">EternalGrowth</h5>
              </div>
              
              <h3 className="font-inter font-bold text-lg mb-2">Propuesta de Digitalización</h3>
              <h4 className="font-inter font-semibold text-sm mb-3 text-gray-700">
                Proyecto: Transformación Digital Integral
              </h4>
              
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span>Fase 1: Diagnóstico</span>
                  <span className="text-purple-600 font-mono">2 semanas</span>
                </div>
                <div className="flex justify-between">
                  <span>Fase 2: Implementación</span>
                  <span className="text-purple-600 font-mono">8 semanas</span>
                </div>
                <div className="flex justify-between">
                  <span>Fase 3: Optimización</span>
                  <span className="text-purple-600 font-mono">4 semanas</span>
                </div>
              </div>
              
              <div className="mt-3 pt-2 border-t text-xs text-gray-600">
                Documento confidencial - EternalGrowth 2025
              </div>
            </div>
          </div>

          {/* Presentación Corporativa */}
          <div className="glow-border rounded-xl p-4 bg-eternal-black">
            <h4 className="text-eternal-white font-semibold mb-3 text-center text-sm">Presentación Corporativa</h4>
            
            {/* Presentation Container */}
            <div className="bg-eternal-black border border-eternal-glow-subtle rounded-lg p-4 aspect-[16/9]">
              {/* Slide Header */}
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-eternal-glow-subtle/30">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 relative">
                    <Image
                      src="/assets/logo.jpeg"
                      alt="EternalGrowth"
                      fill
                      className="object-contain"
                      style={{
                        filter: 'drop-shadow(0 0 6px rgba(139, 92, 246, 0.6))'
                      }}
                    />
                  </div>
                  <h1 className="font-space-grotesk font-extrabold text-sm glow-text">
                    EternalGrowth
                  </h1>
                </div>
                <div className="text-eternal-white-soft text-xs font-jetbrains">
                  01/25
                </div>
              </div>
              
              {/* Main Slide Content */}
              <div className="space-y-3">
                <h2 className="font-inter font-bold text-eternal-purple-primary text-lg leading-tight">
                  Transformación Digital
                </h2>
                <h3 className="font-inter font-semibold text-eternal-white text-sm">
                  Resultados del Primer Trimestre 2025
                </h3>
                
                {/* Key Metrics Grid */}
                <div className="grid grid-cols-3 gap-3 my-4">
                  <div className="bg-eternal-glow-background rounded-lg p-2 text-center">
                    <div className="text-eternal-purple-primary font-jetbrains font-bold text-lg">+150%</div>
                    <div className="text-eternal-white-soft text-xs">Crecimiento</div>
                  </div>
                  <div className="bg-eternal-glow-background rounded-lg p-2 text-center">
                    <div className="text-eternal-purple-primary font-jetbrains font-bold text-lg">24/7</div>
                    <div className="text-eternal-white-soft text-xs">Soporte</div>
                  </div>
                  <div className="bg-eternal-glow-background rounded-lg p-2 text-center">
                    <div className="text-eternal-purple-primary font-jetbrains font-bold text-lg">100+</div>
                    <div className="text-eternal-white-soft text-xs">Clientes</div>
                  </div>
                </div>
                
                {/* Chart Representation */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-eternal-purple-primary rounded-full"></div>
                    <div className="flex-1 bg-eternal-glow-background rounded-full h-1">
                      <div className="bg-eternal-purple-primary h-1 rounded-full w-4/5"></div>
                    </div>
                    <span className="text-eternal-white-soft text-xs">80%</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-eternal-purple-light rounded-full"></div>
                    <div className="flex-1 bg-eternal-glow-background rounded-full h-1">
                      <div className="bg-eternal-purple-light h-1 rounded-full w-3/5"></div>
                    </div>
                    <span className="text-eternal-white-soft text-xs">60%</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-eternal-purple-medium rounded-full"></div>
                    <div className="flex-1 bg-eternal-glow-background rounded-full h-1">
                      <div className="bg-eternal-purple-medium h-1 rounded-full w-2/5"></div>
                    </div>
                    <span className="text-eternal-white-soft text-xs">40%</span>
                  </div>
                </div>
                
                {/* Footer Note */}
                <div className="flex items-center justify-between pt-2 border-t border-eternal-glow-subtle/20">
                  <p className="text-eternal-white-soft text-xs font-inter">
                    De lo básico a lo digital
                  </p>
                  <div className="text-eternal-purple-primary font-jetbrains text-xs">
                    2025-Q1
                  </div>
                </div>
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
                  <div className="w-8 h-8 relative">
                    <Image
                      src="/assets/logo.jpeg"
                      alt="EternalGrowth"
                      fill
                      className="object-contain"
                      style={{
                        filter: 'drop-shadow(0 0 6px rgba(139, 92, 246, 0.8))'
                      }}
                    />
                  </div>
                  <h5 className="font-space-grotesk font-bold text-sm glow-text">
                    EternalGrowth
                  </h5>
                </div>
                
                <div className="text-right">
                  <p className="text-eternal-white text-xs font-semibold">Daniel García</p>
                  <p className="text-eternal-white-soft text-xs">CEO & Fundador</p>
                  <div className="font-jetbrains text-eternal-purple-primary text-xs mt-1">
                    daniel@eternalgrowth.co
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Flyer Digital */}
          <div className="glow-border rounded-xl p-4 bg-eternal-black">
            <h4 className="text-eternal-white font-semibold mb-3 text-center text-sm">Flyer Digital</h4>
            <div className="bg-gradient-to-br from-purple-900 to-black rounded-lg p-4 text-center">
              <div className="w-10 h-10 mx-auto mb-3 relative">
                <Image
                  src="/assets/logo.jpeg"
                  alt="EternalGrowth"
                  fill
                  className="object-contain"
                  style={{
                    filter: 'drop-shadow(0 0 8px rgba(139, 92, 246, 0.8))'
                  }}
                />
              </div>
              <h3 className="font-space-grotesk font-bold text-white glow-text mb-2">
                EternalGrowth
              </h3>
              <p className="text-white/90 text-sm mb-3">
                Impulsa tu negocio hacia el futuro digital
              </p>
              <div className="space-y-1 text-xs text-white/80">
                <p>🚀 E-commerce Profesional</p>
                <p>📱 Apps Móviles Nativas</p>
                <p>💡 Consultoría Estratégica</p>
              </div>
              <div className="mt-3 font-jetbrains text-eternal-purple-primary text-xs">
                eternalgrowth.co
              </div>
            </div>
          </div>

          {/* Newsletter Template */}
          <div className="glow-border rounded-xl p-4 bg-eternal-black">
            <h4 className="text-eternal-white font-semibold mb-3 text-center text-sm">Newsletter</h4>
            <div className="bg-white rounded-lg p-4 text-black">
              {/* Header */}
              <div className="flex items-center space-x-2 mb-3 pb-2 border-b">
                <div className="w-6 h-6 relative">
                  <Image
                    src="/assets/logo.jpeg"
                    alt="EternalGrowth"
                    fill
                    className="object-contain"
                  />
                </div>
                <h5 className="font-space-grotesk font-bold text-purple-600">
                  EternalGrowth Weekly
                </h5>
              </div>
              
              <h3 className="font-inter font-bold text-sm mb-2">
                Tendencias Digitales - Semana 36
              </h3>
              
              <div className="space-y-2 text-xs">
                <div className="bg-gray-100 p-2 rounded">
                  <strong>📈 Esta semana:</strong> IA en e-commerce
                </div>
                <div className="bg-gray-100 p-2 rounded">
                  <strong>🎯 Caso de éxito:</strong> +300% ventas online
                </div>
                <div className="bg-gray-100 p-2 rounded">
                  <strong>💡 Tip:</strong> Automatización de procesos
                </div>
              </div>
              
              <div className="mt-3 pt-2 border-t text-xs text-gray-600 text-center">
                eternalgrowth.co | Medellín, Colombia
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
