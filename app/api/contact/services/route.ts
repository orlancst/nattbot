import { writeFile, mkdir } from "fs/promises"
import { join } from "path"
import { type NextRequest, NextResponse } from "next/server"
import { createCalendarEvent } from "@/lib/google-calendar"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    // Extract form fields
    const companyName = formData.get("companyName") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const serviceDescription = formData.get("serviceDescription") as string
    const acceptGDPR = formData.get("acceptGDPR") === "true"
    const preferredTimeSlot = formData.get("preferredTimeSlot") as string | null

    // Extract file
    const servicePolicyFile = formData.get("servicePolicyFile") as File | null

    // Validate required fields
    if (!companyName || !email || !phone) {
      return NextResponse.json({ error: "Faltan campos requeridos" }, { status: 400 })
    }

    if (!acceptGDPR) {
      return NextResponse.json({ error: "Debes aceptar el Habeas Data" }, { status: 400 })
    }

    if (!servicePolicyFile) {
      return NextResponse.json({ error: "El archivo de política de servicios es requerido" }, { status: 400 })
    }

    // Create directories if they don't exist
    const uploadDir = join(process.cwd(), "public", "uploads", email.replace("@", "_at_"))
    await mkdir(uploadDir, { recursive: true })

    // Save file
    const buffer = await servicePolicyFile.arrayBuffer()
    const filename = `service_policy_${Date.now()}.pdf`
    const filepath = join(uploadDir, filename)
    await writeFile(filepath, Buffer.from(buffer))

    // Prepare calendar event
    const meetingStart = preferredTimeSlot ? new Date(preferredTimeSlot) : new Date(Date.now() + 86400000) // Default: tomorrow at 10am

    const meetingEnd = new Date(meetingStart.getTime() + 3600000) // 1 hour duration

    const calendarEvent = {
      title: `Demostración NattBot - ${companyName}`,
      description: `Reunión con ${companyName}\n\nDescripción de servicios:\n${serviceDescription || "No proporcionada"}`,
      startTime: meetingStart.toISOString(),
      endTime: meetingEnd.toISOString(),
      attendeeEmail: email,
      attendeeName: companyName,
      location: "Google Meet",
    }

    // Create calendar event and get the link
    const calendarLink = await createCalendarEvent(calendarEvent)

    // TODO: Guardar en base de datos
    const clientData = {
      id: `srv_${Date.now()}`,
      type: "services",
      companyName,
      email,
      phone,
      serviceDescription,
      acceptGDPR,
      servicePolicyFile: filename,
      proposedMeetingTime: meetingStart.toISOString(),
      calendarLink,
      createdAt: new Date().toISOString(),
    }

    console.log("Services client registered:", clientData)

    // TODO: Enviar email de confirmación con enlace a Google Calendar
    // await sendCalendarInvite(calendarEvent, email)

    return NextResponse.json({
      success: true,
      message: "Solicitud enviada exitosamente. Te contactaremos para agendar la reunión.",
      clientId: clientData.id,
      calendarLink, // Incluir el link para pruebas
    })
  } catch (error) {
    console.error("Error processing services form:", error)
    return NextResponse.json({ error: "Error al procesar el formulario" }, { status: 500 })
  }
}
