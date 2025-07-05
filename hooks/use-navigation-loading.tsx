"use client"

import { useLoading } from "@/components/ui/loading-provider"
import { useRouter } from "next/navigation"
import { useCallback } from "react"

export function useNavigationLoading() {
  const { setIsLoading } = useLoading()
  const router = useRouter()

  const navigateWithLoading = useCallback((path: string) => {
    setIsLoading(true)
    router.push(path)
    // Loading will automatically hide when new page loads
    setTimeout(() => setIsLoading(false), 1000)
  }, [router, setIsLoading])

  return { navigateWithLoading }
}
