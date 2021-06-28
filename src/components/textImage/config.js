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
      id: 'giffile',
      type: 'file',
      label: 'GIF',
      instructions: 'Upload a GIF here', // optional
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
      id: "backgroundcolor",
      type: "select",
      label: "Background Color",
      defaultValue: "White",
      instructions: "Choose a background color", // optional
      options: [
        {
          name: "White",
          value: "#FFF",
        },
        {
          name: "Light Almond",
          value: "#F5F4F1",
        },
      ],
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
      id: "text",
      type: "wysiwyg",
      label: "Text",
    },
    {
      id: 'bullet',
      type: 'repeater',
      label: 'Bullets',
      items: [
        {
          id: 'text',
          type: 'text',
          label: 'Add Bullet Point Text',
        },
      ]
    },
    {
      id: "link",
      type: "link",
      label: "Link",
    },
  ],
}

export default config
