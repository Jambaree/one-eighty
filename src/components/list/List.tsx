import React from "react"
import { Box } from "theme-ui"

// import app components
import Edges from "../Edges"
import BackgroundImage from "../BackgroundImage"
import Textarea from "../Textarea"

const List = (props) => {
  const { list } = props

  return (
    <Box
      sx={{
        bg: "almondLight",
        py: [90, 118, 118],
      }}
    >
      <Edges size="md">
        {list &&
          list.map((o, i) => {
            return (
              <Box
                key={i}
                sx={{
                  display: "flex",
                  flexDirection: ["column", "row", "row"],
                  justifyContent: ["center", "flex-start", "flex-start"],
                  alignItems: "center",
                  mb: 100,
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    height: 100,
                    width: 160,
                    mr: [0, 16, 16],
                    mb: [36, 0, 0],
                  }}
                >
                  {o.image && (
                    <BackgroundImage image={o.image} backgroundSize="contain" />
                  )}
                </Box>
                <Box
                  variant="text.introduction"
                  sx={{ lineHeight: "25px", letterSpacing: "-0.23px" }}
                >
                  {o.text && <Textarea content={o.text} />}
                </Box>
              </Box>
            )
          })}
      </Edges>
    </Box>
  )
}

export default List
