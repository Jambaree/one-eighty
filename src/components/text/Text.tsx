import React from "react"
import { Box } from "theme-ui"

// import app components
import Edges from "../Edges"
import Textarea from "../Textarea"

const Text = (props) => {
  const { text } = props

  return (
    <Edges size="md">
      <Box
        variant="text.textComponent"
        py={[4, 5, 6]}
        pr={[0, "50px", "200px"]}
      >
        <Textarea content={text} />
      </Box>
    </Edges>
  )
}

export default Text
