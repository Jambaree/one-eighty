import React from "react"
import { Box } from "theme-ui"

// import app components
import Edges from "../Edges"
import Textarea from "../Textarea"

const Text = (props) => {
  const { text } = props

  return (
    <Edges size="cmd">
      <Box
        variant="text.textComponent"
        py={[4, 5, 6]}
        pr={[0, "100px", "300px"]}
      >
        <Textarea content={text} />
      </Box>
    </Edges>
  )
}

export default Text
