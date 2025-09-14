import { cn } from "@/lib/utils"

interface SectionTitleProps {
  title: string
  className?: string
  centered?: boolean
  size?: "sm" | "md" | "lg"
}

export default function SectionTitle({ title, className, centered = true, size = "md" }: SectionTitleProps) {
  const sizeClasses = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl",
  }

  return <h2 className={cn("font-bold mb-6", sizeClasses[size], centered && "text-center", className)}>{title}</h2>
}
