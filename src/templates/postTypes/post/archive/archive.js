import React from "react"
import { graphql, Link } from "gatsby"

// import app components
import Layout from "../../../../components/Layout"

const Template = (props) => {
  const {
    data: {
      wpPage: {
        seo,
        template: { acf },
      },
      allWpPost: { nodes: posts },
    },
    pageContext: {
      pagination: {
        basePath,
        page,
        // numberOfPosts,
        numberOfPages,
        postsPerPage,
      },
    },
  } = props

  const renderPagination = () => {
    const items = []

    if (numberOfPages < 2) {
      return null
    }

    for (let i = 1; i <= numberOfPages; i++) {
      let pathname = basePath

      if (i > 1) {
        pathname = `${basePath}page/${i}`
      }

      items.push(
        <li key={i}>
          <Link to={pathname}>{i}</Link>
        </li>
      )
    }

    return (
      <div>
        <nav>
          <ul>{items}</ul>
        </nav>
      </div>
    )
  }

  return (
    <Layout {...props} seo={seo}>
      <div>
        <div>
          <div>{acf?.content?.tag && <p>{acf.content.tag}</p>}</div>
          {acf?.content?.headline && (
            <h2>
              <span>{acf.content.headline}</span>
            </h2>
          )}
          {acf?.content?.text && <p>{acf.content.text}</p>}
        </div>
        <div>
          {posts &&
            posts
              .slice(
                (page - 1) * postsPerPage,
                (page - 1) * postsPerPage + postsPerPage
              )
              .map((o) => (
                <div key={o.id}>
                  <p>{o.date}</p>
                  <Link to={o.uri} aria-label="Read article" title={o.title}>
                    Read More →
                  </Link>
                </div>
              ))}
        </div>
        {renderPagination()}
      </div>
    </Layout>
  )
}

export const Query = graphql`
  query PostArchive($id: String!) {
    wpPage(id: { eq: $id }) {
      id
      title
      seo {
        title
        metaDesc
        opengraphImage {
          sourceUrl
        }
      }
      template {
        ... on WpTemplate_ArchivePost {
          templateName
          acf {
            content {
              tag
              headline
              text
            }
          }
        }
      }
    }
    allWpPost {
      nodes {
        id
        title
        uri
        date
        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(width: 400, placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
  }
`

export default Template
