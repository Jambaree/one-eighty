import React from "react"
import { Box } from "theme-ui"
import Parser from "html-react-parser"

// import app components
import theme from "../../theme"
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
            height: 50,
            width: "100%",
            clipPath: ["unset", "unset", "unset"],
          }}
        />
        <Stacked style={{ marginTop: "-20px" }} />
      </Box>
    </Box>
  )
}

export default Banner
