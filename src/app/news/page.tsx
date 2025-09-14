import Container from "@/components/Container"
import PageHeader from "@/components/PageHeader"
import SectionTitle from "@/components/SectionTitle"
import FeatureCard from "@/components/FeatureCard"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  IconCalendar,
  IconEye,
  IconMessageCircle,
  IconExternalLink,
  IconTrendingUp,
  IconBolt,
  IconNews,
} from "@tabler/icons-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "新闻资讯 - prop.show",
  description: "获取最新的前端技术资讯、框架更新、工具发布和行业动态。",
  openGraph: {
    title: "新闻资讯 - prop.show",
    description: "获取最新的前端技术资讯、框架更新、工具发布和行业动态。",
    url: "https://prop.show/news",
  },
}

// 定义新闻类型
interface NewsItem {
  id: number
  title: string
  summary: string
  content?: string
  date: string
  category: string
  type: "hot" | "tech" | "industry" | "release"
  views: number
  comments: number
  source: string
  sourceUrl?: string
  tags: string[]
}

// 示例新闻数据
const hotNews: NewsItem[] = [
  {
    id: 1,
    title: "React 19 正式发布：全新的并发特性和服务端组件",
    summary: "React 19 带来了期待已久的并发特性、服务端组件以及全新的Hook APIs，将大幅提升开发体验和应用性能。",
    date: "2024-12-20",
    category: "框架更新",
    type: "hot",
    views: 15240,
    comments: 89,
    source: "React 官方博客",
    sourceUrl: "https://react.dev/blog",
    tags: ["React", "并发特性", "服务端组件"],
  },
  {
    id: 2,
    title: "TypeScript 5.4 Beta 版本发布：新的类型推断和性能优化",
    summary: "TypeScript 5.4 Beta 引入了更智能的类型推断机制，编译速度提升30%，为开发者带来更好的开发体验。",
    date: "2024-12-18",
    category: "语言更新",
    type: "tech",
    views: 8750,
    comments: 45,
    source: "TypeScript 团队",
    sourceUrl: "https://devblogs.microsoft.com/typescript/",
    tags: ["TypeScript", "类型推断", "性能优化"],
  },
  {
    id: 3,
    title: "Vite 5.1：构建速度再次突破，HMR 性能提升50%",
    summary: "Vite 5.1 版本专注于性能优化，HMR 热更新速度提升50%，同时引入了新的插件架构和开发者工具。",
    date: "2024-12-15",
    category: "构建工具",
    type: "release",
    views: 6420,
    comments: 32,
    source: "Vite 官方",
    sourceUrl: "https://vitejs.dev/blog",
    tags: ["Vite", "HMR", "构建工具"],
  },
]

const techNews: NewsItem[] = [
  {
    id: 4,
    title: 'Vue 3.4 "Slam Dunk" 版本：更小的包体积和更快的渲染',
    summary: "Vue 3.4 通过重构响应式系统，实现了包体积减少20%，渲染性能提升15%的显著改进。",
    date: "2024-12-12",
    category: "框架更新",
    type: "tech",
    views: 5680,
    comments: 28,
    source: "Vue.js 官方",
    sourceUrl: "https://blog.vuejs.org/",
    tags: ["Vue.js", "性能优化", "包体积"],
  },
  {
    id: 5,
    title: "Chrome 122 开发者工具新特性：AI 辅助调试和性能分析",
    summary: "Chrome 122 为开发者工具引入了AI辅助功能，可以自动分析性能瓶颈并提供优化建议。",
    date: "2024-12-10",
    category: "开发工具",
    type: "tech",
    views: 4320,
    comments: 19,
    source: "Chrome DevTools",
    sourceUrl: "https://developer.chrome.com/blog",
    tags: ["Chrome", "DevTools", "AI辅助"],
  },
  {
    id: 6,
    title: "Node.js 21.5：原生支持 ES 模块和新的性能监控 API",
    summary: "Node.js 21.5 完善了对ES模块的原生支持，并引入了新的性能监控API，为服务端开发带来更多可能。",
    date: "2024-12-08",
    category: "运行时",
    type: "release",
    views: 3890,
    comments: 15,
    source: "Node.js 官方",
    sourceUrl: "https://nodejs.org/en/blog",
    tags: ["Node.js", "ES模块", "性能监控"],
  },
]

const industryNews: NewsItem[] = [
  {
    id: 7,
    title: "2024 年前端开发趋势报告：AI 工具成为主流",
    summary: "最新调研显示，超过70%的前端开发者已经在使用AI辅助编程工具，显著提升了开发效率。",
    date: "2024-12-05",
    category: "行业报告",
    type: "industry",
    views: 7650,
    comments: 54,
    source: "Stack Overflow",
    sourceUrl: "https://survey.stackoverflow.co/",
    tags: ["AI工具", "开发趋势", "行业报告"],
  },
  {
    id: 8,
    title: "Web Components 在企业级应用中的采用率持续增长",
    summary: "据统计，Web Components 在大型企业应用中的采用率同比增长45%，成为跨框架开发的重要选择。",
    date: "2024-12-03",
    category: "技术趋势",
    type: "industry",
    views: 2340,
    comments: 12,
    source: "Web Components 社区",
    tags: ["Web Components", "企业应用", "跨框架"],
  },
]

function NewsCard({ news, featured = false }: { news: NewsItem; featured?: boolean }) {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case "hot":
        return <IconTrendingUp className="w-4 h-4 text-red-500" />
      case "tech":
        return <IconBolt className="w-4 h-4 text-blue-500" />
      case "industry":
        return <IconNews className="w-4 h-4 text-green-500" />
      case "release":
        return <IconExternalLink className="w-4 h-4 text-purple-500" />
      default:
        return <IconNews className="w-4 h-4 text-gray-500" />
    }
  }

  const getTypeBadge = (type: string) => {
    switch (type) {
      case "hot":
        return <Badge className="bg-red-500 hover:bg-red-600">热门</Badge>
      case "tech":
        return <Badge className="bg-blue-500 hover:bg-blue-600">技术</Badge>
      case "industry":
        return <Badge className="bg-green-500 hover:bg-green-600">行业</Badge>
      case "release":
        return <Badge className="bg-purple-500 hover:bg-purple-600">发布</Badge>
      default:
        return null
    }
  }

  return (
    <Card className={`group hover:shadow-lg transition-all ${featured ? "border-2 border-primary/20" : ""}`}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              {getTypeIcon(news.type)}
              <span className="text-sm text-muted-foreground">{news.category}</span>
              {getTypeBadge(news.type)}
            </div>
            <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
              {news.title}
            </CardTitle>
          </div>
        </div>
        <CardDescription className="line-clamp-3">{news.summary}</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {news.tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <IconCalendar className="w-4 h-4" />
              <span>{news.date}</span>
            </div>
            <span className="text-xs">来源：{news.source}</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <IconEye className="w-4 h-4" />
              <span>{news.views.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <IconMessageCircle className="w-4 h-4" />
              <span>{news.comments}</span>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <Button size="sm" className="flex-1">
            阅读全文
          </Button>
          {news.sourceUrl && (
            <Button asChild size="sm" variant="outline">
              <a href={news.sourceUrl} target="_blank" rel="noopener noreferrer">
                <IconExternalLink className="w-4 h-4" />
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default function NewsPage() {
  return (
    <Container className="px-4 md:px-8 py-8">
      {/* 页面头部 */}
      <PageHeader title="新闻资讯" description="获取最新的前端技术资讯，掌握行业发展动态" />

      {/* 资讯特色 */}
      <section className="mb-12">
        <SectionTitle title="资讯特色" />
        <div className="grid gap-4 md:grid-cols-3">
          <FeatureCard
            title="🔥 热点追踪"
            description=""
            content={
              <p className="text-sm text-muted-foreground">第一时间跟踪前端技术热点，为你筛选最有价值的技术资讯。</p>
            }
          />

          <FeatureCard
            title="📊 深度分析"
            description=""
            content={
              <p className="text-sm text-muted-foreground">不只是简单的新闻转载，提供深入的技术分析和实用见解。</p>
            }
          />

          <FeatureCard
            title="🎯 精准筛选"
            description=""
            content={<p className="text-sm text-muted-foreground">专注前端领域，精准筛选对开发者有价值的技术动态。</p>}
          />
        </div>
      </section>

      {/* 热门资讯 */}
      {/* <section className="mb-12">
        <SectionTitle title="热门资讯" />
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {hotNews.map((news) => (
            <NewsCard key={news.id} news={news} featured />
          ))}
        </div>
      </section> */}

      {/* 技术动态 */}
      {/* <section className="mb-12">
        <SectionTitle title="技术动态" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {techNews.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
      </section> */}

      {/* 行业观察 */}
      {/* <section className="mb-12">
        <SectionTitle title="行业观察" />
        <div className="grid gap-4 md:grid-cols-2">
          {industryNews.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
      </section> */}

      {/* 订阅资讯 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">获取资讯</h2>
        <Card className="max-w-4xl mx-auto">
          <CardContent className="pt-6">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <IconNews className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">每日更新</h3>
                <p className="text-sm text-muted-foreground">关注我们的社交媒体，获取每日技术资讯推送。</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <IconTrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">趋势分析</h3>
                <p className="text-sm text-muted-foreground">定期发布技术趋势分析报告和深度解读。</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <IconMessageCircle className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">互动讨论</h3>
                <p className="text-sm text-muted-foreground">参与技术话题讨论，与开发者社区深度交流。</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 关注我们 */}
      <section className="text-center">
        <Card className="max-w-md mx-auto">
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-2">关注我们</h3>
            <p className="text-sm text-muted-foreground mb-4">第一时间获取最新技术资讯</p>
            <div className="flex gap-2">
              <Button asChild className="flex-1">
                <a href="https://space.bilibili.com/104376935" target="_blank" rel="noopener noreferrer">
                  <IconExternalLink className="w-4 h-4 mr-2" />
                  哔哩哔哩
                </a>
              </Button>
              <Button asChild variant="outline" className="flex-1">
                <a href="https://github.com/prop-show" target="_blank" rel="noopener noreferrer">
                  <IconExternalLink className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </Container>
  )
}
