// import templates
import pageDefault from "./templates/postTypes/page/default/config"
import postDefault from "./templates/postTypes/post/default/config"
import postArchive from "./templates/postTypes/post/archive/config"

const fields = {
  postTypes: [
    {
      id: "page",
      title: "Page",
      templates: [pageDefault],
    },
    {
      id: "post",
      title: "Post",
      templates: [postDefault, postArchive],
    },
  ],
  taxonomies: [
    {
      id: "category",
      title: "Category",
      postTypes: ["post"],
    },
  ],
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
          id: "footermenu",
          type: "menu",
          label: "Footer Menu",
        },
        {
          id: "facebook",
          type: "text",
          label: "Facebook",
        },
        {
          id: "instagram",
          type: "text",
          label: "Instagram",
        },
        {
          id: "linkedin",
          type: "text",
          label: "LinkedIn",
        },
        {
          id: "twitter",
          type: "text",
          label: "Twitter",
        },
        {
          id: "legalmenu",
          type: "menu",
          label: "Legal Menu",
        },
      ],
    },
  ],
}

export default fields
