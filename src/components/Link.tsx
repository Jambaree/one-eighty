import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Link as ThemeLink } from "theme-ui"

// import app components
import formatLink from "../utils/formatLink"

const isUrlExternal = (link) => {
  if (!link || link === null || link === undefined) {
    return undefined
  } else if (link.includes("http")) {
    return true
  } else {
    return false
  }
}

const Link = ({ to, ...rest }) => {
  if (!to || to === null || to === 0) {
    return (
      <div style={{ textDecoration: "none", color: "inherit" }} {...rest} />
    )
  } else if (isUrlExternal(to)) {
    return (
      <ThemeLink
        sx={{ textDecoration: "none", color: "inherit" }}
        href={to}
        target="_blank"
        rel="noopener"
        {...rest}
      />
    )
  } else if (!isUrlExternal(to)) {
    return (
      <GatsbyLink
        style={{ textDecoration: "none", color: "inherit" }}
        to={decodeURI(formatLink(to))}
        {...rest}
      />
    )
  } else return null
}

export default Link
