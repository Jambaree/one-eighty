import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import {
  Grid,
  Box,
  Heading,
  Text,
  Checkbox,
  Label,
  Input,
  IconButton,
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
        <Link to={pathname} key={i}>
          <Text
            as="li"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "23px",
              height: "23px",
              margin: "14px 8px 14px 0",
              borderRadius: "6px",

              color: page === i ? "white" : "black75",
              bg: page === i ? "coral" : "white",

              "&:hover": {
                color: "white",
                bg: "coral",
              },
            }}
          >
            {i}
          </Text>
        </Link>
      )
    }

    return (
      <Box>
        <nav>
          <Text
            as="ul"
            sx={{
              width: "auto",
              height: 50,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#FFF",
              borderRadius: 6,
              padding: 10,
              m: ["12px auto", "45px auto 100px auto", "64px 0 0 20px"],
            }}
          >
            {page === 2 ? (
              <Link href={basePath}>
                <ChevronLeft
                  style={{
                    display: "flex",
                    fill: "coral",
                    border: "1px solid",
                    borderColor: "#DBDBDB",
                    borderRadius: "50%",
                    marginRight: 16,
                  }}
                />
              </Link>
            ) : page > 2 ? (
              <Link to={basePath + "page/" + (page - 1)}>
                <ChevronLeft
                  style={{
                    display: "flex",
                    fill: "coral",
                    border: "1px solid",
                    borderColor: "#DBDBDB",
                    borderRadius: "50%",
                    marginRight: 16,
                  }}
                />
              </Link>
            ) : (
              <ChevronLeft
                style={{
                  display: "flex",
                  fill: "white",
                  background: "#DBDBDB",
                  border: "1px solid #DBDBDB",
                  borderRadius: "50%",
                  marginRight: 16,
                }}
                disabled
              />
            )}
            {items}

            {page < numberOfPages ? (
              <Link to={basePath + "page/" + (page + 1)}>
                <ChevronRight
                  style={{
                    display: "flex",
                    fill: "coral",
                    border: "1px solid #DBDBDB",
                    borderRadius: "50%",
                    marginLeft: 8,
                  }}
                />
              </Link>
            ) : (
              <ChevronRight
                style={{
                  display: "flex",
                  fill: "white",
                  background: "#DBDBDB",
                  border: "1px solid #DBDBDB",
                  borderRadius: "50%",
                  marginLeft: 8,
                }}
              />
            )}
          </Text>
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
          alignItems: ["flex-start", "center", "center"],
        }}
      >
        {headline && (
          <Heading
            variant="styles.h1"
            sx={{
              fontSize: "65px",
              color: "almondLight",
              mb: 36,
              pl: ["18px", "18px", "unset"],
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
              px: ["18px", "24px", "12px"],
            }}
          >
            {text}
          </Text>
        )}
      </Box>
      <Grid
        columns={[1, 1, "4fr 8fr"]}
        gap={"45px"}
        sx={{
          p: ["52px 32px 100px 32px", "52px 32px 0px 32px", "118px 138px"],
          backgroundColor: "almondLight",
        }}
      >
        <Box
          sx={{
            maxWidth: ["100%", "80%", "100%"],
            minWidth: 200,
          }}
        >
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
              width: "100%",
              height: 47,
            }}
          >
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search what’s new…"
              variant="buttons.entryfield.field"
              sx={{ width: "100%", height: "auto", maxWidth: 500 }}
            />
            <IconButton
              sx={{ ml: "-34px", fill: "coral", maxHeight: 18, maxWidth: 18 }}
            >
              <Magnify />
            </IconButton>
          </Box>

          <Text
            as="p"
            sx={{
              fontFamily: "heading",
              fontSize: 0,
              textTransform: "uppercase",
              letterSpacing: "1.1px",
              mt: 60,
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
                      my: "20px",
                      fontSize: "15px",
                      height: 16,
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
          {activePosts.length > 0 ? (
            activePosts.map((o) => (
              <Grid
                key={o.id}
                columns={["2fr 6fr", null, "2fr 10fr"]}
                gap={["28px", 3, 3]}
                sx={{
                  pb: 100,
                  m: ["0 auto", "unset", "unset"],
                }}
              >
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

                  {o.acf?.excerpt?.text && (
                    <Text
                      variant="text.introduction"
                      sx={{
                        display: "block",
                        letterSpacing: "-0.23px",
                        lineHeight: "25px",
                        mb: "11px",
                      }}
                    >
                      {o.acf.excerpt.text}
                    </Text>
                  )}

                  <Link
                    to={o.uri}
                    aria-label="Read article"
                    title={o.title}
                    variant="links.hyperlink"
                  >
                    {o.title} →
                  </Link>
                </Box>
              </Grid>
            ))
          ) : (
            <>
              <Heading variant="styles.h5" sx={{ fontSize: "6", mb: 18 }}>
                No Results
              </Heading>
              <Text
                variant="text.introduction"
                sx={{
                  display: "block",
                  letterSpacing: "-0.23px",
                  lineHeight: "25px",
                  mb: "11px",
                }}
              >
                Please try a different query
              </Text>
            </>
          )}
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
        acf {
          excerpt {
            text
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
