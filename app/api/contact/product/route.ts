import { writeFile, mkdir } from "fs/promises"
import { join } from "path"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    // Extract form fields
    const companyName = formData.get("companyName") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const businessDescription = formData.get("businessDescription") as string
    const targetAudience = formData.get("targetAudience") as string
    const selectedPlan = formData.get("selectedPlan") as string
    const hasServicePolicy = formData.get("hasServicePolicy") === "true"
    const acceptGDPR = formData.get("acceptGDPR") === "true"

    // Extract files
    const servicePolicyFile = formData.get("servicePolicyFile") as File | null
    const inventoryFile = formData.get("inventoryFile") as File | null
    const productImages = formData.getAll("productImages") as File[]

    // Validate required fields
    if (!companyName || !email || !phone || !businessDescription) {
      return NextResponse.json({ error: "Faltan campos requeridos" }, { status: 400 })
    }

    if (!acceptGDPR) {
      return NextResponse.json({ error: "Debes aceptar el Habeas Data" }, { status: 400 })
    }

    if (!inventoryFile) {
      return NextResponse.json({ error: "El archivo de inventario es requerido" }, { status: 400 })
    }

    if (hasServicePolicy && !servicePolicyFile) {
      return NextResponse.json(
        { error: "Si indicaste que tienes política de servicio, debes cargar el archivo" },
        { status: 400 },
      )
    }

    // Create directories if they don't exist
    const uploadDir = join(process.cwd(), "public", "uploads", email.replace("@", "_at_"))
    await mkdir(uploadDir, { recursive: true })

    // Save files
    const savedFiles: Record<string, string> = {}

    if (servicePolicyFile) {
      const buffer = await servicePolicyFile.arrayBuffer()
      const filename = `policy_${Date.now()}.pdf`
      const filepath = join(uploadDir, filename)
      await writeFile(filepath, Buffer.from(buffer))
      savedFiles.servicePolicyFile = filename
    }

    if (inventoryFile) {
      const buffer = await inventoryFile.arrayBuffer()
      const filename = `inventory_${Date.now()}.${inventoryFile.name.split(".").pop()}`
      const filepath = join(uploadDir, filename)
      await writeFile(filepath, Buffer.from(buffer))
      savedFiles.inventoryFile = filename
    }

    if (productImages.length > 0) {
      const imageDir = join(uploadDir, "images")
      await mkdir(imageDir, { recursive: true })
      const imageFilenames: string[] = []

      for (const image of productImages) {
        const buffer = await image.arrayBuffer()
        const filename = `image_${Date.now()}_${Math.random().toString(36).slice(2)}.${image.name.split(".").pop()}`
        const filepath = join(imageDir, filename)
        await writeFile(filepath, Buffer.from(buffer))
        imageFilenames.push(filename)
      }

      savedFiles.productImages = JSON.stringify(imageFilenames)
    }

    // TODO: Guardar en base de datos
    // Aquí iría la lógica para guardar en Supabase, Neon, etc.
    const clientData = {
      id: `prod_${Date.now()}`,
      type: "product",
      companyName,
      email,
      phone,
      businessDescription,
      targetAudience,
      selectedPlan,
      hasServicePolicy,
      acceptGDPR,
      savedFiles,
      createdAt: new Date().toISOString(),
    }

    console.log("Product client registered:", clientData)

    // TODO: Enviar email de confirmación al cliente y al admin

    return NextResponse.json({
      success: true,
      message: "Solicitud enviada exitosamente. Te contactaremos pronto.",
      clientId: clientData.id,
    })
  } catch (error) {
    console.error("Error processing product form:", error)
    return NextResponse.json({ error: "Error al procesar el formulario" }, { status: 500 })
  }
}
