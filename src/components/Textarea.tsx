"use client"
import React from "react"
import styled from "@emotion/styled"
import Parser from "html-react-parser"
import theme from "../theme"

const Textarea = (props) => {
  const { content, ...rest } = props

  return (
    <Container {...rest}>
      <div children={Parser(content)} />
    </Container>
  )
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
    &:first-of-type {
      margin-top: 40px;
    }

    &:not(:first-of-type) {
      margin-top: 2rem;
    }
  }

  p {
    margin-bottom: 1rem;

    &:first-of-type {
      margin-top: 30px;
    }

    &:not(:first-of-type) {
      margin-top: 1rem;
    }

    &:last-child {
      margin-bottom: 30px !important;
    }
  }

  a {
    text-decoration: underline;
    color: ${theme.colors.blue180}!important;

    &:hover {
      color: ${theme.colors.red} !important;
    }
    &:focus {
      color: ${theme.colors.red};
    }
    &:disabled {
      color: ${theme.colors.textLightGray};
    }
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
    margin-top: 2rem;

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
