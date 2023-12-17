import Image, { type ImageProps } from 'next/image'

interface CardProps {
  src: ImageProps['src']
  alt: ImageProps['alt']
  contentTitle: string
  contentBody: string
}

export function Card({ src, alt, contentTitle, contentBody }: CardProps) {
  return (
    <div className='flex w-[188px] flex-col gap-4 rounded bg-gray-50 p-4'>
      <div>
        <Image src={src} alt={alt} width={156} height={156} />
      </div>
      <div className='space-y-1'>
        <h3 className='truncate text-base font-bold text-gray-900'>
          {contentTitle}
        </h3>
        <p className='text-sm font-normal text-gray-500'>{contentBody}</p>
      </div>
    </div>
  )
}
