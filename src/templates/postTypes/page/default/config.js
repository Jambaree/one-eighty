// import flexible content blocks
import textimage from "../../../../components/textImage/config"
import hero from "../../../../components/hero/config"
import introduction from "../../../../components/introduction/config"
import tiles from "../../../../components/tiles/config"
import testimonialslider from "../../../../components/testimonialSlider/config"
import logos from "../../../../components/logos/config"
import partners from "../../../../components/partners/config"
import carousel from "../../../../components/carousel/config"
import textimagepage from "../../../../components/textImagePage/config"
import herovideo from "../../../../components/heroVideo/config"
import banner from "../../../../components/banner/config"
import addresses from "../../../../components/addresses/config"
import topbanner from "../../../../components/topBanner/config"
import quote from "../../../../components/quote/config"
import text from "../../../../components/text/config"
import content from "../../../../components/content/config"
import quoteslider from "../../../../components/quoteSlider/config"

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
            tiles,
            testimonialslider,
            logos,
            partners,
            carousel,
            textimagepage,
            herovideo,
            banner,
            addresses,
            topbanner,
            quote,
            text,
            content,
            quoteslider,
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
