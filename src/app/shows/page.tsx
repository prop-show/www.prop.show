import Container from "@/components/Container"
import PageHeader from "@/components/PageHeader"
import SectionTitle from "@/components/SectionTitle"
import FeatureCard from "@/components/FeatureCard"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  IconPlayerPlay,
  IconCalendar,
  IconHeart,
  IconShare,
  IconExternalLink,
  IconHeadphones,
  IconMicrophone,
  IconDownload,
} from "@tabler/icons-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "播客节目 - prop.show",
  description: "收听 prop.show 前端开发播客节目，分享技术洞察、行业动态和开发经验，用声音传递编程智慧。",
  openGraph: {
    title: "播客节目 - prop.show",
    description: "收听 prop.show 前端开发播客节目，分享技术洞察、行业动态和开发经验，用声音传递编程智慧。",
    url: "https://prop.show/shows",
  },
}

// 定义播客类型
interface PodcastEpisode {
  id: number
  title: string
  description: string
  duration: string
  date: string
  category: string
  status?: string
  listens: number
  likes: number
  cover: string
  audioUrl: string
  guests?: string[]
  topics: string[]
  season: number
  episode: number
}

// 示例播客数据
const featuredEpisodes: PodcastEpisode[] = [
  {
    id: 1,
    title: "React 19 新特性深度解读",
    description:
      "深入探讨 React 19 的 Concurrent Features、自动批处理、Suspense 改进等新特性，分析其对开发流程的影响和实际应用场景。",
    duration: "52分钟",
    date: "2024-12-20",
    category: "基石 Prop",
    status: "latest",
    listens: 12450,
    likes: 689,
    cover: "/api/placeholder/400/400",
    audioUrl: "https://example.com/audio/episode-1",
    guests: ["张三", "李四"],
    topics: ["React", "JavaScript", "前端框架"],
    season: 2,
    episode: 15,
  },
  {
    id: 2,
    title: "前端工程化最佳实践分享",
    description:
      "从项目搭建到部署上线，分享现代前端工程化的完整流程，包括构建工具选择、代码规范、CI/CD 配置等实践经验。",
    duration: "48分钟",
    date: "2024-12-15",
    category: "基石 Prop",
    status: "popular",
    listens: 18750,
    likes: 956,
    cover: "/api/placeholder/400/400",
    audioUrl: "https://example.com/audio/episode-2",
    guests: ["王五"],
    topics: ["工程化", "构建工具", "DevOps"],
    season: 2,
    episode: 14,
  },
  {
    id: 3,
    title: "开源项目维护心得与社区建设",
    description: "邀请知名开源项目维护者分享项目管理经验，探讨如何构建健康的开源社区，以及参与开源的正确姿势。",
    duration: "45分钟",
    date: "2024-12-10",
    category: "闲聊 Prop",
    status: "featured",
    listens: 9320,
    likes: 478,
    cover: "/api/placeholder/400/400",
    audioUrl: "https://example.com/audio/episode-3",
    guests: ["赵六", "钱七"],
    topics: ["开源", "社区", "项目管理"],
    season: 2,
    episode: 13,
  },
]

const recentEpisodes: PodcastEpisode[] = [
  {
    id: 4,
    title: "TypeScript 5.0 类型系统进阶",
    description: "详细讲解 TypeScript 5.0 的新特性，分享类型编程的高级技巧和实际应用案例。",
    duration: "42分钟",
    date: "2024-12-05",
    category: "基石 Prop",
    listens: 7890,
    likes: 334,
    cover: "/api/placeholder/400/400",
    audioUrl: "https://example.com/audio/episode-4",
    topics: ["TypeScript", "类型系统"],
    season: 2,
    episode: 12,
  },
  {
    id: 5,
    title: "CSS 新特性与布局技巧",
    description: "探索 CSS 的最新特性，分享现代 CSS 布局技巧和动画实现方法。",
    duration: "38分钟",
    date: "2024-11-28",
    category: "酷炫 Prop",
    listens: 6567,
    likes: 289,
    cover: "/api/placeholder/400/400",
    audioUrl: "https://example.com/audio/episode-5",
    topics: ["CSS", "布局", "动画"],
    season: 2,
    episode: 11,
  },
  {
    id: 6,
    title: "前端性能优化实战经验",
    description: "从代码层面到工程层面，全方位分享前端性能优化的实战经验和工具使用。",
    duration: "55分钟",
    date: "2024-11-20",
    category: "基石 Prop",
    listens: 11230,
    likes: 567,
    cover: "/api/placeholder/400/400",
    audioUrl: "https://example.com/audio/episode-6",
    guests: ["优化专家"],
    topics: ["性能优化", "工具", "实战"],
    season: 2,
    episode: 10,
  },
]

function PodcastCard({ episode, featured = false }: { episode: PodcastEpisode; featured?: boolean }) {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "基石 Prop":
        return "bg-blue-500"
      case "酷炫 Prop":
        return "bg-green-500"
      case "闲聊 Prop":
        return "bg-purple-500"
      default:
        return "bg-gray-500"
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "latest":
        return <Badge className="bg-red-500 hover:bg-red-600">最新</Badge>
      case "popular":
        return <Badge className="bg-orange-500 hover:bg-orange-600">热门</Badge>
      case "featured":
        return <Badge className="bg-purple-500 hover:bg-purple-600">精选</Badge>
      default:
        return null
    }
  }

  return (
    <Card className={`group p-0 pb-4 hover:shadow-lg transition-all ${featured ? "border-2 border-primary/20" : ""}`}>
      {/* 播客封面 */}
      <div className="relative overflow-hidden rounded-t-lg">
        <div className="aspect-square bg-muted flex items-center justify-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
            <IconMicrophone className="w-8 h-8 text-primary" />
          </div>
        </div>
        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-sm px-2 py-1 rounded flex items-center gap-1">
          <IconHeadphones className="w-3 h-3" />
          {episode.duration}
        </div>
        <div className="absolute top-2 left-2">
          <Badge variant="secondary">
            S{episode.season}E{episode.episode}
          </Badge>
        </div>
      </div>

      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <div className={`w-3 h-3 rounded-full ${getCategoryColor(episode.category)}`} />
              <span className="text-sm text-muted-foreground">{episode.category}</span>
              {episode.status && getStatusBadge(episode.status)}
            </div>
            <CardTitle className="text-lg group-hover:text-primary transition-colors">{episode.title}</CardTitle>
          </div>
        </div>
        <CardDescription className="line-clamp-3">{episode.description}</CardDescription>
      </CardHeader>

      <CardContent>
        {/* 话题标签 */}
        <div className="flex flex-wrap gap-1 mb-3">
          {episode.topics.map((topic) => (
            <Badge key={topic} variant="outline" className="text-xs">
              {topic}
            </Badge>
          ))}
        </div>

        {/* 嘉宾信息 */}
        {episode.guests && episode.guests.length > 0 && (
          <div className="mb-3">
            <span className="text-sm text-muted-foreground">嘉宾：</span>
            <span className="text-sm">{episode.guests.join("、")}</span>
          </div>
        )}

        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <IconCalendar className="w-4 h-4" />
              <span>{episode.date}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <IconHeadphones className="w-4 h-4" />
              <span>{episode.listens.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <IconHeart className="w-4 h-4" />
              <span>{episode.likes}</span>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <Button asChild size="sm" className="flex-1">
            <a href={episode.audioUrl} target="_blank" rel="noopener noreferrer">
              <IconPlayerPlay className="w-4 h-4 mr-2" />
              收听
            </a>
          </Button>
          <Button size="sm" variant="outline">
            <IconDownload className="w-4 h-4" />
          </Button>
          <Button size="sm" variant="outline">
            <IconHeart className="w-4 h-4" />
          </Button>
          <Button size="sm" variant="outline">
            <IconShare className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default function ShowsPage() {
  return (
    <Container className="px-4 md:px-8 py-8">
      {/* 页面头部 */}
      <PageHeader title="播客节目" description="用声音传递前端技术洞察，分享编程经验与行业思考" />

      {/* 播客特色 */}
      <section className="mb-12">
        <SectionTitle title="播客特色" />
        <div className="grid gap-4 md:grid-cols-3">
          <FeatureCard
            title="🎙️ 专业录制"
            description=""
            content={<p className="text-sm text-muted-foreground">专业录音设备保证音质，为你提供舒适的听觉体验。</p>}
          />

          <FeatureCard
            title="👥 行业嘉宾"
            description=""
            content={<p className="text-sm text-muted-foreground">邀请知名开发者和技术专家，分享一手的行业经验。</p>}
          />

          <FeatureCard
            title="📱 多平台收听"
            description=""
            content={<p className="text-sm text-muted-foreground">支持各大播客平台，随时随地收听你喜欢的内容。</p>}
          />
        </div>
      </section>

      {/* 精选节目 */}
      <section className="mb-12">
        <SectionTitle title="精选节目" />
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {featuredEpisodes.map((episode) => (
            <PodcastCard key={episode.id} episode={episode} featured />
          ))}
        </div>
      </section>

      {/* 最新节目 */}
      <section className="mb-12">
        <SectionTitle title="最新节目" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {recentEpisodes.map((episode) => (
            <PodcastCard key={episode.id} episode={episode} />
          ))}
        </div>
      </section>

      {/* 收听指南 */}
      {/* <section className="mb-12">
        <SectionTitle title="收听指南" />
        <Card className="max-w-4xl mx-auto">
          <CardContent className="pt-6">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <IconHeadphones className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">在线收听</h3>
                <p className="text-sm text-muted-foreground">点击播放按钮即可开始收听，支持在线播放。</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <IconDownload className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">离线下载</h3>
                <p className="text-sm text-muted-foreground">下载音频文件，随时随地离线收听。</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <IconShare className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">订阅推送</h3>
                <p className="text-sm text-muted-foreground">订阅播客频道，第一时间获取新节目更新。</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section> */}

      {/* 收听节目分类 */}
      <section className="mb-12">
        <SectionTitle title="节目分类" />
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <div className="w-3 h-3 rounded-full bg-blue-500" />
              </div>
              <h3 className="font-semibold mb-2">基石 Prop</h3>
              <p className="text-sm text-muted-foreground">深入探讨前端核心技术和基础概念</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <h3 className="font-semibold mb-2">酷炫 Prop</h3>
              <p className="text-sm text-muted-foreground">分享前沿技术和创新应用实践</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <div className="w-3 h-3 rounded-full bg-purple-500" />
              </div>
              <h3 className="font-semibold mb-2">闲聊 Prop</h3>
              <p className="text-sm text-muted-foreground">轻松聊技术、聊职场、聊生活</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 订阅平台 */}
      <section className="text-center">
        <Card className="max-w-md mx-auto">
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-2">订阅我们的播客</h3>
            <p className="text-sm text-muted-foreground mb-4">在你喜欢的播客平台订阅 prop.show</p>
            <div className="grid grid-cols-2 gap-2">
              <Button asChild size="sm">
                <Link href="https://podcasts.apple.com/podcast/propshow" target="_blank" rel="noopener noreferrer">
                  <IconExternalLink className="w-4 h-4 mr-2" />
                  小宇宙
                </Link>
              </Button>
              <Button asChild variant="outline" size="sm">
                <Link href="https://open.spotify.com/show/propshow" target="_blank" rel="noopener noreferrer">
                  <IconExternalLink className="w-4 h-4 mr-2" />
                  苹果播客
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </Container>
  )
}
