import React from "react"
import { Box, Flex } from "theme-ui"

// import app components
import Edges from "../Edges"
import TextArea from "../TextArea"
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
                    width:
                      columns === 1
                        ? "100%"
                        : columns === 2
                        ? ["100%", "50%", "50%"]
                        : columns === 3
                        ? ["100%", "30%", "30%"]
                        : ["100%", "50%", "24%"],
                    pb: 55,
                    mr: columns === 3 ? "30px" : columns === 4 ? "1%" : 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Box sx={{ p: { lineHeight: 1.6 } }}>
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
