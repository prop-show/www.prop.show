import Logos from "@/components/Logos"

import { PodcastHero } from "@/components/PodcastHero"
import { SocialLinks } from "@/components/SocialLinks"

export default function Home() {
  return (
    <div className="px-2 md:p-0">
      <PodcastHero />

      <SocialLinks />

      <Logos />
    </div>
  )
}
