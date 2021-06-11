// import fleixble content blocks
import textimage from "../../../../components/textImage/config"
import hero from "../../../../components/hero/config"
import introduction from "../../../../components/introduction/config"
import cards from "../../../../components/cards/config"
import textform from "../../../../components/textForm/config"
import testimonialslider from "../../../../components/testimonialSlider/config"
import benefits from "../../../../components/benefits/config"
import logos from "../../../../components/logos/config"
import partners from "../../../../components/partners/config"
import cardcarousel from "../../../../components/cardCarousel/config"
import accordion from "../../../../components/accordion/config"
import textimagepage from "../../../../components/textImagePage/config"
import herovideo from "../../../../components/heroVideo/config"
import banner from "../../../../components/banner/config"
import addresses from "../../../../components/addresses/config"
import tabs from "../../../../components/tabs/config"

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
            textform,
            testimonialslider,
            benefits,
            logos,
            partners,
            cardcarousel,
            accordion,
            textimagepage,
            herovideo,
            banner,
            addresses,
            tabs,
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
