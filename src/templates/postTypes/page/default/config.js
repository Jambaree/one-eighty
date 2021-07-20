// import flexible content blocks
import textimage from "../../../../components/textImage/config"
import hero from "../../../../components/hero/config"
import tiles from "../../../../components/tiles/config"
import testimonialslider from "../../../../components/testimonialSlider/config"
import logos from "../../../../components/logos/config"
import carousel from "../../../../components/carousel/config"
import banner from "../../../../components/banner/config"
import quote from "../../../../components/quote/config"
import text from "../../../../components/text/config"
import content from "../../../../components/content/config"
import quoteslider from "../../../../components/quoteSlider/config"
import contact from "../../../../components/contact/config"

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
            tiles,
            testimonialslider,
            logos,
            carousel,
            banner,
            quote,
            text,
            content,
            quoteslider,
            contact,
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
