import React from "react"
import { Container, Box, Grid, Text, Link as ThemeLink } from "theme-ui"

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
        <Grid pb={4} gap={3} columns={["12fr", "12fr", "2fr 10fr"]}>
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
              <Box
                sx={{
                  transform: ["rotate(0)", "rotate(0)", "rotate(270deg)"],
                  transformOrigin: "right",
                  height: "auto",
                  width: 120,
                }}
              >
                <Logo />
              </Box>
            </Box>
            <br />
          </Box>

          <Grid columns={["12fr", "12fr", "3fr 1fr"]}>
            <Box sx={{ display: "grid" }}>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: ["12fr", "12fr", "1fr 1fr 1fr 1fr"],
                  width: "50%",
                }}
              >
                {footermenu &&
                  footermenu.map((o, i) => {
                    return (
                      <ThemeLink
                        key={i}
                        href={o.url}
                        sx={{
                          color: "white",
                          m: ["12px 0", "12px 0", "0 36px 0 0"],
                        }}
                      >
                        {o.title}
                      </ThemeLink>
                    )
                  })}
              </Box>
              <Box className="legal" sx={{ display: "grid" }}>
                {copyright && (
                  <Text sx={{ color: "white", fontSize: "0" }}>
                    {copyright}
                  </Text>
                )}
                {disclaimer && (
                  <Text sx={{ color: "black50", fontSize: "0" }}>
                    {disclaimer}
                  </Text>
                )}
              </Box>
            </Box>
            <Box>
              {phonenumber && (
                <Box pt={2} sx={{ display: "grid" }}>
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
                <Box pt={2} sx={{ display: "grid" }}>
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
