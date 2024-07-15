"use client"
import React from "react"
import { IconButton } from "theme-ui"
import FacebookIcon from "@/icons/facebook.svg"
import TwitterIcon from "@/icons/twitter.svg"
import InstagramIcon from "@/icons/instagram.svg"
import LinkedIn from "@/icons/linkedin.svg"
import Youtube from "@/icons/youtube.svg"
import Link from "next/link"

const Socials: React.FC<Props> = (props: Props) => {
  const {
    color,
    socials: { instagram, facebook, linkedin, twitter, youtube },
  } = props

  return (
    <div className="flex transform -translate-x-1.5">
      {facebook && (
        <LinkButton color={color} href={facebook} ariaLabel="Facebook">
          <FacebookIcon />
        </LinkButton>
      )}
      {instagram && (
        <LinkButton color={color} href={instagram} ariaLabel="Instagram">
          <InstagramIcon />
        </LinkButton>
      )}
      {linkedin && (
        <LinkButton color={color} href={linkedin} ariaLabel="LinkedIn">
          <LinkedIn />
        </LinkButton>
      )}
      {youtube && (
        <LinkButton color={color} href={youtube} ariaLabel="YouTube">
          <Youtube />
        </LinkButton>
      )}
      {twitter && (
        <LinkButton color={color} href={twitter} ariaLabel="Twitter">
          <TwitterIcon />
        </LinkButton>
      )}
    </div>
  )
}

const LinkButton = ({ href, color, children, ariaLabel }) => (
  <Link
    href={href}
    target="_blank"
    rel="noreferrer nofollow"
    aria-label={ariaLabel}
    className="inline-block no-underline m-0 group"
  >
    <IconButton className="hover:cursor-pointer">
      {React.cloneElement(children, {
        className: "transition-colors",
        style: { fill: color },
        onMouseEnter: (e) => (e.currentTarget.style.fill = "#E0092D"),
        onMouseLeave: (e) => (e.currentTarget.style.fill = color),
      })}
    </IconButton>
  </Link>
)

export default Socials
