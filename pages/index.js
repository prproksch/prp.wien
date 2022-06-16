import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import Typing from '@/components/Typing'
import SocialIcon from '@/components/social-icons'
export default function Home() {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700 flex">
        <section className="h-full flex flex-col justify-center w-full text-center mt-48	">
          <h1 className="text-3xl md:text-7xl font-bold">
            Hi, I'm Philipp!
            {/* <Typing /> */}
          </h1>
          <div></div>
          {/* <h2 className="text-l md:text-4xl">Let's write good software!</h2> */}
          <div className="flex mt-4 space-x-4 justify-center content-center">
            <SocialIcon kind="github" href={siteMetadata.github} size="6" />
            <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="6" />
            <span role="img" aria-label="wave" className="wave text-2xl">
              👋
            </span>
            <SocialIcon kind="twitter" href={siteMetadata.twitter} size="6" />
            {/* <SocialIcon kind="instagram" href={siteMetadata.instagram} size="6" /> */}
            <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="6" />
          </div>
        </section>
      </div>
    </>
  )
}
