const config = {
  id: "textimagepage",
  label: "[WIP] Text & Image Repeater",
  fields: [
    {
      id: "backgroundimage",
      type: "image",
      label: "Background Image",
    },
    {
      id: "fontcolor",
      type: "select",
      label: "Choose Font Color",
      defaultValue: "charcoal",
      options: [
        {
          name: "Charcoal",
          value: "charcoal",
        },
        {
          name: "Light Almond",
          value: "almondLight",
        },
      ],
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
      id: "textimage",
      label: "Text Image",
      type: "repeater",
      items: [
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
