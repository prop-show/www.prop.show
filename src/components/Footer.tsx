import { IconBrandBilibili, IconBrandGithub, IconBrandYoutube, IconHeart } from "@tabler/icons-react"
import Link from "next/link"
import { Logo } from "./logo"

const navigationLinks = [
  { name: "首页", href: "/" },
  { name: "关于我们", href: "/about" },
  { name: "视频", href: "/videos" },
  // { name: "节目单", href: "/shows" },
  // { name: "新闻", href: "/news" },
  // { name: "来信", href: "/qa" },
]

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/prop-show",
    icon: <IconBrandGithub className="w-5 h-5" />,
  },
  {
    name: "哔哩哔哩",
    href: "https://space.bilibili.com/104376935",
    icon: <IconBrandBilibili className="w-5 h-5" />,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@Whbbit1999",
    icon: <IconBrandYoutube className="w-5 h-5" />,
  },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-16 border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        {/* 主要内容区域 */}
        <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2">
          {/* 品牌区域 */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <Logo size={60} />
              <div className="ml-3">
                <div className="font-black text-2xl">prop.show</div>
                <p className="text-muted-foreground text-sm mt-1">为你传递前端开发的核心属性</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mb-4 max-w-md">
              专注于前端开发的播客与教程平台，提供高质量的技术内容分享。 涵盖 React、Vue、Node.js、TypeScript
              等热门技术栈。
            </p>

            {/* 社交媒体链接 */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-muted hover:bg-muted-foreground/10 transition-colors"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* 快速导航 */}
          <div>
            <h3 className="font-semibold mb-4">快速导航</h3>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  {link.href.startsWith("/") ? (
                    <Link
                      href={link.href as "/"}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* 联系我们 */}
          {/* <div>
            <h3 className="font-semibold mb-4">联系我们</h3>
            <div className="space-y-3">
              <a
                href="mailto:contact@prop.show"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                <IconMail className="w-4 h-4" />
                contact@prop.show
              </a>

              <div className="text-sm text-muted-foreground">
                <p className="mb-2">合作咨询</p>
                <p>技术交流</p>
                <p>内容投稿</p>
              </div>
            </div>
          </div> */}
        </div>

        {/* 分割线 */}
        <div className="border-t mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* 版权信息 */}
            <div className="text-sm text-muted-foreground">© {currentYear} prop.show. All rights reserved.</div>

            {/* 友情链接/政策 */}
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <span>Made with</span>
                <IconHeart className="w-4 h-4 text-red-500 fill-current" />
                <span>by prop.show team</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
