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
          id: "copyright",
          type: "text",
          label: "Copyright",
        },
        {
          id: "disclaimer",
          type: "text",
          label: "Disclaimer",
        },
        {
          id: "phonenumber",
          type: "text",
          label: "Phone Number",
        },
        {
          id: "emailaddress",
          type: "text",
          label: "Email Address",
        },
      ],
    },
  ],
}

export default fields
