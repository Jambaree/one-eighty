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
      label: "Shape & Color",
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
    {
      id: "solidbackground",
      type: "select",
      label: "Solid Color",
      defaultValue: false,
      options: [
        {
          name: "True",
          value: true,
        },
        {
          name: "False",
          value: false,
        },
      ],
    },
  ],
}

export default config
