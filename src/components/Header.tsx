"use client"

import {
  IconArmchair2,
  IconBrandAsana,
  IconBroadcast,
  IconDeviceTv,
  IconLayoutSidebarLeftExpand,
  IconMailbox,
  IconNews,
} from "@tabler/icons-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"
import { Logo } from "./logo"
import { Button } from "./ui/button"

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

const links: { href: string; title: string; icon: React.ReactElement }[] = [
  { href: "/", title: "首页", icon: <IconArmchair2 /> },
  { href: "/shows", title: "节目单", icon: <IconBroadcast /> },
  { href: "/videos", title: "视频", icon: <IconDeviceTv /> },
  { href: "/news", title: "新闻", icon: <IconNews /> },
  { href: "/about", title: "关于我们", icon: <IconBrandAsana /> },
  { href: "/qa", title: "来信", icon: <IconMailbox /> },
]

export default function Header() {
  const pathname = usePathname()

  const isActiveLink = (href: string) => {
    if (pathname === href) return true
    // 对于子路径匹配，比如 /videos/xxx 匹配 /videos
    return pathname.startsWith(href + "/")
  }

  return (
    <header className="flex justify-between items-center py-5 px-4 md:px-0">
      <Link href="/" className="hidden md:block">
        <section className="flex items-center">
          <Logo size={60} />
          <section className="hidden md:block ml-2">
            <div className="font-black text-5xl">prop.show</div>
            <p className="font-bold mt-1">为你传递前端开发的核心属性</p>
          </section>
        </section>
      </Link>

      <aside className="justify-end flex-1 hidden md:flex">
        {links.map((link) => (
          <Button asChild variant={isActiveLink(link.href) ? "default" : "ghost"} key={link.href}>
            <Link href={link.href}>
              {link.icon}
              {link.title}
            </Link>
          </Button>
        ))}
      </aside>

      <aside className="block md:hidden">
        <Sheet>
          <SheetTrigger>
            <IconLayoutSidebarLeftExpand />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>
                <Link href="/">
                  <section className="flex items-center">
                    <Logo size={60} />
                    <section className="ml-2">
                      <div className="font-black text-xl">prop.show</div>
                      <p className="font-bold text-xs mt-1">为你传递前端开发的核心属性</p>
                    </section>
                  </section>
                </Link>
              </SheetTitle>
            </SheetHeader>
            <main className="mx-2 flex flex-col items-start">
              {links.map((link) => (
                <Button
                  className="justify-start w-full"
                  asChild
                  variant={isActiveLink(link.href) ? "default" : "ghost"}
                  key={link.href}
                >
                  <Link href={link.href}>
                    {link.icon}
                    {link.title}
                  </Link>
                </Button>
              ))}
            </main>
          </SheetContent>
        </Sheet>
      </aside>
    </header>
  )
}
