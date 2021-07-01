import React from "react"
import { Box, Heading, Text, Divider } from "theme-ui"
import Slider from "react-slick"
import Parser from "html-react-parser"

// import app components
import Edges from "../Edges"
import "../../styles/slick/slick.css"
import "../../styles/slick/slick-theme.css"
import Textarea from "../Textarea"
import BackgroundImage from "../BackgroundImage"
import zIndex from "@material-ui/core/styles/zIndex"

const QuoteSlider = (props) => {
  const { image, slide } = props

  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    autoplaySpeed: 8000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    customPaging: (i) => (
      <Box
        className="clickableArea"
        sx={{
          width: "100%",
          height: "100%",
          whiteSpace: "nowrap",
        }}
      >
        <Text
          variant="quoteSliderOptions"
          sx={{ width: "100%" }}
          className="current"
          children={slide[i].title}
        />
      </Box>
    ),
  }

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "500px",
        display: "grid",
        gridTemplateColumns: [1, "20% 70% 10%", "40% 50% 10%"],
        gridTemplateRows: "1fr",
        "&:before": {
          content: "''",
          position: "absolute",
          zIndex: 2,
          top: "50%",
          transform: "translateY(-50%)",
          left: 0,
          width: "4px",
          height: "134px",
          bg: "red",
        },
        "&:after": {
          content: "''",
          position: "absolute",
          zIndex: 2,
          top: "50%",
          transform: "translateY(-50%)",
          right: 0,
          width: "4px",
          height: "134px",
          bg: "red",
        },
      }}
    >
      <Box
        sx={{
          gridColumnStart: 2,
          gridColumnEnd: 3,
          gridRowStart: 1,
          gridRowEnd: 2,
          position: "relative",
          display: "flex",
          justifyContent: "center",
          "&:before": {
            content: "''",
            position: "absolute",
            zIndex: 2,
            top: "50%",
            transform: "translateY(-50%)",
            left: 0,
            borderTop: "1px solid red",
            width: ["20px", "40px", "77px"],
            bg: "red",
            display: ["none", "block"],
          },
          "&:after": {
            content: "''",
            position: "absolute",
            zIndex: 2,
            top: "50%",
            transform: "translateY(-50%)",
            right: 0,
            borderTop: "1px solid red",
            width: ["20px", "40px", "77px"],
            bg: "red",
            display: ["none", "block"],
          },
          ".slick-slider": {
            position: "relative",
            height: "100%",
            my: "auto",
            display: "flex !important",

            ".slick-list": {
              textAlign: "center",
              position: "relative",
              my: "auto",
              display: "flex",
              flexDirection: "column",
              ".slick-track": {
                height: "100%",
                my: "auto",
                display: "flex",
                alignItems: "center",
              },
            },
            ".slick-dots": {
              width: "100%",
              position: "absolute",
              display: "flex !important",
              justifyContent: "flex-end",
              bottom: 0,
              right: 0,
              mr: "20px",
              py: "15px",
              px: ["10px", "20px", "50px"],
              flexWrap: "nowrap",
              li: {
                px: ["20px", "30px"],
              },
              ".slick-active .current": {
                textDecoration: "underline",
                textUnderlineOffset: "0.5em",
              },
            },
          },
          flexDirection: "column",
          background:
            "linear-gradient(270deg, rgba(255, 255, 255, 0.65) 0%, rgba(255, 255, 255, 0.9) 32.29%, #FFFFFF 50.8%, rgba(255, 255, 255, 0.9) 69.27%, rgba(255, 255, 255, 0.65) 100%)",
          backdropFilter: "blur(25px)",
        }}
      >
        <Slider {...settings}>
          {slide &&
            slide.map((o, i) => {
              return (
                <Box sx={{ height: "100%" }}>
                  {o.quote && (
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",

                        flexWrap: "nowrap",
                        ".quote-text::before": {},
                      }}
                    >
                      {/* <Divider
                        color="red"
                        sx={{
                          width: ["20px", "40px", "77px"],
                          mr: "auto",
                          display: ["none", "block"],
                        }}
                      /> */}
                      <Box
                        className="quote-text"
                        sx={{
                          textAlign: "left",
                          p: ["30px", "50px"],
                          mx: ["20px", "40px", "77px"],
                          "div > *": {
                            color: "blue180",
                          },
                        }}
                      >
                        <Textarea content={o.quote} />
                      </Box>
                      {/* <Divider
                        color="red"
                        sx={{
                          width: ["20px", "40px", "77px"],
                          ml: "auto",
                          display: ["none", "block"],
                        }}
                      /> */}
                    </Box>
                  )}
                </Box>
              )
            })}
        </Slider>
      </Box>
      <Box
        sx={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          zIndex: -2,
        }}
      >
        {image && <BackgroundImage image={image} sx={{ zIndex: -3 }} />}
      </Box>
    </Box>
  )
}

export default QuoteSlider
