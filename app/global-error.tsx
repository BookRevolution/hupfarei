'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🚨</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Kritischer Fehler</h2>
            <p className="text-gray-600 mb-6">
              Es gab einen kritischen Fehler. Bitte laden Sie die Seite neu.
            </p>
            <button
              onClick={reset}
              className="px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors"
            >
              Seite neu laden
            </button>
          </div>
        </div>
      </body>
    </html>
  )
}

