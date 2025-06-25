import type { Metadata } from "next"
import { Geist, Geist_Mono, Roboto } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const roboto = Roboto({
  weight: "200", // '300' = Roboto Light
  subsets: ["latin"],
  variable: "--font-roboto", // optional CSS variable
})

export const metadata: Metadata = {
  title: "THAMBA | Road to Great Ideas",
  description:
    "We are a creative design studio where we build brands that look sharp, feel right, and make noise.From strategy to design, we craft everything you need to stand out.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>{children}</body>
    </html>
  )
}
