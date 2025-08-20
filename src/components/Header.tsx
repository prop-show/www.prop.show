import NavLinkButton, { NavLink } from "./NavLinkButton"
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
import React from "react"
import { Logo } from "./logo"

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

const links: NavLink[] = [
  { href: "/", title: "首页", icon: <IconArmchair2 /> },
  { href: "/shows", title: "节目单", icon: <IconBroadcast /> },
  { href: "/videos", title: "视频", icon: <IconDeviceTv /> },
  { href: "/news", title: "新闻", icon: <IconNews /> },
  { href: "/about", title: "关于我们", icon: <IconBrandAsana /> },
  { href: "/qa", title: "来信", icon: <IconMailbox /> },
]

export default function Header() {
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
        {links.map(({ href, icon, title }) => (
          <NavLinkButton key={href} href={href} title={title} icon={icon} />
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
              {links.map(({ href, title, icon }) => (
                <NavLinkButton className="justify-start w-full" key={href} href={href} title={title} icon={icon} />
              ))}
            </main>
          </SheetContent>
        </Sheet>
      </aside>
    </header>
  )
}
