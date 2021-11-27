import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import TechStack from '@/components/TechStack'
import siteMetadata from '@/data/siteMetadata'
import techStackData from '@/data/techStackData'

export default function Stack() {
  return (
    <>
      <PageSEO
        title={`Tech Stack - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Tech Stack
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            A list of technologies I use to build and maintain my projects.
          </p>
        </div>
        <div className="container py-12">
          <div className="flex flex-wrap place-content-center">
            <TechStack techStackData={techStackData} />
          </div>
        </div>
      </div>
    </>
  )
}
