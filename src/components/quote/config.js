const config = {
  id: "quote",
  label: "Quote",
  fields: [
    {
      id: "text",
      type: "wysiwyg",
      label: "Text",
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
          value: "white",
        },
        {
          name: "Dark Blue",
          value: "blue180",
        },
      ],
    },
    {
      id: "mb",
      type: "select",
      label: "Bottom Margin",
      defaultValue: false,
      instructions: "Is more margin needed?", // optional
      options: [
        {
          name: "No",
          value: false,
        },
        {
          name: "Yes",
          value: true,
        },
      ],
    },
  ],
}

export default config
