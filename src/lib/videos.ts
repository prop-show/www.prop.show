import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { VideoData } from '@/types/video'

const videosDirectory = path.join(process.cwd(), 'src/content/videos')

/**
 * 获取所有视频数据
 */
export async function getAllVideos(): Promise<VideoData[]> {
  try {
    // 确保目录存在
    if (!fs.existsSync(videosDirectory)) {
      return []
    }

    const fileNames = fs.readdirSync(videosDirectory)
    const videos: VideoData[] = []

    for (const fileName of fileNames) {
      if (fileName.endsWith('.md')) {
        const slug = fileName.replace(/\.md$/, '')
        const video = await getVideoBySlug(slug)
        if (video) {
          videos.push(video)
        }
      }
    }

    // 按日期排序（最新的在前面）
    return videos.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } catch (error) {
    console.error('Error reading videos:', error)
    return []
  }
}

/**
 * 根据 slug 获取单个视频数据
 */
export async function getVideoBySlug(slug: string): Promise<VideoData | null> {
  try {
    const fullPath = path.join(videosDirectory, `${slug}.md`)

    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title || '',
      description: data.description || '',
      duration: data.duration || '',
      date: data.date || '',
      category: data.category || '',
      status: data.status,
      views: data.views || 0,
      likes: data.likes || 0,
      difficulty: data.difficulty || '初级',
      platforms: data.platforms || {},
      thumbnail: data.thumbnail || '',
      tags: data.tags || [],
      content
    }
  } catch (error) {
    console.error(`Error reading video ${slug}:`, error)
    return null
  }
}

/**
 * 获取特色视频（有 featured 状态的视频）
 */
export async function getFeaturedVideos(): Promise<VideoData[]> {
  const allVideos = await getAllVideos()
  return allVideos.filter(video => video.status === 'featured' || video.status === 'latest' || video.status === 'popular')
}

/**
 * 按分类获取视频
 */
export async function getVideosByCategory(category: string): Promise<VideoData[]> {
  const allVideos = await getAllVideos()
  return allVideos.filter(video => video.category === category)
}

/**
 * 按标签获取视频
 */
export async function getVideosByTag(tag: string): Promise<VideoData[]> {
  const allVideos = await getAllVideos()
  return allVideos.filter(video => video.tags.includes(tag))
}

/**
 * 获取所有分类
 */
export async function getAllCategories(): Promise<string[]> {
  const allVideos = await getAllVideos()
  const categories = [...new Set(allVideos.map(video => video.category))]
  return categories.filter(Boolean)
}

/**
 * 获取所有标签
 */
export async function getAllTags(): Promise<string[]> {
  const allVideos = await getAllVideos()
  const tags = [...new Set(allVideos.flatMap(video => video.tags))]
  return tags.filter(Boolean)
}