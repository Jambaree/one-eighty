// import templates
import pageDefault from "./templates/postTypes/page/default/config"

const fields = {
  postTypes: [
    {
      id: "page",
      title: "Page",
      templates: [pageDefault],
    },
  ],
  taxonomies: [],
  themeOptions: [
    {
      id: "header",
      label: "Header",
      type: "group",
      hide: true,
      fields: [
        {
          id: "menu",
          type: "menu",
          label: "Menu",
        },
      ],
    },
    {
      id: "footer",
      label: "Footer",
      type: "group",
      hide: true,
      fields: [
        {
          id: "image",
          type: "image",
          label: "Image",
        },
        {
          id: "footermenu",
          type: "menu",
          label: "Footer Menu",
        },
        {
          id: "text",
          type: "text",
          label: "Text",
        },
        {
          id: "phone",
          label: "Phone",
          type: "group",
          field: [
            {
              id: "phonelabel",
              type: "text",
              label: "Phone",
            },
            {
              id: "phonenumber",
              type: "number",
              label: "Phone Number",
              defaultValue: 1111111111, // optional
              // min: 1, // optional
              // max: 4, // optional
              // step: 1 // optional
            },
          ],
        },
        {
          id: "email",
          label: "Email",
          type: "group",
          field: [
            {
              id: "emaillabel",
              type: "text",
              label: "Email",
            },
            {
              id: "emailaddress",
              type: "text",
              label: "Email Address",
            },
          ],
        },
      ],
    },
  ],
}

export default fields
