"use client"
import React from "react"
import styled from "@emotion/styled"

import { IconButton } from "theme-ui"

// import app components
import FacebookIcon from "@/icons/facebook.svg"
import TwitterIcon from "@/icons/twitter.svg"
import InstagramIcon from "@/icons/instagram.svg"
import LinkedIn from "@/icons/linkedin.svg"
import Youtube from "@/icons/youtube.svg"
import Link from "next/link"

import theme from "../theme"

const Socials: React.FC<Props> = (props: Props) => {
  const {
    color,
    socials: { instagram, facebook, linkedin, twitter, youtube },
  } = props

  return (
    <Container>
      {facebook && (
        <LinkButton
          color={color}
          href={facebook}
          target="_blank"
          rel="noreferrer nofollow"
          aria-label="Facebook"
        >
          <IconButton
            sx={{
              "&:hover": {
                cursor: "pointer",
                svg: {
                  path: {
                    fill: "red",
                  },
                },
              },
            }}
          >
            <FacebookIcon />
          </IconButton>
        </LinkButton>
      )}

      {instagram && (
        <LinkButton
          color={color}
          href={instagram}
          target="_blank"
          rel="noreferrer nofollow"
          aria-label="Linkedin"
        >
          <IconButton
            sx={{
              "&:hover": {
                cursor: "pointer",
                svg: {
                  path: {
                    fill: "red",
                  },
                },
              },
            }}
          >
            <InstagramIcon />
          </IconButton>
        </LinkButton>
      )}

      {linkedin && (
        <LinkButton
          color={color}
          href={linkedin}
          target="_blank"
          rel="noreferrer nofollow"
          aria-label="Linkedin"
        >
          <IconButton
            sx={{
              "&:hover": {
                cursor: "pointer",
                svg: {
                  path: {
                    fill: "red",
                  },
                },
              },
            }}
          >
            <LinkedIn />
          </IconButton>
        </LinkButton>
      )}
      {youtube && (
        <LinkButton
          color={color}
          href={linkedin}
          target="_blank"
          rel="noreferrer nofollow"
          aria-label="Linkedin"
        >
          <IconButton
            sx={{
              "&:hover": {
                cursor: "pointer",
                svg: {
                  path: {
                    fill: "red",
                  },
                },
              },
            }}
          >
            <Youtube />
          </IconButton>
        </LinkButton>
      )}

      {twitter && (
        <LinkButton
          color={color}
          href={twitter}
          target="_blank"
          rel="noreferrer nofollow"
          aria-label="Twitter"
        >
          <IconButton>
            <TwitterIcon />
          </IconButton>
        </LinkButton>
      )}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  transform: translateX(-5px);
  &:hover {
    cursor: pointer;
  }
`

const LinkButton = styled(Link)`
  text-decoration: none;
  display: inline-block;
  margin: 0;
  &:hover {
    cursor: pointer;
    svg {
      path {
        fill: ${theme.colors.red};
      }
    }
  }
  svg {
    path {
      fill: ${(props) => props.color};
    }
    &:hover {
      cursor: pointer;
    }
  }
`

export default Socials
