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
    path,
    pageContext: {
      themeOptions: { footer },
    },
  } = props
  console.log(footer)
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
    <Container p={4} bg="muted">
      <Edges size="xlg">
        {/* <Grid pb={4} gap={2} columns={[1, "2fr 2fr"]}>
          <Box
            sx={{
              width: ["100%", "75%", "50%"],
            }}
          >
            <Box
              sx={{
                width: ["40%", "40%", "40%"],
              }}
            >
              <Logo />
            </Box>
            <br />
            {slogan && <Text>{Parser(slogan)}</Text>}
          </Box>

          <Grid columns={[1, "1fr 1fr"]}>
            <Box>
              <Text
                sx={{
                  fontSize: 2,
                  fontWeight: "bold",
                }}
              >
                Contacts
              </Text>
              {phone && (
                <Box pt={2}>
                  Phone:{" "}
                  <ThemeLink
                    sx={{ textDecoration: "none" }}
                    href={`tel:${phone}`}
                  >
                    {Parser(phone)}
                  </ThemeLink>
                </Box>
              )}
              {email && (
                <Box pt={2}>
                  Email:{" "}
                  <ThemeLink
                    sx={{ textDecoration: "none" }}
                    href={`mailto:${email}`}
                  >
                    {Parser(email)}
                  </ThemeLink>
                </Box>
              )}
              {address && (
                <Box pt={2}>
                  Address:{" "}
                  <ThemeLink sx={{ textDecoration: "none" }} href={address}>
                    {Parser(address)}
                  </ThemeLink>
                </Box>
              )}
            </Box>
            <Box>
              <Text
                sx={{
                  fontSize: 2,
                  fontWeight: "bold",
                }}
              >
                Social
              </Text>

              <Socials color={themeUi.colors.textLight} />
              {description && (
                <Text color="textLight">{Parser(description)}</Text>
              )}
            </Box>
          </Grid>
        </Grid> */}

        <Divider />

        <Grid color="textLight" columns={[1, "1fr 1fr"]}>
          <Logo style={{ transform: "rotate(270deg)" }} />
          <Box pt={3}>
            {`Copyright ${currentYear} Lorem Inc. All rights reserved.`}
          </Box>
          <Flex
            sx={{
              justifyContent: "flex-end",
              "@media screen and (max-width: 40rem)": {
                justifyContent: "flex-start",
                flexDirection: "column",
              },
            }}
          >
            <Box>
              <FooterMenu />
            </Box>
          </Flex>
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
