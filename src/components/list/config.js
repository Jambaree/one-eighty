const config = {
  id: "list",
  label: "[WIP] List",
  fields: [
    {
      id: "list",
      type: "repeater",
      label: "List",
      items: [
        {
          id: "image",
          type: "image",
          label: "Image",
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
