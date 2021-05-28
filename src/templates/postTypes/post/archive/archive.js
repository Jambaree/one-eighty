import React, { useState } from "react"
import { graphql } from "gatsby"
import { Grid, Box, Heading, Text, Link, Checkbox, Label } from "theme-ui"
import { ChevronLeft, ChevronRight } from "mdi-material-ui"
import moment from "moment"
import produce from "immer"

// import app components
import Layout from "../../../../components/Layout"
import Search from "../../../../components/Search"

const Template = (props) => {
  const {
    data: {
      wpPage: {
        seo,
        template: {
          acf: {
            content: { headline, text, backgroundimage },
          },
        },
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

  const [currentPage, setPage] = useState(1)
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState([])

  const handleChange = (e) => {
    if (!category.includes(e.target.name)) {
      setCategory([...category, e.target.name])
    } else {
      setCategory(category.filter((item) => item !== e.target.name))
    }
  }

  console.log(category)
  const prevPage = (e) => {
    if (currentPage > 2) {
      setPage(currentPage - 1)
      // props.history.push(`${basePath}page/${currentPage}`)
    } else if (currentPage === 2) {
      setPage(currentPage - 1)
      // props.history.push(`${basePath}`)
    } else {
      console.log("No previous page")
    }
  }

  console.log(`current page: ${currentPage}`)

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
        <Text
          key={i}
          as="li"
          sx={{
            color: currentPage === i ? "white" : "black75",
            width: "23px",
            height: "23px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "14px 8px 14px 0",
            borderRadius: "6px",
            backgroundColor: currentPage === i && "coral",

            a: {
              color: "black75",
            },

            "&:hover": {
              backgroundColor: "coral",

              a: {
                color: "white",
              },
            },
          }}
        >
          <Link href={pathname}>{i}</Link>
        </Text>
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
            <Link href={basePath + "page/" + (currentPage - 1)}>
              <ChevronLeft
                style={{
                  fill: "coral",
                  border: "1px solid #DBDBDB",
                  borderRadius: "50%",
                  marginRight: 20,
                }}
                // onClick={(e) => prevPage(e)}
              />
            </Link>
            {items}
            <Link href={basePath + "page/" + (currentPage + 1)}>
              <ChevronRight
                style={{
                  fill: "coral",
                  border: "1px solid #DBDBDB",
                  borderRadius: "50%",
                  marginLeft: 20,
                }}
              />
            </Link>
          </ul>
        </nav>
      </Box>
    )
  }

  return (
    <Layout {...props} seo={seo}>
      <Box
        sx={{
          backgroundImage: [`url(${backgroundimage?.url})`],
          height: 353,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {headline && (
          <Heading
            variant="styles.h1"
            sx={{
              fontSize: "65px",
              color: "almondLight",
              mb: 36,
            }}
          >
            {headline}
          </Heading>
        )}
        {text && (
          <Text
            variant="text.introduction"
            sx={{
              color: "almondLight",
              fontSize: "18px",
            }}
          >
            {text}
          </Text>
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
          <Search setSearch={setSearch} />
          <Text
            sx={{
              fontFamily: "fonts.heading",
              fontSize: 0,
              textTransform: "uppercase",
              letterSpacing: "1.1px",
            }}
          >
            Type
          </Text>
          <Box>
            <Label
              variant="text.paragraph"
              sx={{
                display: "flex",
                alignItems: "center",
                my: "8px",
                fontSize: "15px",
                lineHeight: "35px",
              }}
            >
              <Checkbox
                id={1}
                value="press-releases"
                defaultChecked={false}
                name="press-releases"
                onChange={handleChange}
                variant="forms.checkbox"
              />
              Press Releases
            </Label>
            <Label
              variant="text.paragraph"
              sx={{
                display: "flex",
                alignItems: "center",
                mb: "8px",
                fontSize: "15px",
                lineHeight: "35px",
              }}
            >
              <Checkbox
                id={2}
                value="case-studies"
                defaultChecked={false}
                name="case-studies"
                onChange={handleChange}
                variant="forms.checkbox"
              />
              Case Studies
            </Label>
            <Label
              variant="text.paragraph"
              sx={{
                display: "flex",
                alignItems: "center",
                mb: "8px",
                fontSize: "15px",
                lineHeight: "35px",
              }}
            >
              <Checkbox
                id={3}
                value="news"
                defaultChecked={false}
                name="news"
                onChange={handleChange}
                variant="forms.checkbox"
              />
              News
            </Label>
          </Box>
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
                    <Text
                      sx={{
                        fontFamily: "fonts.body",
                        textTransform: "uppercase",
                        color: "plumLight",
                        letterSpacing: "1.1px",
                        fontSize: "11px",
                      }}
                    >
                      {moment(o.date).format("DD MMM")}
                    </Text>
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
          {!search && category.length === 0 && renderPagination()}
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
