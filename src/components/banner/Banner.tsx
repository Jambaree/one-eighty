import React from "react"
import { Box, Heading, Text } from "theme-ui"

// import app components
import Edges from "../Edges"
import BackgroundImage from "../BackgroundImage"

const Banner = (props) => {
  const { image, headline, text } = props

  return (
    <Edges size="md">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          px: 115,
        }}
      >
        {/* {image && <BackgroundImage image={image} />} */}

        {headline && (
          <Heading
            as="h1"
            variant="styles.h1"
            children={headline}
            sx={{ mt: 160, mb: 30, fontSize: "65px", lineHeight: "65px" }}
          />
        )}

        {text && (
          <Text
            as="p"
            variant="introduction"
            children={text}
            sx={{ mb: 160, fontSize: "18px", lineHeight: "30px" }}
          />
        )}
      </Box>
    </Edges>
  )
}

export default Banner
