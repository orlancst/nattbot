"use client";

import Link from "next/link";

export default function Pricing() {
  const plans = [
    {
      name: "Gratuito",
      price: "$0",
      period: "Por siempre",
      description: "Perfecto para probar NattBot",
      features: [
        "10 productos",
        "100 conversaciones por mes",
        "Integración con Telegram",
        "Soporte básico",
      ],
      highlighted: false,
    },
    {
      name: "Básico",
      price: "$49",
      period: "Mensual",
      description: "Para pequeños negocios",
      features: [
        "Hasta 1000 productos",
        "Conversaciones ilimitadas",
        "Integración con WhatsApp",
        "Soporte prioritario",
        "Análisis de conversaciones",
        "Dashboard",
        "CRM",
      ],
      highlighted: true,
    },
    {
      name: "Personalizado",
      price: "A consultar",
      period: "Según necesidades",
      description: "Para empresas en crecimiento",
      features: [
        "Inventario ilimitado",
        "Conversaciones ilimitadas",
        "APIs de terceros",
        "Soporte 24/7",
        "Análisis avanzado",
        "Integraciones personalizadas",
        "Dashboard",
        "CRM",
      ],
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Planes y Precios
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Elige el plan que mejor se adapte a tu negocio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-lg border transition-all ${
                plan.highlighted
                  ? "border-primary bg-card ring-2 ring-primary/20 scale-105"
                  : "border-border bg-background hover:border-primary/50"
              }`}
            >
              {plan.highlighted && (
                <div className="px-6 pt-4 pb-0">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full">
                    MÁS POPULAR
                  </span>
                </div>
              )}

              <div className="p-6 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {plan.description}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {plan.period}
                  </div>
                </div>
                <Link href="/contact">
                  <button
                    className={`w-full py-3 rounded-lg font-semibold transition cursor-pointer ${
                      plan.highlighted
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "border border-border text-foreground hover:bg-gray-900"
                    }`}
                  >
                    {plan.price === "A consultar"
                      ? "Solicitar Demo"
                      : "Comenzar"}
                  </button>
                </Link>

                <ul className="space-y-3 mt-4">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-sm text-muted-foreground"
                    >
                      <span className="text-primary">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
