import React from "react"
import { Box, Grid, Heading, Text, Link } from "theme-ui"
import { ChevronRightCircle } from "mdi-material-ui"

// import app components
import Edges from "../Edges"
import BackgroundImage from "../BackgroundImage"

const Logos = (props) => {
  const { columns, headline, subheading, cards } = props
  console.log(props)

  return (
    <Box sx={{ bg: "white", mt: 104, mb: 154 }}>
      <Edges size="md">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            width: "100%",
            m: "162px auto 36px auto",
            "&:after": {
              content: "''",
              position: "absolute",
              marginBottom: ["-210px", "-230px", "-160px"],
              left: "50%",
              transform: "translateX(-50%)",
              height: 4,
              width: 140,
              backgroundColor: "charcoalDark",
            },
          }}
        >
          {headline && (
            <Heading
              children={headline}
              variant="styles.h2"
              sx={{
                m: "0 auto 36px auto",
                width: ["80%", "100%", "100%"],
              }}
            />
          )}
          {subheading && (
            <Text
              children={subheading}
              variant="text.introduction"
              sx={{ mb: [36, 36, 104], zIndex: 1 }}
            />
          )}
        </Box>
        <Grid gap={5} columns={[1, 2, columns]}>
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
                    {o.logo && (
                      <BackgroundImage
                        image={o.logo}
                        style={{
                          borderRadius: 6,
                          marginBottom: 16,
                        }}
                        backgroundSize="contain"
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
                      mb: 12,
                    }}
                  >
                    {o.text && (
                      <Text children={o.text} variant="text.paragraph" />
                    )}
                  </Box>
                  <Box sx={{ width: 50, m: "0 auto" }}>
                    {o.link && (
                      <Link href={o.link.url} sx={{ fill: "#D6694A" }}>
                        <ChevronRightCircle
                          style={{
                            fill: "inherit",
                            fontSize: 36,
                          }}
                        />
                      </Link>
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

export default Logos
