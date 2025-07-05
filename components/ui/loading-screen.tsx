"use client"

import { motion } from "framer-motion"
import { Building, Hammer, HardHat } from "lucide-react"
import Image from "next/image"

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center">
      <div className="text-center">
        {/* Main Logo with Building Animation */}
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
              transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
              className="w-20 bg-gradient-to-t from-orange-600 to-orange-500 mx-auto rounded-t-lg overflow-hidden"
            >
              {/* Building Floors Animation */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="space-y-2 p-2"
              >
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.3, delay: 1.5 + i * 0.1 }}
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
              transition={{ duration: 1, delay: 0.3 }}
              className="h-4 bg-orange-700 mx-auto rounded-b-lg"
            />
          </div>
        </motion.div>

        {/* Company Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex items-center justify-center space-x-3 mb-6"
        >
          <div className="w-12 h-12 relative bg-white rounded-lg p-2 shadow-md">
            <Image
              src="/RTC Logo_page-0001.jpg"
              alt="RTC Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-3xl font-bold text-orange-800">RTC</span>
        </motion.div>

        {/* Company Name */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="text-xl font-semibold text-gray-700 mb-2"
        >
          Ravi Tej Constructions
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="text-gray-600 mb-8"
        >
          Building Excellence Since 2021
        </motion.p>

        {/* Construction Tools Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2 }}
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
          transition={{ duration: 0.6, delay: 2.3 }}
          className="w-64 mx-auto"
        >
          <div className="h-2 bg-orange-200 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ 
                duration: 3,
                delay: 2.5,
                ease: "easeInOut"
              }}
              className="h-full bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"
            />
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 3 }}
            className="text-sm text-gray-600 mt-3"
          >
            Preparing your construction experience...
          </motion.p>
        </motion.div>

        {/* Floating particles for construction dust effect */}
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
                delay: 3 + Math.random() * 2,
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
