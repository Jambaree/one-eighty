import React from "react"
import { Box, Grid, Heading, Text, Link, jsx } from "theme-ui"

// import app components
import Edges from "../Edges"
import BackgroundImage from "../BackgroundImage"
import Button from "../Button"

const Benefits = (props) => {
  const { columns, headline, subheading, icon, cards, link } = props

  return (
    <Box sx={{ bg: "white", mt: 104, mb: 154 }}>
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
              variant="styles.h2"
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
              sx={{ mb: [36, 36, 60], zIndex: 1 }}
            />
          )}
        </Box>
        <Grid gap={4} columns={[1, 2, columns]}>
          {cards &&
            cards.map((o, i) => {
              return (
                <Box key={i}>
                  <Box
                    sx={{
                      position: "relative",
                      height: 186,
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
                    {o.text && (
                      <Text children={o.text} variant="text.paragraph" />
                    )}
                  </Box>
                </Box>
              )
            })}
        </Grid>
        {link?.url && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mt: 80,
            }}
          >
            <Button to={link.url}>{link.title}</Button>
          </Box>
        )}
      </Edges>
    </Box>
  )
}

export default Benefits
