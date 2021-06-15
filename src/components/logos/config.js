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
      id: "divider",
      type: "select",
      label: "Divider",
      instructions: "Display a dividing line?", // optional
      options: [
        {
          name: "True",
          value: true,
        },
        {
          name: "False",
          value: false,
        },
      ],
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
          id: "imagetype",
          type: "select",
          label: "Image Type",
          instructions: "Is this image a portrait or a logo?", // optional
          options: [
            {
              name: "Portrait",
              value: "portrait",
            },
            {
              name: "Logo",
              value: "logo",
            },
          ],
        },
        {
          id: "text",
          type: "wysiwyg",
          label: "Text",
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
