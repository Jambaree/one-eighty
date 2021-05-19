const config = {
  id: "testimonialslider",
  label: "Testimonial Slider",
  fields: [
    {
      id: "backgroundcolor",
      type: "color_picker",
      label: "Background Color",
      defaultValue: "#ffffff", // optional
    },
    {
      id: "slide",
      type: "repeater",
      label: "Slide",
      items: [
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
          id: "quote",
          type: "text",
          label: "Quote",
        },
        {
          id: "name",
          type: "text",
          label: "Name",
        },

        {
          id: "position",
          type: "text",
          label: "Position",
        },
      ],
    },
  ],
}

export default config
