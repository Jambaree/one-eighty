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
      id: "headline",
      type: "text",
      label: "Headline",
    },
    {
      id: "subheading",
      type: "text",
      label: "Subheading",
      rows: 2,
    },
    {
      id: "slide",
      type: "repeater",
      label: "Slide",
      items: [
        {
          id: "quote",
          type: "text",
          label: "Quote",
          rows: 4,
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
          instructions:
            "Type the professional position of the person who gave this quote",
        },
      ],
    },
  ],
}

export default config
