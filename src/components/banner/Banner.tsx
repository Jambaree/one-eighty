import React from "react"
import { Box } from "theme-ui"
import Parser from "html-react-parser"

// import app components
import Stacked from "../../icons/one-eighty-stacked.svg"
import BackgroundImage from "../BackgroundImage"

const Banner = (props) => {
  const { backgroundimage, gradient, mt } = props

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
        mt: mt && 120,
      }}
    >
      <Box
        sx={{
          height: [180, 250, 250],

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
        {backgroundimage &&
          (backgroundimage.svg ? (
            Parser(backgroundimage?.svg)
          ) : (
            <BackgroundImage
              image={backgroundimage}
              alt={backgroundimage.altText}
            />
          ))}
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
