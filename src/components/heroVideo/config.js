const config = {
  id: "herovideo",
  label: "Hero Video",
  fields: [
    {
      id: "headline",
      type: "text",
      label: "Headline",
    },
    {
      id: "subheading",
      type: "text",
      label: "Subheading",
      rows: 4,
    },
    {
      id: "videoalignment",
      type: "select",
      label: "Video Placement",
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
      id: "videolink",
      type: "text",
      label: "Video Link",
      instructions: "Paste in the URL of your video",
    },
  ],
}

export default config
