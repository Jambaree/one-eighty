import React from "react"
import { Box, Grid, Heading, Text, Link, jsx } from "theme-ui"
// import { Link } from "gatsby"

// import app components
import Edges from "../Edges"
import BackgroundImage from "../BackgroundImage"

const Cards = (props) => {
  const { columns, headline, subheading, cards } = props

  return (
    <Box
      sx={{
        bg: "almondLight",
        py: [90, 164, 164],
        overflow: "hidden",
      }}
    >
      <Edges size="md" sx={{ position: "relative" }}>
        <Box
          sx={{
            height: 168,
            width: 168,
            bg: "flax",
            borderRadius: "50%",

            display: ["none", "block", "block"],
            overflow: "hidden",
            marginTop: [null, "-12%", "-7%"],
            position: "absolute",
            right: "-4%",
            zIndex: 0,
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: ["flex-start", "center", "center"],
            textAlign: ["left", "center", "center"],
            m: ["unset", "0 auto", "0 auto"],
            mb: 36,
            px: [16, 30, 120],
          }}
        >
          {headline && (
            <Heading
              children={headline}
              variant="styles.h2"
              sx={{
                mb: [41, 24, 24],
                width: ["50%", "100%", "100%"],
                zIndex: 1,
              }}
            />
          )}
          {subheading && (
            <Text
              children={subheading}
              variant="text.introduction"
              sx={{
                zIndex: 1,
                m: ["0 36px 0 0", "0 36px 36px 36px", "0 36px 36px 36px"],
              }}
            />
          )}
        </Box>
        <Grid
          gap={5}
          columns={[1, 2, columns]}
          sx={{
            px: [16, 30, 120],
          }}
        >
          {cards &&
            cards.map((o, i) => {
              return (
                <Box key={i}>
                  <Box
                    sx={{
                      position: "relative",
                      height: [180, 180, 300],
                      width: "100%",
                    }}
                  >
                    {o.image && (
                      <BackgroundImage
                        image={o.image}
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
                      maxWidth: "100%",
                      m: ["unset", "0 auto", "0 auto"],
                      pr: [30, "unset", "unset"],
                    }}
                  >
                    {o.headline && (
                      <Heading
                        children={o.headline}
                        variant="styles.h3"
                        sx={{
                          mb: 12,
                          mt: 36,
                        }}
                      />
                    )}
                    {o.text && (
                      <Text children={o.text} variant="text.introduction" />
                    )}
                    {<br />}
                    {o.link && (
                      <Link
                        href={o.link.url}
                        children={o.link.title}
                        variant="links.hyperlink"
                        sx={{ textDecoration: "none" }}
                      />
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

export default Cards
