import React from "react"
import { Box, Divider, Text } from "theme-ui"
import Slider from "react-slick"

// import app components
import "../../styles/slick/slick.css"
import "../../styles/slick/slick-theme.css"
import Textarea from "../Textarea"
import BackgroundImage from "../BackgroundImage"

const TestimonialSlider = (props) => {
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
    customPaging: () => (
      <Box
        className="clickableArea"
        sx={{
          width: "100%",
          height: "100%",
          whiteSpace: "nowrap",
        }}
      >
        <Box
          className="current"
          sx={{
            width: "8px",
            height: "8px",
            color: "red",
            backgroundColor: "darkBlue",
            opacity: "0.3",
            "&:hover": {
              bg: "red",
              opacity: 1,
            },
          }}
        />
      </Box>
    ),
  }

  return (
    <Box
      sx={{
        position: "relative",
        display: "grid",
        gridTemplateColumns: [1, "20% 75% 5%", "20% 75% 5%"],
        "@media (min-width: 1080px)": {
          gridTemplateColumns: [1, "20% 75% 5%", "32% 60% 8%"],
        },
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
          my: ["100px", 0],
          flexDirection: "column",
          background:
            "linear-gradient(270deg, rgba(255, 255, 255, 0.65) 0%, rgba(255, 255, 255, 0.9) 32.29%, #FFFFFF 50.8%, rgba(255, 255, 255, 0.9) 69.27%, rgba(255, 255, 255, 0.65) 100%)",
          backdropFilter: "blur(10px)",
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
              position: "absolute",
              display: "flex !important",
              justifyContent: "center",
              bottom: 0,
              py: "23px",
              flexWrap: "nowrap",
              li: {
                px: "10px",
              },
              ".slick-active .current": {
                opacity: 1,
              },
            },
          },
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
                        position: "relative",
                        flexWrap: "nowrap",
                      }}
                    >
                      <Divider
                        color="red"
                        sx={{
                          width: ["20px", "40px", "77px"],
                          my: "auto",
                          display: ["none", "block"],
                          position: "absolute",
                          zIndex: 2,
                          top: "50%",
                          transform: "translateY(-50%)",
                          left: 0,
                        }}
                      />
                      <Box
                        className="quote-text"
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          textAlign: "left",
                          pr: ["30px", "50px", "15px"],
                          pl: ["30px", "50px", "40px"],
                          py: ["90px", "90px", "150px"],
                          mx: ["20px", "40px", "80px"],
                          "div > *": {
                            color: "blue180",
                          },
                        }}
                      >
                        <Textarea content={o.quote} />
                        <Text
                          variant="styles.h4name"
                          sx={{
                            color: "blue180",
                            pt: ["20px", "35px"],
                            pb: "10px",
                          }}
                          children={o.name}
                        />
                        <Text
                          variant="text.companyName"
                          sx={{ color: "blue180" }}
                          children={o.companyname}
                        />
                      </Box>
                      <Divider
                        color="red"
                        sx={{
                          width: ["20px", "40px", "77px"],
                          my: "auto",
                          display: ["none", "block"],
                          position: "absolute",
                          zIndex: 2,
                          top: "50%",
                          transform: "translateY(-50%)",
                          right: 0,
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
          "&:before": {
            transform: "matrix(-1, 0, 0, 1, 0, 0)",
          },
        }}
      >
        {image && (
          <BackgroundImage
            image={image}
            sx={{
              zIndex: -3,
            }}
          />
        )}
      </Box>
    </Box>
  )
}

export default TestimonialSlider
