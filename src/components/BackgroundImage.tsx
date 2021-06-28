import React from "react"
import styled from "@emotion/styled"
import { GatsbyImage } from "jam-cms"

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
        <GatsbyImage
          image={image}
          style={{
            objectFit: backgroundSize || `cover`,
            objectPosition: `50% ${verticalAlignment || "50%"}`,
          }}
          objectFit={backgroundSize || `cover`}
          objectPosition={`50% ${verticalAlignment || "50%"}`}
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

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }

  ${(props) =>
    props.animated &&
    `
    .gatsby-image-wrapper {
      transition: ease all 0.8s;
      transform: scale(1);
    }

    &:hover {
      .gatsby-image-wrapper {
        transform: scale(1.02);
      }
    }
  `}
`

export default BackgroundImage
