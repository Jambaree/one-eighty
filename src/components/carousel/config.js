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
