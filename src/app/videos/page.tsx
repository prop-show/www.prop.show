import Container from "@/components/Container"
import FeatureCard from "@/components/FeatureCard"
import PageHeader from "@/components/PageHeader"
import SectionTitle from "@/components/SectionTitle"
import { VideoList } from "@/components/VideoList"
import { getFeaturedVideos } from "@/lib/videos"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "视频 - prop.show",
  description: "观看 prop.show 前端开发视频，包含项目实战、技术解析、工具使用等高质量内容。",
  openGraph: {
    title: "视频 - prop.show",
    description: "观看 prop.show 前端开发视频，包含项目实战、技术解析、工具使用等高质量内容。",
    url: "https://prop.show/videos",
  },
}

export default async function VideosPage() {
  // 获取所有视频数据
  const featuredVideos = await getFeaturedVideos()

  return (
    <Container className="px-4 py-8">
      <PageHeader title="视频教程" description="通过高质量的视频内容，学习前端开发技能和最佳实践" />

      {/* 特色视频部分 */}
      {featuredVideos.length > 0 && (
        <section className="mb-16">
          <VideoList videos={featuredVideos} featured={true} />
        </section>
      )}
    </Container>
  )
}
