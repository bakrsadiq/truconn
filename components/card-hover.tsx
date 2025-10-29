"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface CardHoverProps {
  children: ReactNode
  className?: string
}

export function CardHover({ children, className }: CardHoverProps) {
  return (
    <motion.div
      whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
      transition={{ duration: 0.3 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
