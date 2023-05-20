"use client"
import React from "react"
import { Box, Heading } from "theme-ui"
import Parser from "html-react-parser"

// import app components
// import theme from "../../theme"
import BackgroundImage from "../BackgroundImage"
import Textarea from "../Textarea"
import Socials from "../Socials"

const Contact = (props) => {
  const {
    image,
    headline,
    address,
    phoneone,
    email,
    instagram,
    facebook,
    linkedin,
    twitter,
    youtube,
  } = props

  return (
    <Box sx={{ height: `calc(100vh - 60px)` }}>
      {image && (
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
      )}
      <Box
        sx={{
          bg: "blue180",
          height: [`calc(50vh - 60px)`, 480, 500],
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
              mb: "50px",
              color: "white",
            }}
          >
            {phoneone && (
              <a href={"tel:" + Parser(phoneone)}>{Parser(phoneone)}</a>
            )}
            {" / "}
            {email && <a href={"mailto:" + Parser(email)}>{Parser(email)}</a>}
            <Box
              sx={{
                display: "inline-block",
                ml: "25px",
                transform: "translateY(3px)",
              }}
            >
              <Socials
                color="white"
                socials={{ instagram, facebook, linkedin, twitter, youtube }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Contact
