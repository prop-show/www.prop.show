import { Logo } from "@/components/logo"
import BlurText from "./react-bits/BlurText"

export function PodcastHero() {
  return (
    <section className="my-10">
      <div className="flex justify-center">
        <span className="hover:animate-spin">
          <Logo size={300} />
        </span>
      </div>
      <section className="text-center flex justify-center">
        <BlurText
          text="为你传递前端开发的核心属性"
          delay={150}
          animateBy="words"
          direction="top"
          className="font-bold mt-4 text-5xl text-center"
        />
      </section>
    </section>
  )
}
