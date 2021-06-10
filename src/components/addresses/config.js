const config = {
  id: "addresses",
  label: "[WIP] Addresses",
  fields: [
    {
      id: "columns",
      type: "number",
      label: "Columns",
      min: 1, // optional
      max: 4, // optional
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
      id: "address",
      type: "repeater",
      label: "Address",
      items: [
        {
          id: "contactinfo",
          type: "wysiwyg",
          label: "Contact Info",
        },
      ],
    },
  ],
}

export default config
