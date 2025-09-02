'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function RedirectToConnect() {
  const router = useRouter()
  
  useEffect(() => {
    router.replace('/connect')
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-forest-green-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-forest-green-600 mx-auto mb-4"></div>
        <p className="text-forest-green-700">Redirecting to connect page...</p>
      </div>
    </div>
  )
}