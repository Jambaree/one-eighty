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
      id: "text",
      type: "text",
      label: "Text",
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
