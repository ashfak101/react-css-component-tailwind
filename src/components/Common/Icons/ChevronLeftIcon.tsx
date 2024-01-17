type Props = {
  className?: string
  width?: number
}

const ChevronLeftIcon = ({ className, width = 18 }: Props) => {
  if (typeof width !== 'number') throw new Error('Icon width must be a number')
  const height = (width * 18) / 18

  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        fill='#fff'
        d='M10.454 3.704 5.16 9l5.295 5.296 1.592-1.592L8.34 9l3.705-3.704-1.592-1.592Z'
      />
    </svg>
  )
}
export default ChevronLeftIcon
