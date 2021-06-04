import React, { useState } from "react"
import { Box, Heading, IconButton, Flex, Text, Link } from "theme-ui"
import { ChevronUp } from "mdi-material-ui"

// import app components
import Edges from "../Edges"

const Accordion = (props) => {
  const {
    locations,
    locations: { mainheading, address },
  } = props
  const [activeIndex, setActiveIndex] = useState(null)

  console.log(props)

  return (
    <Box
      sx={{
        bg: "almondLight",
        p: ["100px 12px 160px", "100px 100px 160px", "100px 10% 160px"],
      }}
    >
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
                    borderColor: activeIndex === i ? "coral" : "black25",
                    borderRadius: "8px",
                    my: "12px",
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
                        p:
                          activeIndex === i
                            ? ["18px 18px 64px 18px", "26px 30px", "26px 30px"]
                            : ["18px 12px", "26px 30px", "26px 30px"],
                      }}
                    >
                      <Heading
                        variant="styles.accheading"
                        children={o.mainheading}
                      />
                      <IconButton
                        sx={{
                          border: "1px solid",
                          borderColor: activeIndex === i ? "coral" : "black25",
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
                  <Flex
                    key={i}
                    sx={{
                      flexWrap: "wrap",
                      bg: "white",
                      borderRadius: "0 0 8px 8px",
                      p:
                        activeIndex === i
                          ? ["18px 18px 64px 18px", "26px 30px", "26px 30px"]
                          : "0",
                    }}
                  >
                    {o.address &&
                      o.address.map((o, j) => {
                        return (
                          <Box
                            key={j}
                            sx={{
                              display: activeIndex === i ? "block" : "none",
                              width: ["100%", "50%", "50%"],
                              pb: 55,
                            }}
                          >
                            <Heading
                              children={o.addressheading}
                              variant="styles.addheading"
                              sx={{ mb: "10px" }}
                            />
                            {o.addresslineone && (
                              <Text
                                children={o.addresslineone}
                                variant="text.paragraph"
                                sx={{
                                  display: "block",
                                  lineHeight: "25px",
                                  fontSize: 3,
                                }}
                              />
                            )}
                            {o.addresslinetwo && (
                              <Text
                                children={o.addresslinetwo}
                                variant="text.paragraph"
                                sx={{
                                  display: "block",
                                  lineHeight: "25px",
                                  fontSize: 3,
                                }}
                              />
                            )}
                            {o.phoneone && (
                              <Box sx={{ display: "block" }}>
                                <Link
                                  variant="links.hyperlink"
                                  href={`tel:${o.phoneone}`}
                                  onClick={(event) => {
                                    event.stopPropagation()
                                  }}
                                >
                                  {o.phoneone}
                                </Link>
                              </Box>
                            )}
                            {o.phonetwo && (
                              <Box sx={{ display: "block" }}>
                                <Link
                                  variant="links.hyperlink"
                                  href={`tel:${o.phonetwo}`}
                                  onClick={(event) => {
                                    event.stopPropagation()
                                  }}
                                >
                                  {o.phonetwo}
                                </Link>
                              </Box>
                            )}
                            {o.email && (
                              <Box sx={{ display: "block" }}>
                                <Link
                                  variant="links.hyperlink"
                                  href={`mailto:${o.email}`}
                                  onClick={(event) => {
                                    event.stopPropagation()
                                  }}
                                >
                                  {o.email}
                                </Link>
                              </Box>
                            )}
                          </Box>
                        )
                      })}
                  </Flex>
                </Box>
              )
            })}
        </Box>
      </Edges>
    </Box>
  )
}

export default Accordion
