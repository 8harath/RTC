"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { LoadingScreen } from "./loading-screen"

interface LoadingContextType {
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
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
  minLoadingTime = 3000 
}: LoadingProviderProps) {
  const [isLoading, setIsLoading] = useState(initialLoading)
  const [hasMinimumTimePassed, setHasMinimumTimePassed] = useState(false)

  useEffect(() => {
    // Ensure minimum loading time for better UX
    const timer = setTimeout(() => {
      setHasMinimumTimePassed(true)
    }, minLoadingTime)

    return () => clearTimeout(timer)
  }, [minLoadingTime])

  useEffect(() => {
    // Auto-hide loading after minimum time
    if (initialLoading && hasMinimumTimePassed) {
      setIsLoading(false)
    }
  }, [hasMinimumTimePassed, initialLoading])

  const contextValue = {
    isLoading,
    setIsLoading: (loading: boolean) => {
      if (!loading && !hasMinimumTimePassed) {
        // If trying to hide loading before minimum time, wait
        setTimeout(() => setIsLoading(false), minLoadingTime - Date.now())
      } else {
        setIsLoading(loading)
      }
    }
  }

  return (
    <LoadingContext.Provider value={contextValue}>
      {isLoading && <LoadingScreen />}
      {children}
    </LoadingContext.Provider>
  )
}
