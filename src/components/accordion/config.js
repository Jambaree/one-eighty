const config = {
  id: "locations",
  label: "[WIP] Locations",
  fields: [
    {
      id: "location",
      type: "repeater",
      label: "Location",
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
              type: "text",
              label: "Email Address",
            },
          ],
        },
      ],
    },
  ],
}

export default config
