const config = {
  id: "textform",
  label: "Text & Form",
  fields: [
    {
      id: "formbackground",
      type: "color_picker",
      label: "Form Background",
      defaultValue: "white", // optional
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
      type: "text",
      label: "Text",
    },
    {
      id: "disclaimer",
      type: "text",
      label: "Disclaimer",
    },
  ],
}

export default config
