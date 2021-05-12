import React from "react"
import { graphql } from "gatsby"

// import app components
import Layout from "../../../../components/Layout"
import textimage from "../../../../components/textImage/TextImage"

const blocks = {
  textimage,
}

const Template = (props) => {
  const {
    data: {
      wpPage: {
        template: { acf },
      },
    },
  } = props

  return (
    <Layout {...props}>
      {acf?.content?.flex &&
        acf.content.flex.map(
          ({ id: fieldId, fieldGroupName, ...rest }, index) => {
            const id = fieldId || fieldGroupName?.split("_").pop().toLowerCase()

            const Component = blocks?.[id]
            return Component && <Component key={index} {...rest} />
          }
        )}
    </Layout>
  )
}

export const CollectionQuery = graphql`
  query DefaultPage($id: String!) {
    wpPage(id: { eq: $id }) {
      title
      slug
      uri
      #template {
      #  ... on WpDefaultTemplate {
      #
      #  }
      #}
    }
  }
`

export default Template
