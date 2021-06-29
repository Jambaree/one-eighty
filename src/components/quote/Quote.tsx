import React from "react"
import { Box, Text, Container, Divider } from "theme-ui"
import themeUi from "../../gatsby-plugin-theme-ui"

// import app components
import Edges from "../Edges"
import Textarea from "../Textarea"

const Quote = (props) => {
  const { text } = props

  return (
    <Container sx={{ height: 150 }}>
      <Box
        sx={{
          height: ["auto", 100],
          borderRight: (theme) => `4px solid ${theme.colors.quoteRed}`,
          borderLeft: (theme) => `4px solid ${theme.colors.quoteRed}`,
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          flexWrap: "nowrap",
          my: "30px",
        }}
      >
        <Divider
          color="quoteRed"
          sx={{
            width: ["20px", "40px", "77px"],
            mx: ["10px", "30px"],
            textAlign: "end",
            height: "1px",
            transform: [null, "translateY(3px)"],
          }}
        />
        <Text children={text} variant="text.quoteText" />
        <Divider
          color="quoteRed"
          sx={{
            width: ["20px", "40px", "77px"],
            mx: ["10px", "30px"],
            "@media (min-width:1150px)": { mr: "189px" },
            transform: [null, "translateY(3px)"],
          }}
        />
      </Box>
    </Container>
  )
}

export default Quote
