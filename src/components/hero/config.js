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
      id: "headline",
      type: "wysiwyg",
      label: "Headline",
      rows: 3,
    },
    {
      id: "filevideo",
      type: "file",
      label: "Upload Video",
      instructions: "upload the video file", // optional
    },
  ],
}

export default config
