import React from "react"
import { Box, Text, Container, Divider } from "theme-ui"

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
          borderRight: "4px solid #E0092D",
          borderLeft: `4px solid #E0092D`,
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          flexWrap: "nowrap",
        }}
      >
        <Divider
          color="quoteRed"
          sx={{
            width: ["20px", "40px", "77px"],
            mx: ["10px", "30px"],
            textAlign: "end",
          }}
        />
        <Text children={text} variant="text.quoteText" />
        <Divider
          color="quoteRed"
          sx={{
            width: ["20px", "40px", "77px"],
            mx: ["10px", "30px"],
            "@media (min-width:1150px)": { mr: "189px" },
          }}
        />
      </Box>
    </Container>
  )
}

export default Quote
