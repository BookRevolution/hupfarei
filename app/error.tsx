'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6 text-center">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl">⚠️</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Etwas ist schiefgelaufen</h2>
        <p className="text-gray-600 mb-6">
          Es gab einen unerwarteten Fehler. Bitte versuchen Sie es erneut.
        </p>
        <button
          onClick={reset}
          className="px-6 py-3 bg-brand-purple text-white font-medium rounded-lg hover:bg-brand-purple/90 transition-colors"
        >
          Erneut versuchen
        </button>
      </div>
    </div>
  )
}

