import React from "react"
import styled from "@emotion/styled"

// import app components
import FacebookIcon from "../icons/facebook.svg"
import TwitterIcon from "../icons/twitter.svg"
import InstagramIcon from "../icons/instagram.svg"
import YoutubeIcon from "../icons/youtube.svg"

interface Props {
  socials?: {
    instagram?: string
    facebook?: string
    youtube?: string
    twitter?: string
  }
}

const Socials: React.FC<Props> = (props: Props) => {
  const {
    socials: { instagram, facebook, youtube, twitter },
  } = props

  return (
    <Container>
      {facebook && (
        <Link
          href={facebook}
          target="_blank"
          rel="noreferrer nofollow"
          aria-label="Facebook"
        >
          <FacebookIcon />
        </Link>
      )}

      {instagram && (
        <Link
          href={instagram}
          target="_blank"
          rel="noreferrer nofollow"
          aria-label="Linkedin"
        >
          <InstagramIcon />
        </Link>
      )}

      {youtube && (
        <Link
          href={youtube}
          target="_blank"
          rel="noreferrer nofollow"
          aria-label="Linkedin"
        >
          <YoutubeIcon />
        </Link>
      )}

      {twitter && (
        <Link
          href={twitter}
          target="_blank"
          rel="noreferrer nofollow"
          aria-label="Twitter"
        >
          <TwitterIcon />
        </Link>
      )}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
`

const Link = styled.a`
  text-decoration: none;
  display: inline-block;
  margin-right: 18px;
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;

    path {
      fill: ${(props) => props.color};
    }
  }
`

export default Socials
