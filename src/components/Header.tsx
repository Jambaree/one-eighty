import React, { useEffect, useState } from "react"
// import { Link } from "gatsby"
import HamburgerMenu from "react-hamburger-menu"
import { Themed, Container, Box, Flex, Link } from "theme-ui"
import { Close } from "mdi-material-ui"

// import app components
import Edges from "./Edges"
import { useStore } from "../store"
// import theme from "../theme"
import Logo from "../icons/logo.svg"
import ChevronDown from "../icons/chevron-down.svg"

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
      <Themed.h1>Test</Themed.h1>
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
              sx={{
                textDecoration: "none",
                ".a": { fill: "charcoalDark" },
                svg: { height: "60px" },
              }}
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
                        borderBottom:
                          headerMenu === i ? "4px solid coral" : "none",
                      }}
                    >
                      <span
                        onClick={() =>
                          setHeaderMenu(headerMenu === i ? null : i)
                        }
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        {title}
                        <ChevronDown />
                      </span>
                      <Box
                        sx={{
                          position: "absolute",
                          display: headerMenu === i ? "flex" : "none",
                          flexDirection: "column",
                          backgroundColor: "charcoalDark",
                          mt: 24,
                          pb: 40,
                          width: "auto",
                          right: 0,

                          a: {
                            fontFamily: "heading",
                          },
                          "a:hover": {
                            color: "coral",
                          },
                        }}
                      >
                        <li
                          style={{
                            margin: "6px 6px 6px auto",
                            color: "coral",
                          }}
                        >
                          <Close
                            onClick={() =>
                              setHeaderMenu(headerMenu === i ? null : i)
                            }
                          />
                        </li>
                        {children &&
                          children.map((child, j) => (
                            <Link
                              key={j}
                              href={child.url}
                              aria-label={child.title}
                              title={child.title}
                              variant="clickListMenu"
                              sx={{ p: "16px 80px" }}
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
