const config = {
  id: "accordion",
  label: "[WIP] Accordion",
  fields: [
    {
      id: "locations",
      type: "repeater",
      label: "Locations",
      items: [
        {
          id: "mainheading",
          type: "text",
          label: "Main Heading",
        },
        {
          id: "address",
          type: "repeater",
          label: "Address",
          items: [
            {
              id: "addressheading",
              type: "text",
              label: "Address Heading",
            },
            {
              id: "addresscontent",
              type: "wysiwyg",
              label: "Address Content",
            },
          ],
        },
      ],
    },
  ],
}

export default config
