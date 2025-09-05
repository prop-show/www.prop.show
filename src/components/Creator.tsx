import { IconLink } from "@tabler/icons-react"
import Image from "next/image"
import Link from "next/link"
import React from "react"

export interface CreatorProp {
  avatar: string
  creator: string
  href: string
}

export default function Creator({ avatar, creator, href }: CreatorProp) {
  return (
    <div className="flex items-center gap-2">
      <Image
        width="40"
        height="40"
        src={avatar}
        alt="whbbit-avatar"
        className="size-[40px] rounded-full object-cover"
      />
      <Link
        href={{
          pathname: href,
        }}
        target="_blank"
        className="flex items-center gap-1 border-b-1 border-primary"
      >
        <IconLink />
        <span className="font-black text-xl ">{creator}</span>
      </Link>
    </div>
  )
}
