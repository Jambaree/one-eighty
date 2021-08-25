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
      id: "width",
      type: "select",
      label: "Block Width",
      defaultValue: "normal",
      instructions: "Choose a Block Width", // optional
      options: [
        {
          name: "Normal",
          value: "normal",
        },
        {
          name: "Large",
          value: "large",
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
