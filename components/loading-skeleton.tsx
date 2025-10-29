"use client"

import { motion } from "framer-motion"

export function LoadingSkeleton() {
  return (
    <motion.div
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      className="space-y-4"
    >
      <div className="h-12 bg-gray-200 rounded-lg" />
      <div className="h-32 bg-gray-200 rounded-lg" />
      <div className="grid grid-cols-2 gap-4">
        <div className="h-24 bg-gray-200 rounded-lg" />
        <div className="h-24 bg-gray-200 rounded-lg" />
      </div>
    </motion.div>
  )
}
