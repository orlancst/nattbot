import { useTranslations } from "next-intl";

import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Features from "@/components/features"
import Pricing from "@/components/pricing"
import FAQ from "@/components/faq"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {

  const t_hero = useTranslations("hero");

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero badge={t_hero("badge")} h1_start={t_hero("h1_start")} h1_ai={t_hero("h1_ai")} desc={t_hero("desc")} cta1={t_hero("cta1")} cta2={t_hero("cta2")} stat1={t_hero("stat1")} stat2={t_hero("stat2")} stat3={t_hero("stat3")} />
      <Features />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
