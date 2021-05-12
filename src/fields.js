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
  ],
}

export default fields
