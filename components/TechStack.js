import Image from '@/components/Image'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function TechStack({ techStackData }) {
  return (
    <>
      {techStackData.map((item) => (
        <div
          key={item.title}
          className=" px-6 py-2 m-4 rounded-lg flex flex-row border-2 border-gray-200 border-opacity-60 dark:border-gray-700"
        >
          <Image src={item.image} width="24rem" height="24rem" alt="avatar" />
          <p className="ml-2">{item.title}</p>
        </div>
      ))}
    </>
  )
}
