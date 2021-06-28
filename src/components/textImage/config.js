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
      id: "backgroundcolor",
      type: "select",
      label: "Background Color",
      defaultValue: "White",
      instructions: "Choose a background color", // optional
      options: [
        {
          name: "White",
          value: "#FFF",
        },
        {
          name: "Light Almond",
          value: "#F5F4F1",
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
  ],
}

export default config
