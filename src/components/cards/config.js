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
      id: "headlinestyle",
      type: "select",
      label: "Headline Style",
      defaultValue: "h2",
      options: [
        {
          name: "H1",
          value: "h1",
        },
        {
          name: "H2",
          value: "h2",
        },
        {
          name: "H3",
          value: "h3",
        },
      ],
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
    {
      id: "mainbutton",
      type: "link",
      label: "Main Button Link",
    },
  ],
}

export default config
