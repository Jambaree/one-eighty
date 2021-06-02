import React from "react"
import { Box, Heading, Text } from "theme-ui"
import Parser from "html-react-parser"

// import app components
import BackgroundImage from "../BackgroundImage"
import Edges from "../Edges"
import Button from "../Button"

const TextImagePage = (props) => {
  const {
    backgroundimage,
    fontcolor,
    headline,
    subheading,
    textimage,
    mainlink,
  } = props

  return (
    <>
      <Box>
        {headline && (
          <Heading children={headline} variant="styles.h2" sx={{ pb: 36 }} />
        )}
        {subheading && <Text children={subheading} />}
        <Box
          sx={{
            position: "relative",
            display: "flex",
            flexWrap: "wrap-reverse",
            alignItems: "center",
            minHeight: [null, null, 600],
            my: [48, 48, 0],
            textAlign: "left",
            "p:last-child": {
              mb: [16, 18, 24],
            },
          }}
        >
          {textimage &&
            textimage.map((o, i) => {
              return (
                <Box key={i}>
                  <Box
                    sx={{
                      left: textimage.alignment === "left" ? 0 : "unset",
                      right: textimage.alignment === "right" ? 0 : "unset",
                      position: ["relative", null, "absolute"],
                      height: [434, 500, "auto"],
                      width: ["100%", "100%", "calc(50% - 25px)"],
                      order: 1,
                      top: [null, null, 0],
                      bottom: [null, null, 0],
                      m: [24, 24, "52px 24px"],
                    }}
                  >
                    {o.image && (
                      <BackgroundImage
                        image={o.image}
                        backgroundSize="contain"
                      />
                    )}
                  </Box>
                  <Edges size="md">
                    <Box
                      sx={{
                        ml: o.alignment === "left" ? "auto" : "unset",
                        mr: o.alignment === "right" ? "auto" : "unset",
                        width: ["100%", null, "calc(50% - 25px)"],
                        height: "100%",
                        my: "auto",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        pt: 36,
                      }}
                    >
                      {o.headline && (
                        <Heading
                          children={o.headline}
                          variant="styles.h2"
                          sx={{ pb: 36 }}
                        />
                      )}
                      {o.text && (
                        <Text
                          children={Parser(o.text)}
                          variant="text.paragraph"
                          sx={{
                            paddingBottom: 36,
                          }}
                        />
                      )}
                      {o.link?.url && (
                        <Button variant="primary" to={o.link.url}>
                          {o.link.title}
                        </Button>
                      )}
                    </Box>
                  </Edges>
                </Box>
              )
            })}
        </Box>
      </Box>
    </>
  )
}

export default TextImagePage
