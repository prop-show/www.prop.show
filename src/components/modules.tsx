import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Modules() {
  return (
    <div className="my-4 grid gap-4 grid-cols-1 md:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>基石 Prop</CardTitle>
          <CardDescription>本频道核心内容</CardDescription>
        </CardHeader>
        <CardContent>
          <ul>
            <li>项目实战</li>
            <li>编程经验分享</li>
            <li>……</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>酷炫 Prop</CardTitle>
          <CardDescription>插件分享</CardDescription>
        </CardHeader>
        <CardContent>
          <ul>
            <li>vscode 插件分享</li>
            <li>实用包分享</li>
            <li>……</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>闲聊</CardTitle>
          <CardDescription>说说其他的</CardDescription>
        </CardHeader>
        <CardContent>
          <ul>
            <li>生活日常分享</li>
            <li>人物访谈？</li>
            <li>……</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
