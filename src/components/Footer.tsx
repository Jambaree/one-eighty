import React from "react"
import { Container, Box, Flex, Grid, Text, Link as ThemeLink } from "theme-ui"
import { Link as GatsbyLink } from "gatsby"
import Parser from "html-react-parser"

// import app components
import Logo from "../icons/footer-logo.svg"
import Link from "../components/Link"
import { formatLink } from "../utils"
import Socials from "./Socials"

const Footer = (props) => {
  const {
    pageContext: {
      themeOptions: {
        footer: {
          footermenu,
          legalmenu,
          facebook,
          instagram,
          twitter,
          linkedin,
          youtube,
          phone,
          email,
        },
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
          <Box sx={{ mt: [null, "auto"] }}>
            <Box sx={{ pb: ["10px", "25px"] }}>
              <GatsbyLink to="/">
                <Logo />
              </GatsbyLink>
            </Box>
            <Box>
              {phone && (
                <ThemeLink
                  variant="footerNav"
                  sx={{
                    textDecoration: "none",
                    color: "white",
                    "&:hover": { color: "primary" },
                  }}
                  href={`tel:${phone}`}
                >
                  T : {phone}
                </ThemeLink>
              )}
            </Box>
            <Box sx={{ pb: "10px" }}>
              {email && (
                <ThemeLink
                  variant="footerNav"
                  sx={{
                    textDecoration: "none",
                    color: "white",
                    "&:hover": { color: "primary" },
                  }}
                  href={`mailto:${email}`}
                >
                  Email : {email}
                </ThemeLink>
              )}
            </Box>
            <Box sx={{ pb: ["5px", 0] }}>
              <Socials
                color="white"
                socials={{ instagram, facebook, linkedin, twitter, youtube }}
              />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            maxHeight: "100px",
            height: "100%",
            gridColumnStart: 2,
            gridColumnEnd: 3,
            gridRowStart: 1,
            gridRowEnd: 2,
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            flexDirection: "column",
            px: "30px",
            flexWrap: ["wrap", "wrap-reverse"],
          }}
        >
          {footermenu &&
            footermenu.map((o, i) => {
              return (
                <Link key={i} activeStyle={{}} to={formatLink(o.url)}>
                  <Text
                    variant="footerNav"
                    sx={{
                      textAlign: "right",
                      color: "white",
                      "&:hover": { color: "red", cursor: "pointer" },
                      pl: [0, "30px"],
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
