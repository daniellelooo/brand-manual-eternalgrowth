"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface SidebarProps {
  sections: Array<{
    title: string;
    slug: string;
    order: number;
  }>;
  activeSection: string;
  onSectionChange: (slug: string) => void;
}

export default function Sidebar({
  sections,
  activeSection,
  onSectionChange,
}: SidebarProps) {
  const sortedSections = sections.sort((a, b) => a.order - b.order);

  return (
    <motion.aside
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed left-0 top-0 h-screen w-80 bg-eternal-black border-r glow-border z-20"
    >
      <div className="p-6">
        {/* Logo Section */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-8 text-center"
        >
          <div className="relative w-16 h-16 mx-auto mb-4">
            <Image
              src="/assets/logo.jpeg"
              alt="EternalGrowth Logo"
              fill
              className="object-contain rounded-lg"
              style={{
                filter: "drop-shadow(0 0 10px rgba(139, 92, 246, 0.6))",
              }}
            />
          </div>

          <h1 className="font-space-grotesk font-extrabold text-2xl glow-text tracking-wide">
            EternalGrowth
          </h1>
          <p className="text-eternal-white-soft text-sm mt-1 font-jetbrains">
            Brand Manual
          </p>
        </motion.div>

        {/* Navigation */}
        <nav className="space-y-2">
          <h2 className="text-eternal-purple-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Contenido
          </h2>

          {sortedSections.map((section, index) => (
            <motion.button
              key={section.slug}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.3 }}
              onClick={() => onSectionChange(section.slug)}
              className={`
                w-full text-left p-3 rounded-lg transition-all duration-300
                ${
                  activeSection === section.slug
                    ? "bg-eternal-purple-primary text-eternal-black font-semibold glow-button"
                    : "text-eternal-white-soft hover:text-eternal-white hover:bg-eternal-glow-background"
                }
              `}
            >
              <span className="block">{section.title}</span>
              {activeSection === section.slug && (
                <motion.div
                  layoutId="activeIndicator"
                  className="h-0.5 bg-eternal-purple-light mt-2 rounded-full"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </nav>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-6 left-6 right-6"
        >
          <div className="border-t border-eternal-glow-subtle pt-4">
            <p className="text-eternal-white-soft text-xs font-jetbrains">
              v1.0.0 • 2025
            </p>
            <p className="text-eternal-glow-subtle text-xs mt-1">
              Diseñado con{" "}
              <span className="text-eternal-purple-primary">♥</span> para
              EternalGrowth
            </p>
          </div>
        </motion.div>
      </div>
    </motion.aside>
  );
}
