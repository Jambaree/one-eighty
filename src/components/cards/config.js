const config = {
  id: "cards",
  label: "Cards",
  fields: [
    {
      id: "columns",
      type: "number",
      label: "Columns",
    },
    {
      id: "headline",
      type: "text",
      label: "Headline",
    },
    {
      id: "subheading",
      type: "text",
      label: "Subheading",
      rows: 4,
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
          rows: 4,
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
