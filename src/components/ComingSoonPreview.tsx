import { Badge } from "@/components/ui/badge"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { IconCalendar, IconRocket, IconStar } from "@tabler/icons-react"

export default function ComingSoonPreview() {
  const upcomingFeatures = [
    {
      title: "交互式代码练习",
      description: "在线编码环境，边学边练",
      status: "开发中",
      icon: <IconRocket className="w-5 h-5" />,
    },
    {
      title: "技术问答社区",
      description: "开发者互助交流平台",
      status: "设计中",
      icon: <IconCalendar className="w-5 h-5" />,
    },
    {
      title: "专属学习路径",
      description: "个性化前端学习规划",
      status: "规划中",
      icon: <IconStar className="w-5 h-5" />,
    },
  ]

  return (
    <section className="my-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">即将推出</h2>
        <p className="text-muted-foreground">更多精彩功能正在路上</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {upcomingFeatures.map((feature, index) => (
          <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-all">
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-500/10 to-transparent" />
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {feature.icon}
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </div>
                <Badge variant="outline" className="text-xs">
                  {feature.status}
                </Badge>
              </div>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      <div className="text-center mt-6">
        <p className="text-sm text-muted-foreground">
          💡 有建议或想法？欢迎通过
          <a href="https://github.com/prop-show" className="text-blue-500 hover:underline mx-1">
            GitHub
          </a>
          与我们交流
        </p>
      </div>
    </section>
  )
}
