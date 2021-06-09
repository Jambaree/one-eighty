import React from "react"
import { Box, Heading, Text } from "theme-ui"

// import app components
import Edges from "../Edges"
import BackgroundImage from "../BackgroundImage"

const Banner = (props) => {
  const { backgroundimage, headline, text } = props

  return (
    <Box
      sx={{
        background:
          backgroundimage && `url(${backgroundimage.url}) no-repeat center`,
      }}
    >
      <Edges size="md">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",

            px: [0, 146, 146],
          }}
        >
          {headline && (
            <Heading
              as="h1"
              variant="styles.h1"
              children={headline}
              sx={{
                mt: [118, 138, 138],
                mb: 32,
                fontSize: "65px",
                lineHeight: ["36px", "65px", "65px"],
              }}
            />
          )}

          {text && (
            <Text
              as="p"
              variant="introduction"
              children={text}
              sx={{
                mb: [240, 205, 205],
                fontSize: "18px",
                lineHeight: ["25px", "30px", "30px"],
                px: [24, 0, 0],
              }}
            />
          )}
        </Box>
      </Edges>
    </Box>
  )
}

export default Banner
