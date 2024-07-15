"use client"
import React from "react"
import Parser from "html-react-parser"

const Textarea = (props) => {
  const { content, ...rest } = props

  return (
    <div {...rest} className="textarea-container">
      <div children={Parser(content)} />
    </div>
  )
}

export default Textarea
