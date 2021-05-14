import React from "react"
import { Container, Box } from "theme-ui"

// import app components
import Header from "./Header"
import Footer from "./Footer"
import LightBox from "./lightBox"
import { LoginDialog } from "../auth/components"
import { useAuthServices } from "../auth"
import Modal from "./Modal"

const Layout = (props) => {
  useAuthServices(props?.location?.pathname)
  console.log(props)

  return (
    <>
      <Container
        pt={`${({ theme: { headerHeight } }) => headerHeight}px`}
        sx={{
          justifyContent: "center",
          // width: props?.jamCMS?.sidebar ? "calc(100vw - 320px)" : "auto",
        }}
      >
        <Header {...props} />
        <Box
          as="main"
          {...props}
          sx={{
            minHeight: `calc(100vh- ${({ theme: { headerHeight } }) =>
              headerHeight}px)`,
          }}
        >
          {props?.children}
        </Box>
        <Footer {...props} />
      </Container>
      <LightBox />
      <LoginDialog />
      <Modal />
    </>
  )
}

export default Layout
