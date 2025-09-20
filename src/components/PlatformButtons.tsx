import { Button } from "@/components/ui/button"
import { VideoPlatform } from "@/types/video"
import { IconBrandBilibili, IconBrandTiktokFilled, IconBrandYoutubeFilled, IconExternalLink } from "@tabler/icons-react"
import Link from "next/link"

const platformInfo = {
  bilibili: {
    name: "BiliBili",
    icon: <IconBrandBilibili />,
  },
  douyin: {
    name: "抖音",
    icon: <IconBrandTiktokFilled />,
  },
  youtube: {
    name: "YouTube",
    icon: <IconBrandYoutubeFilled />,
  },
}

interface PlatformButtonsProps {
  platforms: {
    bilibili?: string
    douyin?: string
    youtube?: string
  }
}

export function PlatformButtons({ platforms }: PlatformButtonsProps) {
  // 获取可用的平台链接
  const availablePlatforms = Object.entries(platforms).filter(([, url]) => url)

  if (availablePlatforms.length === 0) {
    return null
  }

  return (
    <div className="space-y-2">
      <div className=" text-white text-sm">观看平台：</div>
      <div className="flex flex-wrap gap-2">
        {availablePlatforms.map(([platform, url]) => {
          const info = platformInfo[platform as VideoPlatform]
          return (
            <Button key={platform} size="sm" variant={"outline"} className={`flex items-center gap-2`} asChild>
              <Link
                href={{
                  pathname: url,
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{info.icon}</span>
                <span>{info.name}</span>
                <IconExternalLink className="w-3 h-3" />
              </Link>
            </Button>
          )
        })}
      </div>
    </div>
  )
}
