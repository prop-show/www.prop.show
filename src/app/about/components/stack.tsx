import SectionTitle from "@/components/SectionTitle"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const stacks = [
  { name: "Next.js", url: "https://nextjs.org/" },
  { name: "React", url: "https://react.dev/" },
  { name: "TypeScript", url: "https://www.typescriptlang.org/" },
  { name: "Tailwind CSS", url: "https://tailwindcss.com/" },
  { name: "Shadcn/ui", url: "https://ui.shadcn.com/" },
  { name: "Vercel", url: "https://vercel.com/home" },
  { name: "React Bits", url: "https://reactbits.dev/" },
]
export default function Stack() {
  return (
    <section className="mb-12 max-w-md mx-auto">
      <SectionTitle title="技术栈" />
      <Card>
        <CardHeader>
          <CardTitle>本站技术栈</CardTitle>
          <CardDescription>prop.show 使用的技术和工具</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2 mb-4">
            {stacks.map((stack) => (
              <Badge key={stack.name} variant="secondary" asChild>
                <Link href={stack.url} target="_blank">
                  {stack.name}
                </Link>
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
