"use client"

import Link from "next/link"

export default function CTA() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 border border-primary/50 rounded-lg p-12 text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">¿Listo para Transformar tu Negocio?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Únete a cientos de empresas que ya utilizan NattBot para automatizar su servicio al cliente y aumentar
            ventas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Link
              href="/contact"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition"
            >
              Comenzar Ahora
            </Link>
            <Link
              href="https://www.instagram.com/n4ttbot/"
              target="_blank"
              className="px-8 py-3 border border-foreground text-foreground rounded-full font-semibold hover:bg-foreground/10 transition"
            >
              Síguenos en Instagram
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
