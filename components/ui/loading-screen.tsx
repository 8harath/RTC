"use client"

import { motion } from "framer-motion"
import { Building, Hammer, HardHat } from "lucide-react"

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 bg-white flex items-center justify-center">
      <div className="text-center">
        {/* Construction Animation - At the top */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="relative">
            {/* Building Structure Animation */}
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "120px" }}
              transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
              className="w-20 bg-gradient-to-t from-orange-600 to-orange-500 mx-auto rounded-t-lg overflow-hidden"
            >
              {/* Building Floors Animation */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="space-y-2 p-2"
              >
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.3, delay: 1.3 + i * 0.1 }}
                    className="h-4 bg-orange-400 rounded-sm flex items-center justify-center"
                  >
                    <div className="grid grid-cols-3 gap-1">
                      {[...Array(3)].map((_, j) => (
                        <div key={j} className="w-1 h-1 bg-orange-200 rounded-full" />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Foundation */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "140px" }}
              transition={{ duration: 1, delay: 0.2 }}
              className="h-4 bg-orange-700 mx-auto rounded-b-lg"
            />
          </div>
        </motion.div>

        {/* Construction Tools Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="flex justify-center space-x-8 mb-8"
        >
          <motion.div
            animate={{ 
              rotate: [0, -15, 15, 0],
              y: [0, -5, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-orange-600"
          >
            <Hammer className="w-6 h-6" />
          </motion.div>

          <motion.div
            animate={{ 
              y: [0, -8, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
            className="text-orange-600"
          >
            <HardHat className="w-6 h-6" />
          </motion.div>

          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ 
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="text-orange-600"
          >
            <Building className="w-6 h-6" />
          </motion.div>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2.1 }}
          className="w-64 mx-auto mb-8"
        >
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ 
                duration: 2.0,
                delay: 2.3,
                ease: "easeInOut"
              }}
              className="h-full bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"
            />
          </div>
        </motion.div>

        {/* Company Name - Static at the bottom */}
        <h1 className="text-4xl font-bold text-orange-800">
          Ravi Tej Constructions
        </h1>

        {/* Floating particles for construction effect */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: 200 + Math.random() * 400,
                y: 600,
                opacity: 0
              }}
              animate={{
                y: -50,
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                delay: 2.5 + Math.random() * 2,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute w-2 h-2 bg-orange-300 rounded-full"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
