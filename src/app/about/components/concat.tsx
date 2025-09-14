import SectionTitle from "@/components/SectionTitle"
import { Card, CardContent } from "@/components/ui/card"
import React from "react"

export default function Concat() {
  return (
    <section className="text-center">
      <SectionTitle title="联系我们" />
      <Card className="max-w-md mx-auto">
        <CardContent className="pt-6">
          <p className="text-sm text-muted-foreground mb-4">
            如果你有任何建议、合作意向或技术问题，欢迎通过以下方式联系我们：
          </p>
          <div className="space-y-2 text-sm">
            {/* <p>📧 邮箱：contact@prop.show</p> */}
            {/* <p>🐙 GitHub：github.com/propshow</p> */}
            {/* <p>🐦 Twitter：@propshow</p> */}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
