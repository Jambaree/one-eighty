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
          height: 100,
          borderRight: "2px solid red",
          borderLeft: "2px solid red",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Divider color="red" sx={{ width: "100px", py: "30px" }} />
        <Text children={text} sx={{ pr: [0, "50px", "100px"] }} />
        <Divider color="red" sx={{ width: "100px", py: "30px" }} />
      </Box>
    </Container>
  )
}

export default Quote
