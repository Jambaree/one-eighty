import React from "react"
import { Box, Heading, Text, IconButton } from "theme-ui"
import Slider from "react-slick"
import Parser from "html-react-parser"

// import app components
import "../../styles/slick/slick.css"
import "../../styles/slick/slick-theme.css"
import Quote from "../quote/Quote"
import BackgroundImage from "../BackgroundImage"

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
    customPaging: () => (
      <div
        className="clickableArea"
        style={{
          padding: "6px",
        }}
      >
        <div
          className="current"
          style={{
            width: "8px",
            height: "8px",
            color: "#848484",
            border: "0.3px solid",
            backgroundColor: "white",
            borderRadius: "100%",
          }}
        />
      </div>
    ),
  }

  return (
    <Box sx={{ position: "relative", minHeight: "500px" }}>
      <Slider {...settings}>
        {slide &&
          slide.map((o, i) => {
            return (
              <Box
                sx={{
                  display: "grid",
                  zIndex: 1,
                  gridTemplateColumns: "1fr 1fr",
                }}
                key={i}
              >
                <Box sx={{ gridColumnStart: 2, gridColumnEnd: 3 }}>
                  {o.quote && <Quote background={"none"} text={o.quote} />}
                </Box>
              </Box>
            )
          })}
      </Slider>

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
