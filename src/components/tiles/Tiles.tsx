import React, { useState } from "react"
import { Box, Grid, Heading, Flex } from "theme-ui"
import Parser from "html-react-parser"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// import app components
import Textarea from "../Textarea"
import Edges from "../Edges"
import theme from "../../theme"

const Tiles = (props) => {
  const { headline, cards } = props
  const [option, setOption] = useState("1")

  console.log(option)

  const handleClick = (e) => {
    e.preventDefault()
    if (e.target.name !== option) {
      setOption(e.target.name)
    }
  }

  return (
    <Box
      sx={{
        pt: [100, 100, 100],
        pb: [100, 164, 200],
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          height: 168,
          width: 168,
          bg: "flax",
          borderRadius: "50%",

          display: ["none", "block", "block"],
          overflow: "hidden",
          marginTop: [null, "-12%", "-7%"],
          position: "absolute",
          right: "-4%",
          zIndex: 0,
        }}
      />
      <Edges size="lg">
        <Box sx={{ textAlign: "center" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: ["flex-start", "center", "center"],
              textAlign: ["left", "center", "center"],
              m: ["unset", "0 auto", "0 auto"],
              mb: 36,
              px: [0, 30, 120],
            }}
          >
            {headline && (
              <Heading
                children={Parser(headline)}
                variant={`styles.h2`}
                as="h2"
                sx={{
                  mb: [41, 24, 24],
                  width: ["50%", "100%", "100%"],
                  zIndex: 1,
                }}
              />
            )}
          </Box>
          {option === "1" ? (
            <Grid
              gap={"1px"}
              columns={2}
              sx={{
                height: 708,
                mx: [0, 0, 30],
                bg: "#E3E3E3",
              }}
            >
              {cards &&
                cards.map((o, i) => {
                  return (
                    <Box key={i} sx={{ bg: "white", p: 24 }}>
                      <Box
                        sx={{
                          position: "relative",
                          width: "100%",
                          img: {
                            objectFit: "contain",
                            height: 40,
                          },
                        }}
                      >
                        {o.image && (
                          <GatsbyImage
                            image={o.image.url}
                            alt={o.image.altText}
                          />
                        )}
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: ["flex-start", "center", "center"],
                          textAlign: ["left", "center", "center"],
                          maxWidth: "100%",
                          m: ["unset", "0 auto", "0 auto"],
                          pr: [30, "unset", "unset"],
                        }}
                      >
                        {o.text && <Textarea content={o.text} />}
                      </Box>
                    </Box>
                  )
                })}
            </Grid>
          ) : (
            <Flex
              sx={{
                height: 708,
                flexDirection: "column",
                px: [0, 30],
                bg: "blue",
              }}
            >
              {cards &&
                cards.map((o, i) => {
                  return (
                    <Box key={i}>
                      <Box
                        sx={{
                          position: "relative",
                          width: "100%",
                          img: {
                            objectFit: "contain",
                            height: 40,
                          },
                        }}
                      >
                        {o.image && (
                          <GatsbyImage
                            image={o.image.url}
                            alt={o.image.altText}
                          />
                        )}
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: ["flex-start", "center", "center"],
                          textAlign: ["left", "center", "center"],
                          maxWidth: "100%",
                          m: ["unset", "0 auto", "0 auto"],
                          pr: [30, "unset", "unset"],
                        }}
                      >
                        {o.text && <Textarea content={o.text} />}
                      </Box>
                    </Box>
                  )
                })}
            </Flex>
          )}
          <Box
            sx={{
              gridColumn: 2,
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Box
              variant="links.hyperlink"
              sx={{
                mr: "12px",
                a: {
                  color: "black",
                  textDecoration: option === "1" && "underline",
                },
              }}
            >
              <a onClick={handleClick} name="1">
                Option 1
              </a>
            </Box>
            <Box
              variant="links.hyperlink"
              sx={{
                a: {
                  color: "black",
                  textDecoration: option === "2" && "underline",
                },
              }}
            >
              <a onClick={handleClick} name="2">
                Option 2
              </a>
            </Box>
          </Box>
        </Box>
      </Edges>
    </Box>
  )
}

export default Tiles
