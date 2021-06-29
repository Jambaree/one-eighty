import React from "react"
import { Container, Box, Flex, Text, Link as ThemeLink } from "theme-ui"

// import app components
import Edges from "./Edges"
import Socials from "./Socials"

import Logo from "../icons/logo.svg"

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
      <Edges size="md">
        <Flex
          sx={{
            flexWrap: "wrap",
            flexDirection: "column",

            paddingTop: "60px",
            paddingBottom: "60px",

            "@media (min-width: 800px)": {
              flexDirection: "row",
              paddingTop: "91px",
              paddingBottom: "86px",
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
              <Flex
                mb="24px"
                sx={{
                  flexWrap: "wrap",
                  flexDirection: "column",
                  "@media (min-width: 800px)": {
                    flexDirection: "row",
                  },
                }}
              >
                {footermenu &&
                  footermenu.map((o, i) => {
                    return (
                      <ThemeLink
                        key={i}
                        href={o.url}
                        color="white"
                        mr="24px"
                        mb="21px"
                        variant="hyperlink"
                      >
                        <Text
                          sx={{
                            fontFamily: "body",
                            "&:hover": { color: "coral" },
                          }}
                        >
                          {o.title}
                        </Text>
                      </ThemeLink>
                    )
                  })}
              </Flex>

              <LegalText copyright={copyright} disclaimer={disclaimer} />
            </Box>

            <Box
              mb="55px"
              sx={{
                "@media (min-width: 800px)": {
                  marginBottom: 0,
                },
              }}
            >
              {phonenumber && (
                <Box mb="24px">
                  <Text variant="footerHeading2" sx={{ display: "block" }}>
                    Phone
                  </Text>

                  <ThemeLink
                    sx={{
                      textDecoration: "none",
                      color: "white",
                      "&:hover": { color: "coral" },
                    }}
                    href={`tel:${phonenumber}`}
                    variant="hyperlink"
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
                    sx={{
                      textDecoration: "none",
                      color: "coral",
                      "&:hover": { color: "coral" },
                    }}
                    href={`mailto:${emailaddress}`}
                    variant="hyperlink"
                  >
                    {emailaddress}
                  </ThemeLink>
                </Box>
              )}

              <Socials socials={{ instagram, facebook, youtube, twitter }} />
            </Box>

            <LegalText copyright={copyright} disclaimer={disclaimer} mobile />
          </Flex>
        </Flex>
      </Edges>
    </Container>
  )
}

const FooterLogo = () => (
  <Box
    mr="24px"
    sx={{
      "> svg": {
        width: "100%",
        height: "auto",
      },
      ".logo-vert": {
        display: "none",
      },
      ".logo-hor": {
        marginBottom: "60px",
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
    <Logo className="logo-hor" />
  </Box>
)

interface LegalTextProps {
  copyright?: string
  disclaimer?: string
  mobile?: boolean
}

const LegalText: React.FC<LegalTextProps> = (props: LegalTextProps) => {
  const { copyright, disclaimer, mobile } = props

  return (
    <Box
      aria-hidden={!!mobile}
      sx={{
        maxWidth: "520px",
        display: mobile ? "block" : "none",
        "@media (min-width: 800px)": {
          display: mobile ? "none" : "block",
        },
      }}
    >
      {copyright && (
        <Text
          sx={{
            fontFamily: "body",
            display: "block",
            color: "white",
            fontSize: 0,
          }}
        >
          {copyright}
        </Text>
      )}

      {disclaimer && (
        <Text
          sx={{
            fontFamily: "body",
            display: "block",
            color: "black50",
            fontSize: 0,
          }}
        >
          {disclaimer}
        </Text>
      )}
    </Box>
  )
}

export default Footer
