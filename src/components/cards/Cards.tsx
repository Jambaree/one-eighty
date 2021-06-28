import React from "react"
import { Box, Grid, Heading, Text } from "theme-ui"
import Parser from "html-react-parser"
import { Link } from "gatsby"

// import app components
import Button from "../Button"
import Edges from "../Edges"
import BackgroundImage from "../BackgroundImage"
import theme from "../../theme"

const Cards = (props) => {
  const {
    columns,
    headline,
    headlinestyle = "h2",
    subheading,
    cards,
    mainbutton,
  } = props

  return (
    <Box
      sx={{
        bg: "almondLight",
        pt: [100, 164, 164],
        pb: mainbutton?.url ? [50, 114, 114] : [100, 164, 164],
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
                variant={`styles.${headlinestyle}`}
                as={headlinestyle}
                sx={{
                  mb: [41, 24, 24],
                  width: ["50%", "100%", "100%"],
                  zIndex: 1,
                }}
              />
            )}
            {subheading && (
              <Text
                children={Parser(subheading)}
                variant="text.introduction"
                sx={{
                  zIndex: 1,
                  m: [
                    "0 36px 100px 0",
                    "0 36px 100px 36px",
                    "0 36px 100px 36px",
                  ],
                }}
              />
            )}
          </Box>
          <Grid
            gap={[4, 4, 6]}
            columns={[1, 2, columns]}
            sx={{
              px: [0, 30],
              pb: mainbutton?.url && 100,
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
                        height: [220, 220, 300],
                      }}
                    >
                      {o.image && (
                        <BackgroundImage
                          image={o.image}
                          style={{
                            borderRadius: 6,
                          }}
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
                      {o.headline && (
                        <Heading
                          children={Parser(o.headline)}
                          variant="styles.h3"
                          as="h3"
                          sx={{
                            mb: 12,
                            mt: 36,
                          }}
                        />
                      )}
                      {o.text && (
                        <Text
                          children={Parser(o.text)}
                          variant="text.introduction"
                        />
                      )}
                      {<br />}
                      {o.link?.url && (
                        <Box
                          sx={{
                            a: {
                              textDecoration: "none",
                              ...theme.links.hyperlink,
                            },
                          }}
                        >
                          {o.link.url.includes("http") ? (
                            <a
                              href={o.link.url}
                              children={Parser(o.link.title || "")}
                              target="_blank"
                              rel="noreferrer"
                            />
                          ) : (
                            <Link
                              to={o.link.url}
                              children={Parser(o.link.title || "")}
                            />
                          )}
                        </Box>
                      )}
                    </Box>
                  </Box>
                )
              })}
          </Grid>

          {mainbutton?.url && (
            <Button variant="primary" to={mainbutton.url} mb={50}>
              {mainbutton.title && Parser(mainbutton.title)}
            </Button>
          )}
        </Box>
      </Edges>
    </Box>
  )
}

export default Cards
