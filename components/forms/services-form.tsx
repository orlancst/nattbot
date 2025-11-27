"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { generateMeetingTimeSlots } from "@/lib/google-calendar"

export default function ServicesForm() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [timeSlots, setTimeSlots] = useState<{ time: string; value: string }[]>([])

  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    phone: "",
    serviceDescription: "",
    servicePolicyFile: null as File | null,
    acceptGDPR: false,
    preferredTimeSlot: "",
  })

  useEffect(() => {
    const slots = generateMeetingTimeSlots(new Date(), [9, 10, 11, 14, 15, 16])
    setTimeSlots(slots)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }))
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFormData((prev) => ({
        ...prev,
        servicePolicyFile: e.target.files?.[0] || null,
      }))
    }
  }

  const validateForm = () => {
    if (!formData.companyName || !formData.email || !formData.phone) {
      setError("Por favor, completa todos los campos requeridos")
      return false
    }
    if (!formData.servicePolicyFile) {
      setError("Por favor, carga tu política de servicios")
      return false
    }
    if (!formData.acceptGDPR) {
      setError("Debes aceptar el Habeas Data para continuar")
      return false
    }
    setError("")
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setLoading(true)

    try {
      const submitFormData = new FormData()
      submitFormData.append("companyName", formData.companyName)
      submitFormData.append("email", formData.email)
      submitFormData.append("phone", formData.phone)
      submitFormData.append("serviceDescription", formData.serviceDescription)
      submitFormData.append("acceptGDPR", String(formData.acceptGDPR))
      submitFormData.append("preferredTimeSlot", formData.preferredTimeSlot)
      if (formData.servicePolicyFile) {
        submitFormData.append("servicePolicyFile", formData.servicePolicyFile)
      }

      const response = await fetch("/api/contact/services", {
        method: "POST",
        body: submitFormData,
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Error al enviar el formulario")
      }

      router.push("/success")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ocurrió un error al enviar el formulario")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Solicita una Reunión</h1>
        <p className="text-muted-foreground">
          Para empresas de servicios, nos gustaría conocer más sobre tu negocio. Envía tu información y nos
          contactaremos para agendar una reunión a través de Google Calendar.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Nombre de la Empresa *</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              placeholder="Ej: Mi Consultora Digital"
              className="w-full px-4 py-2 rounded-lg bg-card border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-secondary"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Correo Electrónico *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="contacto@empresa.com"
              className="w-full px-4 py-2 rounded-lg bg-card border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-secondary"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Teléfono *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+1 (555) 000-0000"
              className="w-full px-4 py-2 rounded-lg bg-card border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-secondary"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Descripción de Servicios</label>
            <textarea
              name="serviceDescription"
              value={formData.serviceDescription}
              onChange={handleInputChange}
              placeholder="Describe brevemente los servicios que ofreces..."
              rows={4}
              className="w-full px-4 py-2 rounded-lg bg-card border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-secondary resize-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Horario Preferido para la Reunión
            </label>
            <select
              name="preferredTimeSlot"
              value={formData.preferredTimeSlot}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-lg bg-card border border-border text-foreground focus:outline-none focus:border-secondary"
            >
              <option value="">Seleccionar un horario...</option>
              {timeSlots.map((slot) => (
                <option key={slot.value} value={slot.value}>
                  {slot.time}
                </option>
              ))}
            </select>
            <p className="text-xs text-muted-foreground mt-1">
              Si no ves un horario que te convenga, nos contactaremos para ajustar.
            </p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Política de Servicios (PDF) *</label>
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-secondary transition cursor-pointer">
              <input type="file" accept=".pdf" onChange={handleFileChange} className="hidden" id="policyFile" />
              <label htmlFor="policyFile" className="cursor-pointer block">
                <div className="text-2xl mb-2">📄</div>
                <p className="text-muted-foreground">
                  {formData.servicePolicyFile
                    ? formData.servicePolicyFile.name
                    : "Arrastra tu PDF aquí o haz clic para seleccionar"}
                </p>
              </label>
            </div>
          </div>

          <div className="border border-border rounded-lg p-4 bg-card/50">
            <div className="flex gap-3">
              <input
                type="checkbox"
                id="acceptGDPR"
                name="acceptGDPR"
                checked={formData.acceptGDPR}
                onChange={handleInputChange}
                className="w-5 h-5 rounded border-border bg-card cursor-pointer flex-shrink-0 mt-1"
              />
              <label htmlFor="acceptGDPR" className="text-foreground cursor-pointer">
                <span className="font-semibold">Acepto la política de Habeas Data</span>
                <p className="text-sm text-muted-foreground mt-1">
                  Confirmo que he leído y acepto la protección de datos personales según la ley de protección de datos.
                </p>
              </label>
            </div>
          </div>

          <div className="bg-secondary/10 border border-secondary/30 rounded-lg p-4">
            <p className="text-sm text-foreground mb-2">
              <strong>Próximo paso:</strong> Después de enviar este formulario, nos contactaremos a través de tu correo
              electrónico para confirmar la reunión mediante Google Calendar.
            </p>
          </div>
        </div>

        {/* Error message */}
        {error && (
          <div className="p-4 rounded-lg bg-destructive/10 border border-destructive text-destructive text-sm">
            {error}
          </div>
        )}

        {/* Buttons */}
        <div className="flex gap-4 pt-6">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="px-6 py-2 rounded-lg border border-border text-foreground hover:bg-card transition"
          >
            Atrás
          </button>

          <div className="flex-1" />

          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 rounded-lg bg-secondary text-primary-foreground hover:bg-secondary/90 transition font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Enviando..." : "Enviar Solicitud"}
          </button>
        </div>
      </form>
    </div>
  )
}
