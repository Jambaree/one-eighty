import React from "react"
import styled from "@emotion/styled"

const YouTube = (props) => {
  const { video, ...rest } = props

  if (!video || !video.includes("youtu")) {
    return
  }

  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
  const match = video.match(regExp)

  const videoId = match && match[7].length === 11 ? match[7] : false

  if (!videoId) {
    return
  }

  return (
    <Container {...rest}>
      <Inner>
        <Embed
          src={`https://www.youtube.com/embed/` + videoId + `?autoplay=1&rel=0`}
          frameBorder={0}
        />
      </Inner>
    </Container>
  )
}

export default YouTube

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

const Inner = styled.div`
  position: relative;
  height: 0;
  width: 100%;
  height: 100%;
  max-width: 712px;
  max-height: 400px;
`

const Embed = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
