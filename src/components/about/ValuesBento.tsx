"use client"

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid"
import { Sparkles, Zap, Heart, ShieldCheck } from "lucide-react"

const features = [
  {
    Icon: Sparkles,
    name: "Inovação Constante",
    description: "Estamos sempre na fronteira da tecnologia, trazendo o que há de mais novo em IA para nossos clientes.",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <div className="h-64 w-64 rounded-full bg-gradient-to-br from-brand-500/30 to-purple-500/30 blur-3xl" />
      </div>
    ),
  },
  {
    Icon: Zap,
    name: "Agilidade",
    description: "Respostas rápidas e soluções eficientes. O tempo do seu cliente é precioso.",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <div className="h-64 w-64 rounded-full bg-gradient-to-br from-amber-500/30 to-orange-500/30 blur-3xl" />
      </div>
    ),
  },
  {
    Icon: Heart,
    name: "Foco no Cliente",
    description: "Nossa tecnologia existe para servir pessoas. Humanização é prioridade.",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <div className="h-64 w-64 rounded-full bg-gradient-to-br from-rose-500/30 to-pink-500/30 blur-3xl" />
      </div>
    ),
  },
  {
    Icon: ShieldCheck,
    name: "Segurança",
    description: "Proteção de dados e privacidade em primeiro lugar, sempre.",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <div className="h-64 w-64 rounded-full bg-gradient-to-br from-emerald-500/30 to-green-500/30 blur-3xl" />
      </div>
    ),
  },
]

export function ValuesBento() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background/50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Nossos Valores</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Os princípios que guiam cada linha de código e cada decisão que tomamos.
          </p>
        </div>
        <BentoGrid className="auto-rows-[20rem]">
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </section>
  )
}
