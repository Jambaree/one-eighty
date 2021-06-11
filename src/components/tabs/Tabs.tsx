import React, { useState } from "react"
import { Box, Heading } from "theme-ui"

// import app components
import Edges from "../Edges"
import Textarea from "../Textarea"

const Tabs = (props) => {
  const { tabs } = props
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <Box
      sx={{
        bg: "almondLight",
        p: "120px 138px",
      }}
    >
      <Edges size="md">
        {tabs &&
          tabs.map((o, i) => {
            return (
              <Box key={i} sx={{ display: "flex" }}>
                {o.heading && (
                  <Box
                    onClick={() => {
                      setActiveIndex(i === activeIndex ? activeIndex : i)
                    }}
                    sx={{
                      width: "50%",
                    }}
                  >
                    <Heading
                      variant="text.introduction"
                      children={o.heading}
                      sx={{
                        cursor: "pointer",
                        width: "fit-content",
                        color: activeIndex === i ? "coral" : "charcoal",
                        fontWeight: activeIndex === i ? "400" : "300",
                        "&:hover": {
                          color: "coral",
                        },
                        mb: "20px",
                      }}
                    />
                  </Box>
                )}
                {o.text && (
                  <Box
                    variant="text.introduction"
                    sx={{
                      display: activeIndex === i ? "block" : "none",
                      width: "50%",
                    }}
                  >
                    <Textarea content={o.text} />
                  </Box>
                )}
              </Box>
            )
          })}
      </Edges>
    </Box>
  )
}

export default Tabs
