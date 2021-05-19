import React from "react"
import { Container, Box, Flex, Text, Link as ThemeLink } from "theme-ui"

// import app components
import Edges from "./Edges"
import Socials from "./Socials"

import Logo from "../icons/logo.svg"
import LogoVertical from "../icons/logo-vertical.svg"

const Footer = (props) => {
  const {
    pageContext: {
      themeOptions: {
        footer: {
          emailaddress,
          footermenu,
          phonenumber,
          copyright,
          disclaimer,
          instagram,
          facebook,
          youtube,
          twitter,
        },
      },
    },
  } = props

  return (
    <Container bg="charcoalDark">
      <Edges size="lg">
        <Flex
          pt="91px"
          pb="86px"
          sx={{
            flexWrap: "wrap",
            flexDirection: "column",

            "@media (min-width: 800px)": {
              flexDirection: "row",
            },
          }}
        >
          <FooterLogo />

          <Flex
            sx={{
              flexDirection: "column",

              "@media (min-width: 800px)": {
                justifyContent: "space-between",
                flexDirection: "row",
                width: "calc(100% - 150px - 120px)",
              },
            }}
          >
            <Box mr="24px">
              <Flex mb="37px" sx={{ flexWrap: "wrap" }}>
                {footermenu &&
                  footermenu.map((o, i) => {
                    return (
                      <ThemeLink key={i} href={o.url} color="white" mr="24px">
                        {o.title}
                      </ThemeLink>
                    )
                  })}
              </Flex>

              <Box sx={{ maxWidth: "477px" }} mb="24px">
                {copyright && (
                  <Text
                    sx={{ display: "block", color: "white", fontSize: "0" }}
                  >
                    {copyright}
                  </Text>
                )}

                {disclaimer && (
                  <Text
                    sx={{ display: "block", color: "black50", fontSize: "0" }}
                  >
                    {disclaimer}
                  </Text>
                )}
              </Box>
            </Box>

            <Box
              sx={{
                "@media (min-width: 800px)": {
                  width: "255px",
                },
              }}
            >
              {phonenumber && (
                <Box mb="24px">
                  <Text variant="footerHeading2" sx={{ display: "block" }}>
                    Phone
                  </Text>

                  <ThemeLink
                    sx={{ textDecoration: "none", color: "white" }}
                    href={`tel:${phonenumber}`}
                  >
                    {phonenumber}
                  </ThemeLink>
                </Box>
              )}

              {emailaddress && (
                <Box mb="24px">
                  <Text variant="footerHeading2" sx={{ display: "block" }}>
                    Email
                  </Text>

                  <ThemeLink
                    sx={{ textDecoration: "none", color: "coral" }}
                    href={`mailto:${emailaddress}`}
                  >
                    {emailaddress}
                  </ThemeLink>
                </Box>
              )}

              <Socials socials={{ instagram, facebook, youtube, twitter }} />
            </Box>
          </Flex>
        </Flex>
      </Edges>
    </Container>
  )
}

const FooterLogo = () => (
  <Box
    mr={"24px"}
    sx={{
      "> svg": {
        width: "100%",
        height: "auto",
      },
      ".logo-vert": {
        display: "none",
      },
      ".logo-hor": {
        marginBottom: "24px",
      },

      width: "160px",

      "@media (min-width: 800px)": {
        marginRight: "60px",
        width: "35px",

        ".logo-vert": {
          display: "block",
        },

        ".logo-hor": {
          display: "none",
        },
      },

      "@media (min-width: 1100px)": {
        marginRight: "120px",
      },
    }}
  >
    <LogoVertical className="logo-vert" />

    <Logo className="logo-hor" />
  </Box>
)

export default Footer
