import React from "react"
import styled from "@emotion/styled"
import { graphql, useStaticQuery } from "gatsby"
import { IconButton } from "theme-ui"

// import app components
import FacebookIcon from "../icons/facebook.svg"
import TwitterIcon from "../icons/twitter.svg"
import InstagramIcon from "../icons/instagram.svg"
import YoutubeIcon from "../icons/youtube.svg"

const Socials = (props) => {
  const { color } = props

  // const {
  //   themeOptions: {
  //     siteOptions: {
  //       socialMedia: { facebook, instagram, twitter, youtube },
  //     },
  //   },
  // } = useOptionsQuery()

  return (
    <Container>
      {/* {facebook && (
        <Link
          color={color}
          href={facebook}
          target="_blank"
          rel="noreferrer nofollow"
          aria-label="Facebook"
        >
          <IconButton>
            <FacebookIcon />
          </IconButton>
        </Link>
      )}

      {instagram && (
        <Link
          color={color}
          href={instagram}
          target="_blank"
          rel="noreferrer nofollow"
          aria-label="Linkedin"
        >
          <IconButton>
            <InstagramIcon />
          </IconButton>
        </Link>
      )}

      {youtube && (
        <Link
          color={color}
          href={youtube}
          target="_blank"
          rel="noreferrer nofollow"
          aria-label="Linkedin"
        >
          <IconButton>
            <YoutubeIcon />
          </IconButton>
        </Link>
      )}

      {twitter && (
        <Link
          color={color}
          href={twitter}
          target="_blank"
          rel="noreferrer nofollow"
          aria-label="Twitter"
        >
          <IconButton>
            <TwitterIcon />
          </IconButton>
        </Link>
      )} */}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  transform: translateX(-10px);
`

const Link = styled.a`
  text-decoration: none;
  display: inline-block;
  margin: 0 5px;
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;

    path {
      fill: ${(props) => props.color};
    }
  }
`

// const useOptionsQuery = () => {
//   const { wp } = useStaticQuery(
//     graphql`
//       query {
//         wp {
//           themeOptions {
//             siteOptions {
//               socialMedia {
//                 facebook
//                 instagram
//                 twitter
//                 youtube
//               }
//             }
//           }
//         }
//       }
//     `
//   )
//   return wp
// }

export default Socials
