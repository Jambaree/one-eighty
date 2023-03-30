import {
  WordpressTemplate,
  generateStaticParams,
  generateMetadata,
} from "@jambaree/next-wordpress"
import templates from "@/templates"

export default async function PageTemplate(props) {
  return (
    <>
      {/* this is needed  */}
      {/* more info here: https://beta.nextjs.org/docs/configuring/typescript */}
      {/* @ts-expect-error Server Component */}
      <WordpressTemplate {...props} templates={templates} />
    </>
  )
}

export const revalidate = "force-cache"

export { generateStaticParams, generateMetadata }
