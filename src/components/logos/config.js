const config = {
  id: "logos",
  label: "Logos",
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
    },
    {
      id: "cards",
      type: "repeater",
      label: "Cards",
      items: [
        {
          id: "logo",
          type: "image",
          label: "Logo",
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
