"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname, useParams } from "next/navigation";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();
  const params = useParams();
  const currentLocale = params?.locale || "es";

  // Función para cambiar idioma preservando la ruta actual
  const switchLocaleUrl = (locale: string) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale; // reemplaza el idioma actual por el nuevo
    return segments.join("/");
  };

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">
                N
              </span>
            </div>
            <Link href="/" className="text-xl font-bold text-foreground">
              NattBot
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <Link
              href="#features"
              className="text-foreground hover:text-primary transition"
            >
              Características
            </Link>
            <Link
              href="#pricing"
              className="text-foreground hover:text-primary transition"
            >
              Planes
            </Link>
            <Link
              href="#faq"
              className="text-foreground hover:text-primary transition"
            >
              Preguntas
            </Link>

            {/* ⬇️ Selector de idioma (Desktop) b*/}
            <div className="relative group">
              <button className="text-foreground hover:text-primary transition px-2 py-1">
                {currentLocale}
              </button>

              <div
                className="
      absolute 
      mt-2 
      w-24 
      bg-card 
      border 
      border-border 
      rounded-lg 
      shadow-lg 
      hidden 
      group-hover:flex 
      flex-col 
      z-50 
      pointer-events-auto
    "
              >
                <Link
                  href={switchLocaleUrl("es")}
                  className="px-3 py-2 text-foreground hover:bg-primary hover:text-primary-foreground"
                >
                  ES
                </Link>
                <Link
                  href={switchLocaleUrl("en")}
                  className="px-3 py-2 text-foreground hover:bg-primary hover:text-primary-foreground"
                >
                  EN
                </Link>
              </div>
            </div>

            <Link
              href="/contact"
              className="px-6 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition font-medium"
            >
              Empezar
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              href="#features"
              className="block text-foreground hover:text-primary transition py-2"
            >
              Características
            </Link>
            <Link
              href="#pricing"
              className="block text-foreground hover:text-primary transition py-2"
            >
              Planes
            </Link>
            <Link
              href="#faq"
              className="block text-foreground hover:text-primary transition py-2"
            >
              Preguntas
            </Link>

            <div className="pt-2 border-t border-border">
              <p className="text-muted-foreground text-sm px-1">Idioma</p>

              <div className="flex gap-4 py-2">
                <Link
                  href={switchLocaleUrl("es")}
                  className={`px-3 py-1 rounded ${
                    currentLocale === "es"
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-primary/20"
                  }`}
                >
                  ES
                </Link>

                <Link
                  href={switchLocaleUrl("en")}
                  className={`px-3 py-1 rounded ${
                    currentLocale === "en"
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-primary/20"
                  }`}
                >
                  EN
                </Link>
              </div>
            </div>

            <Link
              href="/contact"
              className="block px-6 py-2 bg-primary text-primary-foreground rounded-full text-center font-medium"
            >
              Empezar
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
