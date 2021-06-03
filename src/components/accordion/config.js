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
              id: "addresslineone",
              type: "text",
              label: "Address Line 1",
            },
            {
              id: "addresslinetwo",
              type: "text",
              label: "Address Line 2",
            },
            {
              id: "phoneone",
              type: "text",
              label: "Phone 1",
            },
            {
              id: "phonetwo",
              type: "text",
              label: "Phone 2",
            },
            {
              id: "email",
              type: "link",
              label: "Email Address",
            },
          ],
        },
      ],
    },
  ],
}

export default config
