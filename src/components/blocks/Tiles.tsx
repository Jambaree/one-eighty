"use client"
import React from "react"
import { Box, Grid, Heading, Flex } from "theme-ui"
import Parser from "html-react-parser"
import Image from "next/image"

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
          pt: 50,
          mb: 20,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Edges size="lg">
            <Box
              sx={{
                textAlign: "left",
                mb: "30px",
              }}
            >
              {headline && (
                <Heading
                  children={Parser(headline)}
                  variant="styles.root.h1"
                  as="h1"
                />
              )}
            </Box>
          </Edges>

          {cards && style === "grid" ? (
            <Grid gap={"1px"} columns={[1, 2, 2]}>
              {cards &&
                cards.map((o, i) => {
                  return (
                    <Box
                      key={i}
                      sx={{
                        bg: "white",
                        p: "15px 24px 30px 24px",
                        minHeight: ["auto", 170, 170],
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
                          justifyContent: "center",
                          alignItems:
                            i === 0 || i % 2 === 0
                              ? ["flex-start", "flex-start", "flex-end"]
                              : "flex-start",
                          pt: [
                            0,
                            i < 2 ? "13%" : "unset",
                            i < 2 ? "8%" : "unset",
                          ],
                        }}
                      >
                        <Box
                          sx={{
                            position: "relative",
                            maxWidth: ["100%", 432, 432],
                            width: "100%",
                            textAlign: "left",
                            "svg, img": {
                              objectFit: "contain",
                              height: 50,
                              mb: "12px",
                            },
                          }}
                        >
                          {o.image && (
                            <Image
                              width={72}
                              height={50}
                              src={o?.image?.sourceUrl}
                              alt={o.image.altText || ""}
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
                          {o.text && <Heading as="h5" children={o.text} />}
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
                            "img, svg": {
                              objectFit: "contain",
                              height: 50,
                            },
                          }}
                        >
                          {o.image && (
                            <Image
                              fill
                              src={o.image.sourceUrl}
                              alt={o.image.altText}
                            />
                          )}
                        </Box>
                        <Box
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
