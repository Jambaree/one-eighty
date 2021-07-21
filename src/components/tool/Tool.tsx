import React from "react"
import { Box, Heading, Flex } from "theme-ui"
import Parser from "html-react-parser"
import { GatsbyImage } from "jam-cms"

// import app components
import Textarea from "../Textarea"
import Edges from "../Edges"

const Tool = (props) => {
  const { headline, image, text } = props

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        my: 100,
      }}
    >
      <Box>
        <Box
          sx={{
            bg: "blue180",
            width: ["100%", "50%", "50%"],
            mb: 28,
            pl: ["unset", "17%", "15%"],
            textAlign: ["center", "left", "left"],
          }}
        >
          {headline && (
            <Heading
              children={Parser(headline)}
              variant="styles.root.h3"
              as="h3"
              sx={{ color: "white" }}
            />
          )}
        </Box>

        <Edges size="lg">
          <Flex
            sx={{
              height: "auto",
              flexDirection: "column",
            }}
          >
            <Flex
              sx={{
                flexDirection: ["column", "row", "row"],
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  maxWidth: ["100%", "20%", "20%"],
                  maxHeight: 80,
                  textAlign: ["center", "right", "right"],
                  mr: [0, 43, 43],
                  my: [12, 0, 0],

                  img: {
                    objectFit: "contain",
                    height: 55,
                    width: 80,
                  },
                }}
              >
                {image &&
                  (image?.svg ? (
                    Parser(image.svg)
                  ) : (
                    <GatsbyImage image={image} alt={image.altText || ""} />
                  ))}
              </Box>
              <Box
                sx={{
                  width: ["100%", "80%", "80%"],
                  textAlign: "left",
                  pr: [0, "20%", "20%"],
                  pl: [0, 24, 12],
                }}
              >
                {text && <Textarea content={text} />}
              </Box>
            </Flex>
          </Flex>
        </Edges>
      </Box>
    </Box>
  )
}

export default Tool
