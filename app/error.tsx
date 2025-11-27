"use client"

import Link from "next/link"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-lg text-center space-y-6">
        <div className="space-y-3">
          <div className="text-6xl">⚠️</div>
          <h1 className="text-4xl font-bold text-foreground">Algo salió mal</h1>
          <p className="text-lg text-muted-foreground">Ocurrió un error. Por favor, intenta nuevamente.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => reset()}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition"
          >
            Intentar de Nuevo
          </button>
          <Link
            href="/"
            className="px-6 py-3 border border-border text-foreground rounded-lg font-semibold hover:bg-card transition"
          >
            Volver al Inicio
          </Link>
        </div>
      </div>
    </div>
  )
}
