import React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const glowVariants = cva("absolute w-full", {
  variants: {
    variant: {
      top: "top-0",
      above: "-top-[128px]",
      bottom: "bottom-0",
      below: "-bottom-[128px]",
      center: "top-[50%]",
    },
  },
  defaultVariants: {
    variant: "top",
  },
})

const Glow = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof glowVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(glowVariants({ variant }), className)}
    {...props}
  >
    <div
      className={cn(
        "absolute left-1/2 h-[220px] w-[55%] -translate-x-1/2 scale-[1.6] rounded-[50%] opacity-55 blur-3xl",
        "bg-[radial-gradient(ellipse_at_center,_hsl(var(--muted)_/_0.45)_0%,_hsl(var(--background)_/_0.9)_42%,_hsl(var(--background)_/_0)_70%)] sm:h-[420px]",
        variant === "center" && "-translate-y-1/2",
      )}
    />
    <div
      className={cn(
        "absolute left-1/2 h-[120px] w-[32%] -translate-x-1/2 scale-[1.4] rounded-[50%] opacity-45 blur-2xl",
        "bg-[radial-gradient(ellipse_at_center,_hsl(var(--muted)_/_0.55)_8%,_hsl(var(--background)_/_0.75)_38%,_hsl(var(--background)_/_0)_65%)] sm:h-[220px]",
        variant === "center" && "-translate-y-1/2",
      )}
    />
  </div>
))
Glow.displayName = "Glow"

export { Glow }

