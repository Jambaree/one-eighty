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
      <Edges size="lg">
        <Box sx={{ textAlign: "center" }}>
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
          {option === "1" ? (
            <Grid
              gap={"1px"}
              columns={[1, 2, 2]}
              sx={{
                height: 708,
                mx: [10, 20, 30],
                bg: "#E3E3E3",
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
                        p: 24,
                        display: "flex",
                        flexDirection: "column",
                        flexWrap: "nowrap",
                        justifyContent: "flex-end",
                        alignItems: "center",
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
                          maxWidth: "100%",
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
