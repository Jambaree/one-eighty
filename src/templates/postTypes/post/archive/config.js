const config = {
  id: "archive",
  postTypeID: "post",
  label: "Press Room",
  query: `{
      allWpCategory: categories {
        nodes {
          name
          databaseId
        }
      }
      allWpPost: posts(first: 999) {
        nodes {
          id
          title
          uri
          date
          featuredImage {
            node {
              altText
              srcSet
              sourceUrl
              mediaType
              sizes
              mediaDetails {
                width
                height
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
    }`,
  fields: [
    {
      id: "header",
      global: true,
    },
    {
      id: "content",
      label: "Content",
      type: "group",
      fields: [
        {
          id: "headline",
          type: "text",
          label: "Headline",
          defaultValue: "",
        },
        {
          id: "text",
          type: "text",
          label: "Text",
          defaultValue: "",
        },
        {
          id: "bannerbackground",
          type: "select",
          label: "Shapes or Solid",
          instructions: "Choose solid background or include shapes",
          options: [
            {
              name: "Solid",
              value: true,
            },
            {
              name: "Shapes",
              value: false,
            },
          ],
        },
      ],
    },
    {
      id: "footer",
      global: true,
    },
  ],
}

export default config
