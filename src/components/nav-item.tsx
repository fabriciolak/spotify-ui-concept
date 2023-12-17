export function NavItem({
  children,
  ...props
}: React.ComponentProps<'button'>) {
  return (
    <button
      type='button'
      className='group flex w-full items-center gap-3 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-white hover:text-green-500 hover:shadow-sm'
      {...props}
    >
      {children}
    </button>
  )
}
