import React from "react"
import {
  Container,
  Flex,
  Box,
  Grid,
  Text,
  Divider,
  Link as ThemeLink,
} from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import Parser from "html-react-parser"

// import app components
import Edges from "./Edges"
import Socials from "./Socials"
import FooterMenu from "./menu/FooterMenu"
import Logo from "../icons/logo.svg"
import themeUi from "../gatsby-plugin-theme-ui"

const Footer = (props) => {
  const {
    pageContext: {
      themeOptions: {
        footer: { emailaddress, footermenu, image, phonenumber, text },
      },
    },
  } = props
  console.log(emailaddress)
  // const {
  //   themeOptions: {
  //     siteOptions: {
  //       contact: { email, address, phone },
  //       company: { slogan },
  //       socialMedia: { description },
  //     },
  //   },
  // } = useFooterQuery()

  const currentYear = new Date().getFullYear()

  return (
    <Container p={4} bg="charcoal">
      <Edges size="xlg">
        <Grid pb={4} gap={2} columns={[1, "1fr 3fr"]}>
          <Box
            sx={{
              width: ["100%", "75%", "50%"],
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
                  height: "auto",
                  width: 120,
                  position: "absolute",
                  bottom: 180,
                }}
              />
            </Box>
            <br />
          </Box>

          <Grid columns={[1, "3fr 1fr"]} sx={{ alignItems: "center" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box sx={{ display: "flex", mb: 24 }}>
                {footermenu &&
                  footermenu.map((o, i) => {
                    return (
                      <ThemeLink
                        key={i}
                        href={o.url}
                        sx={{ color: "white", mr: 36 }}
                      >
                        {o.title}
                      </ThemeLink>
                    )
                  })}
              </Box>
              {text && <Text sx={{ color: "black50" }}>{text}</Text>}
            </Box>
            <Box>
              {phonenumber && (
                <Box pt={2}>
                  <span>Phone</span>
                  <ThemeLink
                    sx={{ textDecoration: "none" }}
                    href={`tel:${phonenumber}`}
                  >
                    {phonenumber}
                  </ThemeLink>
                </Box>
              )}
              {emailaddress && (
                <Box pt={2}>
                  <span>Email</span>
                  <ThemeLink
                    sx={{ textDecoration: "none" }}
                    href={`mailto:${emailaddress}`}
                  >
                    {emailaddress}
                  </ThemeLink>
                </Box>
              )}
              <Socials />
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
