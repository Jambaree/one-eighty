import React from "react"
import { graphql } from "gatsby"

// import app components
import Edges from "../../../components/Edges"

const Template = (props) => {
  const {
    data: {
      wpCategory: { name },
    },
  } = props

  return (
    <>
      <Edges size="sm">{name}</Edges>
    </>
  )
}

export const Query = graphql`
  query Category($slug: String!) {
    wpCategory(slug: { eq: $slug }) {
      name
      posts {
        nodes {
          title
        }
      }
    }
  }
`

export default Template
