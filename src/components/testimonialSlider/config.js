const config = {
  id: "testimonialslider",
  label: "Testimonial Slider",
  fields: [
    {
      id: "backgroundcolor",
      type: "select",
      label: "Background Color",
      defaultValue: "White",
      options: [
        {
          name: "White",
          value: "#ffffff",
        },
        {
          name: "Flax",
          value: "#E5D282",
        },
        {
          name: "Light Turquoise",
          value: "#A8E6E4",
        },
        {
          name: "Light Almond",
          value: "#F5F4F1",
        },
      ],
    },
    {
      id: "accentcolor",
      type: "select",
      label: "Accent Color",
      defaultValue: "Charcoal",
      options: [
        {
          name: "Charcoal",
          value: "#2D4052",
        },
        {
          name: "Coral",
          value: "#E86140",
        },
      ],
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
