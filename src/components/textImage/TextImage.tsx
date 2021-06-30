import React from "react"
import { Box, Heading } from "theme-ui"
import Parser from "html-react-parser"

import { GatsbyImage, getImage } from "gatsby-plugin-image"

// import app components

const TextImage = (props) => {
  const { image, headline } = props

  const imageData = image?.localFile && getImage(image.localFile)

  return (
    <Box sx={{ bg: "blue180" }}>
      <Box
        sx={{
          height: ["auto", "auto", 480],
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
            height: [480, "auto", "auto"],
            maxHeight: 480,
            zIndex: 1,
            clipPath: [
              "unset",
              "unset",
              "polygon(0 0, 100% 0%, 100% 100%, 0% 100%, 0% calc(100% - 24px), 180px calc(100% - 24px), 180px calc(100% - 48px), 90px calc(100% - 48px), 90px calc(100% - 24px), 0% calc(100% - 24px), 0 0)",
            ],
          }}
        >
          {image && imageData && (
            <GatsbyImage
              image={imageData}
              alt={image?.altText || ""}
              style={{
                maxWidth: "100%",
                width: "100%",
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
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
            backgroundColor: "blue180",
            zIndex: 2,
            clipPath: [
              "unset",
              "unset",
              "polygon(0 0%, 100% 0%, 100% calc(100% - 48px), calc(100% - 90px) calc(100% - 48px), calc(100% - 90px) calc(100% - 24px), 100% calc(100% - 24px), 100% 100%, 0% 100%);",
            ],
          }}
        >
          {headline && (
            <Heading
              children={Parser(headline)}
              variant="styles.h1"
              as="h1"
              sx={{
                width: "70%",
                pb: 83,
                pt: [70, 70, "unset"],
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
