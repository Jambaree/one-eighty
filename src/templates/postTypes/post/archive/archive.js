import React from "react"
import { graphql } from "gatsby"
// import { GatsbyImage } from "jam-cms"
import { Grid, Box, Heading, Text, Link } from "theme-ui"
import { ChevronLeft, ChevronRight } from "mdi-material-ui"

// import app components
import Layout from "../../../../components/Layout"
import Search from "../../../../components/Search"

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

  console.log(posts)

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
        <li
          key={i}
          style={{
            width: "23px",
            height: "23px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "14px 8px 14px 0",
          }}
        >
          <Link to={pathname}>{i}</Link>
        </li>
      )
    }

    return (
      <Box>
        <nav>
          <ul
            style={{
              width: 304,
              height: 50,
              display: "flex",
              alignItems: "center",
              backgroundColor: "#FFF",
              borderRadius: 6,
              padding: 10,
            }}
          >
            <ChevronLeft
              style={{
                fill: "coral",
                border: "1px solid #DBDBDB",
                borderRadius: "50%",
                marginRight: 20,
              }}
            />
            {items}
            <ChevronRight
              style={{
                fill: "coral",
                border: "1px solid #DBDBDB",
                borderRadius: "50%",
                marginLeft: 20,
              }}
            />
          </ul>
        </nav>
      </Box>
    )
  }

  return (
    <Layout {...props} seo={seo}>
      <Box
        sx={{
          border: "2px solid purple",
          height: 353,
          backgroundImage: acf.backgroundImage || null,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {acf?.content?.headline && (
          <Heading variant="styles.h1">{acf.content.headline}</Heading>
        )}
        {acf?.content?.text && (
          <Text variant="text.introduction">{acf.content.text}</Text>
        )}
      </Box>
      <Grid
        columns={[1, null, "5fr 7fr"]}
        sx={{ p: "118px 138px", backgroundColor: "almondLight" }}
      >
        <Box>
          <Text
            sx={{
              fontFamily: "fonts.heading",
              fontSize: 0,
              textTransform: "uppercase",
              letterSpacing: "1.1px",
              pl: "10px",
            }}
          >
            Search
          </Text>
          <Search />
        </Box>
        <Box>
          {posts &&
            posts
              .slice(
                (page - 1) * postsPerPage,
                (page - 1) * postsPerPage + postsPerPage
              )
              .map((o) => (
                <Grid key={o.id} columns={["2fr 10fr"]} gap={3} sx={{ pb: 36 }}>
                  <Box>
                    <Text>{o.date}</Text>
                  </Box>
                  <Box>
                    <Heading variant="styles.h5" sx={{ fontSize: "6" }}>
                      {o.title}
                    </Heading>
                    <Link
                      href={o.uri}
                      aria-label="Read article"
                      title={o.title}
                      variant="links.hyperlink"
                    >
                      Read more →
                    </Link>
                  </Box>
                </Grid>
              ))}
          {renderPagination()}
        </Box>
      </Grid>
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
              backgroundimage {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData(
                      width: 10
                      tracedSVGOptions: { background: "", color: "" }
                      placeholder: TRACED_SVG
                      layout: FULL_WIDTH
                    )
                  }
                }
              }
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
