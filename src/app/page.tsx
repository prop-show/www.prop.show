import Creators from "@/components/Creators"
import Logos from "@/components/Logos"
import Modules from "@/components/modules"
import PlatformIntro from "@/components/PlatformIntro"
import ComingSoonPreview from "@/components/ComingSoonPreview"

import { PodcastHero } from "@/components/PodcastHero"
import { SocialLinks } from "@/components/SocialLinks"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "前端开发播客与教程 - prop.show",
  description:
    "prop.show 是专注于前端开发的播客与教程平台，提供 React、Vue、Node.js、TypeScript 等技术内容。包括视频教程、音频播客、新库推荐和框架解析。",
  openGraph: {
    title: "前端开发播客与教程 - prop.show",
    description: "专注于前端开发的播客与教程平台，提供优质的技术内容分享。",
    url: "https://prop.show",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "prop.show",
  alternateName: "前端开发播客与教程",
  url: "https://prop.show",
  description: "prop.show 是专注于前端开发的播客与教程平台",
  publisher: {
    "@type": "Organization",
    name: "prop.show",
    logo: {
      "@type": "ImageObject",
      url: "https://prop.show/favicon.svg",
    },
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://prop.show/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
  sameAs: ["https://twitter.com/propshow", "https://github.com/propshow"],
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="px-4 md:px-8 lg:px-0">
        <PodcastHero />

        <div className="max-w-6xl mx-auto">
          <SocialLinks />

          <PlatformIntro />

          <Logos />

          <div className="text-center my-8">
            <h2 className="text-2xl font-bold mb-2">创作团队</h2>
            <p className="text-muted-foreground mb-6">热爱前端技术的创作者们</p>
            <Creators />
          </div>

          <Modules />

          <ComingSoonPreview />
        </div>
      </div>
    </>
  )
}
