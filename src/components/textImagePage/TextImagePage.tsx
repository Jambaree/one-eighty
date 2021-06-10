import React from "react"
import { Box, Flex, Heading, Text } from "theme-ui"
import Parser from "html-react-parser"

// import app components
import BackgroundImage from "../BackgroundImage"
import Edges from "../Edges"
import Button from "../Button"

const TextImagePage = (props) => {
  const { mainheadline, subheading, textimage, mainlink } = props

  return (
    <Box sx={{ bg: "charcoalLight" }}>
      <Box
        sx={{
          position: "relative",
          height: [900, 1200, 1350],
          zIndex: 0,
          bg: "charcoal",
          clipPath: [
            "polygon(0 0, 100% 0, 100% 100%, 0 88%)",
            "polygon(0 0, 100% 0, 100% 100%, 0 70%)",
            "polygon(0 0, 100% 0, 100% 100%, 0 50%)",
          ],
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 2,
          mt: [-900, -1200, -1300],
        }}
      >
        {mainheadline && (
          <Heading
            children={mainheadline}
            sx={{
              pt: 100,
              pb: [28, 36, 36],
              pl: [35, "auto", 0],
              pr: [60, "auto", 0],
              color: "almondLight",
              letterSpacing: ["-0.42px", "-1.15px", "-1.15px"],
              lineHeight: ["30px", "54px", "54px"],
              fontSize: [28, 46, 46],
              zIndex: 2,
            }}
          />
        )}
        {subheading && (
          <Text
            as="p"
            variant="text.introduction"
            children={subheading}
            sx={{
              color: "almondLight",
              mb: [42, 68, 68],
              pr: [18, "auto", 0],
              pl: [35, "auto", 0],
              fontSize: "18px",
              lineHeight: "30px",
              fontWeight: 400,
              zIndex: 2,
            }}
          />
        )}
        <Box
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "left",
            width: 750,
            maxWidth: "100%",
          }}
        >
          {textimage &&
            textimage.map((o, i) => {
              return (
                <Box
                  key={i}
                  sx={{
                    mt: ["unset", 48, 60],
                    minHeight: 278,
                    display: "flex",
                    flexDirection: ["column", "row", "row"],
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      left: o.alignment === "left" ? 0 : "unset",
                      right: o.alignment === "right" ? 0 : "unset",
                      position: ["relative", null, "absolute"],
                      height: 278,
                      width: ["100%", "100%", "50%"],
                      mb: [28, 0, 0],
                      mt: [48, 0, 0],
                    }}
                  >
                    {o.image && (
                      <BackgroundImage
                        image={o.image}
                        backgroundSize="contain"
                      />
                    )}
                  </Box>
                  <Box sx={{ width: "100%" }}>
                    <Box
                      sx={{
                        ml: o.alignment === "left" ? "auto" : "unset",
                        mr: o.alignment === "right" ? "auto" : "unset",
                        width: ["100%", null, "50%"],
                        height: "100%",
                        my: "auto",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                      }}
                    >
                      {o.headline && (
                        <Heading
                          children={o.headline}
                          variant="styles.h3"
                          sx={{
                            pb: "8px",
                            color: "almondLight",
                            fontSize: "22px",
                            letterSpacing: "-0.33px",
                            lineHeight: "32px",
                            pl: [18, 24, 0],
                          }}
                        />
                      )}
                      {o.text && (
                        <Text
                          children={Parser(o.text)}
                          variant="text.introduction"
                          sx={{
                            color: "almondLight",
                            letterSpacing: "-0.23px",
                            lineHeight: "25px",
                            px: [18, 24, 0],
                          }}
                        />
                      )}
                      {o.link?.url && (
                        <Button variant="primary" to={o.link.url}>
                          {o.link.title}
                        </Button>
                      )}
                    </Box>
                  </Box>
                </Box>
              )
            })}
        </Box>
        {mainlink?.url && (
          <Box sx={{ mt: ["unset", 114, 114], mb: [100, 178, 178] }}>
            <Button variant="primary" to={mainlink.url}>
              {mainlink.title}
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default TextImagePage
