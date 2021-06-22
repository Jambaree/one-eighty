import React, { useState } from "react"
import { Box, Grid, Heading, Text } from "theme-ui"
import Parser from "html-react-parser"

// import app components
import Edges from "../Edges"
import BackgroundImage from "../BackgroundImage"
import Button from "../Button"

const People = (props) => {
  const {
    initialvalue,
    columns,
    backgroundcolor,
    headline,
    subheading,
    cards,
  } = props

  const [visible, setVisible] = useState(initialvalue)

  let visibleCards = cards.slice(0, visible)

  return (
    <Box sx={{ bg: backgroundcolor, pt: 100, pb: 164 }}>
      <Edges size="md">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            width: ["100%", "100%", 730],
            m: "0 auto",
          }}
        >
          {headline && (
            <Heading
              children={Parser(headline)}
              variant="styles.h1"
              sx={{
                m: "0 auto",
                mb: [30],
                width: ["80%", "100%", "100%"],
                lineHeight: "54px",
                letterSpacing: "-1.15px",
              }}
            />
          )}
          {subheading && (
            <Text
              children={Parser(subheading)}
              variant="text.introduction"
              sx={{
                fontSize: "18px",
                lineHeight: "30px",
                p: "0 18px",
                mb: 50,
              }}
            />
          )}
        </Box>
        <Grid gap={["90px", 4, 4]} columns={[1, 2, columns]}>
          {visibleCards &&
            visibleCards.map((o, i) => {
              return (
                <Box
                  key={i}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      width: 140,
                      height: 140,
                      mb: 21,
                    }}
                  >
                    {o.avatar ? (
                      o.avatar?.svg ? (
                        Parser(o.avatar.svg)
                      ) : (
                        <BackgroundImage
                          image={o.avatar}
                          style={{
                            borderRadius: "50%",
                            height: 140,
                          }}
                        />
                      )
                    ) : (
                      <Box
                        sx={{
                          borderRadius: "50%",
                          backgroundColor: "black25",
                          width: 140,
                          height: 140,
                        }}
                      />
                    )}
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      textAlign: "center",
                      alignItems: "center",
                      mx: [40, 20, "unset"],
                    }}
                  >
                    {o.name && (
                      <Heading
                        children={Parser(o.name)}
                        variant="styles.h3"
                        sx={{
                          fontSize: "4",
                          width: ["100%"],
                          lineHeight: "26px",
                          letterSpacing: "-0.18px",
                        }}
                      />
                    )}
                    {o.position && (
                      <Heading
                        children={Parser(o.position)}
                        variant="text.introduction"
                        sx={{
                          mb: 12,
                          fontSize: "3",
                          width: ["100%"],
                          lineHeight: "25px",
                          letterSpacing: "-0.23px",
                        }}
                      />
                    )}
                  </Box>
                </Box>
              )
            })}
        </Grid>
        {cards.length > visible && cards.length > initialvalue && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mt: 80,
            }}
          >
            <Button
              onClick={() => {
                setVisible(visible + initialvalue)
              }}
            >
              See More
            </Button>
          </Box>
        )}
      </Edges>
    </Box>
  )
}

export default People
