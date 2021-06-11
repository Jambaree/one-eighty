import React from "react"
import { graphql, Link } from "gatsby"

// import app components
import Layout from "../../../../components/Layout"
import TextEditor from "../../../../components/textEditor/TextEditor"

const Template = (props) => {
  const {
    data: {
      wpPost: { title, date, acf, categories, seo },
    },
  } = props

  return (
    <Layout {...props} seo={seo}>
      <div>
        <div>
          {categories?.nodes.map((o) => (
            <Link to={o.uri} key={o.databaseId}>
              {o.name}
            </Link>
          ))}

          <h2>{title}</h2>
          <p>{date}</p>
          <hr />
        </div>

        {acf?.text && <TextEditor {...acf.text} />}
      </div>
    </Layout>
  )
}

export const Query = graphql`
  query PostDefault($id: String!) {
    wpPost(id: { eq: $id }) {
      title
      categories {
        nodes {
          databaseId
          name
          uri
        }
      }
      seo {
        title
        metaDesc
        opengraphImage {
          sourceUrl
        }
      }
      acf {
        text {
          fieldGroupName
          flex {
            ... on WpPost_Acf_Text_Flex_Text {
              fieldGroupName
              text
            }
            ... on WpPost_Acf_Text_Flex_Textimage {
              alignment
              fieldGroupName
              image {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 600, placeholder: BLURRED)
                  }
                }
              }
              text
            }
            ... on WpPost_Acf_Text_Flex_Gallery {
              columns
              fieldGroupName
              gallery {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 600, placeholder: BLURRED)
                  }
                }
              }
            }
            ... on WpPost_Acf_Text_Flex_Embed {
              fieldGroupName
              url
            }
            ... on WpPost_Acf_Text_Flex_Quote {
              author
              fieldGroupName
              position
              text
            }
          }
        }
      }
    }
  }
`

export default Template
