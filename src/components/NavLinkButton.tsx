"use client"
import { usePathname } from "next/navigation"

import React from "react"
import { Button } from "./ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"

export interface NavLink {
  href: string
  title: string
  icon: React.ReactElement
}

export default function NavLinkButton({ href, title, icon, className }: NavLink & { className?: string }) {
  const pathname = usePathname()

  const isActiveLink = (href: string) => {
    if (pathname === href) return true

    return pathname.startsWith(href + "/")
  }
  return (
    <Button asChild variant={isActiveLink(href) ? "default" : "ghost"} className={cn(className)}>
      <Link
        href={{
          pathname: href,
        }}
        className="flex items-center gap-2"
      >
        {icon}

        {title}
      </Link>
    </Button>
  )
}
