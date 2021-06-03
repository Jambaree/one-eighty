const config = {
  id: "accordion",
  label: "Accordion",
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
              id: "address",
              type: "wysiwyg",
              label: "Address & Contact",
            },
          ],
        },
      ],
    },
  ],
}

export default config
