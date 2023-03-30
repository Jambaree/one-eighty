// @ts-nocheck

import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ThemeWrapper from "./themeWrapper"
import { getMenuItems, getData } from "@jambaree/next-wordpress"
import { Barlow_Semi_Condensed } from "next/font/google"

const barlow = Barlow_Semi_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const headerItems = await getMenuItems({ id: "menu" })
  const footerItems = await getMenuItems({ id: "footermenu" })
  const {
    themeOptions: {
      options: { footer },
    },
  } = await getData({ query })

  return (
    <html lang="en" className={`${barlow.variable}`}>
      <body>
        <ThemeWrapper>
          <div className="pt-[60px] justify-center">
            <Header items={headerItems} />
            <div className="min-h-[calc(100vh-60px)]" as="main">
              {children}
            </div>
            <Footer items={footerItems} {...footer} />
          </div>
        </ThemeWrapper>
      </body>
    </html>
  )
}

const query = `query NewQuery {
  themeOptions {
    options {
      footer {
        email
        facebook
        instagram
        linkedin
        phone
        twitter
        youtube
      }
    }
  }
}`
