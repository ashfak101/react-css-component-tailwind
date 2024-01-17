type Props = {
  className?: string
  width?: number
}

const ArrowRightIcon = ({ className, width = 24 }: Props) => {
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
        d='M15.2026 1L23.2026 9L15.2026 17M0.797363 9H22.9786'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
export default ArrowRightIcon
