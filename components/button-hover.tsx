"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface ButtonHoverProps {
  children: ReactNode
  onClick?: () => void
  className?: string
}

export function ButtonHover({ children, onClick, className }: ButtonHoverProps) {
  return (
    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={onClick} className={className}>
      {children}
    </motion.button>
  )
}
