"use client"

export default function Features() {
  const features = [
    {
      title: "Respuestas Personalizadas",
      description: "Configura respuestas automáticas según tus productos y servicios",
      icon: "🎯",
    },
    {
      title: "IA Avanzada",
      description: "La inteligencia artificial aprende de la información que proporcionas",
      icon: "🤖",
    },
    {
      title: "Multi-canal",
      description: "Conecta con clientes por Telegram, WhatsApp y más",
      icon: "💬",
    },
    {
      title: "Gestión de Inventario",
      description: "Carga y gestiona tus productos con imágenes en la nube",
      icon: "📦",
    },
    {
      title: "Dashboard administrativo",
      description: "Monitorea y administra tus ventas y conversaciones en tiempo real",
      icon: "📊",
    },
    {
      title: "Fácil de Usar",
      description: "Interfaz intuitiva sin necesidad de conocimientos técnicos",
      icon: "✨",
    },

  ]

  return (
    <section id="features" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">Características Principales</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Todo lo que necesitas para llevar tu negocio al siguiente nivel
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-border bg-background hover:border-primary/50 transition group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
