import { Logo } from "@/components/logo"
import BlurText from "./react-bits/BlurText"

export function PodcastHero() {
  return (
    <header className="my-10" role="banner">
      <div className="flex justify-center">
        <span className="hover:animate-spin">
          <Logo size={300} />
        </span>
      </div>
      <section className="text-center flex justify-center">
        <h1 className="sr-only">prop.show - 前端开发播客与教程</h1>
        <BlurText
          text="为你传递前端开发的核心属性"
          delay={150}
          animateBy="words"
          direction="top"
          className="font-bold mt-4 text-5xl text-center"
        />
      </section>
      <div className="sr-only">
        <p>prop.show 是专注于前端开发的播客与教程平台，提供 React、Vue、Node.js、TypeScript 等技术内容。</p>
      </div>
    </header>
  )
}
