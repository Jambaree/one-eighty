"use client"
import React from "react"
import { Box, Heading } from "theme-ui"
import Parser from "html-react-parser"
import Image from "next/image"

// import app components
import theme from "../../theme"
import Edges from "../Edges"

const TextImage = (props) => {
  const { edit_image, headline } = props

  return (
    <Box sx={{ bg: "blue180" }}>
      <Edges size="lg">
        <Box
          sx={{
            height: "auto",
            maxHeight: 800,
            position: ["relative", "relative", "absolute"],
            overflow: "hidden",

            "@media (min-width:830px)": {
              width: "48%",
            },
            "@media (min-width:1000px)": {
              width: "46%",
            },
            "@media (min-width:1400px)": {
              width: "35%",
            },
            "@media (min-width:1900px)": {
              width: "26%",
            },
          }}
        >
          <Box
            sx={{
              position: "relative",
              height: 480,
              display: "flex",
              flexDirection: "column",
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
                  pr: [0, "8px", "50px"],
                  color: "white",
                }}
              />
            )}
          </Box>
        </Box>
      </Edges>
      <Box
        sx={{
          width: ["100%", "100%", "50%"],
          overflow: "hidden",
          height: [`calc(50vh - ${theme.headerHeight})`, 480, 480],
          maxHeight: 480,
          zIndex: 1,
          ml: "auto",
        }}
      >
        {edit_image && (
          <Image
            height={480}
            width={1200}
            src={edit_image?.url}
            alt={edit_image?.altText || ""}
            style={{
              maxWidth: "100%",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        )}
      </Box>
    </Box>
  )
}

export default TextImage
