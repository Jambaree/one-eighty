import theme from "../../gatsby-plugin-theme-ui"

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
      id: "backgroundColor",
      type: "color_picker",
      label: "Background Color",
      defaultValue: theme.colors.almondLight,
    },
    {
      id: "headline",
      type: "text",
      label: "Headline",
    },
    {
      id: "headlinestyle",
      type: "select",
      label: "Headline Style",
      defaultValue: "h2",
      options: [
        {
          name: "H1",
          value: "h1",
        },
        {
          name: "H2",
          value: "h2",
        },
        {
          name: "H3",
          value: "h3",
        },
      ],
    },
    {
      id: "text",
      type: "text",
      label: "Text",
      rows: 6,
    },
    {
      id: "link",
      type: "link",
      label: "Link",
    },
  ],
}

export default config
