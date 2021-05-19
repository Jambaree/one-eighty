const config = {
  id: "cards",
  label: "Cards",
  fields: [
    {
      id: "mainheadline",
      type: "text",
      label: "Main Headline",
    },
    {
      id: "subheading",
      type: "text",
      label: "Subheading",
    },
    {
      id: "cards",
      type: "repeater",
      label: "Cards",
      items: [
        {
          id: "image",
          type: "image",
          label: "Image",
        },
        {
          id: "headline",
          type: "text",
          label: "Headline",
        },
        {
          id: "text",
          type: "text",
          label: "Text",
        },
        {
          id: "link",
          type: "link",
          label: "Link",
        },
      ],
    },
  ],
}

export default config
