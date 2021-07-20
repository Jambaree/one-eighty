const config = {
  id: "banner",
  label: "Banner",
  fields: [
    {
      id: "backgroundimage",
      type: "image",
      label: "Background Image",
    },
    {
      id: "gradient",
      type: "select",
      label: "Gradient",
      instructions: "Choose an effect for the background image",
      options: [
        {
          name: "Option 1",
          value: "1",
        },
        {
          name: "Option 2",
          value: "2",
        },
        {
          name: "None",
          value: false,
        },
      ],
    },
    {
      id: "mt",
      type: "select",
      label: "Top Margin",
      defaultValue: false,
      instructions: "Is more margin top needed?", // optional
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
