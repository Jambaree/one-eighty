// import flexible content blocks
import textimage from "../../../../components/textImage/config"
import hero from "../../../../components/hero/config"
import introduction from "../../../../components/introduction/config"
import cards from "../../../../components/cards/config"
import testimonialslider from "../../../../components/testimonialSlider/config"
import logos from "../../../../components/logos/config"
import partners from "../../../../components/partners/config"
import cardcarousel from "../../../../components/cardCarousel/config"
import textimagepage from "../../../../components/textImagePage/config"
import herovideo from "../../../../components/heroVideo/config"
import banner from "../../../../components/banner/config"
import addresses from "../../../../components/addresses/config"
import topbanner from "../../../../components/topBanner/config"
import quote from "../../../../components/quote/config"
import text from "../../../../components/text/config"

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
            testimonialslider,
            logos,
            partners,
            cardcarousel,
            textimagepage,
            herovideo,
            banner,
            addresses,
            topbanner,
            quote,
            text,
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
