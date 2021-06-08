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
      rows: 2,
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
          rows: 4,
        },
        {
          id: "modal",
          label: "Modal",
          type: "group",
          fields: [
            {
              id: "modaltext",
              type: "wysiwyg",
              label: "Modal Text",
            },
            {
              id: "modallink",
              type: "link",
              label: "Modal Link",
            },
            {
              id: "modalimage",
              type: "image",
              label: "Modal Image",
            },
          ],
        },
      ],
    },
  ],
}

export default config
