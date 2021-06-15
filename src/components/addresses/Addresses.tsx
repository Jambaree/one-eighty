import React from "react"
import { Box, Flex } from "theme-ui"

// import app components
import Edges from "../Edges"
import TextArea from "../Textarea"
import theme from "../../theme"

const Addresses = (props) => {
  const { columns, backgroundcolor, address } = props

  return (
    <Box sx={{ bg: backgroundcolor, py: 80 }}>
      <Edges size="md">
        <Flex
          sx={{
            flexWrap: "wrap",
          }}
        >
          {address &&
            address.map((o, i) => {
              return (
                <Box
                  key={i}
                  sx={{
                    width: "100%",
                    "@media (min-width: 600px)": {
                      width: columns === 1 ? "100%" : "50%",
                    },
                    "@media (min-width: 1100px)": {
                      width:
                        columns === 1
                          ? "100%"
                          : columns === 2
                          ? "50%"
                          : columns === 3
                          ? "33.334%"
                          : "25%",
                    },
                    pb: 55,
                    pr: 24,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Box sx={{ width: "100%", p: { lineHeight: 1.6 } }}>
                    <TextArea
                      content={o.contactinfo}
                      style={{
                        fontFamily: theme.fonts.body,
                        fontSize: theme.fontSizes[3],
                        fontWeight: theme.fontWeights.light,
                        lineHeight: "25px",
                        letterSpacing: "-0.23px",
                        marginTop: "unset",
                      }}
                    />
                  </Box>
                </Box>
              )
            })}
        </Flex>
      </Edges>
    </Box>
  )
}

export default Addresses
