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
          id: "subheading",
          type: "text",
          label: "Sub Heading",
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
      ],
    },
  ],
}

export default config
