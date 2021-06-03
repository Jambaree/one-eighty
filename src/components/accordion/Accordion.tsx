import React, { useState } from "react"
import { Box, Heading, IconButton, Grid } from "theme-ui"
import { ChevronUp } from "mdi-material-ui"

// import app components
import Edges from "../Edges"
import Textarea from "../Textarea"

const Accordion = (props) => {
  const {
    locations,
    locations: { mainheading, address },
  } = props
  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <Box sx={{ bg: "almondLight", p: "100px 280px 160px" }}>
      <Edges size="md">
        <Box>
          {locations &&
            locations.map((o, i) => {
              return (
                <Box
                  key={i}
                  onClick={() => {
                    setActiveIndex(i === activeIndex ? null : i)
                  }}
                  sx={{
                    border: "1px solid",
                    borderColor: activeIndex === i ? "coral" : "transparent",
                    borderRadius: "8px",
                  }}
                >
                  {o.mainheading && (
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        cursor: "pointer",
                        borderRadius: activeIndex === i ? "8px 8px 0 0" : "8px",
                        bg: "white",
                        p: [12, 16, "26px 30px"],
                      }}
                    >
                      <Heading
                        variant="styles.accheading"
                        children={o.mainheading}
                      />
                      <IconButton
                        sx={{
                          border: "1px solid",
                          borderColor: "black25",
                          borderRadius: "50%",
                        }}
                      >
                        <ChevronUp
                          style={{
                            transform:
                              activeIndex === i
                                ? "rotate(0)"
                                : "rotate(180deg)",
                          }}
                        />
                      </IconButton>
                    </Box>
                  )}
                  <Grid
                    key={i}
                    columns={[1, 2, 2]}
                    sx={{
                      display: activeIndex === i ? "block" : "none",
                      bg: "white",
                      borderRadius: "0 0 8px 8px",
                      p: "26px 30px",
                    }}
                  >
                    {o.address &&
                      o.address.map((o, i) => {
                        return (
                          <Box sx={{ width: "48%" }}>
                            <Heading children={o.addressheading} />
                            <Textarea content={o.addresscontent} />
                          </Box>
                        )
                      })}
                  </Grid>
                </Box>
              )
            })}
        </Box>
      </Edges>
    </Box>
  )
}

export default Accordion
