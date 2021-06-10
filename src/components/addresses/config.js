const config = {
  id: "addresses",
  label: "[WIP] Addresses",
  fields: [
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
        {
          id: 'hours',
          type: 'text',
          label: 'Hours',
        },
      ],
    },
  ],
},


export default config
