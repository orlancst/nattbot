"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ProductForm from "@/components/forms/product-form"
import ServicesForm from "@/components/forms/services-form"

export default function ContactPage() {
  const [contactType, setContactType] = useState<"products" | "services" | null>(null)

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {!contactType ? (
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">Comienza con NattBot</h1>
                <p className="text-lg text-muted-foreground">Selecciona el tipo de servicio que ofrece tu empresa</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Productos */}
                <button
                  onClick={() => setContactType("products")}
                  className="p-8 rounded-lg border border-border bg-card hover:border-primary hover:bg-background/50 transition space-y-4 text-left group"
                >
                  <div className="text-4xl">📦</div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition">
                      Vendo Productos
                    </h3>
                    <p className="text-muted-foreground">
                      Tienda online, e-commerce, venta de artículos físicos o digitales
                    </p>
                  </div>
                  <div className="pt-4 text-primary font-semibold">Continuar →</div>
                </button>

                {/* Servicios */}
                <button
                  onClick={() => setContactType("services")}
                  className="p-8 rounded-lg border border-border bg-card hover:border-secondary hover:bg-background/50 transition space-y-4 text-left group"
                >
                  <div className="text-4xl">🎯</div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-secondary transition">
                      Ofrezco Servicios
                    </h3>
                    <p className="text-muted-foreground">
                      Consultoría, coaching, diseño, programación, u otros servicios
                    </p>
                  </div>
                  <div className="pt-4 text-secondary font-semibold">Continuar →</div>
                </button>
              </div>
            </div>
          ) : contactType === "products" ? (
            <>
              <button
                onClick={() => setContactType(null)}
                className="mb-8 text-primary hover:text-primary/80 transition font-semibold flex items-center gap-2"
              >
                ← Atrás
              </button>
              <ProductForm />
            </>
          ) : (
            <>
              <button
                onClick={() => setContactType(null)}
                className="mb-8 text-secondary hover:text-secondary/80 transition font-semibold flex items-center gap-2"
              >
                ← Atrás
              </button>
              <ServicesForm />
            </>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
