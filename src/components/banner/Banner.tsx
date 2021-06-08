import React from "react"
import { Box, Heading, Text } from "theme-ui"

// import app components
import BackgroundImage from "../BackgroundImage"

const Banner = (props) => {
  const { image, headline, text } = props

  return (
    <Box sx={{ position: "relative", height: 320 }}>
      {image && <BackgroundImage image={image} />}

      {headline && (
        <Heading
          as="h1"
          children={headline}
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            color: "#fff",
          }}
        />
      )}

      {text && <Text variant="introduction" children={text} />}
    </Box>
  )
}

export default Banner
