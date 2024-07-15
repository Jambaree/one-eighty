"use client"
import React from "react"
import styled from "@emotion/styled"
import Image from "next/image"

const BackgroundImage = (props) => {
  const {
    image,
    alt = "",
    backgroundSize,
    verticalAlignment,
    animated,
    ...rest
  } = props

  return (
    <Container {...rest} animated={animated}>
      {image && (
        <Image
          src={image.url}
          fill
          priority
          style={{
            objectFit: backgroundSize || `cover`,
            objectPosition: `50% ${verticalAlignment || "50%"}`,
          }}
          alt={alt}
          {...rest}
        />
      )}
    </Container>
  )
}

const Container = styled.div`
  z-index: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  overflow: hidden;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(
      0,
      0,
      0,
      ${(props) => (!!props.darkness ? props.darkness : 0.15)}
    );
    opacity: ${(props) => (!props.overlay ? 0 : 1)};
  }
`

export default BackgroundImage
