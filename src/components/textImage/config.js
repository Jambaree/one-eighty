const config = {
  id: "textimage",
  label: "Text & Image",
  fields: [
    {
      id: "image",
      type: "image",
      label: "Edit Image",
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
  ],
}

export default config
