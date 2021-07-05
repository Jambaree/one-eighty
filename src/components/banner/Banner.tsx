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
          height: [180, 240, 300],
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
          top: 0,
          bg: "white",
          height: 48,
          width: "100%",
          clipPath: [
            "polygon(0 0, 60% 0, 60% calc(100% - 24px), 100% calc(100% - 24px), 100% 100%, 0 100%, 0 0)",
            "polygon(0 0, 60% 0, 60% calc(100% - 24px), 100% calc(100% - 24px), 100% 100%, 0 100%, 0 0)",
            "polygon(0 0, calc(100% - 480px) 0, calc(100% - 480px) calc(100% - 24px), 100% calc(100% - 24px), 100% 100%, 0 100%, 0 0)",
          ],
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 38,
          bottom: 0,
          left: ["-10px", "-80px", 0],
          width: "100%",
          maxHeight: "100%",
          p: "unset",
          svg: {
            height: "100%",
            maxWidth: "100%",
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
