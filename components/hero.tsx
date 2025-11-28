"use client"

import Link from "next/link"

type HeroProps = {
  badge: string
  h1_start: string
  h1_ai: string
  desc: string
  cta1: string
  cta2: string
  stat1: string
  stat2: string
  stat3: string
}

export default function Hero({badge, h1_start, h1_ai, desc, cta1, cta2, stat1, stat2, stat3}: HeroProps) {
  return (
    <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-6">
          <div className="inline-block px-4 py-2 rounded-full bg-card border border-border">
            <span className="text-accent text-sm font-semibold">✨ {badge}</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-balance">
            {h1_start}
            <span className="block bg-linear-to-r from-blue-600 via-blue-400 to-blue-200 bg-clip-text text-transparent">
              {h1_ai}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            {desc}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link
              href="/contact"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition text-center"
            >
              {cta1}
            </Link>
            <Link
              href="https://www.instagram.com/n4ttbot/"
              target="_blank"
              className="px-8 py-3 border border-border text-foreground rounded-full font-semibold hover:bg-card transition text-center"
            >
              {cta2}
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-12 md:pt-16">
            <div className="space-y-2">
              <div className="text-2xl md:text-3xl font-bold text-primary">100+</div>
              <div className="text-sm text-muted-foreground">{stat1}</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl md:text-3xl font-bold text-secondary">50K+</div>
              <div className="text-sm text-muted-foreground">{stat2}</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl md:text-3xl font-bold text-accent">99%</div>
              <div className="text-sm text-muted-foreground">{stat3}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
