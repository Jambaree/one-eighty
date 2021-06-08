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
          height: 585,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* {image && <BackgroundImage image={image} />} */}

        {headline && (
          <Heading as="h1" variant="styles.h1" children={headline} sx={{}} />
        )}

        {text && <Text as="p" variant="introduction" children={text} />}
      </Box>
    </Edges>
  )
}

export default Banner
