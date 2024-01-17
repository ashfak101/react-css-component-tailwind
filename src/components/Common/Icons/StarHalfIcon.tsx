type Props = {
  className?: string
  width?: number
}

const StarHalfIcon = ({ className, width = 16 }: Props) => {
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
      <g clipPath='url(#clip0_1235_29017)'>
        <path
          d='M12.5 1.22338L15.5374 7.69277L15.6509 7.93448L15.9149 7.9746L23.277 9.09341C23.4973 9.13614 23.5639 9.37953 23.4292 9.52412L18.0722 15.011L17.8961 15.1914L17.9364 15.4403L19.1964 23.2103L19.1964 23.2103L19.1978 23.2184C19.2152 23.3154 19.1771 23.3974 19.0977 23.4526C19.0153 23.51 18.9159 23.5182 18.8307 23.472C18.8304 23.4718 18.8301 23.4717 18.8298 23.4715L12.5 19.9656V1.22338Z'
          fill='white'
          stroke='currentColor'
        />
        <path
          d='M12 0.0302734V20.2603L5.40996 23.9103C4.88096 24.2073 4.19796 23.7573 4.30996 23.1303L5.56996 15.3603L0.20996 9.87027C-0.20304 9.43527 0.0229596 8.71027 0.63996 8.60027L8.00996 7.48027L11.32 0.430273C11.44 0.160273 11.72 0.0302734 12 0.0302734Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_1235_29017'>
          <rect width='24' height='24' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}
export default StarHalfIcon
