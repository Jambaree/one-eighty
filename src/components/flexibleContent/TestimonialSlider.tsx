import React from "react"
import { Box, Heading, Text, IconButton } from "theme-ui"
import Slider from "react-slick"
import { FormatQuoteOpen } from "mdi-material-ui"

// import app components
import Edges from "../Edges"
import BackgroundImage from "../BackgroundImage"
import "../../styles/slick/slick.css"
import "../../styles/slick/slick-theme.css"

const TestimonialSlider = (props) => {
  const { testimonialSlider } = props

  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    autoplaySpeed: 8000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
  }

  return (
    <Box
      sx={{
        width: ["350px", "600px", "800px"],
        m: "0 auto",
        ".slick-dots": {
          bottom: 20,
          textAlign: "right",
        },
        ".slick-dots li": {
          m: 0,
          width: 16,
        },
        ".slick-dots li button:before": {
          fontSize: 30,
        },
        ".slick-dots .slick-active button:before": {
          color: "primary",
        },
      }}
    >
      <Edges size="md">
        <Slider {...settings}>
          {testimonialSlider &&
            testimonialSlider.map((o, i) => {
              return (
                <Box key={i}>
                  <Box sx={{ position: "relative", height: 150 }}>
                    {o.image && (
                      <BackgroundImage image={o.image} imageSize="cover" />
                    )}
                  </Box>
                  {o.headline && (
                    <Heading
                      children={o.headline}
                      sx={{ textAlign: "center", mb: 24 }}
                    />
                  )}
                  {o.subheading && (
                    <Text
                      children={o.subheading}
                      sx={{ textAlign: "center", display: "block", mb: 24 }}
                    />
                  )}
                  <IconButton >
                    <FormatQuoteOpen />
                  </IconButton>
                  <Box sx={{ pl: 24 }}>
                    {o.text && (
                      <Text
                        children={o.text}
                        sx={{ display: "block", mb: 24 }}
                      />
                    )}
                    {o.reviewer && (
                      <Text children={o.reviewer} sx={{ display: "block" }} />
                    )}
                    {o.position && <Text children={o.position} />}
                  </Box>
                </Box>
              )
            })}
        </Slider>
      </Edges>
    </Box>
  )
}

export default TestimonialSlider
