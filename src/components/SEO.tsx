import Head from "next/head"

interface SEOProps {
  title?: string
  description?: string
  canonical?: string
  ogImage?: string
  noindex?: boolean
  keywords?: string[]
}

export default function SEO({ title, description, canonical, ogImage, noindex = false, keywords = [] }: SEOProps) {
  const siteTitle = "prop.show - 前端开发播客与教程"
  const siteDescription =
    "prop.show 为你传递前端开发的核心属性。包含 Node.js 后台 API 开发，前端页面开发，系统设计，新库推荐，框架解析等内容。"

  const pageTitle = title ? `${title} | ${siteTitle}` : siteTitle
  const pageDescription = description || siteDescription
  const pageImage = ogImage || "/og-image.jpg"
  const pageUrl = canonical || "https://prop.show"

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />

      {keywords.length > 0 && <meta name="keywords" content={keywords.join(", ")} />}

      {noindex && <meta name="robots" content="noindex,nofollow" />}

      <link rel="canonical" href={pageUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:site_name" content="prop.show" />
      <meta property="og:locale" content="zh_CN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />
      <meta name="twitter:creator" content="@propshow" />
      <meta name="twitter:site" content="@propshow" />

      {/* Additional SEO tags */}
      <meta name="author" content="prop.show 团队" />
      <meta name="publisher" content="prop.show" />
      <meta name="language" content="zh-CN" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="web" />
      <meta name="rating" content="general" />
    </Head>
  )
}
