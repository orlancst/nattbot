"use client"

import { useState } from "react"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "¿Cómo funciona NattBot?",
      answer:
        "NattBot es una contestadora inteligente impulsada por IA que automatiza tus conversaciones. Configuras tus productos o servicios, y la IA responde automáticamente a las consultas de tus clientes de forma coherente y precisa.",
    },
    {
      question: "¿Qué diferencia hay entre la rama de productos y servicios?",
      answer:
        "La rama de Productos permite gestionar un inventario con precios y categorías, ideal para vender artículos. La rama de Servicios está diseñada para empresas que ofrecen servicios y requiere agendar reuniones con Google Calendar.",
    },
    {
      question: "¿Puedo cambiar de plan?",
      answer:
        "Sí, puedes actualizar o cambiar tu plan en cualquier momento. Los cambios se reflejarán en tu próximo ciclo de facturación.",
    },
    {
      question: "¿Mi información está segura?",
      answer:
        "Totalmente. Cumplimos con GDPR y exigimos aceptación del Habeas Data. Tus datos están encriptados y almacenados en servidores seguros.",
    },
    {
      question: "¿Puedo cargar mis productos desde un archivo?",
      answer:
        "Sí, puedes cargar un archivo CSV o Excel con tus productos. Las imágenes se almacenan en la nube para fácil acceso.",
    },
    {
      question: "¿Hay soporte disponible?",
      answer:
        "Claro. Los planes Básico y Personalizado incluyen soporte prioritario. Puedes contactarnos por correo o a través de nuestro formulario de contacto.",
    },
  ]

  return (
    <section id="faq" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">Preguntas Frecuentes</h2>
          <p className="text-lg text-muted-foreground">Resolvemos tus dudas</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-border rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex justify-between items-center hover:bg-background/50 transition text-left"
              >
                <span className="text-lg font-semibold text-foreground">{faq.question}</span>
                <span className={`transition transform ${openIndex === index ? "rotate-180" : ""}`}>▼</span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 border-t border-border text-muted-foreground">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
