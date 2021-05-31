const config = {
  id: "cardcarousel",
  label: "Card Carousel",
  fields: [
    {
      id: "headline",
      type: "text",
      label: "Headline",
    },
    {
      id: "subheading",
      type: "text",
      label: "Sub Heading",
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
