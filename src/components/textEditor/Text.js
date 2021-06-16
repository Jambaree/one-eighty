import React from "react"
import Textarea from "../Textarea"

const Text = (props) => {
  const { text } = props

  return <Textarea content={text} />
}

export default Text
