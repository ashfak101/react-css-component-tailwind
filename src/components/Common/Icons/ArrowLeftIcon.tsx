type Props = {
  className?: string
  width?: number
}

const ArrowLeftIcon = ({ className, width = 24 }: Props) => {
  if (typeof width !== 'number') throw new Error('Icon width must be a number')
  const height = (width * 18) / 24

  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox='0 0 24 18'
      xmlns='http://www.w3.org/2000/svg'
      fill='none'>
      <path
        d='M8.79736 17L0.797364 9L8.79736 0.999998M23.2026 9L1.02142 9'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default ArrowLeftIcon
