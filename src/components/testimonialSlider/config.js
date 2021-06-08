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
      ],
    },
    {
      id: "dots",
      type: "select",
      label: "Show Dots",
      defaultValue: null,
      options: [
        {
          name: "Yes",
          value: true,
        },
        {
          name: "No",
          value: false,
        },
      ],
    },
    {
      id: "headline",
      type: "text",
      label: "Headline",
      defaultValue: "Please place the desired headline or title here",
    },
    {
      id: "subheading",
      type: "text",
      label: "Sub Heading",
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
