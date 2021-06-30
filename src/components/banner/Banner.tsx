import React from "react"
import { Box } from "theme-ui"

// import app components
import Stacked from "../../icons/one-eighty-stacked.svg"

const Banner = (props) => {
  const { backgroundimage } = props

  return (
    <Box>
      <Box
        sx={{
          position: "relative",
          background:
            backgroundimage &&
            `url(${backgroundimage.sourceUrl}) no-repeat center`,
          backgroundSize: "cover",
        }}
      >
        <Box
          sx={{
            bg: "white",
            height: 48,
            width: "100%",
            clipPath: [
              "unset",
              "unset",
              "polygon(0 0, calc(100% - 480px) 0, calc(100% - 480px) calc(100% - 24px), 100% calc(100% - 24px), 100% 100%, 0 100%, 0 0)",
            ],
          }}
        />
        <Box
          sx={{
            mt: ["-6px", "-16px", "-20px"],
            width: "unset",
            height: "100%",
            p: "unset",
            svg: {
              height: "100%",
              maxWidth: ["50%", "75%", "100%"],
            },
          }}
        >
          <Stacked />
        </Box>
      </Box>
    </Box>
  )
}

export default Banner
