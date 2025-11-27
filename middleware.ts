import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Aquí puedes agregar lógica de middleware si es necesario
  // Por ejemplo, validación de CORS, rate limiting, etc.

  return NextResponse.next()
}

export const config = {
  matcher: ["/api/:path*"],
}
