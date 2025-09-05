'use client'

import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { motion } from 'framer-motion'
import LogoShowcase from './brand/LogoShowcase'
import TypographyShowcase from './brand/TypographyShowcase'
import ColorPalette from './brand/ColorPalette'
import ApplicationShowcase from './brand/ApplicationShowcase'

interface MarkdownRendererProps {
  content: string
  slug?: string
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content, slug }) => {
  // Función para renderizar componentes especiales según la sección
  const renderSpecialComponent = (sectionSlug: string) => {
    switch (sectionSlug) {
      case 'logotipo':
        return <LogoShowcase />
      case 'tipografias':
        return <TypographyShowcase />
      case 'colores':
        return <ColorPalette />
      case 'aplicaciones':
        return <ApplicationShowcase />
      default:
        return null
    }
  }

  const components = {
    h1: ({ children }: any) => (
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-space-grotesk font-bold mb-8 glow-text"
      >
        {children}
      </motion.h1>
    ),
    h2: ({ children }: any) => (
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-space-grotesk font-semibold mb-6 mt-12 text-eternal-purple-primary"
      >
        {children}
      </motion.h2>
    ),
    h3: ({ children }: any) => (
      <motion.h3
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-inter font-semibold mb-4 mt-8 text-eternal-white"
      >
        {children}
      </motion.h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-xl font-inter font-medium mb-3 mt-6 text-eternal-white-soft">
        {children}
      </h4>
    ),
    p: ({ children }: any) => (
      <p className="text-eternal-white-soft mb-4 leading-7 text-lg">
        {children}
      </p>
    ),
    ul: ({ children }: any) => (
      <ul className="mb-6 space-y-2 ml-6">
        {children}
      </ul>
    ),
    ol: ({ children }: any) => (
      <ol className="mb-6 space-y-2 ml-6 list-decimal">
        {children}
      </ol>
    ),
    li: ({ children }: any) => (
      <li className="text-eternal-white-soft leading-7 list-disc">
        {children}
      </li>
    ),
    blockquote: ({ children }: any) => (
      <motion.blockquote
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="border-l-4 border-eternal-purple-primary pl-6 py-4 my-6 bg-eternal-glow-background rounded-r-lg"
      >
        <div className="text-eternal-white italic text-lg">
          {children}
        </div>
      </motion.blockquote>
    ),
    code: ({ children, inline }: any) => {
      if (inline) {
        return (
          <code className="bg-eternal-glow-background text-eternal-purple-light px-2 py-1 rounded font-jetbrains text-sm">
            {children}
          </code>
        )
      }
      return (
        <motion.pre
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-eternal-glow-background p-6 rounded-lg my-6 overflow-x-auto glow-border"
        >
          <code className="font-jetbrains text-eternal-purple-light text-sm">
            {children}
          </code>
        </motion.pre>
      )
    },
    table: ({ children }: any) => (
      <div className="my-8 overflow-x-auto">
        <motion.table
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full border-collapse rounded-lg overflow-hidden glow-border"
        >
          {children}
        </motion.table>
      </div>
    ),
    thead: ({ children }: any) => (
      <thead className="bg-eternal-purple-primary text-eternal-black">
        {children}
      </thead>
    ),
    tbody: ({ children }: any) => (
      <tbody className="bg-eternal-glow-background">
        {children}
      </tbody>
    ),
    th: ({ children }: any) => (
      <th className="px-6 py-4 text-left font-semibold">
        {children}
      </th>
    ),
    td: ({ children }: any) => (
      <td className="px-6 py-4 text-eternal-white-soft border-b border-eternal-glow-subtle">
        {children}
      </td>
    ),
    hr: () => (
      <motion.hr
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8 }}
        className="my-12 border-0 h-px bg-gradient-to-r from-transparent via-eternal-purple-primary to-transparent"
      />
    ),
    strong: ({ children }: any) => (
      <strong className="text-eternal-purple-primary font-semibold">
        {children}
      </strong>
    ),
    em: ({ children }: any) => (
      <em className="text-eternal-purple-light italic">
        {children}
      </em>
    ),
    a: ({ children, href }: any) => (
      <a
        href={href}
        className="text-eternal-purple-primary hover:text-eternal-purple-light transition-colors duration-300 underline decoration-eternal-purple-primary decoration-dotted underline-offset-4"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="prose prose-lg prose-invert max-w-none"
    >
      <ReactMarkdown
        components={components}
        remarkPlugins={[remarkGfm]}
      >
        {content}
      </ReactMarkdown>
      
      {/* Renderizar componente especial si corresponde */}
      {slug && (
        <div className="mt-12">
          {renderSpecialComponent(slug)}
        </div>
      )}
    </motion.div>
  )
}

export default MarkdownRenderer
