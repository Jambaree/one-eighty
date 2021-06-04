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
                  <Flex
                    key={i}
                    sx={{
                      bg: "white",
                      borderRadius: "0 0 8px 8px",
                      p: activeIndex === i ? "26px 30px" : "0",
                    }}
                  >
                    {o.address &&
                      o.address.map((o, j) => {
                        return (
                          <Box
                            key={j}
                            sx={{
                              display: activeIndex === i ? "block" : "none",
                              width: "50%",
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
                              <Text
                                children={o.phoneone}
                                variant="text.paragraph"
                                sx={{
                                  display: "block",
                                  lineHeight: "25px",
                                  fontSize: 3,
                                }}
                              />
                            )}
                            {o.phonetwo && (
                              <Text
                                children={o.phonetwo}
                                variant="text.paragraph"
                                sx={{ lineHeight: "25px", fontSize: 3 }}
                              />
                            )}
                            {o.email && (
                              <Link
                                variant="links.hyperlink"
                                sx={{ display: "block" }}
                                href={`mailto:${o.email}`}
                              >
                                {o.email}
                              </Link>
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
