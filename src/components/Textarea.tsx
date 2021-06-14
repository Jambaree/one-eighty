import React from "react"
import Parser from "html-react-parser"
import styled from "@emotion/styled"
import { Themed } from "theme-ui"

const components = {
  h1: <Themed.h1 />,
  h2: <Themed.h2 />,
  h3: <Themed.h3 />,
  h4: <Themed.h4 />,
  h5: <Themed.h5 />,
  h6: <Themed.h6 />,
}

function updateLinksInHTML(html) {
  let newHTML = html
  let url

  const key = `P&gmIv9]]zNSihq`

  // Perform ring swap
  url = new RegExp(`${process.env.GATSBY_WP}/wp-content/`, "gi")
  newHTML = newHTML.replace(url, key)

  // Links
  url = new RegExp(`${process.env.GATSBY_WP}`, "gi")
  newHTML = newHTML.replace(url, "")

  url = new RegExp(`${key}`, "gi")
  newHTML = newHTML.replace(url, `${process.env.GATSBY_WP}/wp-content/`)

  return newHTML
}

const Textarea = (props) => {
  const { content, ...rest } = props

  if (typeof content === "string" || content instanceof String) {
    let contentString = content
      .toString()
      .trim()
      // remove default html tags
      .replace("<html>", "")
      .replace("</html>", "")
      .replace("<head>", "")
      .replace("</head>", "")
      .replace("<body>", "")
      .replace("</body>", "")
      // remove line breaks to fix table errors
      .replace(/(\r\n|\n|\r)/gm, "")
      // wrap table into div to make it responsive
      .replace(/<table/g, "<div class='table-wrapper'><table")
      .replace(/\/table>/g, "/table></div>")
      // wrap iframe into div to make it responsive
      .replace(/<iframe/g, "<div class='iframe-wrapper'><iframe")
      .replace(/\/iframe>/g, "/iframe></div>")

    contentString = updateLinksInHTML(contentString)

    const parse = (string) => {
      return (
        typeof string === "string" &&
        Parser(string, {
          replace: (domNode) => {
            if (domNode.type === "tag" && components[domNode.name]) {
              return React.cloneElement(components[domNode.name], {
                children: domNode.children.map((o) => parse(o.data)),
              })
            }
          },
        })
      )
    }

    return <Container {...rest}>{parse(contentString)}</Container>
  } else {
    return null
  }
}

const Container = styled.div`
  clear: both;

  &:after {
    content: "";
    display: block;
    clear: both;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    &:first-child {
      margin-top: 0;
    }

    &:not(:first-child) {
      margin-top: 2rem;
    }
  }

  p {
    &:first-child {
      margin-top: 0;
    }

    &:not(:first-child) {
      margin-top: 1rem;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  a {
    text-decoration: underline;
    font-style: italic;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.coral};
  }

  figcaption {
    font-size: 12px;
    line-height: 16px;
    text-transform: uppercase;
  }

  ul,
  ol {
    margin-left: 20px;
    padding-left: 0;
  }

  ul li {
    list-style: disc;
  }

  img {
    margin-bottom: 20px;
    max-width: 100%;
    height: auto;

    &.alignright {
      float: right;
      margin-left: 20px !important;
    }

    &.alignleft {
      float: left;
      margin-right: 20px !important;
    }

    &.size-medium {
      width: 300px;
    }

    &.size-thumbnail {
      width: 150px;
    }

    &.size-full,
    &.fullwidth {
      width: 100%;
    }

    @media (max-width: 420px) {
      width: 100% !important;
    }
  }

  .table-wrapper {
    max-width: 100%;
    flex: 1;
    overflow-x: auto;
  }

  table {
    border-collapse: separate;
    border-spacing: 2px;
    margin-left: 0;
    margin-right: 0;
    margin-top: 1.6rem;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.6rem;
    font-size: 1rem;
    line-height: 1.6rem;
    border-collapse: collapse;
    width: 100%;
  }

  td {
    display: table-cell;
    vertical-align: inherit;
  }

  tr {
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
  }

  td,
  th {
    text-align: left;
    font-feature-settings: "tnum";
    padding-left: 1.06667rem;
    padding-right: 1.06667rem;
    padding-top: 0.8rem;
    padding-bottom: calc(0.8rem - 1px);
  }

  th:first-of-type,
  td:first-of-type {
    padding-left: 0.8rem;
  }

  .iframe-wrapper {
    overflow: hidden;
    padding-top: 56.25%;
    position: relative;

    iframe {
      border: 0;
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
    }
  }
`

export default Textarea
