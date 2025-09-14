import { Card, CardContent } from "@/components/ui/card"
import { IconHeadphones, IconVideo, IconCode, IconUsers } from "@tabler/icons-react"

export default function PlatformIntro() {
  const features = [
    {
      icon: <IconHeadphones className="w-6 h-6 text-blue-500" />,
      title: "音频播客",
      description: "通勤时间也能学习前端技术",
    },
    {
      icon: <IconVideo className="w-6 h-6 text-green-500" />,
      title: "视频教程",
      description: "可视化的编程实战演示",
    },
    {
      icon: <IconCode className="w-6 h-6 text-purple-500" />,
      title: "技术分享",
      description: "前沿技术与最佳实践",
    },
    {
      icon: <IconUsers className="w-6 h-6 text-orange-500" />,
      title: "社区交流",
      description: "与开发者共同成长进步",
    },
  ]

  return (
    <section className="my-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">为什么选择 prop.show</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          我们致力于打造最优质的前端学习平台，帮助开发者掌握核心技能
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <Card key={index} className="group hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-muted group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
              </div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-8">
        <p className="text-lg font-medium text-muted-foreground">
          🚀 现已覆盖 <span className="text-foreground font-bold">React</span>、
          <span className="text-foreground font-bold">Vue</span>、
          <span className="text-foreground font-bold">Node.js</span>、
          <span className="text-foreground font-bold">TypeScript</span> 等热门技术栈
        </p>
      </div>
    </section>
  )
}
