import React from "react"
import { Container, Box } from "theme-ui"

// import app components
import theme from "../theme"
import Header from "./Header"
import Footer from "./Footer"
import LightBox from "./lightBox"
import { LoginDialog } from "../auth/components"
import { useAuthServices } from "../auth"
import Modal from "./Modal"

const Layout = (props) => {
  useAuthServices(props?.location?.pathname)

  return (
    <>
      <Container
        pt={theme.headerHeight}
        sx={{
          justifyContent: "center",
        }}
      >
        <Header {...props} />
        <Box
          as="main"
          {...props}
          sx={{
            minHeight: `calc(100vh - ${theme.headerHeight})`,
          }}
        >
          {props?.children}
        </Box>
        <Footer {...props} />
      </Container>
      <LightBox />
      <LoginDialog />
      <Modal {...props} />
    </>
  )
}

export default Layout
