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
              <span>
                {/* <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="db164e35-2a0e-4c0f-ab05-f14edc6d4d30"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#db164e35-2a0e-4c0f-ab05-f14edc6d4d30)"
                    width="52"
                    height="24"
                  />
                </svg> */}
              </span>
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
                    {o.title}
                  </Link>
                  <Link to={o.uri} aria-label="">
                    Read more
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
