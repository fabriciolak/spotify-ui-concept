import { cn } from '@/lib/utils'

interface SectionTitleProps extends React.ComponentProps<'div'> {
  sectionTitle: string
  sectionSubtitle?: string
}

export function SectionTitle({
  sectionTitle,
  sectionSubtitle,
  className
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        'mt-6',
        `mt-6 ${sectionSubtitle ? 'space-y-1' : ''}`,
        className
      )}
      aria-label={sectionSubtitle}
    >
      <h2 className='text-2xl font-bold text-gray-900'>{sectionTitle}</h2>
      {sectionSubtitle && (
        <div className='flex items-center justify-between'>
          <p className='text-sm font-normal text-gray-500'>{sectionSubtitle}</p>
          <p className='cursor-pointer text-xs font-normal uppercase leading-[0.6px] text-gray-500'>
            See all
          </p>
        </div>
      )}
    </div>
  )
}
