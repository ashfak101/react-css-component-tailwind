type Props = {
  className?: string
  width?: number
}

const ArrowRightLongIcon = ({ className, width = 16 }: Props) => {
  if (typeof width !== 'number') throw new Error('Icon width must be a number')
  const height = (width * 16) / 16

  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox='0 0 16 16'
      xmlns='http://www.w3.org/2000/svg'
      fill='none'>
      <path
        d='M11.6118 3.61183L10.8991 4.32455L14.0706 7.49604H0V8.50399H14.0706L10.8991 11.6754L11.6118 12.3882L16 7.99998L11.6118 3.61183Z'
        fill='currentColor'
      />
    </svg>
  )
}
export default ArrowRightLongIcon
