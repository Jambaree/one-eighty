import React from "react"
import { Box, Grid, Heading, Text, Link } from "theme-ui"

// import app components
import Edges from "../Edges"
import BackgroundImage from "../BackgroundImage"
import Button from "../Button"

const People = (props) => {
  const { columns, backgroundcolor, headline, subheading, cards } = props

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
            mb: [72, 72, 96],
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
                      width: 140,
                      height: 140,
                      mb: 25,
                    }}
                  >
                    {o.avatar &&
                      (o.avatar?.svg ? (
                        Parser(o.avatar.svg)
                      ) : (
                        <BackgroundImage
                          image={o.avatar}
                          backgroundSize="contain"
                          style={{
                            borderRadius: "50%",
                          }}
                        />
                      ))}
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
                    {o.position && (
                      <Heading
                        children={o.position}
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
                  </Box>
                </Box>
              )
            })}
        </Grid>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: 80,
          }}
        >
          <Button to="#">See More</Button>
        </Box>
      </Edges>
    </Box>
  )
}

export default People
