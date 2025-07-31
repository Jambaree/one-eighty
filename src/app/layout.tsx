// @ts-nocheck

import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ThemeWrapper from "./themeWrapper"
import { getMenuItems, getOptionsPage } from "@nextwp/core"
import { Barlow_Semi_Condensed } from "next/font/google"
import Script from "next/script"

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
  const headerItems = await getMenuItems({ slug: "menu" })
  const footerItems = await getMenuItems({ slug: "footermenu" })
  const { footer } = await getOptionsPage({ slug: "nextwp" })

  return (
    <html lang="en" className={`${barlow.variable}`}>
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CS8E2Z8SGZ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CS8E2Z8SGZ');
          `}
        </Script>
      </head>
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
