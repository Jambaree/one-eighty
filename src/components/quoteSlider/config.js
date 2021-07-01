const config = {
  id: "quoteslider",
  label: "Quote Slider",
  fields: [
    {
      id: "image",
      type: "image",
      label: "Background Image",
    },
    {
      id: "slide",
      type: "repeater",
      label: "Slide",
      items: [
        {
          id: "quote",
          type: "wysiwyg",
          label: "Quote",
          rows: 4,
        },
        {
          id: "title",
          type: "text",
          label: "Title",
          rows: 1,
        },
      ],
    },
  ],
}

export default config
