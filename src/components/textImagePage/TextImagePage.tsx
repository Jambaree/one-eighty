import React from "react"
import { Box, Heading, Text } from "theme-ui"
import Parser from "html-react-parser"

// import app components
import BackgroundImage from "../BackgroundImage"
import Button from "../Button"
import theme from "../../theme"

const TextImagePage = (props) => {
  const { mainheadline, subheading, textimage, mainlink } = props

  return (
    <Box
      sx={{
        position: "relative",
        zIndex: 1,
        background: [
          `linear-gradient(28deg, ${theme.colors.charcoalLight} 0 68%, ${theme.colors.charcoal} 50% 100%)`,
          `linear-gradient(28deg, ${theme.colors.charcoalLight} 0 52%, ${theme.colors.charcoal} 50% 100%)`,
          `linear-gradient(28deg, ${theme.colors.charcoalLight} 0 52%, ${theme.colors.charcoal} 50% 100%)`,
        ],
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 2,
        }}
      >
        {mainheadline && (
          <Heading
            children={Parser(mainheadline)}
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
            children={Parser(subheading)}
            sx={{
              color: "almondLight",
              pr: [18, "auto", 0],
              pl: [35, "auto", 0],
              pb: [64, 50, 50],
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
            width: 700,
            maxWidth: "100%",
          }}
        >
          {textimage &&
            textimage.map((o, i) => {
              return (
                <Box
                  key={i}
                  sx={{
                    minHeight: 278,
                    display: "flex",
                    flexDirection: ["column", "row", "row"],
                    justifyContent: "center",
                    alignItems: "center",
                    mt: [0, 50, 50],
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
                      mt: [36, 0, 0],
                      svg: {
                        maxHeight: "100%",
                        maxWidth: "100%",
                        filter: "drop-shadow(0px 5px 10px #00000029)",
                      },
                    }}
                  >
                    {o.image && (
                      <>
                        {o.image?.svg ? (
                          Parser(o.image.svg)
                        ) : (
                          <BackgroundImage
                            image={o.image}
                            backgroundSize="contain"
                          />
                        )}
                      </>
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
                          as="h3"
                          children={Parser(o.headline)}
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
                          variant="text.paragraph"
                          sx={{
                            color: "almondLight",
                            letterSpacing: "-0.23px",
                            lineHeight: "25px",
                            pl: [18, 24, 0],
                            pr: [25, 52, 80],
                          }}
                        />
                      )}
                      {o.link?.url && (
                        <Button variant="primary" to={o.link.url}>
                          {Parser(o.link.title)}
                        </Button>
                      )}
                    </Box>
                  </Box>
                </Box>
              )
            })}
        </Box>
        {mainlink?.url && (
          <Box sx={{ mt: [75, 114, 114], mb: [100, 178, 178] }}>
            <Button variant="primary" to={mainlink.url}>
              {Parser(mainlink.title)}
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default TextImagePage
