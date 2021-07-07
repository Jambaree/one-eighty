import React, { useState } from "react"
import { Box, Grid, Heading, Flex } from "theme-ui"
import Parser from "html-react-parser"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// import app components
import Textarea from "../Textarea"
import Edges from "../Edges"

const Tiles = (props) => {
  const { headline, style, cards } = props

  let lastItem = cards.length - 1

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

          {cards && style === "grid" ? (
            <Grid
              gap={"1px"}
              columns={[1, 2, 2]}
              sx={{
                height: "auto",
              }}
            >
              {cards &&
                cards.map((o, i) => {
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
                        borderBottom: [
                          i !== lastItem && "1px solid #E3E3E3",
                          lastItem % 2 === 0 && i === lastItem
                            ? "none"
                            : lastItem % 2 !== 0 &&
                              (i === lastItem || i === lastItem - 1)
                            ? "none"
                            : "1px solid #E3E3E3",
                          lastItem % 2 === 0 && i === lastItem
                            ? "none"
                            : lastItem % 2 !== 0 &&
                              (i === lastItem || i === lastItem - 1)
                            ? "none"
                            : "1px solid #E3E3E3",
                        ],
                        borderRight:
                          i === 0
                            ? [
                                "unset",
                                "1px solid #E3E3E3",
                                "1px solid #E3E3E3",
                              ]
                            : i % 2 === 0
                            ? [
                                "unset",
                                "1px solid #E3E3E3",
                                "1px solid #E3E3E3",
                              ]
                            : "unset",
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
                            i === 0 || i % 2 === 0
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
                          {o.image && o.image?.svg ? (
                            Parser(o.image.svg)
                          ) : (
                            <GatsbyImage image={image} alt={o.image.altText} />
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
          ) : (
            <Edges size="lg">
              <Flex
                sx={{
                  mt: 115,
                  height: "auto",
                  flexDirection: "column",
                  px: [0, 0, "10%"],
                }}
              >
                {cards &&
                  cards.map((o, i) => {
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
                            <GatsbyImage image={image2} alt={o.image.altText} />
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
          )}
        </Box>
      </Box>
    </>
  )
}

export default Tiles
