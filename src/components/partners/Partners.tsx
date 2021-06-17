import React from "react"
import { Box, Grid, Heading, Text, Link } from "theme-ui"
import Parser from "html-react-parser"

// import app components
import Edges from "../Edges"
import BackgroundImage from "../BackgroundImage"
import Button from "../Button"

const Partners = (props) => {
  const { columns, backgroundcolor, headline, subheading, cards, mainbutton } =
    props

  return (
    <Box sx={{ bg: backgroundcolor, pt: 100, pb: 150 }}>
      <Edges size="md">
        <Box
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            width: ["100%", "100%", 730],
            m: "0 auto",
            mb: 36,
          }}
        >
          <FlaxBlock />

          <TurquoiseBlock />

          {headline && (
            <Heading
              children={Parser(headline)}
              variant="styles.h3"
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
              sx={{
                fontSize: "18px",
                lineHeight: "30px",
                mb: [36, 36, 60],
                p: "0 18px",
              }}
            />
          )}
        </Box>
        <Grid gap={["90px", 4, 4]} columns={[1, 2, columns]}>
          {cards &&
            cards.map((o, i) => {
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
                      width: "204px",
                      height: "74px",
                      mb: 25,
                    }}
                  >
                    {o.icon &&
                      (o.icon?.svg ? (
                        Parser(o.icon.svg)
                      ) : (
                        <BackgroundImage
                          image={o.icon}
                          backgroundSize="contain"
                          style={{
                            borderRadius: 6,
                          }}
                        />
                      ))}
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
                        children={Parser(o.headline)}
                        variant="styles.h3"
                        sx={{
                          mb: 12,
                          mt: 36,
                          fontSize: "5",
                          width: ["100%"],
                          lineHeight: "28px",
                        }}
                      />
                    )}
                    {o.link && (
                      <Link
                        children={Parser(o.link.title)}
                        variant="links.hyperlink"
                      />
                    )}
                  </Box>
                </Box>
              )
            })}
        </Grid>
        {mainbutton?.url && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mt: 80,
            }}
          >
            <Button to={mainbutton.url}>{Parser(mainbutton.title)}</Button>
          </Box>
        )}
      </Edges>
    </Box>
  )
}

export default Partners

const TurquoiseBlock = () => {
  return (
    <Box
      sx={{
        display: "none",
        "@media screen and (min-width: 1035px)": {
          display: "block",
        },
        position: "absolute",
        top: "calc(50% - 39px)",
        right: "calc(100% + 46px + 6px)",
        width: "78px",
        height: "78px",
        bg: "turquoise",
        borderRadius: "8px",
      }}
    />
  )
}

const FlaxBlock = () => {
  return (
    <Box
      sx={{
        display: "none",
        "@media screen and (min-width: 1035px)": {
          display: "block",
          width: "46px",
          height: "46px",
          borderRadius: "8px",
        },
        position: "absolute",
        top: "calc(50% - 46px - 39px - 6px)",
        right: "calc(100%)",
        bg: "flax",
      }}
    />
  )
}
