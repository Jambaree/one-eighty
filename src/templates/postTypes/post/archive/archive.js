import React, { useState } from "react"
import { graphql } from "gatsby"
import {
  Grid,
  Box,
  Heading,
  Text,
  Link,
  Checkbox,
  Label,
  Input,
} from "theme-ui"
import { ChevronLeft, ChevronRight, Magnify } from "mdi-material-ui"
import moment from "moment"
import produce from "immer"

// import app components
import Layout from "../../../../components/Layout"

const Template = (props) => {
  const {
    data: {
      wpPage: {
        seo,
        template: {
          acf: {
            content: { headline, text },
          },
        },
      },
      allWpPost: { nodes: posts },
      allWpCategory: { nodes: categories },
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

  const [search, setSearch] = useState("")
  const [category, setCategory] = useState([])

  let activePosts = []

  if (search || category.length > 0) {
    activePosts = posts.filter((o) => {
      if (search) {
        if (!o.title.toLowerCase().includes(search.toLowerCase())) {
          return null
        }
      }

      if (category.length > 0) {
        const ids = o?.categories?.nodes.map((p) => p.databaseId)

        if (!category.every((id) => ids.includes(id))) {
          return null
        }
      }

      return o
    })
  } else {
    activePosts =
      posts &&
      posts.slice(
        (page - 1) * postsPerPage,
        (page - 1) * postsPerPage + postsPerPage
      )
  }

  const handleChangeCategory = (e) => {
    const value = parseInt(e.target.value)

    const nextCategory = produce(category, (draft) => {
      const index = draft.findIndex((id) => id === value)

      if (index > -1) {
        draft.splice(index, 1)
      } else {
        draft.push(value)
      }

      return draft
    })

    setCategory(nextCategory)
  }

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
            width: "23px",
            height: "23px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "14px 8px 14px 0",
            borderRadius: "6px",
            backgroundColor: page === i && "coral",

            a: {
              color: page === i ? "white" : "black75",
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
              marginTop: 64,
              marginLeft: 20,
            }}
          >
            {page > 1 && (
              <Link href={basePath + "page/" + (page - 1)}>
                <ChevronLeft
                  style={{
                    fill: "coral",
                    border: "1px solid #DBDBDB",
                    borderRadius: "50%",
                    marginRight: 20,
                  }}
                />
              </Link>
            )}
            {items}

            {page < numberOfPages && (
              <Link href={basePath + "page/" + (page + 1)}>
                <ChevronRight
                  style={{
                    fill: "coral",
                    border: "1px solid #DBDBDB",
                    borderRadius: "50%",
                    marginLeft: 20,
                  }}
                />
              </Link>
            )}
          </ul>
        </nav>
      </Box>
    )
  }

  return (
    <Layout {...props} seo={seo}>
      <Box
        sx={{
          background: (theme) => theme.colors.plumDark,
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
        gap={"45px"}
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
              pb: "5px",
            }}
          >
            Search
          </Text>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: 350,
              height: 47,
            }}
          >
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search what’s new…"
              variant="buttons.entryfield.field"
              sx={{ width: "100%", height: "auto" }}
            />
            <Magnify style={{ marginLeft: "-30px", fill: "coral" }} />
          </Box>

          <Text
            as="p"
            sx={{
              fontFamily: "heading",
              fontSize: 0,
              textTransform: "uppercase",
              letterSpacing: "1.1px",
              mt: 58,
            }}
          >
            Type
          </Text>
          <Box>
            {categories &&
              categories.map((o) => {
                return (
                  <Label
                    key={o.databaseId}
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
                      value={o.databaseId}
                      defaultChecked={category.includes(o.databaseId)}
                      onChange={handleChangeCategory}
                      variant="forms.checkbox"
                    />
                    {o.name}
                  </Label>
                )
              })}
          </Box>
        </Box>
        <Box>
          {activePosts.map((o) => (
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
                <Heading variant="styles.h5" sx={{ fontSize: "6", mb: 18 }}>
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
              headline
              text
            }
          }
        }
      }
    }
    allWpCategory {
      nodes {
        name
        databaseId
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
        categories {
          nodes {
            name
            databaseId
          }
        }
      }
    }
  }
`

export default Template
