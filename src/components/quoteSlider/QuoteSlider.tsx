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
          position: "absolute",
          top: 0,
          right: 0,
        }}
      >
        <Text
          sx={{ fontSize: "16px" }}
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
        gridTemplateColumns: [1, "40% 50% 10%"],
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
        ".slick-dots": {
          position: "absolute",
          bottom: 0,
          right: 0,
          li: {
            mx: "30px",
            ".current": {
              ":hover": {
                textDecoration: "underline",
                textUnderlineOffset: "0.5em",
              },
            },
          },

          ".slick-active .current": {
            textDecoration: "underline",
            textUnderlineOffset: "0.5em",
          },

          "@media(max-width:1024px)": {
            textAlign: "left",
          },
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
          ".slider-class": {
            my: "auto",
            ".slick-dots": {},
          },
          flexDirection: "column",
          background:
            "linear-gradient(270deg, rgba(255, 255, 255, 0.65) 0%, rgba(255, 255, 255, 0.9) 32.29%, #FFFFFF 50.8%, rgba(255, 255, 255, 0.9) 69.27%, rgba(255, 255, 255, 0.65) 100%)",
          backdropFilter: "blur(25px)",
        }}
      >
        <Slider className="slider-class" {...settings}>
          {slide &&
            slide.map((o, i) => {
              return (
                <Box sx={{}}>
                  {o.quote && (
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        flexWrap: "nowrap",
                      }}
                    >
                      <Divider
                        color="red"
                        sx={{
                          width: ["20px", "40px", "77px"],
                          mr: "auto",
                          transform: [null, "translateY(-3px)"],
                          display: ["none", "block"],
                        }}
                      />
                      <Box
                        sx={{
                          "div > *": {
                            color: "blue180",
                          },
                        }}
                      >
                        <Textarea content={o.quote} />
                      </Box>
                      <Divider
                        color="red"
                        sx={{
                          width: ["20px", "40px", "77px"],
                          ml: "auto",
                          display: ["none", "block"],
                          transform: [null, "translateY(-3px)"],
                        }}
                      />
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
