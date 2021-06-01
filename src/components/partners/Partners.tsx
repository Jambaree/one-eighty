import React from "react"
import { Box, Grid, Heading, Text, Link } from "theme-ui"

// import app components
import Edges from "../Edges"
import BackgroundImage from "../BackgroundImage"
import Button from "../Button"

const Partners = (props) => {
  const { columns, backgroundcolor, headline, subheading, cards, mainbutton } =
    props

  return (
    <Box sx={{ bg: backgroundcolor, pt: 100, pb: 150 }}>
      <Edges size="md">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            width: ["100%", "100%", 730],
            m: "0 auto",
            mb: 36,
          }}
        >
          {headline && (
            <Heading
              children={headline}
              variant="styles.h3"
              sx={{
                m: "0 auto",
                mb: 36,
                width: ["80%", "100%", "100%"],
              }}
            />
          )}
          {subheading && (
            <Text
              children={subheading}
              variant="text.introduction"
              sx={{
                fontSize: "18px",
                lineHeight: "30px",
                mb: [36, 36, 60],
                zIndex: 1,
                p: "0 18px",
              }}
            />
          )}
        </Box>
        <Grid gap={["90px", 4, 4]} columns={[1, 2, columns]}>
          {cards &&
            cards.map((o, i) => {
              return (
                <Box
                  key={i}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      width: "204px",
                      height: "74px",
                      mb: 25,
                    }}
                  >
                    {o.icon && (
                      <BackgroundImage
                        image={o.icon}
                        backgroundSize="contain"
                        style={{
                          borderRadius: 6,
                        }}
                      />
                    )}
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      textAlign: "center",
                      alignItems: "center",
                      mx: [40, 20, "unset"],
                    }}
                  >
                    {o.headline && (
                      <Heading
                        children={o.headline}
                        variant="styles.h3"
                        sx={{
                          mb: 12,
                          mt: 36,
                          fontSize: "5",
                          width: ["100%"],
                          lineHeight: "28px",
                        }}
                      />
                    )}
                    {o.link && (
                      <Link children={o.link.title} variant="links.hyperlink" />
                    )}
                  </Box>
                </Box>
              )
            })}
        </Grid>
        {mainbutton?.url && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mt: 80,
            }}
          >
            <Button to={mainbutton.url}>{mainbutton.title}</Button>
          </Box>
        )}
      </Edges>
    </Box>
  )
}

export default Partners
