import FeatureCard from "@/components/FeatureCard"
import SectionTitle from "@/components/SectionTitle"
import React from "react"

const missions = [
  {
    title: "📻 播客内容",
    description: "音频形式的技术分享",
    content: "通过播客形式分享前端开发经验、技术趋势和实战心得，让你在通勤路上也能学习前端知识。",
  },
  {
    title: "🎥 视频教程",
    description: "可视化的学习体验",
    content: "提供高质量的视频教程，涵盖 React、Vue、Node.js、TypeScript 等热门技术栈的实战应用。",
  },
  {
    title: "🚀 技术分享",
    description: "前沿技术探索",
    content: "分享最新的前端技术动态、优秀开源项目推荐，以及实用的开发工具和插件。",
  },
  {
    title: "💬 社区交流",
    description: "开发者互动平台",
    content: "构建前端开发者社区，促进技术交流与经验分享，共同成长进步。",
  },
]

export default function OurMission() {
  return (
    <section className="mb-12">
      <SectionTitle title="我们的使命" />
      <div className="grid gap-6 md:grid-cols-2">
        {missions.map((mission) => (
          <FeatureCard
            key={mission.title}
            title={mission.title}
            description={mission.description}
            content={<p className="text-sm text-muted-foreground">{mission.content}</p>}
          />
        ))}
      </div>
    </section>
  )
}
