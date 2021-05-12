import React, { useEffect } from "react"
import { Link } from "gatsby"
import HamburgerMenu from "react-hamburger-menu"
import { Container, Box, Flex } from "theme-ui"

// import app components
import Edges from "../Edges"
import Button from "../Button"
import Avatar from "../Avatar"
import Search from "../Search"
import { useStore } from "../../store"
import theme from "../../theme"
import Logo from "../../icons/logo.svg"

const Header = (props) => {
  const {
    path,
    pageContext: {
      themeOptions: {
        header: { menu },
      },
    },
  } = props

  console.log(menu)

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

  return (
    <>
      <Container
        bg="background"
        p="10px 0"
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
              <Link
                to="/"
                onClick={() => dispatch({ type: "SET_MENU", payload: false })}
              >
                <Logo />
              </Link>
            </Box>
            <Box>
              <Search />
            </Box>

            <Flex sx={{ alignItems: "center" }}>
              {menu &&
                menu.map((o, i) => {
                  return (
                    <li key={i}>
                      <Link to={o.url} aria-label={o.title} title={o.title}>
                        {o.title}
                      </Link>
                    </li>
                  )
                })}

              <div
                onClick={() =>
                  dispatch({
                    type: "SET_MODAL",
                    payload: { headline: "Testing", text: "Testing text" },
                  })
                }
              >
                Modal
              </div>
              {!isLoggedIn ? (
                <Box>
                  <Button
                    variant="contained"
                    color="primary"
                    children="Login"
                    ml={20}
                    onClick={() =>
                      dispatch({
                        type: "SET_LOGIN_DIALOG",
                        payload: true,
                      })
                    }
                  />
                </Box>
              ) : (
                user && <Avatar {...{ user, dispatch }} />
              )}
              <Box
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
              </Box>
            </Flex>
          </Flex>
        </Edges>
      </Container>
    </>
  )
}

export default Header
