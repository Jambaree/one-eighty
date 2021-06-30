import React from "react"
import { Box } from "theme-ui"

// import app components
import Stacked from "../../icons/one-eighty-stacked.svg"
import BackgroundImage from "../BackgroundImage"

const Banner = (props) => {
  const { backgroundimage } = props

  return (
    <Box sx={{ position: "relative", height: 300, width: "100%" }}>
      {backgroundimage && (
        <BackgroundImage
          image={backgroundimage}
          alt={backgroundimage.altText}
        />
      )}
      <Box
        sx={{
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
          display: "flex",
          transform: [
            "translateY(-100px)",
            "translateY(-70px)",
            "translateY(-28px)",
          ],
          width: "unset",
          height: "100%",
          p: "unset",
          svg: {
            height: "100%",
            maxWidth: ["50%", "50%", "100%"],
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
