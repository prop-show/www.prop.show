import { IconBrandBilibili, IconBrandGithub, IconBrandYoutube, IconPointerFilled } from "@tabler/icons-react"
import { SocialLink } from "./SocialLink"
import { Alert, AlertDescription, AlertTitle } from "./ui/alert"

const socials: { href: string; platform: string; icon: React.ReactNode }[] = [
  { href: "https://github.com/prop-show", platform: "GitHub", icon: <IconBrandGithub /> },
  { href: "https://space.bilibili.com/104376935", platform: "哔哩哔哩", icon: <IconBrandBilibili /> },
  { href: "https://www.youtube.com/@PropShowFM", platform: "YouTube", icon: <IconBrandYoutube /> },

  // { href: "https://space.bilibili.com/104376935", platform: "抖音", icon: <IconBrandTiktok /> },
]

export function SocialLinks() {
  return (
    <Alert className="my-4 max-w-[500px] mx-auto">
      <IconPointerFilled />
      <AlertTitle>点击链接收看最新节目</AlertTitle>
      <AlertDescription>
        <section className="flex flex-wrap items-center gap-2 mt-2">
          {socials.map((social) => (
            <SocialLink key={social.platform} href={social.href} platform={social.platform}>
              {social.icon}
            </SocialLink>
          ))}
        </section>
      </AlertDescription>
    </Alert>
  )
}
