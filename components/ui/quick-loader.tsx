"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function QuickLoader() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-white/90 backdrop-blur-sm flex items-center justify-center"
    >
      <div className="text-center">
        {/* Simplified building animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="mb-4"
        >
          <motion.div
            animate={{ 
              y: [0, -10, 0] 
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-16 h-20 bg-gradient-to-t from-orange-600 to-orange-500 rounded-t-lg mx-auto relative overflow-hidden"
          >
            {/* Simple building windows */}
            <div className="absolute inset-2 space-y-1">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    opacity: [0.3, 1, 0.3]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3
                  }}
                  className="h-3 bg-orange-300 rounded-sm"
                />
              ))}
            </div>
          </motion.div>
          
          {/* Foundation */}
          <div className="w-20 h-3 bg-orange-700 rounded-b-lg mx-auto" />
        </motion.div>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center space-x-2 mb-3"
        >
          <div className="w-8 h-8 relative bg-white rounded-md p-1 shadow-sm">
            <Image
              src="/RTC Logo_page-0001.jpg"
              alt="RTC Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-xl font-bold text-orange-800">RTC</span>
        </motion.div>

        {/* Loading text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-sm text-gray-600"
        >
          Loading...
        </motion.p>

        {/* Progress dots */}
        <div className="flex justify-center space-x-1 mt-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.4, 1, 0.4]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.15
              }}
              className="w-1.5 h-1.5 bg-orange-500 rounded-full"
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}
