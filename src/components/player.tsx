import Image from 'next/image'
import {
  ArrowRightLeft,
  ChevronLeft,
  ChevronRight,
  Heart,
  Laptop,
  List,
  Play,
  RefreshCcw,
  Volume2
} from 'lucide-react'

export function Player() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-footer lg:grid-cols-3'>
      <div
        role='contentinfo'
        aria-label='Playing In My Feelings by Drake'
        className='hidden items-center gap-3 p-4 sm:flex'
      >
        <Image
          src='/player-album-cover.jpg'
          alt='Album cover'
          width={56}
          height={56}
        />
        <div className='space-y-0'>
          <p className='text-sm font-medium text-gray-900'>In My Feelings</p>
          <p className='text-xs font-normal text-gray-500'>Drake</p>
        </div>
        <div className='cursor-pointer' aria-label='mark as favorite'>
          <Heart className='h-4 w-4 text-gray-500' />
        </div>
      </div>

      <div aria-label='Playback controls' className='flex flex-col gap-2 p-4'>
        <div className='flex justify-center gap-2'>
          <button
            type='button'
            aria-label='Enable shuffle'
            className='flex items-center justify-center rounded-md p-2 hover:bg-gray-100'
          >
            <ArrowRightLeft className='h-4 w-4 text-gray-500' />
          </button>

          <button
            type='button'
            aria-label='Skip Backaward'
            className='flex items-center justify-center rounded-md p-2 hover:bg-gray-100'
          >
            <ChevronLeft className='h-4 w-4 text-gray-500' />
          </button>

          <button
            type='button'
            className='flex h-8 w-8 items-center justify-center rounded-full bg-gray-700 p-2'
          >
            <div className='absolute'>
              <Play
                aria-label='Play'
                className='relative ml-1 h-4 w-4 text-gray-100'
              />
            </div>
          </button>

          <button
            type='button'
            aria-label='Skip forward'
            className='flex items-center justify-center rounded-md p-2 hover:bg-gray-100'
          >
            <ChevronRight className='h-4 w-4 text-gray-500' />
          </button>

          <button
            type='button'
            aria-label='Repeat'
            className='flex items-center justify-center rounded-md p-2 hover:bg-gray-100'
          >
            <RefreshCcw className='h-4 w-4 text-gray-500' />
          </button>
        </div>

        <div className='flex items-center justify-center gap-2'>
          <span className='text-xs font-normal text-gray-500'>2:49</span>
          <div className='h-1 w-full cursor-pointer bg-gray-100'>
            <div className='h-1 w-3/4 bg-gray-400' />
          </div>
          <span className='text-xs font-normal text-gray-500'>3:37</span>
        </div>
      </div>

      <div className='hidden w-full items-center justify-end pr-4 lg:flex'>
        <div className='flex gap-2'>
          <button
            type='button'
            aria-label='Skip Backaward'
            className='flex items-center justify-center rounded-md p-2 hover:bg-gray-100'
          >
            <List className='h-4 w-4 text-gray-500' />
          </button>
          <button
            type='button'
            aria-label='Skip Backaward'
            className='flex items-center justify-center rounded-md p-2 hover:bg-gray-100'
          >
            <Laptop className='h-4 w-4 text-gray-500' />
          </button>
          <div className='flex items-center gap-2'>
            <button
              type='button'
              aria-label='Skip Backaward'
              className='flex items-center justify-center rounded-md p-2 hover:bg-gray-100'
            >
              <Volume2 className='h-4 w-4 text-gray-500' />
            </button>
            <div className='h-1 w-[88px] rounded-full bg-gray-100'>
              <div className='h-1 w-[66.629px] rounded-full bg-gray-400' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
