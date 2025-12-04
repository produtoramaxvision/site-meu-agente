"use client"

import { ReactNode } from "react"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

// New BentoGrid component
const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className,
      )}
    >
      {children}
    </div>
  )
}

// New BentoCard component with hover effects
const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}: {
  name: string
  className?: string
  background?: ReactNode
  Icon: any
  description: string
  href?: string
  cta?: string
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
      // light styles
      "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      // dark styles
      "transform-gpu dark:bg-neutral-900 dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className,
    )}
  >
    <div>{background}</div>
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
      <Icon className="h-12 w-12 origin-left transform-gpu text-neutral-700 dark:text-neutral-300 transition-all duration-300 ease-in-out group-hover:scale-75" />
      <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
        {name}
      </h3>
      <p className="max-w-lg text-neutral-500 dark:text-neutral-400">{description}</p>
    </div>

    {href && cta && (
      <div
        className={cn(
          "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
        )}
      >
        <Button variant="ghost" asChild size="sm" className="pointer-events-auto">
          <a href={href}>
            {cta}
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    )}
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </div>
)

// Legacy exports for backward compatibility
export interface BentoFeature {
  id: string
  title?: string
  description?: string
  content: ReactNode
  className?: string
}

interface BentoGridWithFeaturesProps {
  features: BentoFeature[]
  className?: string
}

// Legacy BentoGridWithFeatures for backward compatibility
const BentoGridWithFeatures = ({ features, className }: BentoGridWithFeaturesProps) => {
  return (
    <div className="relative mb-6">
      <div className={cn("grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 gap-4 rounded-3xl", className)}>
        {features.map((feature) => (
          <div
            key={feature.id}
            id={feature.id}
            className={cn("relative overflow-hidden p-4 sm:p-8 bg-card border rounded-xl shadow-sm", feature.className)}
          >
            {feature.title && (
              <h3 className="text-left text-xl tracking-tight text-card-foreground md:text-2xl md:leading-snug">
                {feature.title}
              </h3>
            )}
            {feature.description && (
              <p className="text-sm font-normal text-muted-foreground mx-0 my-2 max-w-sm text-left md:text-sm">
                {feature.description}
              </p>
            )}
            <div className="h-full w-full mt-4">
              {feature.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export { BentoCard, BentoGrid, BentoGridWithFeatures }

