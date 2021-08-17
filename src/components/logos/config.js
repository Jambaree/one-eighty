const config = {
  id: "logos",
  label: "Logos",
  fields: [
    {
      id: "columns",
      type: "number",
      label: "Columns",
    },
    {
      id: "headline",
      type: "text",
      label: "Headline",
    },
    {
      id: "cards",
      type: "repeater",
      label: "Cards",
      items: [
        {
          id: "logo",
          type: "image",
          label: "Image",
        },
        {
          id: "text",
          type: "text",
          label: "Company Name",
        },
        {
          id: "url",
          type: "text",
          label: "Link URL",
          placeholder: "https://",
        },
      ],
    },
  ],
}
export default config
