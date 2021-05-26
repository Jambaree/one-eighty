const config = {
  id: "archive",
  postTypeID: "post",
  label: "Posts",
  query: `{
      allWpPost: posts {
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
          id: "backgroundImage",
          type: "image",
          label: "Background Image",
        },
        {
          id: "tag",
          type: "text",
          label: "Tag",
          defaultValue: "",
        },
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
      ],
    },
    {
      id: "footer",
      global: true,
    },
  ],
}

export default config
