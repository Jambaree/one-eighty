import React from "react"
import { Box, Heading, Text, IconButton } from "theme-ui"
import Parser from "html-react-parser"

import { GatsbyImage, getImage } from "gatsby-plugin-image"

// import app components
import Edges from "../Edges"
import Button from "../Button"
import Textarea from "../Textarea"

const TextImage = (props) => {
  const { image, alignment, headline } = props

  const imageData = image?.localFile && getImage(image.localFile)

  return (
    <Box sx={{ bg: "blue180" }}>
      <Box
        sx={{
          height: [800, 800, 480],
          position: "relative",
          display: "flex",
          flexDirection: [
            alignment === "left" ? "column" : "column-reverse",
            alignment === "left" ? "column" : "column-reverse",
            alignment === "left" ? "row" : "row-reverse",
          ],
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            width: ["100%", "100%", "51%"],
            overflow: "hidden",
            height: 480,
            clipPath: [
              "unset",
              "unset",
              "polygon(0 100%, 100% 100%, 100% 0%, 0% 0%, 0% 75%, 12% 75%, 23% 75%, 23% 80%, 12% 80%, 12% 75%, 0% 75%)",
            ],
          }}
        >
          {image && imageData && (
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
            position: ["unset", "unset", "absolute"],
            left: ["unset", "unset", 0],
            width: ["100%", null, "55%"],
            height: 480,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
            pt: 36,
            backgroundColor: "blue180",
            clipPath: [
              "unset",
              "unset",
              "polygon(0 0%, 100% 0%, 100% 75%, 91% 75%, 91% 80%, 100% 80%, 100% 100%, 0% 100%)",
            ],
          }}
        >
          {headline && (
            <Heading
              children={Parser(headline)}
              variant="styles.h1"
              as="h1"
              sx={{ width: "70%", pb: 83, color: "white" }}
            />
          )}
        </Box>
      </Box>
    </Box>
  )
}

export default TextImage
