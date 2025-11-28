"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import PhoneInput from "../phoneImput";

export default function ProductForm() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    // Step 1 - Basic Info
    companyName: "",
    email: "",
    phoneCode: "",
    phone: "",
    website: "",

    // Step 2 - Business Info
    businessDescription: "",
    targetAudience: "",

    // Step 3 - Policies & GDPR
    hasServicePolicy: false,
    servicePolicyFile: null,
    acceptGDPR: false,
    gdprFile: null,

    // Step 4 - Plan Selection
    selectedPlan: "basic",

    // Step 5 - Inventory
    inventoryFile: null,
    productImages: null,
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: string
  ) => {
    if (e.target.files?.[0]) {
      setFormData((prev) => ({
        ...prev,
        [fieldName]: e.target.files?.[0],
      }));
    }
  };

  const validateStep = () => {
    if (step === 1) {
      if (!formData.companyName || !formData.email || !formData.phone) {
        setError("Por favor, completa todos los campos requeridos");
        return false;
      }
    } else if (step === 2) {
      if (!formData.businessDescription || !formData.targetAudience) {
        setError("Por favor, completa la descripción de tu negocio");
        return false;
      }
    } else if (step === 3) {
      if (formData.hasServicePolicy && !formData.servicePolicyFile) {
        setError("Por favor, carga tu política de servicio");
        return false;
      }
      if (formData.acceptGDPR && !formData.gdprFile) {
        setError("Por favor, debes cargar el Habeas Data");
        return false;
      }
    } else if (step === 5) {
      if (!formData.inventoryFile) {
        setError("Por favor, carga tu inventario de productos");
        return false;
      }
    }
    setError("");
    return true;
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateStep()) return;

    setLoading(true);

    try {
      // Aquí irá la lógica para enviar los datos al backend
      // const formDataObj = new FormData()
      // formDataObj.append('companyName', formData.companyName)
      // formDataObj.append('email', formData.email)
      // ... etc

      console.log("Form submitted:", formData);

      // Simulamos un envío exitoso
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Redirect o mostrar mensaje de éxito
      router.push("/success");
    } catch (err) {
      setError("Ocurrió un error al enviar el formulario");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Progress bar */}
      <div className="space-y-3">
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Paso {step} de 5</span>
          <span>{Math.round((step / 5) * 100)}%</span>
        </div>
        <div className="w-full bg-card rounded-full h-2">
          <div
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${(step / 5) * 100}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Step 1: Basic Information */}
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Información Básica
              </h2>
              <p className="text-muted-foreground">
                Cuéntanos sobre tu empresa
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Nombre de la Empresa *
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  placeholder="Ej: Mi Tienda Online"
                  className="w-full px-4 py-2 rounded-lg bg-card border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Correo Electrónico *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="contacto@empresa.com"
                  className="w-full px-4 py-2 rounded-lg bg-card border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
                />
              </div>

              <PhoneInput
                formData={formData}
                handleInputChange={handleInputChange}
              />

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Sitio Web (opcional)
                </label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  placeholder="https://www.tuempresa.com"
                  className="w-full px-4 py-2 rounded-lg bg-card border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Business Description */}
        {step === 2 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Descripción del Negocio
              </h2>
              <p className="text-muted-foreground">
                Cuéntanos más sobre tu empresa y productos
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Descripción de tu Negocio *
                </label>
                <textarea
                  name="businessDescription"
                  value={formData.businessDescription}
                  onChange={handleInputChange}
                  placeholder="Describe brevemente qué vende tu empresa y sus principales características..."
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-card border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Público Objetivo *
                </label>
                <textarea
                  name="targetAudience"
                  value={formData.targetAudience}
                  onChange={handleInputChange}
                  placeholder="¿A quién va dirigido tu negocio? Ej: Mujeres de 25-40 años interesadas en moda sostenible..."
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-card border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary resize-none"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Policies & GDPR */}
        {step === 3 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Políticas y Cumplimiento
              </h2>
              <p className="text-muted-foreground">
                Información sobre tus políticas y protección de datos
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="hasPolicy"
                  name="hasServicePolicy"
                  checked={formData.hasServicePolicy}
                  onChange={handleInputChange}
                  className="w-5 h-5 rounded border-border bg-card cursor-pointer"
                />
                <label
                  htmlFor="hasPolicy"
                  className="text-foreground cursor-pointer"
                >
                  Tengo una política de servicio al cliente
                </label>
              </div>

              {formData.hasServicePolicy && (
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Carga tu Política de Servicio (PDF) *
                  </label>
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition cursor-pointer">
                    <input
                      type="file"
                      accept=".pdf"
                      onChange={(e) => handleFileChange(e, "servicePolicyFile")}
                      className="hidden"
                      id="policyFile"
                    />
                    <label
                      htmlFor="policyFile"
                      className="cursor-pointer block"
                    >
                      <div className="text-2xl mb-2">📄</div>
                      <p className="text-muted-foreground">
                        {formData.servicePolicyFile
                          ? formData.servicePolicyFile.name
                          : "Arrastra tu PDF aquí o haz clic para seleccionar"}
                      </p>
                    </label>
                  </div>
                </div>
              )}

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="acceptGDPR"
                  name="acceptGDPR"
                  checked={formData.acceptGDPR}
                  onChange={handleInputChange}
                  className="w-5 h-5 rounded border-border bg-card cursor-pointer"
                />
                <label
                  htmlFor="acceptGDPR"
                  className="text-foreground cursor-pointer"
                >
                  Tengo la política de Habeas Data
                </label>
              </div>

              {formData.acceptGDPR && (
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Carga tu Política de Habeas Data (PDF) *
                  </label>
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition cursor-pointer">
                    <input
                      type="file"
                      accept=".pdf"
                      onChange={(e) => handleFileChange(e, "gdprFile")}
                      className="hidden"
                      id="gdprFile"
                    />
                    <label htmlFor="gdprFile" className="cursor-pointer block">
                      <div className="text-2xl mb-2">📄</div>
                      <p className="text-muted-foreground">
                        {formData.gdprFile
                          ? formData.gdprFile.name
                          : "Arrastra tu PDF aquí o haz clic para seleccionar"}
                      </p>
                    </label>
                  </div>
                </div>
              )}

              {/* <div className="border border-border rounded-lg p-4 bg-card/50">
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
                  </label>
                </div>
              </div> */}
            </div>
          </div>
        )}

        {/* Step 4: Plan Selection */}
        {step === 4 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Selecciona tu Plan
              </h2>
              <p className="text-muted-foreground">
                Elige el plan que mejor se adapte a tu negocio
              </p>
            </div>

            <div className="space-y-3">
              {[
                {
                  id: "free",
                  name: "Gratuito",
                  description: "10 productos, 100 conversaciones por mes",
                },
                {
                  id: "basic",
                  name: "Básico",
                  description:
                    "Hasta 1000 productos, conversaciones ilimitadas",
                },
                {
                  id: "custom",
                  name: "Personalizado",
                  description: "Inventario ilimitado, APIs de terceros",
                },
              ].map((plan) => (
                <label
                  key={plan.id}
                  className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition ${
                    formData.selectedPlan === plan.id
                      ? "border-primary bg-primary/10"
                      : "border-border bg-card hover:border-border/80"
                  }`}
                >
                  <input
                    type="radio"
                    name="selectedPlan"
                    value={plan.id}
                    checked={formData.selectedPlan === plan.id}
                    onChange={handleInputChange}
                    className="w-5 h-5 cursor-pointer"
                  />
                  <div className="ml-4">
                    <div className="font-semibold text-foreground">
                      {plan.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {plan.description}
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Step 5: Inventory Upload */}
        {step === 5 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Carga tu Inventario
              </h2>
              <p className="text-muted-foreground">
                Sube tu inventario de productos e imágenes
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Archivo de Inventario (CSV o Excel) *
                </label>
                <p className="text-sm">
                  Utiliza el formato de plantillas de productos de WooCommerce.
                </p>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition cursor-pointer">
                  <input
                    type="file"
                    accept=".csv,.xlsx,.xls"
                    onChange={(e) => handleFileChange(e, "inventoryFile")}
                    className="hidden"
                    id="inventoryFile"
                  />
                  <label
                    htmlFor="inventoryFile"
                    className="cursor-pointer block"
                  >
                    <div className="text-2xl mb-2">📊</div>
                    <p className="text-muted-foreground">
                      {formData.inventoryFile
                        ? formData.inventoryFile.name
                        : "Arrastra tu archivo aquí o haz clic para seleccionar"}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Formato esperado: Nombre del producto, Precio, Unidades,
                      Categoría
                    </p>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Imágenes de Productos (opcional)
                </label>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition cursor-pointer">
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={(e) => handleFileChange(e, "productImages")}
                    className="hidden"
                    id="productImages"
                  />
                  <label
                    htmlFor="productImages"
                    className="cursor-pointer block"
                  >
                    <div className="text-2xl mb-2">🖼️</div>
                    <p className="text-muted-foreground">
                      Arrastra imágenes aquí o haz clic para seleccionar
                    </p>
                  </label>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Error message */}
        {error && (
          <div className="p-4 rounded-lg bg-destructive/10 border border-destructive text-destructive text-sm">
            {error}
          </div>
        )}

        {/* Buttons */}
        <div className="flex gap-4 pt-6">
          {step > 1 && (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="px-6 py-2 rounded-lg border border-border text-foreground hover:bg-card transition"
            >
              Anterior
            </button>
          )}

          <div className="flex-1" />

          {step < 5 ? (
            <button
              type="button"
              onClick={handleNext}
              className="px-6 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition font-semibold"
            >
              Siguiente
            </button>
          ) : (
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Enviando..." : "Enviar Formulario"}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
