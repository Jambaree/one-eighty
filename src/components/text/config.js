const config = {
  id: "text",
  label: "Text",
  fields: [
    {
      id: "lightdark",
      type: "select",
      label: "Light or Dark",
      defaultValue: "light",
      instructions: "Choose the preferred color scheme", // optional
      options: [
        {
          name: "Light",
          value: "light",
        },
        {
          name: "Dark",
          value: "dark",
        },
      ],
    },
    {
      id: "fade",
      type: "select",
      label: "FadeIn or FadeUp",
      defaultValue: "fadeup",
      instructions: "Choose the preferred fade animation for text", // optional
      options: [
        {
          name: "FadeUp",
          value: "fadeup",
        },
        {
          name: "FadeIn",
          value: "fadein",
        },
      ],
    },
    {
      id: "text",
      type: "wysiwyg",
      label: "Text",
      rows: 3,
    },
    {
      id: "extrapadding",
      type: "select",
      label: "More Padding",
      defaultValue: false,
      instructions: "Is more padding needed?", // optional
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
