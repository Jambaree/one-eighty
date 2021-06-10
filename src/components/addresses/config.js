const config = {
  id: "addresses",
  label: "[WIP] Addresses",
  fields: [
    {
      id: "columns",
      type: "number",
      label: "Columns",
      min: 1, // optional
      max: 4, // optional
    },
    {
      id: "backgroundcolor",
      type: "select",
      label: "Background Color",
      defaultValue: "White",
      instructions: "Choose a background color", // optional
      options: [
        {
          name: "White",
          value: "#FFF",
        },
        {
          name: "Light Almond",
          value: "#F5F4F1",
        },
      ],
    },
    {
      id: "address",
      type: "repeater",
      label: "Address",
      items: [
        {
          id: "contactinfo",
          type: "wysiwyg",
          label: "Contact Info",
        },
        // {
        //   id: "addressheading",
        //   type: "text",
        //   label: "Address Heading",
        // },
        // {
        //   id: "addresslineone",
        //   type: "text",
        //   label: "Address Line 1",
        // },
        // {
        //   id: "addresslinetwo",
        //   type: "text",
        //   label: "Address Line 2",
        // },
        // {
        //   id: "phoneone",
        //   type: "text",
        //   label: "Phone 1",
        // },
        // {
        //   id: "phonetwo",
        //   type: "text",
        //   label: "Phone 2",
        // },
        // {
        //   id: "email",
        //   type: "text",
        //   label: "Email Address",
        // },
        // {
        //   id: "hours",
        //   type: "text",
        //   label: "Hours",
        // },
      ],
    },
  ],
}

export default config
