/** @jsx jsx */
import { jsx } from "theme-ui"
import styled from "@emotion/styled"
import { Heading, Text, Themed } from "theme-ui"
import { GatsbyImage } from "jam-cms"

// import app components
import Edges from "../Edges"
import Button from "../Button"

const Hero = (props) => {
  const { headline, link, image, text } = props

  return (
    <Container>
      <Edges size="lg">
        <MediaContainer>
          {image && (
            <GatsbyImage
              image={image}
              alt={image.altText}
              sx={{ top: 100, height: [435, "unset", "unset"] }}
            />
          )}
        </MediaContainer>
        <Content>
          {headline && (
            <Heading
              variant="styles.h1"
              sx={{ fontWeight: "heading", mb: "4" }}
              children={headline}
            />
          )}
          {text && (
            <Text variant="introduction" children={text} sx={{ mb: "4" }} />
          )}
          {link && <Button to={link.url} children={link.title} />}
        </Content>
      </Edges>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 94px);
  height: auto;
  /* ${({ theme: { headerHeight } }) => `calc(100vh - ${headerHeight}px)`}; */
  margin: 24px 0;
  @media (max-width: 768px) {
    padding: 12px;
  }
`

const MediaContainer = styled.div`
  left: 0;
  z-index: 2;
  height: 600px;
  @media (max-width: 1024px) {
    height: 400px;
  }
  @media (max-width: 767px) {
    height: 600px;
  }
`

const Content = styled.div`
  z-index: 4;
  max-width: 600px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 24px auto;
  height: 550px;
  @media (max-width: 1024px) {
    height: 480px;
    margin-bottom: 0;
  }
  @media (max-width: 767px) {
    margin-bottom: 36px;
    text-align: left;
    align-items: flex-start;
    height: 360px;
  }
`

export default Hero
