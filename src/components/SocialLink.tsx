import Link from "next/link"
import { Button } from "./ui/button"

interface SocialLinkProps {
  href: string
  platform: string
  children: React.ReactNode
}

export function SocialLink({ href, platform, children }: SocialLinkProps) {
  return (
    <Button asChild variant={"secondary"}>
      <Link
        href={{
          pathname: href,
        }}
        target="_blank"
      >
        {children}

        {platform}
      </Link>
    </Button>
  )
}
