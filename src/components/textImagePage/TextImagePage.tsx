import React from "react"
import { Box, Flex, Heading, Text } from "theme-ui"
import Parser from "html-react-parser"

// import app components
import BackgroundImage from "../BackgroundImage"
import Edges from "../Edges"
import Button from "../Button"

const TextImagePage = (props) => {
  const {
    backgroundimage,
    fontcolor,
    mainheadline,
    subheading,
    textimage,
    mainlink,
  } = props

  console.log(props)

  return (
    <>
      <Box
        sx={{
          backgroundImage: backgroundimage,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {mainheadline && (
          <Heading
            children={mainheadline}
            variant="styles.h1"
            sx={{
              pb: 36,
              color: fontcolor,
              letterSpacing: "-1.15px",
              lineHeight: "54px",
            }}
          />
        )}
        {subheading && (
          <Text
            as="p"
            variant="text.introduction"
            children={subheading}
            sx={{
              color: fontcolor,
              mb: 68,
              fontSize: "18px",
              lineHeight: "30px",
              fontWeight: 400,
            }}
          />
        )}
        <Box
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
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
                <Box key={i} sx={{ mb: 24 }}>
                  <Box
                    sx={{
                      left: o.alignment === "left" ? 0 : "unset",
                      right: o.alignment === "right" ? 0 : "unset",
                      position: ["relative", null, "absolute"],
                      height: 278,
                      width: ["100%", "100%", "calc(50% - 25px)"],
                    }}
                  >
                    {o.image && (
                      <BackgroundImage
                        image={o.image}
                        backgroundSize="contain"
                        // style={{ boxShadow: "0px 20px 40px #00000066" }}
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
                          variant="styles.h3"
                          sx={{
                            pb: 36,
                            color: fontcolor,
                            fontSize: "22px",
                            letterSpacing: "-0.33px",
                            lineHeight: "32px",
                          }}
                        />
                      )}
                      {o.text && (
                        <Text
                          children={Parser(o.text)}
                          variant="text.introduction"
                          sx={{
                            paddingBottom: 36,
                            color: fontcolor,
                            letterSpacing: "-0.23px",
                            lineHeight: "25px",
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
        {mainlink?.url && (
          <Box sx={{ mt: 114, mb: 178 }}>
            <Button variant="primary" to={mainlink.url}>
              {mainlink.title}
            </Button>
          </Box>
        )}
      </Box>
    </>
  )
}

export default TextImagePage
