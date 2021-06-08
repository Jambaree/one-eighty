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
          backgroundimage &&
          `url(${backgroundimage.url}) no-repeat fixed center`,
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

            px: 146,
          }}
        >
          {headline && (
            <Heading
              as="h1"
              variant="styles.h1"
              children={headline}
              sx={{ mt: 140, mb: 32, fontSize: "65px", lineHeight: "65px" }}
            />
          )}

          {text && (
            <Text
              as="p"
              variant="introduction"
              children={text}
              sx={{ mb: 200, fontSize: "18px", lineHeight: "30px" }}
            />
          )}
        </Box>
      </Edges>
    </Box>
  )
}

export default Banner
