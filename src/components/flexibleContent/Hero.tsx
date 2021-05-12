/** @jsx jsx */
import { jsx } from "theme-ui"

import styled from "@emotion/styled"
import { Heading, Themed } from "theme-ui"

// import app components
import Edges from "../Edges"
import Button from "../Button"
import BackgroundImage from "../BackgroundImage"
import BackgroundVideo from "../BackgroundVideo"

const Hero = (props) => {
  const { headline, button, backgroundImage, backgroundVideo } = props

  return (
    <Container>
      <Edges size="lg">
        <Content>
          {headline && (
            <Heading
              as="h1"
              variant="styles.h1"
              children={headline}
              sx={{
                width: "100%",
                textAlign: "center",
                marginBottom: 20,
                color: "#fff",
              }}
            />
          )}
          {button && <Button to={button.url} children={button.title} />}
        </Content>
      </Edges>

      <MediaContainer>
        {(backgroundVideo?.localFile?.publicURL ||
          backgroundVideo?.mediaItemUrl) && (
          <BackgroundVideoContainer>
            <BackgroundVideo
              src={
                backgroundVideo?.localFile?.publicURL ||
                backgroundVideo?.mediaItemUrl // fallback to mediaItemUrl for preview
              }
            />
          </BackgroundVideoContainer>
        )}

        {backgroundImage && (
          <BackgroundImage image={backgroundImage} sx={{ zIndex: 1 }} />
        )}
      </MediaContainer>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  height: ${({ theme: { headerHeight } }) => `calc(100vh - ${headerHeight}px)`};
  display: flex;
  align-items: center;
`

const MediaContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
`

const BackgroundVideoContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
`

const Content = styled.div`
  position: relative;
  z-index: 4;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export default Hero
