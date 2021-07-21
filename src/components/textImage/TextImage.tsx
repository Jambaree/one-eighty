import React from "react"
import { Box, Heading } from "theme-ui"
import Parser from "html-react-parser"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// import app components
import theme from "../../theme"

const TextImage = (props) => {
  const { image, headline } = props

  const imageData = image?.localFile && getImage(image.localFile)

  return (
    <Box sx={{ bg: "blue180" }}>
      <Box
        sx={{
          height: ["auto"],
          maxHeight: 800,
          position: "relative",
          display: "flex",
          flexDirection: ["column-reverse", "column-reverse", "row-reverse"],
          alignItems: "center",
          justifyContent: "space-between",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            width: ["100%", "100%", "calc(40% + 90px)"],
            overflow: "hidden",
            height: [`calc(50vh - ${theme.headerHeight})`, 480, 480],
            maxHeight: 480,
            zIndex: 1,
          }}
        >
          {image && imageData && (
            <GatsbyImage
              image={imageData}
              alt={image?.altText || ""}
              style={{
                maxWidth: "100%",
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          )}
        </Box>
        <Box
          sx={{
            position: ["unset", "unset", "absolute"],
            left: ["unset", "unset", 0],
            right: "unset",
            width: ["100%", null, "60%"],
            height: "100%",
            px: "5.5%",
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            justifyContent: "flex-end",
            backgroundColor: "transparent",
            zIndex: 2,
          }}
        >
          {headline && (
            <Heading
              children={Parser(headline)}
              variant="styles.root.h1"
              as="h1"
              sx={{
                pb: 83,
                pt: [70, 70, "unset"],
                pr: [0, "12px", "46px"],
                color: "white",
              }}
            />
          )}
        </Box>
      </Box>
    </Box>
  )
}

export default TextImage
