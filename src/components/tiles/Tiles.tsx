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
      <Box sx={{ textAlign: "center" }}>
        <Edges size="lg">
          <Box
            sx={{
              textAlign: "left",
              mb: 112,
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
        {option === "1" ? (
          <Grid
            gap={"1px"}
            columns={[1, 2, 2]}
            sx={{
              height: 708,
              bg: "#E3E3E3",
            }}
          >
            {cards &&
              cards.map((o, i) => {
                const image = o?.image?.localFile && getImage(o.image.localFile)

                return (
                  <Box
                    key={i}
                    sx={{
                      bg: "white",
                      p: [
                        24,
                        i === 0
                          ? "28% 24px 24px 30%"
                          : i === 1
                          ? "28% 30% 24px 24px"
                          : i === 2
                          ? "24px 24px 0 30%"
                          : "24px 30% 0 24px",
                        i === 0
                          ? "26% 24px 24px 40%"
                          : i === 1
                          ? "26% 40% 24px 24px"
                          : i === 2
                          ? "24px 24px 0 40%"
                          : "24px 40% 0 24px",
                      ],
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      flexWrap: "nowrap",
                      justifyContent: "flex-start",
                      alignItems: ["flex-start", "center", "center"],
                    }}
                  >
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
                        <GatsbyImage image={image} alt={o.image.altText} />
                      )}
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "left",
                        maxWidth: 432,
                      }}
                    >
                      {o.text && <Textarea content={o.text} />}
                    </Box>
                  </Box>
                )
              })}
          </Grid>
        ) : (
          <Edges size="lg">
            <Flex
              sx={{
                height: 708,
                flexDirection: "column",
                px: [0, 0, "10%"],
              }}
            >
              {cards &&
                cards.map((o, i) => {
                  const image2 =
                    o?.image?.localFile && getImage(o.image.localFile)
                  return (
                    <Flex key={i} sx={{ flexDirection: "row", mb: 70 }}>
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
        <Edges size="lg">
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
        </Edges>
      </Box>
    </Box>
  )
}

export default Tiles
