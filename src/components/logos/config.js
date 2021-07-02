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
      id: "cards",
      type: "repeater",
      label: "Cards",
      items: [
        {
          id: "logo",
          type: "image",
          label: "Image",
        },

        {
          id: "text",
          type: "wysiwyg",
          label: "Text",
        },
      ],
    },
  ],
}

export default config
