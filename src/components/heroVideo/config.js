const config = {
  id: "herovideo",
  label: "[WIP] Hero Video",
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
      instructions: "Please paste in the URL of the video you want to display",
    },
  ],
}

export default config
