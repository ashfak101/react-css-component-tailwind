type Props = {
  className?: string
  width?: number
}

const InstagramIcon = ({ className, width = 24 }: Props) => {
  if (typeof width !== 'number') throw new Error('Icon width must be a number')
  const height = (width * 24) / 24

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'>
      <g clipPath='url(#clip0_876_7501)'>
        <path
          d='M18.375 24H5.625C2.52338 24 0 21.4766 0 18.375V5.625C0 2.52338 2.52338 0 5.625 0H18.375C21.4766 0 24 2.52338 24 5.625V18.375C24 21.4766 21.4766 24 18.375 24ZM5.625 1.875C3.55725 1.875 1.875 3.55725 1.875 5.625V18.375C1.875 20.4427 3.55725 22.125 5.625 22.125H18.375C20.4427 22.125 22.125 20.4427 22.125 18.375V5.625C22.125 3.55725 20.4427 1.875 18.375 1.875H5.625ZM18.6094 4.21875C17.9622 4.21875 17.4375 4.74342 17.4375 5.39062C17.4375 6.03783 17.9622 6.5625 18.6094 6.5625C19.2566 6.5625 19.7812 6.03783 19.7812 5.39062C19.7812 4.74342 19.2566 4.21875 18.6094 4.21875ZM12 18.0938C8.63986 18.0938 5.90625 15.3601 5.90625 12C6.24094 3.9158 17.7603 3.91814 18.0938 12C18.0938 15.3601 15.3601 18.0938 12 18.0938ZM12 7.78125C9.67378 7.78125 7.78125 9.67378 7.78125 12C8.013 17.5967 15.9878 17.5951 16.2188 12C16.2188 9.67378 14.3262 7.78125 12 7.78125Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_876_7501'>
          <rect width='24' height='24' fill='currentColor' />
        </clipPath>
      </defs>
    </svg>
  )
}

export default InstagramIcon
