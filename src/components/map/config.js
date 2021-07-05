const config = {
  id: "map",
  label: "Map",
  fields: [
    {
      id: "text",
      type: "wysiwyg",
      label: "Text",
    },
    {
      id: "image",
      type: "image",
      label: "Map Image",
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
  ],
}

export default config
