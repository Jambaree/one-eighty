import React from "react"
import { Box, Heading, Text, IconButton } from "theme-ui"
import Parser from "html-react-parser"

import { GatsbyImage, getImage } from "gatsby-plugin-image"

// import app components
import Edges from "../Edges"
import Button from "../Button"
import Textarea from "../Textarea"

const TextImage = (props) => {
  const { image, alignment = "right", headline } = props

  const imageData = image?.localFile && getImage(image.localFile)

  return (
    <Box sx={{ bg: "blue180" }}>
      <Box
        sx={{
          height: ["fit-content", "fit-content", 480],
          position: "relative",
          display: "flex",
          flexDirection: [
            alignment === "left" ? "column" : "column-reverse",
            alignment === "left" ? "column" : "column-reverse",
            alignment === "left" ? "row" : "row-reverse",
          ],
          alignItems: "center",
          justifyContent: "space-between",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            width: ["100%", "100%", "60%"],
            overflow: "hidden",
            height: "auto",
            maxHeight: 480,
            zIndex: 1,
            clipPath:
              alignment === "right"
                ? [
                    "unset",
                    "unset",
                    "polygon(0 100%, 100% 100%, 100% 0%, 0% 0%, 0% 92%, 11% 92%, 46% 92%, 46% 96%, 25% 96%, 25% 75%, 0% 75%)",
                  ]
                : [
                    "unset",
                    "unset",
                    "polygon(0 0%, 100% 0%, 100% 92%, 75% 92%, 75% 96%, 88% 96%, 88% 92%, 100% 92%, 100% 100%, 0% 100%)",
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
            left: alignment === "right" ? ["unset", "unset", 0] : "unset",
            right: alignment === "left" ? ["unset", "unset", 0] : "unset",
            width: ["100%", null, "55%"],
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
            pt: 36,
            backgroundColor: "blue180",
            zIndex: 2,
            clipPath:
              alignment === "right"
                ? [
                    "unset",
                    "unset",
                    "polygon(0 0%, 100% 0%, 100% 92%, 78% 92%, 78% 96%, 100% 96%, 100% 100%, 0% 100%)",
                  ]
                : [
                    "unset",
                    "unset",
                    "polygon(0 100%, 100% 100%, 100% 0%, 0% 0%, 0% 88%, 15% 88%, 15% 92%, 12% 92%, 0% 92%)",
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
