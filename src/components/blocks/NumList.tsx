"use client"
import React from "react"
import { Box } from "theme-ui"

// import app components
import Edges from "../Edges"
import Textarea from "../Textarea"

const NumberedList = (props) => {
  const { text } = props

  return (
    <Edges size="lg">
      <Box
        variant="styles.root.h5"
        sx={{
          pt: 150,
          pb: 50,
          maxWidth: 700,

          li: {
            mb: 30,
            pl: "10px",
            color: "textGray",

            "::marker": {
              fontWeight: "boldest",
              color: "textGray",
            },
          },
        }}
      >
        <Textarea content={text} />
      </Box>
    </Edges>
  )
}

export default NumberedList
