const config = {
  id: "textimagepage",
  label: "Text/Image Page",
  fields: [
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
      id: "textimage",
      label: "Text Image",
      type: "repeater",
      fields: [
        {
          id: "image",
          type: "image",
          label: "Image",
        },
        {
          id: "alignment",
          type: "select",
          label: "Image Alignment",
          defaultValue: "left",
          options: [
            {
              name: "Left",
              value: "left",
            },
            {
              name: "Right",
              value: "right",
            },
          ],
        },
        {
          id: "headline",
          type: "text",
          label: "Headline",
        },
        {
          id: "text",
          type: "wysiwyg",
          label: "Text",
        },
        {
          id: "link",
          type: "link",
          label: "Link",
        },
      ],
    },
    {
      id: "mainlink",
      type: "link",
      label: "Main Link",
    },
  ],
}

export default config
