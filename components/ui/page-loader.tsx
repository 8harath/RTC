"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function PageLoader() {
  return (
    <div className="fixed inset-0 z-40 bg-white/80 backdrop-blur-sm flex items-center justify-center">
      <div className="text-center">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 2, repeat: Infinity, ease: "linear" },
            scale: { duration: 1, repeat: Infinity, ease: "easeInOut" }
          }}
          className="w-16 h-16 relative bg-white rounded-lg p-3 shadow-lg mx-auto mb-4"
        >
          <Image
            src="/RTC Logo_page-0001.jpg"
            alt="RTC Logo"
            fill
            className="object-contain"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-orange-800 font-semibold"
        >
          Loading...
        </motion.div>

        {/* Pulsing dots */}
        <div className="flex justify-center space-x-1 mt-3">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2
              }}
              className="w-2 h-2 bg-orange-600 rounded-full"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
