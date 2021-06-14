import React, { useState } from "react"
import { Box, Grid, Flex, Heading } from "theme-ui"

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
        p: ["60px 0 120px 0", "120px 64px", "120px 138px"],
      }}
    >
      <Edges size="md">
        <Flex sx={{ flexDirection: ["column", "row", "row"] }}>
          <Flex
            sx={{
              flexDirection: "column",
              width: ["100%", "40%", "40%"],
              pb: ["24px", 0, 0],
              pr: "24px",
            }}
          >
            {tabs &&
              tabs.map((o, i) => {
                return (
                  <Box key={i}>
                    {o.heading && (
                      <Box
                        onClick={() => {
                          setActiveIndex(i === activeIndex ? activeIndex : i)
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
                  </Box>
                )
              })}
          </Flex>
          {tabs[activeIndex]?.text && (
            <Box
              variant="text.introduction"
              sx={{
                width: ["100%", "100%", "60%"],
              }}
            >
              <Heading
                as="h3"
                children={tabs[activeIndex].heading}
                variant="styles.h3"
                sx={{
                  fontSize: "22px",
                  letterSpacing: "-0.33px",
                  lineHeight: "32px",
                  mb: 24,
                  mt: [40, "-5px", "-5px"],
                }}
              />
              <Textarea content={tabs[activeIndex].text} />
            </Box>
          )}
        </Flex>
      </Edges>
    </Box>
  )
}

export default Tabs
