type Props = {
  className?: string
  width?: number
}

const StarIcon = ({ className, width = 16 }: Props) => {
  if (typeof width !== 'number') throw new Error('Icon width must be a number')
  const height = (width * 16) / 16

  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <g clipPath='url(#clip0_1235_29014)'>
        <path
          d='M23.79 9.87027L18.43 15.3603L19.69 23.1303C19.801 23.7503 19.128 24.2043 18.59 23.9103L12 20.2603V0.0302734C12.28 0.0302734 12.56 0.160273 12.68 0.430273L15.99 7.48027L23.36 8.60027C23.976 8.71027 24.203 9.43527 23.79 9.87027Z'
          fill='currentColor'
        />
        <path
          d='M12 0.0302734V20.2603L5.40996 23.9103C4.88096 24.2073 4.19796 23.7573 4.30996 23.1303L5.56996 15.3603L0.20996 9.87027C-0.20304 9.43527 0.0229596 8.71027 0.63996 8.60027L8.00996 7.48027L11.32 0.430273C11.44 0.160273 11.72 0.0302734 12 0.0302734Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_1235_29014'>
          <rect width='24' height='24' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}
export default StarIcon
