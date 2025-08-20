import Logos from "@/components/Logos"
import Modules from "@/components/modules"

import { PodcastHero } from "@/components/PodcastHero"
import { SocialLinks } from "@/components/SocialLinks"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="px-2 md:p-0">
      <PodcastHero />
      <SocialLinks />
      <Logos />
      <Modules />

      {/* <section className="flex justify-center">
        <Button asChild>
          <Link href="/list">节目详情</Link>
        </Button>
      </section> */}
    </div>
  )
}
