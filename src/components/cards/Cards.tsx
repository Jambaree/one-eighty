import React from "react"
import { Box, Grid, Heading, Text, Link, jsx } from "theme-ui"
// import { Link } from "gatsby"

// import app components
import Edges from "../Edges"
import BackgroundImage from "../BackgroundImage"

const Cards = (props) => {
  const { columns, mainheadline, subheading, cards } = props
  console.log(props)

  return (
    <Box sx={{ bg: "almondLight", py: [90, 164, 164] }}>
      <Edges size="md">
        <Box
          sx={{
            display: ["none", "block", "block"],
            position: "absolute",
            height: 168,
            width: 168,
            bg: "flax",
            borderRadius: "50%",
            zIndex: 0,
            mr: 0,
            transform: [
              "unset",
              "translate(198%, -48%)",
              "translate(296%, -48%)",
            ],
          }}
        />
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
          {mainheadline && (
            <Heading
              children={mainheadline}
              variant="styles.h2"
              sx={{
                mb: [41, 24, 24],
                width: ["65%", "100%", "100%"],
                zIndex: 1,
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
        <Grid gap={5} columns={[1, 2, 2]}>
          {cards &&
            cards.map((o, i) => {
              return (
                <Box key={i}>
                  <Box
                    sx={{
                      position: "relative",
                      height: [179, 179, 300],
                      width: [287, 287, 480],
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
                      width: [287, 287, 480],
                    }}
                  >
                    {o.headline && (
                      <Heading
                        children={o.headline}
                        variant="styles.h3"
                        sx={{ mb: 12, mt: 36 }}
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
