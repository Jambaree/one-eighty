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
          label: "Name",
        },
        {
          id: "subheading",
          type: "text",
          label: "Position",
        },
        {
          id: "text",
          type: "wysiwyg",
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
