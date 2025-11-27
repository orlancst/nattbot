"use client";

import { useState } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="text-left space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Términos y Condiciones
              </h1>
              <p className="text-muted-foreground mb-6">
                Bienvenido a NattBott. Al acceder y utilizar nuestro sitio web o
                nuestros servicios de automatización inteligente para atención
                al cliente, aceptas regirte por los presentes Términos y
                Condiciones. Si no estás de acuerdo con alguna parte de estos
                términos, te recomendamos no utilizar la plataforma.
              </p>

              {/* 1 */}
              <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">
                1. Definición del servicio
              </h2>
              <p className="text-muted-foreground mb-4">
                NattBott es una contestadora inteligente impulsada por
                inteligencia artificial que permite a empresas gestionar chats,
                llamadas y comunicación automatizada mediante respuestas
                personalizadas basadas en información suministrada por cada
                cliente. El sistema aprende del contenido enviado por la empresa
                para mejorar su precisión y coherencia.
              </p>

              {/* 2 */}
              <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">
                2. Registro y tipos de empresa
              </h2>
              <p className="text-muted-foreground mb-4">
                Para utilizar NattBott, las empresas deben registrarse a través
                del formulario correspondiente, donde deberán especificar si
                venden productos o prestan servicios. La información solicitada
                varía según esta clasificación.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-2">
                2.1 Empresas que venden productos
              </h3>
              <ul className="list-disc ml-6 text-muted-foreground mb-4">
                <li>
                  Adjuntar políticas de servicio (PDF) o marcar la opción de no
                  disponer de ellas.
                </li>
                <li>
                  Subir inventario en CSV o Excel con nombre, precio, unidades y
                  categorías.
                </li>
                <li>Proporcionar enlaces a imágenes alojadas en la nube.</li>
                <li>Aceptar el checkbox obligatorio de Habeas Data.</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-2">
                2.2 Empresas que ofrecen servicios
              </h3>
              <ul className="list-disc ml-6 text-muted-foreground mb-4">
                <li>Enviar políticas de servicio (obligatorio).</li>
                <li>Aceptar el Habeas Data.</li>
                <li>
                  Agendar una reunión mediante Google Calendar para la
                  implementación.
                </li>
              </ul>

              {/* 3 */}
              <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">
                3. Planes ofrecidos
              </h2>

              <h3 className="text-xl font-semibold text-foreground mb-2">
                3.1 Plan Gratuito
              </h3>
              <ul className="list-disc ml-6 text-muted-foreground mb-4">
                <li>Gestión de hasta 10 productos.</li>
                <li>100 conversaciones vía Telegram.</li>
                <li>Acceso a CRM y Dashboard.</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-2">
                3.2 Plan Básico
              </h3>
              <ul className="list-disc ml-6 text-muted-foreground mb-4">
                <li>Hasta 1000 productos.</li>
                <li>Automatización mediante WhatsApp.</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-2">
                3.3 Plan Personalizado
              </h3>
              <ul className="list-disc ml-6 text-muted-foreground mb-4">
                <li>Posibilidad de conectarse a APIs externas.</li>
                <li>Precios personalizados mediante cotización directa.</li>
              </ul>

              {/* 4 */}
              <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">
                4. Uso permitido del servicio
              </h2>
              <p className="text-muted-foreground mb-4">
                El usuario se compromete a utilizar NattBott exclusivamente para
                fines comerciales legítimos y relacionados con la automatización
                de la atención al cliente. Queda estrictamente prohibido usar la
                plataforma para enviar contenido ilegal, difamatorio, engañoso o
                que infrinja derechos de terceros.
              </p>

              {/* 5 */}
              <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">
                5. Información proporcionada por el usuario
              </h2>
              <p className="text-muted-foreground mb-4">
                El usuario es responsable de garantizar que la información
                cargada (inventarios, políticas, imágenes, descripciones, etc.)
                sea veraz, actual y legalmente válida. NattBott no se hace
                responsable de errores, omisiones o contenido inapropiado
                enviado por el usuario.
              </p>

              {/* 6 */}
              <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">
                6. Responsabilidad del funcionamiento de la IA
              </h2>
              <p className="text-muted-foreground mb-4">
                NattBott utiliza modelos avanzados de inteligencia artificial
                que generan respuestas automáticas basadas en la información
                proporcionada por cada empresa. Aunque trabajamos para ofrecer
                la mayor precisión, el usuario acepta que podrían existir fallos
                ocasionales o interpretaciones no perfectas, y exonera a
                NattBott de responsabilidad por dichos errores.
              </p>

              {/* 7 */}
              <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">
                7. Propiedad intelectual
              </h2>
              <p className="text-muted-foreground mb-4">
                La marca NattBott, su plataforma, diseños, funcionalidades y
                contenido asociado son propiedad exclusiva de la empresa
                desarrolladora. Queda prohibida su reproducción, modificación,
                distribución o uso no autorizado.
              </p>

              {/* 8 */}
              <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">
                8. Suspensión o cancelación del servicio
              </h2>
              <p className="text-muted-foreground mb-4">
                NattBott podrá suspender temporal o permanentemente una cuenta
                en caso de uso indebido, incumplimiento de estos términos o
                actividades que pongan en riesgo la seguridad del sistema o de
                otros usuarios.
              </p>

              {/* 9 */}
              <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">
                9. Limitación de responsabilidad
              </h2>
              <p className="text-muted-foreground mb-4">
                NattBott no será responsable por pérdidas de datos,
                interrupciones del servicio, errores derivados del contenido
                proporcionado por el usuario o daños indirectos relacionados con
                el uso de la plataforma. El uso de NattBott es bajo
                responsabilidad del usuario.
              </p>

              {/* 10 */}
              <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">
                10. Enlaces externos
              </h2>
              <p className="text-muted-foreground mb-4">
                Algunos apartados pueden incluir enlaces a servicios externos
                como Google Calendar, plataformas de almacenamiento en la nube o
                redes sociales. NattBott no es responsable de las políticas de
                privacidad o contenido de dichos sitios. Instagram oficial:{" "}
                <a
                  href="https://www.instagram.com/n4ttbot/"
                  target="_blank"
                  className="text-blue-400 underline"
                >
                  @n4ttbot
                </a>
                .
              </p>

              {/* 11 */}
              <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">
                11. Modificaciones a los términos
              </h2>
              <p className="text-muted-foreground mb-4">
                NattBott podrá actualizar estos Términos y Condiciones en
                cualquier momento. Las modificaciones entrarán en vigencia desde
                su publicación en el sitio web. Recomendamos revisar
                periódicamente este documento.
              </p>

              {/* 12 */}
              <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">
                12. Contacto
              </h2>
              <p className="text-muted-foreground">
                Para consultas relacionadas con estos términos, puedes
                comunicarte con nosotros a través de los medios disponibles en
                la web oficial.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
