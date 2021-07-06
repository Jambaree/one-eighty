import React from "react"
import { Box } from "theme-ui"

// import app components
import Stacked from "../../icons/one-eighty-stacked.svg"
import BackgroundImage from "../BackgroundImage"

const Banner = (props) => {
  const { backgroundimage } = props

  return (
    <Box
      sx={{
        position: "relative",
        height: "auto",
        maxWidth: "100%",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          height: [180, 250, 250],
        }}
      >
        {backgroundimage && (
          <BackgroundImage
            image={backgroundimage}
            alt={backgroundimage.altText}
          />
        )}
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: ["-55px", "-20px", "-20px"],
          bottom: 0,
          left: 0,
          maxWidth: ["75%", "70%", "60%"],
          p: "unset",
          svg: {
            width: "100%",
            objectFit: "contain",
            zIndex: 1,
          },
        }}
      >
        <Stacked />
      </Box>
    </Box>
  )
}

export default Banner
