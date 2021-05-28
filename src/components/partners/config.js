const config = {
  id: "partners",
  label: "Partners",
  fields: [
    {
      id: "columns",
      type: "number",
      label: "Columns",
    },

    {
      id: "backgroundcolor",
      type: "color_picker",
      label: "Background Color",
      defaultValue: "#FFF",
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
    },
    {
      id: "cards",
      type: "repeater",
      label: "Cards",
      items: [
        {
          id: "icon",
          type: "image",
          label: "Icon",
        },
        {
          id: "link",
          type: "link",
          label: "Link",
        },
      ],
    },
    {
      id: "mainbutton",
      type: "link",
      label: "Main Button",
    },
  ],
}

export default config
