import React from "react"
import { Box, Grid, Heading, Text } from "theme-ui"
import Parser from "html-react-parser"

// import app components
import Edges from "../Edges"
import BackgroundImage from "../BackgroundImage"
import Button from "../Button"

const Benefits = (props) => {
  const { columns, headline, subheading, cards, link } = props

  return (
    <Box sx={{ bg: "white", mt: 104, mb: 154 }}>
      <Edges size="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            width: ["100%", "100%", 730],
            m: "0 auto",
            mb: 36,
          }}
        >
          {headline && (
            <Heading
              children={Parser(headline)}
              variant="styles.h2"
              sx={{
                m: "0 auto",
                mb: 36,
                width: ["80%", "100%", "100%"],
              }}
            />
          )}
          {subheading && (
            <Text
              children={Parser(subheading)}
              variant="text.introduction"
              sx={{ mb: [36, 36, 60], zIndex: 1 }}
            />
          )}
        </Box>
        <Grid gap={4} columns={[1, 2, columns]}>
          {cards &&
            cards.map((o, i) => {
              return (
                <Box key={i}>
                  <Box
                    mb="25px"
                    sx={{
                      position: "relative",
                      height: 186,
                      svg: {
                        maxHeight: "100%",
                        maxWidth: "100%",
                        filter: "drop-shadow(0px 5px 10px #00000029)",
                      },
                    }}
                  >
                    {o.icon && (
                      <>
                        {o.icon?.svg ? (
                          Parser(o.icon.svg)
                        ) : (
                          <BackgroundImage
                            image={o.icon}
                            backgroundSize="contain"
                            style={{
                              borderRadius: 6,
                            }}
                          />
                        )}
                      </>
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
                    {o.headline && (
                      <Heading
                        as="h4"
                        children={Parser(o.headline)}
                        variant="styles.h4"
                        sx={{
                          mb: "8px",
                          width: "100%",
                        }}
                      />
                    )}
                    {o.text && (
                      <Text
                        children={Parser(o.text)}
                        variant="text.paragraph"
                        as="p"
                        sx={{ lineHeight: 1.7, fontWeight: 200 }}
                      />
                    )}
                  </Box>
                </Box>
              )
            })}
        </Grid>
        {link?.url && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mt: 80,
            }}
          >
            <Button to={link.url}>{Parser(link.title)}</Button>
          </Box>
        )}
      </Edges>
    </Box>
  )
}

export default Benefits
