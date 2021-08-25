const config = {
  id: "tiles",
  label: "Tiles",
  fields: [
    {
      id: "headline",
      type: "text",
      label: "Headline",
    },
    {
      id: "style",
      type: "select",
      label: "Style",
      options: [
        {
          name: "Grid",
          value: "grid",
        },
        {
          name: "List",
          value: "list",
        },
      ],
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
          id: "text",
          type: "text",
          label: "Text",
          rows: 4,
        },
      ],
    },
  ],
}

export default config
