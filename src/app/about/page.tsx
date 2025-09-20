import Container from "@/components/Container"
import Creators from "@/components/Creators"
import Modules from "@/components/modules"
import PageHeader from "@/components/PageHeader"
import SectionTitle from "@/components/SectionTitle"
import type { Metadata } from "next"
import OurMission from "./components/our-mission"
import Stack from "./components/stack"
// import Concat from "./components/concat"

export const metadata: Metadata = {
  title: "关于我们 - prop.show",
  description: "了解 prop.show 前端开发播客与教程平台，我们的使命、内容和创作团队。",
  openGraph: {
    title: "关于我们 - prop.show",
    description: "了解 prop.show 前端开发播客与教程平台，我们的使命、内容和创作团队。",
    url: "https://prop.show/about",
  },
}

export default function AboutPage() {
  return (
    <Container className="px-4 md:px-8 py-8">
      {/* 页面头部 */}
      <PageHeader title="关于 prop.show" description="为你传递前端开发的核心属性，分享技术洞察与编程智慧" />

      {/* 项目介绍 */}
      <OurMission />

      {/* 内容类型 */}
      <Modules />

      {/* 主播介绍 */}
      <section className="mb-12">
        <SectionTitle title="创作团队" />
        <div className="text-center">
          <Creators />
          <p className="text-sm text-muted-foreground mt-4 max-w-md mx-auto">
            我们是一群热爱前端技术的开发者，致力于通过高质量的内容分享，帮助更多开发者提升技能。
          </p>
        </div>
      </section>

      {/* 技术栈 */}
      <Stack />

      {/* 联系方式 */}
      {/* <Concat /> */}
    </Container>
  )
}
