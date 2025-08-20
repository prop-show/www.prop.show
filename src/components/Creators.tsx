import { IconLetterXSmall } from "@tabler/icons-react"
import Creator, { type CreatorProp } from "./Creator"

const creators: CreatorProp[] = [
  {
    avatar: "https://bitmc.uno/picgo/126662463_p2.jpg",
    creator: "Whbbit1999",
    href: "https://github.com/Whbbit1999",
  },
]

export default function Creators() {
  return (
    <section className="flex justify-center items-center flex-wrap gap-4">
      <span className="font-black text-2xl">频道主播:</span>

      {creators.map(({ avatar, creator, href }, index) => (
        <div className="flex items-center gap-2 flex-wrap" key={creator}>
          <Creator avatar={avatar} creator={creator} href={href} />
          {index !== creators.length - 1 && <IconLetterXSmall />}
        </div>
      ))}
    </section>
  )
}
