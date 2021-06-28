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
    text,
  } = props

  const imageData = image?.localFile && getImage(image.localFile)

  return (
    <Box
      sx={{
        backgroundColor: 'blue180',
      }}
    >
      <Edges size="lg">
        <Box
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: alignment === "left" ? "row" : "row-reverse",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            py: 100,
          }}
        >
          <Box
            sx={{
              width: ["100%", "100%", "calc(50% - 25px)"],
              overflow: "hidden",
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
                      borderRadius: "8px",
                      transform: "translateZ(0)",
                    }}
                  />
                )}
          </Box>

          <Box
            sx={{
              width: ["100%", null, "calc(50% - 25px)"],
              height: "100%",
              my: "auto",
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
                sx={{ pb: 36 }}
              />
            )}

            {text && (
              <Box
                sx={{
                  pb: 36,

                  "p, a": {
                    fontFamily: "body",
                    fontSize: 5,
                    lineHeight: "30px",
                    fontWeight: "light",
                    letterSpacing: "-0.27px",
                    color: "black75",
                    "@media (max-width: 767px)": {
                      lineHeight: "25px",
                      letterSpacing: "-0.24px",
                      fontSize: 4,
                    },
                  },
                }}
              >
                <Textarea content={text} />
              </Box>
            )}
          </Box>
        </Box>
      </Edges>
    </Box>
  )
}

export default TextImage
