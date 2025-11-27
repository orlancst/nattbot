"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

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
            <Link
              href="/contact"
              className="block px-6 py-2 bg-primary text-primary-foreground rounded-full text-center font-medium"
            >
              Contacto
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
