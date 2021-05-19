// import fleixble content blocks
import textimage from "../../../../components/textImage/config"
import hero from "../../../../components/hero/config"
import introduction from "../../../../components/introduction/config"
import cards from "../../../../components/cards/config"
import testimonialSlider from "../../../../components/testimonialSlider/config"

const config = {
  id: "default",
  postTypeID: "page",
  label: "Default Page",
  fields: [
    {
      id: "header",
      global: true,
    },
    {
      id: "content",
      label: "Content",
      type: "group",
      fields: [
        {
          id: "flex",
          label: "Blocks",
          type: "flexible_content",
          items: Object.values({
            textimage,
            hero,
            introduction,
            cards,
            testimonialSlider,
          }),
        },
      ],
    },
    {
      id: "footer",
      global: true,
    },
  ],
}

export default config
