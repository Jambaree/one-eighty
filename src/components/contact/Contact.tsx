import React from "react"
import { Box, Heading } from "theme-ui"
import Parser from "html-react-parser"

import { GatsbyImage, getImage } from "gatsby-plugin-image"

// import app components
import theme from "../../theme"
import BackgroundImage from "../BackgroundImage"

const Contact = (props) => {
  const { image, headline, address, phoneone, phonetwo, email } = props

  return (
    <Box sx={{ height: `calc(100vh - ${theme.headerHeight})` }}>
      {image && (
        <BackgroundImage
          image={image}
          alt={image?.altText || ""}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            position: "absolute",
            zIndex: 1,
          }}
        />
      )}
      <Box
        sx={{
          bg: "blue180",
          height: 480,
          width: "50%",
          position: "relative",
          zIndex: 2,
        }}
      >
        {headline && (
          <Heading
            children={Parser(headline)}
            variant="styles.root.h1"
            as="h1"
            sx={{
              width: "70%",
              pb: 83,
              pt: [70, 70, "unset"],
              pr: "12px",
              color: "white",
            }}
          />
        )}
      </Box>
    </Box>
  )
}

export default Contact
