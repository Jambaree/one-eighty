import React from "react"
import { Heading, Box } from "theme-ui"

// import app components
import Edges from "../Edges"
import Textarea from "../Textarea"

const Introduction = (props) => {
  const { headline, text } = props

  return (
    <Edges size="md" style={{ aspectRatio:"33%/66%" }} >
      <Box sx={{ display:"flex",flexDirection:["column", "row"], mb:48 }}>
        {headline && <Heading sx={{ width: ["unset", 240, 150], mr: ["unset", 100], mb:24 }}>{ headline }</Heading>}
        {text && <Textarea content={ text } />}
      </Box>
    </Edges>
  )
}

export default Introduction