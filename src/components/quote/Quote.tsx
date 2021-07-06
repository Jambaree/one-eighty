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
            top: "50%",
            transform: "translateY(-50%)",
            left: 0,
            width: "4px",
            height: "134px",
            bg: "red",
          },
          "&:after": {
            content: "''",
            position: "absolute",
            zIndex: 2,
            top: "50%",
            transform: "translateY(-50%)",
            right: 0,
            width: "4px",
            height: "134px",
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
            width: ["20px", "40px", "135px"],
            mx: ["10px", "25px"],
            borderBottom: "4px solid",
            transform: [null, "translateY(-3px)"],
            display: ["none", "block"],
          }}
        />
        <Box
          sx={{
            px: ["30px", 0],
            maxWidth: "708px",
            "div > *": {
              color: `${backgroundcolor === "blue180" ? "white" : "blue180"}`,
            },
            h2: {
              variant: "text.heading",
              fontWeight: "light",
              fontSize: 9,
              lineHeight: "60px",
            },
            h3: {
              variant: "text.heading",
              fontWeight: "light",
              fontSize: 7,
              lineHeight: "42px",
            },
          }}
        >
          <Textarea content={text} />
        </Box>
        <Divider
          color="red"
          sx={{
            width: ["20px", "40px", "135px"],
            mx: ["10px", "25px"],
            borderBottom: "4px solid",
            display: ["none", "block"],
            transform: [null, "translateY(-3px)"],
            "@media (min-width:1150px)": { mr: "112px" },
          }}
        />
      </Box>
    </Container>
  )
}

export default Quote
