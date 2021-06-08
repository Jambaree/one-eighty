const config = {
  id: "introduction",
  label: "Introduction",
  fields: [
    {
      id: "headline",
      type: "text",
      label: "Headline",
    },
    {
      id: "backgroundcolor",
      type: "color_picker",
      label: "Background Color",
      defaultValue: "white",
    },
    {
      id: "text",
      type: "text",
      label: "Text",
      rows: 4,
    },
  ],
}

export default config
