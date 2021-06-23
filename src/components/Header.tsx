import React, { useEffect } from "react"
import HamburgerMenu from "react-hamburger-menu"
import { Container, Box, Flex } from "theme-ui"
import { Link } from "gatsby"

// import app components
import Edges from "./Edges"
import DesktopMenu from "./menu/DesktopMenu"
import MobileMenu from "./menu/MobileMenu"

import { useStore } from "../store"

import Logo from "../icons/logo.svg"

const Header = (props) => {
  const {
    path,
    pageContext: {
      themeOptions: {
        header: { menu },
      },
    },
  } = props

  const [
    {
      appState: { menu: menuActive },
    },
    dispatch,
  ] = useStore()

  useEffect(() => {
    dispatch({ type: "SET_MENU", payload: false })
  }, [path, dispatch])

  return (
    <Container
      sx={{
        background: "#fff",
        height: 94,
        position: "fixed",
        left: 0,
        top: 0,
        width: ["100%", "100%", "100%"],
        zIndex: 3,
        display: "flex",
        alignItems: "center",
        borderBottom: "1px solid #D3D3D3",
      }}
    >
      <Edges size="lg">
        <Flex
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            pr={2}
            sx={{
              position: "relative",
              zIndex: 2,
              textDecoration: "none",
              ".a": { fill: "charcoalDark" },
              svg: { height: "60px" },
            }}
          >
            <Link to="/">
              <Logo style={{ height: "auto", width: "160px" }} />
            </Link>
          </Box>

          <DesktopMenu items={menu} />

          <Box
            sx={{
              transform: "translateX(15px)",
              cursor: "pointer",
              "@media (min-width: 1024px)": { display: "none" },
            }}
            p={15}
            onClick={() => dispatch({ type: "TOGGLE_MENU" })}
          >
            <HamburgerMenu
              color={menuActive ? "coral" : "#2D4052"}
              isOpen={menuActive}
              width={26}
              height={15}
              strokeWidth={2}
              menuClicked={() => ""}
            />
          </Box>

          <MobileMenu items={menu} />
        </Flex>
      </Edges>
    </Container>
  )
}

export default Header
