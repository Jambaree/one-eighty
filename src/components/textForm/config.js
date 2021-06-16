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
          name: "Headline Left",
          value: "left",
        },
        {
          name: "Headline Right",
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
      rows: 4,
    },
    {
      id: "disclaimer",
      type: "text",
      label: "Disclaimer",
      rows: 2,
    },
    {
      id: "formbackground",
      type: "select",
      label: "Form Background",
      defaultValue: "#FFF",
      options: [
        {
          name: "White",
          value: "#FFF",
        },
        {
          name: "Light Turquoise",
          value: "#A8E6E4",
        },
      ],
    },
    {
      id: "formid",
      type: "number",
      label: "Form ID",
      defaultValue: 1, // optional
      instructions: "Choose the ID of the form you wish to display",
    },
  ],
}

export default config
