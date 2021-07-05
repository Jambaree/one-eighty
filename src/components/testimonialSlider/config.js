const config = {
  id: "testimonialslider",
  label: "Testimonial Slider",
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
      ],
    },
  ],
}

export default config
