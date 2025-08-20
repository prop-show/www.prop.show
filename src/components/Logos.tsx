import React from "react"
import LogoLoop from "./react-bits/LogoLoop"
import {
  IconBrandVue,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandNodejs,
  IconBrandNuxt,
} from "@tabler/icons-react"

const techLogos = [
  { node: <IconBrandReact size={60} />, title: "React", href: "https://react.dev" },
  { node: <IconBrandNextjs size={60} />, title: "Next.js", href: "https://nextjs.org" },
  { node: <IconBrandVue size={60} />, title: "Vue.js", href: "https://vuejs.org/" },
  { node: <IconBrandNuxt size={60} />, title: "Nuxt.js", href: "https://nuxt.com/" },
  { node: <IconBrandTypescript size={60} />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <IconBrandTailwind size={60} />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <IconBrandNodejs size={60} />, title: "Nodejs", href: "https://nodejs.org/" },
]

export default function Logos() {
  return (
    <div className="my-8">
      <LogoLoop
        logos={techLogos}
        speed={20}
        direction="left"
        logoHeight={48}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        ariaLabel="Technology partners"
      />
    </div>
  )
}
