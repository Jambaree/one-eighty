import React from "react"

// import app components
import Edges from "./Edges"
import Textarea from "./Textarea"

const Text = (props) => {
  const { text } = props

  return (
    <Edges size="sm">
      <Textarea content={text} />
    </Edges>
  )
}

export default Text
