type Props = {
  className?: string
  width?: number
}

const HeartIcon = ({ className, width = 32 }: Props) => {
  if (typeof width !== 'number') throw new Error('Icon width must be a number')
  const height = (width * 32) / 32

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      width={width}
      height={height}
      viewBox='0 0 32 32'
      fill='none'>
      <g clipPath='url(#clip0_2297_61553)'>
        <path
          d='M16 29.8379C15.8381 29.8379 15.6763 29.7961 15.5313 29.7123C15.3738 29.6215 11.6319 27.4488 7.83627 24.1752C5.58665 22.235 3.7909 20.3107 2.49903 18.4557C0.827285 16.0553 -0.013401 13.7464 0.000161505 11.5931C0.0160365 9.0875 0.913472 6.73113 2.52734 4.95801C4.16847 3.15501 6.35859 2.16214 8.69439 2.16214C11.688 2.16214 14.4249 3.83901 16.0001 6.49538C17.5753 3.83907 20.3122 2.16214 23.3057 2.16214C25.5125 2.16214 27.6179 3.05801 29.2344 4.68476C31.0084 6.46994 32.0163 8.99231 31.9998 11.605C31.9862 13.7546 31.1298 16.0599 29.4544 18.457C28.1585 20.311 26.3652 22.2345 24.1244 24.1742C20.3427 27.4475 16.6276 29.62 16.4713 29.7109C16.3256 29.7955 16.1628 29.8379 16 29.8379Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_2297_61553'>
          <rect width='32' height='32' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}

export default HeartIcon
