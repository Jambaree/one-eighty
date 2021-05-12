import React from "react"
import { Box, Themed } from "theme-ui"

// import app components
import BackgroundImage from "../BackgroundImage"

const Banner = (props) => {
  const { image, headline } = props

  return (
    <Box sx={{ position: "relative", height: 320 }}>
      {image && <BackgroundImage image={image} />}

      {headline && (
        <Themed.h1
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
    </Box>
  )
}

export default Banner
