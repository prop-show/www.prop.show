import BlurText from "@/components/react-bits/BlurText"
import { cn } from "@/lib/utils"

interface PageHeaderProps {
  title: string
  description?: string
  className?: string
  titleClassName?: string
  descriptionClassName?: string
}

export default function PageHeader({
  title,
  description,
  className,
  titleClassName,
  descriptionClassName,
}: PageHeaderProps) {
  return (
    <header className={cn("text-center mb-12", className)}>
      <BlurText
        text={title}
        delay={150}
        animateBy="words"
        direction="top"
        className={cn("font-bold items-center justify-center mx-auto text-4xl md:text-5xl mb-4", titleClassName)}
      />
      {description && (
        <p className={cn("text-lg text-muted-foreground max-w-2xl mx-auto", descriptionClassName)}>{description}</p>
      )}
    </header>
  )
}
