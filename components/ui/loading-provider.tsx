"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { LoadingScreen } from "./loading-screen"

interface LoadingContextType {
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
  progress: number
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined)

export function useLoading() {
  const context = useContext(LoadingContext)
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider")
  }
  return context
}

interface LoadingProviderProps {
  children: React.ReactNode
  initialLoading?: boolean
  minLoadingTime?: number
}

export function LoadingProvider({ 
  children, 
  initialLoading = true,
  minLoadingTime = 2000 
}: LoadingProviderProps) {
  const [isLoading, setIsLoading] = useState(initialLoading)
  const [progress, setProgress] = useState(0)
  const [hasMinimumTimePassed, setHasMinimumTimePassed] = useState(false)

  useEffect(() => {
    if (!initialLoading) return

    // Simulate progressive loading
    const intervals = [
      { time: 100, progress: 10 },
      { time: 300, progress: 25 },
      { time: 600, progress: 40 },
      { time: 900, progress: 60 },
      { time: 1200, progress: 75 },
      { time: 1500, progress: 85 },
      { time: 1800, progress: 95 },
      { time: minLoadingTime, progress: 100 }
    ]

    intervals.forEach(({ time, progress: targetProgress }) => {
      setTimeout(() => {
        setProgress(targetProgress)
      }, time)
    })

    // Ensure minimum loading time
    const timer = setTimeout(() => {
      setHasMinimumTimePassed(true)
    }, minLoadingTime)

    return () => clearTimeout(timer)
  }, [minLoadingTime, initialLoading])

  useEffect(() => {
    // Auto-hide loading after minimum time and when progress is complete
    if (initialLoading && hasMinimumTimePassed && progress >= 100) {
      setTimeout(() => {
        setIsLoading(false)
      }, 300) // Small delay after reaching 100%
    }
  }, [hasMinimumTimePassed, initialLoading, progress])

  const contextValue = {
    isLoading,
    setIsLoading: (loading: boolean) => {
      if (!loading && !hasMinimumTimePassed) {
        // If trying to hide loading before minimum time, wait
        setTimeout(() => setIsLoading(false), minLoadingTime - Date.now())
      } else {
        setIsLoading(loading)
      }
    },
    progress
  }

  return (
    <LoadingContext.Provider value={contextValue}>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        children
      )}
    </LoadingContext.Provider>
  )
}
