import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
export default function Home() {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="flex divide-y divide-gray-200 dark:divide-gray-700">
        <section className="flex flex-col justify-center w-full h-full mt-48 text-center ">
          <h1 className="text-3xl font-bold md:text-7xl">
            Hi, I'm Philipp!
            {/* <Typing /> */}
          </h1>
          <div></div>
          {/* <h2 className="text-l md:text-4xl">Let's write good software!</h2> */}
          <div className="flex content-center justify-center mt-4 space-x-4">
            <SocialIcon kind="github" href={siteMetadata.github} size="6" />
            {/* <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="6" /> */}
            <a
              href="https://www.mastodon.social/@prpcodes"
              target="_blank"
              rel="me noopener noreferrer"
            >
              <span role="img" aria-label="wave" className="text-2xl wave">
                👋
              </span>
            </a>
            {/* <SocialIcon kind="twitter" href={siteMetadata.twitter} size="6" /> */}
            {/* <SocialIcon kind="instagram" href={siteMetadata.instagram} size="6" /> */}
            <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="6" />
          </div>
        </section>
      </div>
    </>
  )
}
