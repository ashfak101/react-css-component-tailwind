type Props = {
  className?: string
  width?: number
}

const ArrowDownIcon = ({ className, width = 16 }: Props) => {
  if (typeof width !== 'number') throw new Error('Icon width must be a number')
  const height = (width * 16) / 16

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      width={width}
      height={height}
      viewBox='0 0 16 16'
      fill='none'>
      <g clipPath='url(#clip0_595_17093)'>
        <path
          d='M15.787 3.84935C15.503 3.56537 15.0425 3.56532 14.7585 3.84939L8.00017 10.6078L1.24153 3.84935C0.957552 3.56537 0.497042 3.56532 0.213018 3.84939C-0.0710061 4.13342 -0.0710061 4.59388 0.213018 4.8779L7.48594 12.1506C7.62233 12.287 7.8073 12.3636 8.00017 12.3636C8.19304 12.3636 8.37806 12.287 8.5144 12.1506L15.7869 4.87786C16.071 4.59388 16.071 4.13337 15.787 3.84935Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_595_17093'>
          <rect width='16' height='16' fill='currentColor' />
        </clipPath>
      </defs>
    </svg>
  )
}

export default ArrowDownIcon
