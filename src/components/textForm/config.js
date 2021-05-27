const config = {
  id: "textform",
  label: "Text & Form",
  fields: [
    {
      id: "alignment",
      type: "select",
      label: "Alignment",
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
    {
      id: "formbackground",
      type: "color_picker",
      label: "Form Background",
      defaultValue: "white", // optional
    },
    {
      id: "formid",
      type: "number",
      label: "Form ID",
      defaultValue: 1, // optional
    },
  ],
}

export default config
