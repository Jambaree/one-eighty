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
