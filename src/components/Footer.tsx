import React from "react"
import { Container, Box, Flex, Grid, Text } from "theme-ui"
import { Link as GatsbyLink } from "gatsby"
import Parser from "html-react-parser"

// import app components
import Logo from "../icons/footer-logo.svg"
import Link from "../components/Link"
import { formatLink } from "../utils"

const Footer = (props) => {
  const {
    pageContext: {
      themeOptions: {
        footer: { footermenu, legalmenu },
      },
    },
  } = props

  return (
    <Container bg="blue180">
      <Box
        sx={{
          display: ["flex", "grid"],
          gridTemplateColumns: "1fr 1fr 1fr",
          gridTemplateRows: "1fr",
          flexDirection: "column",
          py: "22px",
        }}
      >
        <Box
          sx={{
            height: "100%",
            gridColumnStart: 3,
            gridColumnEnd: 4,
            gridRowStart: 1,
            gridRowEnd: 2,
            display: "flex",
            px: "30px",
            position: "relative",
            "&:before": {
              content: "''",
              position: "absolute",
              display: ["none", "block"],
              zIndex: 2,
              top: "50%",
              transform: "translateY(-50%)",
              left: 0,
              width: "1px",
              height: "95%",
              bg: "white",
              opacity: 0.5,
            },
          }}
        >
          <Box sx={{ my: [null, "auto"], pb: ["10px", null] }}>
            <GatsbyLink to="/">
              <Logo />
            </GatsbyLink>
          </Box>
        </Box>
        <Box
          sx={{
            height: "100%",
            gridColumnStart: 2,
            gridColumnEnd: 3,
            gridRowStart: 1,
            gridRowEnd: 2,
            display: "flex",
            alignItems: ["flex-start", "flex-end"],
            justifyContent: "center",
            flexDirection: "column",
            px: "30px",
          }}
        >
          {footermenu &&
            footermenu.map((o, i) => {
              return (
                <Link key={i} activeStyle={{}} to={formatLink(o.url)}>
                  <Text
                    variant="footerNav"
                    sx={{
                      color: "white",
                      "&:hover": { color: "red", cursor: "pointer" },
                    }}
                  >
                    {Parser(o.title || "")}
                  </Text>
                </Link>
              )
            })}
          {legalmenu &&
            legalmenu.map((o, i) => {
              return (
                <Link key={i} activeStyle={{}} to={formatLink(o.url)}>
                  <Text
                    variant="footerNav"
                    sx={{
                      color: "termsPrivacy",
                      "&:hover": { color: "red", cursor: "pointer" },
                    }}
                  >
                    {Parser(o.title || "")}
                  </Text>
                </Link>
              )
            })}
        </Box>
      </Box>
    </Container>
  )
}

export default Footer
