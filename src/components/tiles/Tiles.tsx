import React, { useState } from "react"
import { Box, Grid, Heading, Flex } from "theme-ui"
import Parser from "html-react-parser"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// import app components
import Textarea from "../Textarea"
import Button from "../Button"
import Edges from "../Edges"
import theme from "../../theme"

const Tiles = (props) => {
  const { headline, items } = props
  const [option, setOption] = useState(0)

  const handleClick = (e) => {
    e.preventDefault()
    if (e.target.name !== option) {
      setOption(e.target.name)
    }
  }

  return (
    <>
      <Box
        sx={{
          pt: [100, 100, 100],
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Edges size="lg">
            <Box
              sx={{
                textAlign: "left",
              }}
            >
              {headline && (
                <Heading
                  children={Parser(headline)}
                  variant="styles.h1"
                  as="h1"
                />
              )}
            </Box>
          </Edges>

          {items &&
            items.map((o, i) => {
              let component

              switch (o.style) {
                case "grid":
                  component = (
                    <Grid
                      gap={"1px"}
                      columns={[1, 2, 2]}
                      sx={{
                        height: ["auto", 708, 708],
                        bg: ["white", "#E3E3E3", "#E3E3E3"],
                      }}
                    >
                      {o.cards &&
                        o.cards.map((o, i) => {
                          const image =
                            o?.image?.localFile && getImage(o.image.localFile)

                          return (
                            <Box
                              key={i}
                              sx={{
                                bg: "white",
                                p: "48px 24px",
                                height: ["auto", 354, 354],
                                display: "flex",
                                overflow: "scroll",
                                borderBottom: [
                                  "1px solid #E3E3E3",
                                  "unset",
                                  "unset",
                                ],
                              }}
                            >
                              <Box
                                sx={{
                                  width: "100%",
                                  display: "flex",
                                  flexDirection: "column",
                                  flexWrap: "nowrap",
                                  justifyContent: [
                                    "flex-start",
                                    i > 1 ? "flex-start" : "flex-end",
                                    i > 1 ? "flex-start" : "flex-end",
                                  ],
                                  alignItems:
                                    i === 0 || i === 2
                                      ? ["flex-start", "flex-start", "flex-end"]
                                      : "flex-start",
                                }}
                              >
                                <Box
                                  sx={{
                                    position: "relative",
                                    maxWidth: ["100%", 432, 432],
                                    width: "100%",
                                    textAlign: "left",
                                    img: {
                                      objectFit: "contain",
                                      height: 40,
                                      mb: "12px",
                                    },
                                  }}
                                >
                                  {o.image && (
                                    <GatsbyImage
                                      image={image}
                                      alt={o.image.altText}
                                    />
                                  )}
                                </Box>
                                <Box
                                  sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    textAlign: "left",
                                    width: "100%",
                                    maxWidth: ["100%", "100%", 432],
                                  }}
                                >
                                  {o.text && <Textarea content={o.text} />}
                                </Box>
                              </Box>
                            </Box>
                          )
                        })}
                    </Grid>
                  )
                  break

                case "list":
                  component = (
                    <Edges size="lg">
                      <Flex
                        sx={{
                          mt: 115,
                          height: "auto",
                          flexDirection: "column",
                          px: [0, 0, "10%"],
                        }}
                      >
                        {o.cards &&
                          o.cards.map((o, i) => {
                            const image2 =
                              o.image?.localFile && getImage(o.image.localFile)
                            return (
                              <Flex
                                key={i}
                                sx={{
                                  flexDirection: "row",
                                  mb: 70,
                                }}
                              >
                                <Box
                                  sx={{
                                    position: "relative",
                                    width: "30%",
                                    img: {
                                      objectFit: "contain",
                                      height: 40,
                                    },
                                  }}
                                >
                                  {o.image && (
                                    <GatsbyImage
                                      image={image2}
                                      alt={o.image.altText}
                                    />
                                  )}
                                </Box>
                                <Box
                                  variant="styles.h5"
                                  sx={{
                                    maxWidth: "70%",
                                    textAlign: "left",
                                  }}
                                >
                                  {o.text && <Textarea content={o.text} />}
                                </Box>
                              </Flex>
                            )
                          })}
                      </Flex>
                    </Edges>
                  )
                  break
              }

              return (
                <Box sx={{ display: i === option ? "block" : "none" }}>
                  {component}
                </Box>
              )
            })}
        </Box>
      </Box>
    </>
  )
}

export default Tiles
