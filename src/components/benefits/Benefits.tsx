import React from "react"
import { Box, Grid, Heading, Text, Link, jsx } from "theme-ui"

// import app components
import Edges from "../Edges"
import BackgroundImage from "../BackgroundImage"

const Benefits = (props) => {
  const { columns, headline, subheading, icon, cards } = props

  return (
    <Box sx={{ bg: "white", mt: [104], mb: 154 }}>
      <Edges size="md">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: ["flex-start", "center", "center"],
            textAlign: ["left", "center", "center"],
            width: [283, 600, 730],
            m: ["unset", "0 auto", "0 auto"],
            mb: 36,
          }}
        >
          {headline && (
            <Heading
              children={headline}
              variant="styles.h2"
              sx={{
                mb: ["unset", "unset", 36],
                width: ["65%", "100%", "100%"],
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
                      height: [180, 180, 186],
                    }}
                  >
                    {o.icon && (
                      <BackgroundImage
                        image={o.icon}
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
                      justifyContent: ["flex-start", "center", "center"],
                      textAlign: ["left", "center", "center"],
                      alignItems: ["center"],
                    }}
                  >
                    {o.headline && (
                      <Heading
                        children={o.headline}
                        variant="styles.h3"
                        sx={{ mb: 12, mt: 36, fontSize: "5", width: 255 }}
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
      </Edges>
    </Box>
  )
}

export default Benefits
