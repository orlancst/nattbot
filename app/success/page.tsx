"use client"

import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <section className="flex-1 flex items-center justify-center py-20 px-4">
        <div className="max-w-lg text-center space-y-8">
          <div className="space-y-4">
            <div className="text-6xl">✓</div>
            <h1 className="text-4xl font-bold text-foreground">¡Solicitud Enviada!</h1>
            <p className="text-lg text-muted-foreground">
              Gracias por tu interés en NattBot. Tu solicitud ha sido recibida exitosamente.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 space-y-3">
            <p className="text-sm text-muted-foreground">
              <strong>Próximos pasos:</strong>
            </p>
            <ul className="text-sm text-muted-foreground space-y-2 text-left">
              <li className="flex gap-3">
                <span className="text-primary font-bold">1</span>
                <span>Revisaremos tu solicitud en las próximas 24 horas</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">2</span>
                <span>Recibirás un correo de confirmación</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">3</span>
                <span>Te contactaremos para agendar la demostración</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition text-center"
            >
              Volver al Inicio
            </Link>
            <a
              href="https://www.instagram.com/n4ttbot/"
              target="_blank"
              className="px-6 py-3 border border-border text-foreground rounded-lg font-semibold hover:bg-card transition text-center"
              rel="noreferrer"
            >
              Síguenos en Instagram
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
