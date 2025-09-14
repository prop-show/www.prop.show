import { cn } from "@/lib/utils"
import React from "react"

interface Props {
  className?: string
  children?: React.ReactNode
}

export default function Container({ className, children }: Props) {
  return <section className={cn("min-h-[75vh]", className)}>{children}</section>
}
