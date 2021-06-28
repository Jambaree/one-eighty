import React from "react"
import { Box, Heading, Text, IconButton } from "theme-ui"
import Parser from "html-react-parser"

import { GatsbyImage, getImage } from "gatsby-plugin-image"

// import app components
import Edges from "../Edges"
import Button from "../Button"
import Textarea from "../Textarea"

const TextImage = (props) => {
  const {
    image,
    alignment,
    headline,
  } = props

  const imageData = image?.localFile && getImage(image.localFile)

  return (
    <Box
      sx={{
        backgroundColor: 'blue180',
      }}
    >
      <Box
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: alignment === "left" ? "row" : "row-reverse",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              width: ["100%", "100%", "50%"],
              overflow: "hidden",
              height: 480,
            }}
          >
            {image
              && imageData && (
                  <GatsbyImage
                    image={imageData}
                    alt={image?.altText || ""}
                    style={{
                      maxWidth: "100%",
                      objectFit: "contain",
                    }}
                  />
                )}
          </Box>

          <Box
            sx={{
              width: ["100%", null, "50%"],
              height: "100%",
              mt: "auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              pt: 36,
            }}
          >
            {headline && (
              <Heading
                children={Parser(headline)}
                variant='styles.h1'
                as='h1'
                sx={{ pb: 83, color: 'white' }}
              />
            )}
          </Box>
        </Box>
    </Box>
  )
}

export default TextImage
