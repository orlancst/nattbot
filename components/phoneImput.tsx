"use client";

import React, { useEffect, useState } from "react";

  interface CountryCode {
    name: string;
    code: string;
    dial_code: string;
  }

  interface PhoneInputProps {
  formData: {
    phoneCode: string;
    phone: string;
  };
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}

export default function PhoneInput({ formData, handleInputChange, }: PhoneInputProps) {

  const [countryCodes, setCountryCodes] = useState<CountryCode[]>([]);

  useEffect(() => {
    const fetchCountryCodes = async () => {
      try {
        const response = await fetch(
          "https://countriesnow.space/api/v0.1/countries/codes"
        );
        const result = await response.json();

        if (!result.error && Array.isArray(result.data)) {
          setCountryCodes(result.data);
        }
      } catch (error) {
        console.error("Error obteniendo los indicadores:", error);
      }
    };

    fetchCountryCodes();
  }, []);

  return (
    <div>
      <label className="block text-sm font-semibold text-foreground mb-2">
        Teléfono *
      </label>

      <div className="flex gap-3">
        {/* Selector dinámico de indicativos */}
        <select
          name="phoneCode"
          value={formData.phoneCode}
          onChange={handleInputChange}
          className="w-48 px-4 py-2 rounded-lg bg-card border border-border text-foreground
                     focus:outline-none focus:border-primary"
        >
          {/* Estado de carga */}
          {countryCodes.length === 0 && <option value="">Cargando...</option>}

          {/* Opciones desde la API */}
          {countryCodes.map((country) => (
            <option key={country.code} value={country.dial_code}>
              {country.dial_code} {country.name}
            </option>
          ))}
        </select>

        {/* Input teléfono */}
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="000 000 0000"
          className="w-full px-4 py-2 rounded-lg bg-card border border-border 
                     text-foreground placeholder-muted-foreground 
                     focus:outline-none focus:border-primary"
        />
      </div>
    </div>
  );
}
