type Props = {
  className?: string
  width?: number
}

const TwitterIcon = ({ className, width = 24 }: Props) => {
  if (typeof width !== 'number') throw new Error('Icon width must be a number')
  const height = (width * 17) / 16
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      width={width}
      height={height}
      viewBox='0 0 17 16'
      fill='none'>
      <path
        d='M9.98954 6.77491L15.8178 0H14.4367L9.37601 5.88256L5.33405 0H0.672119L6.78436 8.89547L0.672119 16H2.05331L7.39754 9.78782L11.6662 16H16.3281L9.9892 6.77491H9.98954ZM8.09781 8.97384L7.47851 8.08805L2.55098 1.03974H4.67241L8.64899 6.72795L9.26828 7.61374L14.4374 15.0075H12.3159L8.09781 8.97418V8.97384Z'
        fill='white'
      />
    </svg>
  )
}

export default TwitterIcon
