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

  return (
    <ApolloProvider client={client}>
      <StoreProvider>
        <Helmet>
          <html lang="en" />
          <meta name="description" />
        </Helmet>

        <Seo
          siteTitle={"One Eighty"}
          href={uri}
          seo={data?.wpPage?.seo || data?.wpPost?.seo}
        />

        <PageWrapper {...props}>{props?.children}</PageWrapper>
      </StoreProvider>
    </ApolloProvider>
  )
}

export default Layout
