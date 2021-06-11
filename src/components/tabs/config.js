const config = {
  id: "tabs",
  label: "[WIP] Tabs",
  fields: [
    {
      id: "tabs",
      type: "repeater",
      label: "Tabs",
      items: [
        {
          id: "heading",
          type: "text",
          label: "Heading",
        },
        {
          id: "text",
          type: "wysiwyg",
          label: "Text",
        },
      ],
    },
  ],
}

export default config
