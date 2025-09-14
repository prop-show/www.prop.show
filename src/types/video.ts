// 视频数据类型定义
export interface VideoData {
  slug: string
  title: string
  description: string
  duration: string
  date: string
  category: string
  status?: string
  views: number
  likes: number
  difficulty: "初级" | "中级" | "高级"
  platforms: {
    bilibili?: string
    douyin?: string
    youtube?: string
  }
  thumbnail: string
  tags: string[]
  content: string
}

// 支持的视频平台
export type VideoPlatform = 'bilibili' | 'douyin' | 'youtube'
