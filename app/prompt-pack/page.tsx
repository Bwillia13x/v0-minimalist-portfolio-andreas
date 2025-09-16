"use client"

import { useEffect } from "react"
import { redirect } from "next/navigation"

export default function PromptPackPage() {
  // Redirect to new AI Tools location
  useEffect(() => {
    redirect('/solutions/ai-tools')
  }, [])

  return null
}