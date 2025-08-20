import { Logo } from "@/components/logo"

export function PodcastHero() {
  return (
    <section className="my-10">
      <div className="flex justify-center">
        <span className="hover:animate-spin">
          <Logo size={400} />
        </span>
      </div>
      <section className="text-center">
        <p className="font-bold mt-4 text-5xl">为你传递前端开发的核心属性</p>
      </section>
    </section>
  )
}
