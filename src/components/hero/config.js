const config = {
  id: "hero",
  label: "Hero",
  fields: [
    {
      id: "image",
      type: "image",
      label: "Image",
    },
    {
      id: "mobileimage",
      type: "image",
      label: "Mobile Image",
    },
    {
      id: "headline",
      type: "text",
      label: "Headline",
    },
    {
      id: "headlinestyle",
      type: "select",
      label: "Headline Style",
      defaultValue: "h2",
      options: [
        {
          name: "H1",
          value: "h1",
        },
        {
          name: "H2",
          value: "h2",
        },
        {
          name: "H3",
          value: "h3",
        },
      ],
    },
    {
      id: "imagealignment",
      type: "select",
      label: "Image Placement",
      defaultValue: "second",
      options: [
        {
          name: "First",
          value: "first",
        },
        {
          name: "Second",
          value: "second",
        },
      ],
    },
    {
      id: "text",
      type: "text",
      label: "Text",
      rows: 6,
    },
    {
      id: "link",
      type: "link",
      label: "Link",
    },
    {
      id: "linktype",
      type: "select",
      label: "Link Type",
      defaultValue: "button",
      options: [
        {
          name: "Button",
          value: "button",
        },
        {
          name: "Hyperlink",
          value: "hyperlink",
        },
      ],
    },
  ],
}

export default config
