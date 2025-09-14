import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { IconBroadcast, IconTools, IconMessage } from "@tabler/icons-react"

export default function Modules() {
  return (
    <section className="my-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">内容板块</h2>
        <p className="text-muted-foreground">专注前端技术，分享实用经验</p>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
        <Card className="group hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-2">
              <IconBroadcast className="w-5 h-5 text-blue-500" />
              <CardTitle>基石 Prop</CardTitle>
            </div>
            <CardDescription>本频道核心内容</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                项目实战教程
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                编程经验分享
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                技术深度解析
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                最佳实践指南
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-2">
              <IconTools className="w-5 h-5 text-green-500" />
              <CardTitle>酷炫 Prop</CardTitle>
            </div>
            <CardDescription>工具与插件分享</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                VS Code 插件推荐
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                实用开发工具
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                开源项目介绍
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                效率提升技巧
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-2">
              <IconMessage className="w-5 h-5 text-purple-500" />
              <CardTitle>闲聊 Prop</CardTitle>
            </div>
            <CardDescription>轻松话题分享</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                程序员日常生活
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                技术圈趣事分享
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                开发者访谈
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                行业观察思考
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
