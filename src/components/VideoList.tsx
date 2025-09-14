import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { VideoData } from "@/types/video"
import { IconClockHour3, IconPlayerPlay } from "@tabler/icons-react"
import Image from "next/image"
import { PlatformButtons } from "./PlatformButtons"

interface VideoCardProps {
  video: VideoData
  featured?: boolean
}

export function VideoCard({ video, featured = false }: VideoCardProps) {
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

  return (
    <Card className={`group p-0 hover:shadow-lg transition-all ${featured ? "border-2 border-primary/20" : ""}`}>
      <div className="relative overflow-hidden rounded-t-lg">
        <div className="aspect-video flex items-center justify-center">
          <Image src={video.thumbnail} alt={video.title} layout="fill" objectFit="cover" />
        </div>
        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-sm px-2 py-1 rounded flex items-center gap-1">
          <IconClockHour3 className="size-3" />
          {video.duration}
        </div>
      </div>

      <CardHeader className="px-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <div className={`w-3 h-3 rounded-full ${getCategoryColor(video.category)}`} />
              <span className="text-sm text-muted-foreground">{video.category}</span>
            </div>
            <CardTitle className="text-lg group-hover:text-primary transition-colors">{video.title}</CardTitle>
          </div>
        </div>
        <CardDescription className="line-clamp-3">{video.description}</CardDescription>

        {/* 标签 */}
        {video.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {video.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
            {video.tags.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{video.tags.length - 3}
              </Badge>
            )}
          </div>
        )}
      </CardHeader>

      <CardContent className="p-4 pt-0">
        <PlatformButtons platforms={video.platforms} />
      </CardContent>
    </Card>
  )
}

interface VideoListProps {
  videos: VideoData[]
  title?: string
  featured?: boolean
}

export function VideoList({ videos, title, featured = false }: VideoListProps) {
  if (videos.length === 0) {
    return (
      <div className="text-center py-12">
        <IconPlayerPlay className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">暂无视频</h3>
        <p className="text-gray-500">精彩内容即将上线，敬请期待！</p>
      </div>
    )
  }

  return (
    <div>
      {title && <h2 className="text-2xl font-bold mb-6">{title}</h2>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <VideoCard key={video.slug} video={video} featured={featured} />
        ))}
      </div>
    </div>
  )
}
