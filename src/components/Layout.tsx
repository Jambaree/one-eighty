import React from "react"
import Helmet from "react-helmet"
import { ApolloProvider } from "@apollo/react-hooks"

// import polyfills
import "core-js/es6/number"
import "core-js/es6/array"

// import external css
import "minireset.css"

// import app components
import PageWrapper from "./PageWrapper"
import Seo from "./Seo"
import { StoreProvider } from "../store"
import client from "../apollo"

const Layout = (props) => {
  const { uri, data } = props

  let scripts = []

  if(typeof window !== 'undefined'){
    scripts.push(`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-KZND52Z');`)
  }

  return (
    <ApolloProvider client={client}>
      <StoreProvider>
        <Helmet script={scripts}>

          <html lang="en" />
          <meta name="description" />

        </Helmet>

        <Seo
          siteTitle={"SnapAV"}
          href={uri}
          seo={data?.wpPage?.seo || data?.wpPost?.seo}
        />

        <PageWrapper {...props}>{props?.children}</PageWrapper>
      </StoreProvider>
    </ApolloProvider>
  )
}

export default Layout
