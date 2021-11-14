import Link from '@/components/Link'
import Image from '@/components/Image'
import siteMetadata from '@/data/siteMetadata'

export default function FourZeroFour() {
  return (
    <div className="flex flex-col items-start justify-start md:justify-center md:items-center md:flex-row md:space-x-6 md:mt-24">
      <div className="pt-6 pb-8 space-x-2 md:space-y-5">
        <Image src={siteMetadata.Image404} width="380rem" height="380rem" alt="avatar" />
      </div>
      <div className="max-w-md">
        <h1 className="text-6xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:text-8xl d:px-6 mb-5">
          - 404 -
        </h1>
        <h2 className="text-6xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:text-8xl d:px-6 mb-5">
          YIKES!
        </h2>
      </div>
    </div>
  )
}
