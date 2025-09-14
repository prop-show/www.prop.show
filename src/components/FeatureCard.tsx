import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface FeatureCardProps {
  icon?: ReactNode
  title: string
  description: string
  content?: ReactNode
  className?: string
  headerClassName?: string
  contentClassName?: string
}

export default function FeatureCard({
  icon,
  title,
  description,
  content,
  className,
  headerClassName,
  contentClassName,
}: FeatureCardProps) {
  return (
    <Card className={cn("", className)}>
      <CardHeader className={cn("", headerClassName)}>
        <CardTitle className={cn("flex items-center gap-2", icon ? "" : "")}>
          {icon}
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      {content && <CardContent className={cn("", contentClassName)}>{content}</CardContent>}
    </Card>
  )
}
