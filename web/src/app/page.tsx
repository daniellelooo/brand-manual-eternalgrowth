'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import MarkdownRenderer from '@/components/MarkdownRenderer'
import BackgroundEffects from '@/components/BackgroundEffects'
import { getContentFiles, getContentBySlug } from '@/lib/content'

interface ContentData {
  title: string
  slug: string
  order: number
  content: string
}

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>('marca')
  const [contentData, setContentData] = useState<ContentData | null>(null)
  const [allSections, setAllSections] = useState<ContentData[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadContent = async () => {
      try {
        const sections = await getContentFiles()
        setAllSections(sections)
        
        if (sections.length > 0) {
          const firstSection = sections.find(s => s.slug === 'marca') || sections[0]
          const content = await getContentBySlug(firstSection.slug)
          setContentData(content)
          setActiveSection(firstSection.slug)
        }
      } catch (error) {
        console.error('Error loading content:', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadContent()
  }, [])

  const handleSectionChange = async (slug: string) => {
    if (slug === activeSection) return
    
    setIsLoading(true)
    try {
      const content = await getContentBySlug(slug)
      setContentData(content)
      setActiveSection(slug)
    } catch (error) {
      console.error('Error loading section:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-eternal-black relative overflow-hidden">
      <BackgroundEffects />
      
      <div className="relative z-10 flex">
        {/* Sidebar */}
        <Sidebar 
          sections={allSections}
          activeSection={activeSection}
          onSectionChange={handleSectionChange}
        />
        
        {/* Main Content */}
        <main className="flex-1 ml-80">
          <Header />
          
          <div className="p-8">
            <AnimatePresence mode="wait">
              {isLoading ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center justify-center h-96"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 border-2 border-eternal-purple-primary border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-eternal-purple-primary font-jetbrains text-lg">
                      Cargando...
                    </span>
                  </div>
                </motion.div>
              ) : contentData ? (
                <motion.div
                  key={contentData.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="max-w-4xl"
                >
                  <MarkdownRenderer content={contentData.content} slug={contentData.slug} />
                </motion.div>
              ) : (
                <motion.div
                  key="error"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-16"
                >
                  <p className="text-eternal-white-soft text-lg">
                    Error al cargar el contenido
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  )
}
