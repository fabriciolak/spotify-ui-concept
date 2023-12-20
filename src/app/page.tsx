import Image from 'next/image'
import { NavItem } from '@/components/nav-item'
import { SectionTitle } from '@/components/section-title'
import { Card } from '@/components/card'
import { playlists } from '@/mock/playlists'
import { ScrollArea, ScrollBar } from '@/components/scroll-area'
import { Player } from '@/components/player'

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col'>
      <div className='flex h-full w-full flex-1'>
        {/* Nav */}
        <aside
          role='navigation'
          aria-label='Aside'
          className='flex min-w-[240px] flex-col bg-gray-100 px-2'
        >
          <div className='mb-5 ml-6 mt-6' role='img'>
            <Image
              src='/spotify-logo.svg'
              alt='Spotify logo'
              width={134}
              height={40}
              priority
              quality={90}
            />
          </div>

          <nav aria-label='Spotify navigation' role='list'>
            <NavItem role='listitem'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
              >
                <path
                  d='M12.8486 2.75147C12.3799 2.28284 11.6201 2.28284 11.1515 2.75147L2.7515 11.1515C2.28287 11.6201 2.28287 12.3799 2.7515 12.8485C3.22013 13.3172 3.97992 13.3172 4.44855 12.8485L4.80002 12.497V20.4C4.80002 21.0627 5.33728 21.6 6.00002 21.6H8.40002C9.06277 21.6 9.60002 21.0627 9.60002 20.4V18C9.60002 17.3373 10.1373 16.8 10.8 16.8H13.2C13.8628 16.8 14.4 17.3373 14.4 18V20.4C14.4 21.0627 14.9373 21.6 15.6 21.6H18C18.6628 21.6 19.2 21.0627 19.2 20.4V12.497L19.5515 12.8485C20.0201 13.3172 20.7799 13.3172 21.2486 12.8485C21.7172 12.3799 21.7172 11.6201 21.2486 11.1515L12.8486 2.75147Z'
                  className='fill-gray-500 group-hover:fill-green-500'
                />
              </svg>
              Home
            </NavItem>
            <NavItem role='listitem'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
              >
                <path
                  d='M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z'
                  stroke='#6B7280'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='stroke-gray-500 group-hover:stroke-green-500'
                />
              </svg>
              Search
            </NavItem>
            <NavItem role='listitem'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
              >
                <path
                  d='M4 6C4 4.89543 4.89543 4 6 4H8C9.10457 4 10 4.89543 10 6V8C10 9.10457 9.10457 10 8 10H6C4.89543 10 4 9.10457 4 8V6Z'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='stroke-gray-500 group-hover:stroke-green-500'
                />
                <path
                  d='M14 6C14 4.89543 14.8954 4 16 4H18C19.1046 4 20 4.89543 20 6V8C20 9.10457 19.1046 10 18 10H16C14.8954 10 14 9.10457 14 8V6Z'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='stroke-gray-500 group-hover:stroke-green-500'
                />
                <path
                  d='M4 16C4 14.8954 4.89543 14 6 14H8C9.10457 14 10 14.8954 10 16V18C10 19.1046 9.10457 20 8 20H6C4.89543 20 4 19.1046 4 18V16Z'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='stroke-gray-500 group-hover:stroke-green-500'
                />
                <path
                  d='M14 16C14 14.8954 14.8954 14 16 14H18C19.1046 14 20 14.8954 20 16V18C20 19.1046 19.1046 20 18 20H16C14.8954 20 14 19.1046 14 18V16Z'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='stroke-gray-500 group-hover:stroke-green-500'
                />
              </svg>
              Your Library
            </NavItem>
          </nav>

          <nav aria-label="User's Playlists" role='list' className='mt-6'>
            <NavItem role='listitem'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M12 21.6C17.3019 21.6 21.6 17.3019 21.6 12C21.6 6.69807 17.3019 2.4 12 2.4C6.69806 2.4 2.39999 6.69807 2.39999 12C2.39999 17.3019 6.69806 21.6 12 21.6ZM13.2 8.4C13.2 7.73726 12.6627 7.2 12 7.2C11.3372 7.2 10.8 7.73726 10.8 8.4V10.8H8.39999C7.73725 10.8 7.19999 11.3373 7.19999 12C7.19999 12.6627 7.73725 13.2 8.39999 13.2H10.8V15.6C10.8 16.2627 11.3372 16.8 12 16.8C12.6627 16.8 13.2 16.2627 13.2 15.6V13.2H15.6C16.2627 13.2 16.8 12.6627 16.8 12C16.8 11.3373 16.2627 10.8 15.6 10.8H13.2V8.4Z'
                  className='fill-gray-500 group-hover:fill-green-500'
                />
              </svg>
              Create Playlist
            </NavItem>
            <NavItem role='listitem'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
              >
                <path
                  d='M4.31802 6.31802C2.56066 8.07538 2.56066 10.9246 4.31802 12.682L12.0001 20.364L19.682 12.682C21.4393 10.9246 21.4393 8.07538 19.682 6.31802C17.9246 4.56066 15.0754 4.56066 13.318 6.31802L12.0001 7.63609L10.682 6.31802C8.92462 4.56066 6.07538 4.56066 4.31802 6.31802Z'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='stroke-gray-500 group-hover:stroke-green-500'
                />
              </svg>
              Liked Songs
            </NavItem>
          </nav>

          <div className='mx-auto my-2 h-[1px] w-[192px] bg-gray-200' />

          <button
            type='button'
            className='flex w-full items-center justify-start px-4 py-[6px] text-sm font-normal text-gray-500 hover:text-gray-700'
          >
            Welcome to Premium
          </button>

          <div className='flex h-full items-end'>
            <button
              type='button'
              aria-label='Install App'
              role='button'
              className='group mb-2 flex w-full items-center gap-3 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-white hover:shadow-sm'
            >
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M4 16L4 17C4 18.6569 5.34315 20 7 20L17 20C18.6569 20 20 18.6569 20 17L20 16M16 12L12 16M12 16L8 12M12 16L12 4'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='stroke-gray-500 hover:stroke-gray-700'
                />
              </svg>
              Install App
            </button>
          </div>
        </aside>

        <div className='w-[1px] bg-gray-200' />

        {/* Main */}
        <main aria-label='Main' className='overflow-x-hidden pl-9 pr-0 pt-4'>
          <nav
            aria-label='Top navigation'
            className='flex w-full items-center justify-between pr-8'
          >
            <div className='flex gap-4 '>
              <button
                type='button'
                aria-label='Left Click'
                className='rounded-full bg-gray-100/50 p-1 hover:bg-gray-100'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='22'
                  height='22'
                  viewBox='0 0 22 22'
                  fill='none'
                >
                  <path
                    d='M13.75 17.4167L7.33333 11L13.75 4.58333'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='stroke-gray-500 hover:stroke-gray-700'
                  />
                </svg>
              </button>
              <button
                type='button'
                aria-label='Right Click'
                className='rounded-full bg-gray-100/50 p-1 hover:bg-gray-100'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='22'
                  height='22'
                  viewBox='0 0 22 22'
                  fill='none'
                >
                  <path
                    d='M8.25 4.58334L14.6667 11L8.25 17.4167'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='stroke-gray-500 hover:stroke-gray-700'
                  />
                </svg>
              </button>
            </div>

            <button
              type='button'
              aria-label='User profile menu'
              className='sm:5pr-[6px] flex cursor-pointer items-center justify-center gap-2 rounded-full bg-gray-100 px-0.5 py-0.5'
            >
              <Image
                src='/Avatar.png'
                width={28}
                height={28}
                alt='Profile picture'
              />
              <span className='hidden text-sm font-medium text-gray-900 sm:flex'>
                Tom
              </span>
              <div className='hidden sm:flex'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M4.23431 5.83432C4.54673 5.5219 5.05327 5.5219 5.36569 5.83432L8 8.46863L10.6343 5.83432C10.9467 5.5219 11.4533 5.5219 11.7657 5.83432C12.0781 6.14674 12.0781 6.65327 11.7657 6.96569L8.56569 10.1657C8.25327 10.4781 7.74673 10.4781 7.43431 10.1657L4.23431 6.96569C3.9219 6.65327 3.9219 6.14674 4.23431 5.83432Z'
                    fill='#111827'
                  />
                </svg>
              </div>
            </button>
          </nav>

          <SectionTitle sectionTitle='Recently played' className='pr-8' />

          <div className='mb-8 mt-6'>
            <Card
              src='/welcome-to-premium.jpg'
              alt='welcome to premium'
              contentTitle='Welcome to Premium'
              contentBody='Welcome to Spotify Premium!'
            />
          </div>

          <SectionTitle
            sectionTitle='Chill'
            sectionSubtitle='Unwind with these calming playlists.'
            className='pr-8'
          />

          {/* Add horizontal slide */}
          <ScrollArea className='mt-4 w-full'>
            <div className='flex w-max space-x-4'>
              {playlists.map(playlist => {
                return (
                  <Card
                    key={playlist?.id}
                    src={playlist?.image ?? ''}
                    alt={playlist?.title ?? ''}
                    contentTitle={playlist?.title ?? ''}
                    contentBody={playlist?.body ?? ''}
                  />
                )
              })}
            </div>
            <ScrollBar orientation='horizontal' />
          </ScrollArea>
        </main>
      </div>

      {/* Player */}
      <div className='h-[88px]'>
        <Player />
      </div>
    </div>
  )
}
