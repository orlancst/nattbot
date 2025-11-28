"use client";

import { useState } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useTranslations } from "next-intl";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="text-left space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Políticas de Privacidad
              </h1>


              <p className="text-muted-foreground mb-6">
          En NattBott, valoramos profundamente la confianza de nuestros usuarios y 
          nos comprometemos a proteger la información personal y empresarial que 
          nos suministran. Esta Política de Privacidad explica cómo recopilamos, 
          utilizamos, almacenamos y protegemos los datos proporcionados a través 
          de nuestro sitio web y nuestros servicios. Al utilizar NattBott, aceptas 
          las prácticas descritas en este documento.
        </p>

        {/* Sección 1 */}
        <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">
          1. Sobre NattBott
        </h2>
        <p className="text-muted-foreground mb-4">
          NattBott es una contestadora inteligente diseñada para optimizar la 
          comunicación entre negocios y sus clientes. Gestiona chats y llamadas 
          con respuestas personalizadas basadas en la información proporcionada 
          por cada empresa. Su inteligencia artificial aprende y mejora 
          continuamente para ofrecer respuestas coherentes, precisas y alineadas 
          con los productos o servicios del negocio.
        </p>

        {/* Sección 2 */}
        <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">
          2. Información que recopilamos
        </h2>
        <p className="text-muted-foreground mb-4">
          Dependiendo del tipo de empresa (venta de productos o prestación de 
          servicios), recopilamos distintos tipos de información necesarios para 
          el correcto funcionamiento de la plataforma.
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-2">
          2.1. Información general recopilada
        </h3>
        <ul className="list-disc ml-6 text-muted-foreground mb-4">
          <li>Nombre de la empresa y/o representante.</li>
          <li>Información de contacto (correo, teléfono, redes sociales).</li>
          <li>Preferencias de idioma para el funcionamiento de NattBott.</li>
          <li>Datos enviados mediante formularios o integraciones externas.</li>
        </ul>

        {/* Sección 3 */}
        <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">
          3. Empresas que venden productos
        </h2>

        <h3 className="text-xl font-semibold text-foreground mb-2">
          3.1. Políticas de servicio
        </h3>
        <p className="text-muted-foreground mb-4">
          La empresa puede adjuntar sus políticas de servicio en formato PDF. 
          En caso de no disponer de ellas, podrá marcar esta opción en un 
          checkbox del formulario.
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-2">
          3.2. Inventario de productos
        </h3>
        <p className="text-muted-foreground mb-4">
          Se puede subir un archivo CSV o Excel que incluya:
        </p>
        <ul className="list-disc ml-6 text-muted-foreground mb-4">
          <li>Nombre del producto</li>
          <li>Precio</li>
          <li>Unidades disponibles</li>
          <li>Categorías</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mb-2">
          3.3. Imágenes de productos
        </h3>
        <p className="text-muted-foreground mb-4">
          Las imágenes deben subirse mediante un enlace a una carpeta en la nube, 
          utilizado para entrenar el sistema y personalizar las respuestas.
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-2">
          3.4. Habeas Data
        </h3>
        <p className="text-muted-foreground mb-4">
          Se solicitará aceptar un checkbox de Habeas Data para autorizar el uso 
          de la información cargada.
        </p>

        {/* Sección 4 */}
        <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">
          4. Empresas que ofrecen servicios
        </h2>
        <ul className="list-disc ml-6 text-muted-foreground mb-4">
          <li>Envío obligatorio de políticas de servicio en PDF o texto.</li>
          <li>Aceptación del Habeas Data.</li>
          <li>
            Coordinación mediante Google Calendar para agendar reuniones de 
            integración.
          </li>
        </ul>

        {/* Sección 5 */}
        <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">
          5. Planes de uso y límites
        </h2>

        <h3 className="text-xl font-semibold text-foreground mb-2">5.1. Gratuito</h3>
        <ul className="list-disc ml-6 text-muted-foreground mb-4">
          <li>10 productos</li>
          <li>100 conversaciones por Telegram</li>
          <li>Acceso a CRM y Dashboard</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mb-2">5.2. Básico</h3>
        <ul className="list-disc ml-6 text-muted-foreground mb-4">
          <li>1000 productos</li>
          <li>Conversaciones por WhatsApp</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mb-2">5.3. Personalizado</h3>
        <ul className="list-disc ml-6 text-muted-foreground mb-4">
          <li>Conexión a APIs externas</li>
          <li>Contacto directo para cotizar precios</li>
        </ul>

        {/* Sección 6 */}
        <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">
          6. Finalidad del uso de la información
        </h2>
        <p className="text-muted-foreground mb-4">
          Los datos se utilizan exclusivamente para mejorar la experiencia dentro 
          de NattBott: entrenar la IA, personalizar respuestas, gestionar CRM, 
          programar reuniones y cumplir con obligaciones contractuales.
        </p>

        {/* Sección 7 */}
        <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">
          7. Tratamiento y seguridad de la información
        </h2>
        <p className="text-muted-foreground mb-4">
          Implementamos prácticas de seguridad como cifrado, autenticación y 
          acceso restringido. Si bien trabajamos para garantizar la protección de 
          los datos, ningún sistema digital es completamente infalible.
        </p>

        {/* Sección 8 */}
        <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">
          8. Derechos del usuario (Habeas Data)
        </h2>
        <ul className="list-disc ml-6 text-muted-foreground mb-4">
          <li>Consultar los datos almacenados.</li>
          <li>Actualizar o corregir información.</li>
          <li>Revocar autorizaciones.</li>
          <li>Solicitar eliminación total o parcial de sus datos.</li>
        </ul>

        {/* Sección 9 */}
        <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">
          9. Transferencia internacional de datos
        </h2>
        <p className="text-muted-foreground mb-4">
          Debido a la posibilidad de operar en múltiples países, algunos datos 
          podrían procesarse en servidores fuera de la región. Garantizamos que 
          se mantendrán estándares adecuados de protección.
        </p>

        {/* Sección 10 */}
        <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">
          10. Enlaces externos
        </h2>
        <p className="text-muted-foreground mb-4">
          Podemos incluir enlaces a plataformas externas, como servicios en la 
          nube, Google Calendar o redes sociales, incluyendo Instagram:{" "}
          <a
            href="https://www.instagram.com/n4ttbot/"
            target="_blank"
            className="text-blue-600 underline"
          >
            @n4ttbot
          </a>.  
          NattBott no se responsabiliza por las políticas de terceros.
        </p>

        {/* Sección 11 */}
        <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">
          11. Modificaciones a esta política
        </h2>
        <p className="text-muted-foreground mb-4">
          NattBott puede modificar esta Política de Privacidad en cualquier 
          momento. Las actualizaciones se publicarán aquí con su fecha 
          correspondiente.
        </p>

        {/* Sección 12 */}
        <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">
          12. Contacto
        </h2>
        <p className="text-muted-foreground">
          Si tienes preguntas sobre esta política o deseas ejercer alguno de tus 
          derechos, puedes comunicarte mediante los canales disponibles en el 
          sitio web.
        </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
