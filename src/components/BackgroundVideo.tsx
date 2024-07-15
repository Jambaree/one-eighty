"use client"
import React from "react"
import { Container } from "theme-ui"
import BackgroundImage from "./BackgroundImage"

const BackgroundVideo = (props) => {
  const {
    loop = true,
    height = "100%",
    src,
    autoPlay = true,
    muted = true,
    children,
    overlay = 0.2,
    contentStyle,
    center = true,
    placeholder,
    controls,
    ...rest
  } = props

  return (
    <Container
      {...rest}
      sx={{ position: "relative", height: "100%", width: "100%" }}
    >
      {!!src && (
        <video
          id="background-video"
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          controls={controls}
          className="relative w-full h-full object-cover z-10"
        >
          <source src={src} type="video/mp4" />
          <source src={src} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      )}
      {!!placeholder && (
        <BackgroundImage
          image={placeholder.url ? placeholder.url : placeholder}
          className="absolute inset-0"
        />
      )}

      {children && (
        <div
          style={contentStyle}
          className={`absolute inset-0 flex ${
            center ? "justify-center items-center text-center" : ""
          } p-8 text-white`}
        >
          {overlay && (
            <div
              className="absolute inset-0 bg-black"
              style={{ opacity: overlay, zIndex: -1 }}
            />
          )}
          {children}
        </div>
      )}
    </Container>
  )
}

export default BackgroundVideo
