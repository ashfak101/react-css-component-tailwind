type Props = {
  className?: string
  width?: number
}

const XIcon = ({ className, width = 20 }: Props) => {
  if (typeof width !== 'number') throw new Error('Icon width must be a number')
  const height = (width * 20) / 20
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      width={width}
      height={height}
      viewBox='0 0 20 20'
      fill='none'>
      <g clip-path='url(#clip0_5295_32162)'>
        <path
          d='M11.8617 8.46864L19.1471 0H17.4207L11.0948 7.3532L6.04237 0H0.214966L7.85527 11.1193L0.214966 20H1.94146L8.62174 12.2348L13.9575 20H19.7849L11.8613 8.46864H11.8617ZM9.49707 11.2173L8.72295 10.1101L2.56354 1.29967H5.21533L10.1861 8.40994L10.9602 9.51718L17.4215 18.7594H14.7697L9.49707 11.2177V11.2173Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_5295_32162'>
          <rect width='20' height='20' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}

export default XIcon
