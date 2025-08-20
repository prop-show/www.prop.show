import React from "react"
import { Logo } from "./logo"

export default function Footer() {
  return (
    <footer>
      <section className="flex items-center">
        <Logo size={80} />
        <section>
          <div className="font-black text-5xl">prop.show</div>
          <p className="font-bold mt-1">为你传递前端开发的核心属性</p>
        </section>
      </section>
      <section className="mt-1 font-black">@2025 - prop.show</section>
    </footer>
  )
}
