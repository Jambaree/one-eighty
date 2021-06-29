import React from "react"
import { Box, Text, Container, Divider } from "theme-ui"
import themeUi from "../../gatsby-plugin-theme-ui"

// import app components
import Edges from "../Edges"
import Textarea from "../Textarea"

const Quote = (props) => {
  const { text, backgroundcolor } = props

  return (
    <Container sx={{ bg: backgroundcolor, minHeight: "134px" }}>
      <Box
        sx={{
          minHeight: "134px",
          borderRight: (theme) => `4px solid ${theme.colors.red}`,
          borderLeft: (theme) => `4px solid ${theme.colors.red}`,
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          flexWrap: "nowrap",
          my: "50px",
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
          sx={{
            color: `${backgroundcolor === "blue180" ? "white" : "blue180"}`,
            h2: {
              color: `${backgroundcolor === "blue180" ? "white" : "blue180"}`,
            },
            h3: {
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
