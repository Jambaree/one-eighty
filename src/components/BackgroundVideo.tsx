"use client"
import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/css"
import { Container } from "theme-ui"

// import app components
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
        <Video
          id="background-video"
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          controls={controls}
        >
          <source src={src} type="video/mp4" />
          <source src={src} type="video/ogg" />
          Your browser does not support the video tag.
        </Video>
      )}
      {!!placeholder && (
        <PlaceholderImage
          position="absolute"
          bg={placeholder.url ? placeholder.url : placeholder}
        />
      )}

      {children && (
        <Content style={contentStyle} center={center} overlay={overlay}>
          {children}
        </Content>
      )}
    </Container>
  )
}

const fullSize = css`
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`

const Video = styled.video`
  position: relative;
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: 1;
`

const Content = styled.div`
  ${(props) =>
    !!props.overlay &&
    css`
      &::after {
        content: "";
        position: absolute;
        ${fullSize}
        background: rgba(0,0,0, ${props.overlay});
        z-index: -1;
      }
    `}
  ${(props) =>
    props.center &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-align: center;
    `}

  position: absolute;
  ${fullSize}
  height: 100%;
  z-index: 1;
  padding: 30px;
  color: white;
`

const PlaceholderImage = styled(BackgroundImage)`
  z-index: 0;
`

export default BackgroundVideo
