import React from "react"
import { Box, Text, Container, Divider } from "theme-ui"
import themeUi from "../../gatsby-plugin-theme-ui"

// import app components
import Edges from "../Edges"
import Textarea from "../Textarea"

const Quote = (props) => {
  const { text, backgroundcolor } = props

  return (
    <Container
      sx={{
        position: "relative",
        my: "50px",
        py: "50px",
        bg: backgroundcolor,
      }}
    >
      <Box
        sx={{
          "&:before": {
            content: "''",
            position: "absolute",
            zIndex: 2,
            top: "0",
            left: 0,
            width: "4px",
            height: "100%",
            bg: "red",
          },
          "&:after": {
            content: "''",
            position: "absolute",
            zIndex: 2,
            top: "0",
            right: 0,
            width: "4px",
            height: "100%",
            bg: "red",
          },
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          flexWrap: "nowrap",
        }}
      >
        <Divider
          color="red"
          sx={{
            width: ["20px", "40px", "77px"],
            mx: ["10px", "25px"],
            transform: [null, "translateY(-3px)"],
          }}
        />
        <Box
          className="quoteText"
          sx={{
            maxWidth: "708px",
            "div > *": {
              color: `${backgroundcolor === "blue180" ? "white" : "blue180"}`,
            },
          }}
        >
          <Textarea content={text} />
        </Box>
        <Divider
          color="red"
          sx={{
            width: ["20px", "40px", "77px"],
            mx: ["10px", "25px"],
            transform: [null, "translateY(-3px)"],

            "@media (min-width:1150px)": { mr: "112px" },
          }}
        />
      </Box>
    </Container>
  )
}

export default Quote
