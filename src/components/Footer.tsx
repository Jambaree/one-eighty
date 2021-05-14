import React from "react"
import {
  Container,
  // Flex,
  Box,
  Grid,
  Text,
  // Divider,
  Link as ThemeLink,
} from "theme-ui"
// import { graphql, useStaticQuery } from "gatsby"
// import Parser from "html-react-parser"

// import app components
import Edges from "./Edges"
import Socials from "./Socials"
// import FooterMenu from "./menu/FooterMenu"
import Logo from "../icons/logo.svg"
// import themeUi from "../gatsby-plugin-theme-ui"

const Footer = (props) => {
  const {
    pageContext: {
      themeOptions: {
        footer: {
          emailaddress,
          footermenu,
          image,
          phonenumber,
          copyright,
          disclaimer,
        },
      },
    },
  } = props

  return (
    <Container p={4} bg="charcoalDark">
      <Edges size="xlg">
        <Grid
          pb={4}
          gap={2}
          columns={[1, "1fr 3fr"]}
          sx={{ display: ["flex"], flexDirection: ["row", "column"] }}
        >
          <Box
            sx={{
              width: ["100%", "75%", "50%"],
              flexDirection: ["row", "column"],
            }}
          >
            <Box
              sx={{
                width: ["40%", "40%", "40%"],
                ".a": { fill: "white" },
              }}
            >
              <Logo
                style={{
                  transform: "rotate(270deg)",
                  transformOrigin: "right",
                  height: "auto",
                  width: 120,
                }}
              />
            </Box>
            <br />
          </Box>

          <Grid columns={[1, "3fr 1fr"]} sx={{ alignItems: "center" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: ["column", "row"],
                  mb: 24,
                }}
              >
                {footermenu &&
                  footermenu.map((o, i) => {
                    return (
                      <ThemeLink
                        key={i}
                        href={o.url}
                        sx={{ color: "white", m: ["12px 0", "0 36px 0 0"] }}
                      >
                        {o.title}
                      </ThemeLink>
                    )
                  })}
              </Box>
              {copyright && (
                <Text sx={{ color: "white", fontSize: "0" }}>{copyright}</Text>
              )}
              {disclaimer && (
                <Text sx={{ color: "black50", fontSize: "0" }}>
                  {disclaimer}
                </Text>
              )}
            </Box>
            <Box>
              {phonenumber && (
                <Box pt={2} sx={{ display: "flex", flexDirection: "column" }}>
                  <Text variant="footerHeading2">Phone</Text>
                  <ThemeLink
                    sx={{ textDecoration: "none", color: "white" }}
                    href={`tel:${phonenumber}`}
                  >
                    {phonenumber}
                  </ThemeLink>
                </Box>
              )}
              {emailaddress && (
                <Box pt={2} sx={{ display: "flex", flexDirection: "column" }}>
                  <Text variant="footerHeading2">Email</Text>
                  <ThemeLink
                    sx={{ textDecoration: "none", color: "coral" }}
                    href={`mailto:${emailaddress}`}
                  >
                    {emailaddress}
                  </ThemeLink>
                </Box>
              )}
              <Socials {...props} />
            </Box>
          </Grid>
        </Grid>
      </Edges>
    </Container>
  )
}

// const useFooterQuery = () => {
//   const { wp } = useStaticQuery(
//     graphql`
//       query {
//         wp {
//           themeOptions {
//             siteOptions {
//               contact {
//                 email
//                 address
//                 phone
//               }
//               company {
//                 slogan
//                 logo
//               }
//               socialMedia {
//                 description
//               }
//             }
//           }
//         }
//       }
//     `
//   )
//   return wp
// }

export default Footer
