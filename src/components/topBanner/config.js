const config = {
  id: "topbanner",
  label: "Top Banner",
  fields: [
    {
      id: "headline",
      type: "text",
      label: "Headline",
    },
    {
      id: "text",
      type: "text",
      label: "Text",
      rows: 3,
    },
    {
      id: "color",
      type: "select",
      label: "Color",
      defaultValue: "plum",
      options: [
        {
          name: "Plum",
          value: "plum",
        },
        {
          name: "Flax",
          value: "flax",
        },
        {
          name: "Turquoise",
          value: "turquoise",
        },
      ],
    },
  ],
}

export default config
