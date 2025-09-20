import Footer from "@/components/Footer"
import DotGrid from "@/components/react-bits/DotGrid"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://prop.show"),
  title: {
    default: "prop.show - 前端开发播客与教程",
    template: "%s | prop.show",
  },
  description:
    "prop.show 为你传递前端开发的核心属性。包含 Node.js 后台 API 开发，前端页面开发，系统设计，新库推荐，框架解析等内容。我们有视频和音频两种形式的内容。如果你有什么想和大家说的，可以到我们的来信栏目一起讨论。",
  keywords: [
    "前端开发",
    "播客",
    "视频教程",
    "Node.js",
    "React",
    "Vue",
    "Next.js",
    "Nuxt",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "编程教学",
    "前端框架",
    "Web开发",
  ],
  authors: [{ name: "prop.show 团队" }, { name: "月空人 @Whbbit1999 @月空人" }],
  creator: "prop.show",
  publisher: "prop.show",
  category: "Technology",
  classification: "前端开发教育",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://prop.show",
    siteName: "prop.show",
    title: "prop.show - 前端开发播客与教程",
    description:
      "prop.show 为你传递前端开发的核心属性。包含 Node.js 后台 API 开发，前端页面开发，系统设计，新库推荐，框架解析等内容。",
    images: [
      {
        url: "https://prop.show/api/og",
        width: 1200,
        height: 630,
        alt: "prop.show - 前端开发播客与教程",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "prop.show - 前端开发播客与教程",
    description: "prop.show 为你传递前端开发的核心属性。前端开发教程、播客与资源分享。",
    images: ["https://prop.show/api/og"],
    creator: "@propshow",
    site: "@propshow",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://prop.show",
    languages: {
      "zh-CN": "https://prop.show",
      en: "https://prop.show",
    },
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  manifest: "/site.webmanifest",
  other: {
    "theme-color": "#000000",
    "color-scheme": "dark light",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Analytics />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="fixed top-0 left-0 w-screen h-screen -z-10">
            <DotGrid
              dotSize={5}
              gap={15}
              baseColor="#ffffFF20"
              activeColor="#ffffff90"
              proximity={60}
              shockRadius={250}
              shockStrength={5}
              resistance={750}
              returnDuration={1.5}
            />
          </div>
          <main className="container mx-auto ">
            <Header />

            {children}

            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
