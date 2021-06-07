const config = {
  id: "benefits",
  label: "Benefits",
  fields: [
    {
      id: "columns",
      type: "number",
      label: "Columns",
      min: 1, // optional
      max: 4, // optional
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
    },
    {
      id: "cards",
      type: "repeater",
      label: "Cards",
      items: [
        {
          id: "icon",
          type: "image",
          label: "Icon",
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
      ],
    },
    {
      id: "link",
      type: "link",
      label: "Link",
    },
  ],
}

export default config
