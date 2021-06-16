const config = {
  id: "people",
  label: "[WIP] People",
  fields: [
    {
      id: "initialvalue",
      type: "number",
      label: "Show Initially",
      min: 1, // optional
      max: 16, // optional
      instructions: "How many cards would you like to display on initial load?",
    },
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
      defaultValue: "#FFF",
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
      id: "subheading",
      type: "text",
      label: "Subheading",
      rows: 2,
    },
    {
      id: "cards",
      type: "repeater",
      label: "Cards",
      items: [
        {
          id: "avatar",
          type: "image",
          label: "Avatar",
        },
        {
          id: "name",
          type: "text",
          label: "Name",
        },
        {
          id: "position",
          type: "text",
          label: "Position",
        },
      ],
    },
  ],
}

export default config
