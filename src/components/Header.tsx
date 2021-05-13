import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import HamburgerMenu from "react-hamburger-menu"
import { Container, Box, Flex } from "theme-ui"

// import app components
import Edges from "./Edges"
import { useStore } from "../store"
import theme from "../theme"
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
      userState: { isLoggedIn, user },
    },
    dispatch,
  ] = useStore()

  useEffect(() => {
    dispatch({ type: "SET_MENU", payload: false })
  }, [path, dispatch])

  const [headerMenu, setHeaderMenu] = useState(false)

  return (
    <>
      <Container
        bg="white"
        p="20px 0"
        sx={{
          height: `${({ theme: { headerHeight } }) => headerHeight}px`,
          position: "fixed",
          left: 0,
          top: 0,
          width: ["100%", "100%", "100%"],
          zIndex: "999",
        }}
      >
        <Edges size="lg">
          <Flex
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
              ".desktop-menu": {
                "@media (max-width: 959px)": {
                  display: "none",
                },
              },
            }}
          >
            <Box
              pr={2}
              sx={{ textDecoration: "none", svg: { height: "60px" } }}
            >
              <Logo style={{ height: "30px" }} />
            </Box>

            <Flex
              sx={{
                alignItems: "center",
                width: "20%",
                justifyContent: "space-between",
              }}
            >
              {menu &&
                menu.map(({ title, children }, i) => {
                  return (
                    <li
                      key={i}
                      style={{
                        listStyleType: "none",
                      }}
                    >
                      <span
                        onClick={() =>
                          setHeaderMenu(headerMenu === i ? null : i)
                        }
                      >
                        {title}
                      </span>
                      <Box
                        sx={{
                          position: "absolute",
                          display: headerMenu === i ? "flex" : "none",
                          flexDirection: "column",
                          backgroundColor: "charcoalDark",
                          padding: 18,
                          width: 294,
                          a: {
                            color: "white",
                            fontFamily: "heading",
                            padding: "12px 0",
                          },
                          "a:hover": {
                            color: "coral",
                          },
                        }}
                      >
                        {children &&
                          children.map((child, j) => (
                            <Link
                              key={j}
                              to={child.url}
                              aria-label={child.title}
                              title={child.title}
                            >
                              {child.title}
                            </Link>
                          ))}
                      </Box>
                    </li>
                  )
                })}
              {/* <Box
                sx={{
                  transform: "translateX(15px)",
                  cursor: "pointer",
                  "@media (min-width: 960px)": { display: "none" },
                }}
                p={15}
                onClick={() => dispatch({ type: "TOGGLE_MENU" })}
              >
                <HamburgerMenu
                  color={theme.colors.primary}
                  isOpen={menuActive}
                  width={26}
                  height={15}
                  strokeWidth={2}
                  menuClicked={() => ""}
                />
              </Box> */}
            </Flex>
          </Flex>
        </Edges>
      </Container>
    </>
  )
}

export default Header
