"use client"

import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-lg text-center space-y-6">
        <div className="space-y-3">
          <div className="text-6xl">404</div>
          <h1 className="text-4xl font-bold text-foreground">Página no encontrada</h1>
          <p className="text-lg text-muted-foreground">La página que buscas no existe o ha sido movida.</p>
        </div>

        <Link
          href="/"
          className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition"
        >
          Volver al Inicio
        </Link>
      </div>
    </div>
  )
}
