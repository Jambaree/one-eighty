import React from "react"
import { Container, Box, Flex, Grid, Text, Link as ThemeLink } from "theme-ui"
import { Link } from "gatsby"

// import app components
import Logo from "../icons/footer-logo.svg"

const Footer = (props) => {
  const {
    pageContext: {
      themeOptions: {
        footer: { footermenu, legalmenu },
      },
    },
  } = props

  return (
    <Container bg="blue180" sx={{ minHeight: "233px" }}>
      <Box
        sx={{
          minHeight: "233px",
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
            <Link to="/">
              <Logo />
            </Link>
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
                <ThemeLink key={i} href={o.url} color="white">
                  <Text
                    variant="footerNav"
                    sx={{
                      "&:hover": { color: "red" },
                    }}
                  >
                    {o.title}
                  </Text>
                </ThemeLink>
              )
            })}
          {legalmenu &&
            legalmenu.map((o, i) => {
              return (
                <ThemeLink key={i} href={o.url} color="white">
                  <Text
                    variant="footerNav"
                    sx={{
                      color: "termsPrivacy",
                      "&:hover": { color: "red" },
                    }}
                  >
                    {o.title}
                  </Text>
                </ThemeLink>
              )
            })}
        </Box>
      </Box>
    </Container>
  )
}

export default Footer
