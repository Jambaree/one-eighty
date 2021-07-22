import React from "react"
import { Box, Heading } from "theme-ui"
import Parser from "html-react-parser"

// import app components
import theme from "../../theme"
import BackgroundImage from "../BackgroundImage"
import Textarea from "../Textarea"

const Contact = (props) => {
  const { image, headline, address, phoneone, phonetwo, email } = props

  return (
    <Box
      sx={{
        height: `calc(100vh - ${theme.headerHeight})`,

        svg: {
          width: "100%",
          height: `calc(100vh - ${theme.headerHeight})`,
          objectFit: "contain",
          position: "absolute",
          zIndex: 1,
        },
      }}
    >
      {image &&
        (image.svg ? (
          Parser(image?.svg)
        ) : (
          <BackgroundImage
            image={image}
            alt={image?.altText || ""}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              position: "absolute",
              zIndex: 1,
            }}
          />
        ))}
      <Box
        sx={{
          bg: "blue180",
          height: [`calc(50vh - ${theme.headerHeight})`, 480, 480],
          width: ["100%", "75%", "50%"],
          position: "relative",
          zIndex: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        <Box sx={{ minWidth: ["100%", "100%", 440], px: 24 }}>
          {headline && (
            <Heading
              children={Parser(headline)}
              variant="styles.root.h1"
              as="h1"
              sx={{
                color: "white",
                mb: "18px",
              }}
            />
          )}
          {address && (
            <Box sx={{ color: "white", mb: "16px" }}>
              <Textarea content={address} />
            </Box>
          )}
          <Box
            variant="text.body"
            sx={{
              a: {
                color: "white",
                "&:hover": {
                  textDecoration: "underline",
                },
              },
              mb: "27px",
              color: "white",
            }}
          >
            {phoneone && (
              <a href={"tel:" + Parser(phoneone)}>{Parser(phoneone)}</a>
            )}
            {" / "}
            {phonetwo && (
              <a href={"tel:" + Parser(phonetwo)}>{Parser(phonetwo)}</a>
            )}
            {" / "}
            {email && <a href={"mailto:" + Parser(email)}>{Parser(email)}</a>}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Contact
