const config = {
  id: "textimage",
  label: "Text & Image",
  fields: [
    {
      id: "image",
      type: "image",
      label: "Edit Image",
    },
    {
      id: "alignment",
      type: "select",
      label: "Image Alignment",
      defaultValue: "left",
      options: [
        {
          name: "Left",
          value: "left",
        },
        {
          name: "Right",
          value: "right",
        },
      ],
    },
    {
      id: "headline",
      type: "text",
      label: "Headline",
    },
    {
      id: "text",
      type: "wysiwyg",
      label: "Text",
    },
    // {
    //   id: "wysiwygtext",
    //   type: "wysiwyg",
    //   label: "Text",
    // },
    {
      id: "link",
      type: "link",
      label: "Link",
    },
  ],
}

export default config
