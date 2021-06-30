const config = {
  id: "carousel",
  label: "Carousel",
  fields: [
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
      id: "subheading",
      type: "text",
      label: "Sub Heading",
      rows: 3,
    },
    {
      id: "cards",
      type: "repeater",
      label: "Card",
      items: [
        {
          id: "heading",
          type: "text",
          label: "Heading",
        },
        {
          id: "text",
          type: "text",
          label: "Text",
          rows: 6,
        },
        {
          id: "image",
          type: "image",
          label: "Image",
        },
        {
          id: "defaultimage",
          type: "image",
          label: "Default Image",
          instructions:
            "This will only be used if a main image is not uploaded",
        },
      ],
    },
  ],
}

export default config
