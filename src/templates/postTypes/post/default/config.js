import texteditor from "../../../../components/textEditor/config"

const config = {
  id: "default",
  postTypeID: "post",
  label: "Post Default",
  fields: [
    {
      id: "header",
      global: true,
    },
    {
      id: "excerpt",
      label: "Excerpt",
      type: "group",
      fields: [
        {
          id: "text",
          label: "Text",
          type: "text",
        },
      ],
    },
    {
      id: "text",
      label: "Content",
      type: "group",
      fields: texteditor.fields,
    },
    {
      id: "footer",
      global: true,
    },
  ],
}

export default config
