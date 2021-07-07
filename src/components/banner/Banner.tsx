import React from "react"
import { Box } from "theme-ui"

// import app components
import Stacked from "../../icons/one-eighty-stacked1.png"
import BackgroundImage from "../BackgroundImage"

const Banner = (props) => {
  const { backgroundimage, gradient } = props

  const effect =
    gradient === "1"
      ? "linear-gradient(320.38deg, #8E0000 -31.59%, #122D4C 68%)"
      : gradient === "2"
      ? "linear-gradient(320.38deg, #8E0000 -31.59%, rgba(18, 45, 76, 0) 68%)"
      : !gradient && false

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
          height: 260,
          "&:before": {
            content: "''",
            position: "absolute",
            zIndex: 2,
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: effect,
            mixBlendMode: "color",
            transform: "matrix(-1, 0, 0, 1, 0, 0)",
          },
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
          bottom: 0,
          left: 0,
          p: "unset",
          img: {
            width: "100%",
            maxHeight: "100%",
            objectFit: "contain",
            zIndex: 1,
          },
        }}
      >
        <img src={Stacked} alt="One Eighty Logo" />
      </Box>
    </Box>
  )
}

export default Banner
