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
    <>
      <Box
        sx={{
          backgroundImage: null,
          backgroundSize: "cover",
          backgroundColor: "charcoalLight",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {mainheadline && (
          <Heading
            children={mainheadline}
            sx={{
              pt: 100,
              pb: [28, 36, 36],
              px: [18, "unset", "unset"],
              color: "almondLight",
              letterSpacing: ["-0.42px", "-1.15px", "-1.15px"],
              lineHeight: ["30px", "54px", "54px"],
              fontSize: [28, 46, 46],
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
              px: [18, 18, "unset"],
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
          }}
        >
          {textimage &&
            textimage.map((o, i) => {
              return (
                <Box key={i} sx={{ mt: ["unset", 48, 48] }}>
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
                        pt: [26, 36, 36],
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
                          }}
                        />
                      )}
                      {o.text && (
                        <Text
                          children={Parser(o.text)}
                          variant="text.introduction"
                          sx={{
                            paddingBottom: 36,
                            color: "almondLight",
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
          <Box sx={{ mt: ["unset", 114, 114], mb: [100, 178, 178] }}>
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
