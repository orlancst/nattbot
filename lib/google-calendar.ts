interface CalendarEvent {
  title: string
  description: string
  startTime: string // ISO format
  endTime: string // ISO format
  attendeeEmail: string
  attendeeName: string
  location?: string
}

export async function createCalendarEvent(event: CalendarEvent): Promise<string> {
  /**
   * Este es el flujo recomendado para Google Calendar:
   *
   * 1. Para desarrollo/pruebas: Usa OAuth 2.0 flow
   * 2. Para producción: Usa Service Account si tienes acceso directo
   * 3. Alternativa: Genera un link de Google Calendar que el usuario puede usar
   */

  // Implementación básica: Generar link de Google Calendar
  const calendarLink = generateGoogleCalendarLink(event)

  // TODO: Implementar OAuth 2.0 para crear eventos automáticamente
  // const token = await getGoogleCalendarToken()
  // return await createEventWithToken(event, token)

  return calendarLink
}

function generateGoogleCalendarLink(event: CalendarEvent): string {
  const baseUrl = "https://calendar.google.com/calendar/render"

  // Formatear la fecha para Google Calendar (YYYYMMDDTHHMMSS)
  const startDate = new Date(event.startTime).toISOString().replace(/[-:]/g, "").split(".")[0] + "Z"
  const endDate = new Date(event.endTime).toISOString().replace(/[-:]/g, "").split(".")[0] + "Z"

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: event.title,
    dates: `${startDate}/${endDate}`,
    details: event.description,
    location: event.location || "",
    add: event.attendeeEmail,
  })

  return `${baseUrl}?${params.toString()}`
}

export async function sendCalendarInvite(event: CalendarEvent, clientEmail: string): Promise<void> {
  /**
   * Envía un email con opciones para agregar el evento al calendario
   */

  const calendarLink = generateGoogleCalendarLink(event)

  // TODO: Implementar con tu servicio de email preferido (SendGrid, Resend, etc.)
  console.log("Calendar link for email:", calendarLink)
}

export function generateMeetingTimeSlots(
  startDate: Date,
  hoursAvailable: number[] = [9, 10, 11, 14, 15, 16],
): { time: string; value: string }[] {
  /**
   * Genera slots de tiempo disponibles para reuniones
   * Por defecto: 9am, 10am, 11am, 2pm, 3pm, 4pm
   */

  const slots: { time: string; value: string }[] = []

  hoursAvailable.forEach((hour) => {
    const meetingTime = new Date(startDate)
    meetingTime.setHours(hour, 0, 0, 0)

    if (meetingTime > new Date()) {
      slots.push({
        time: meetingTime.toLocaleString("es-ES", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
        value: meetingTime.toISOString(),
      })
    }
  })

  return slots
}
