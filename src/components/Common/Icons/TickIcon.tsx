type Props = {
  className?: string
  width?: number
}

const TickIcon = ({ className, width = 24 }: Props) => {
  const height = (width * 24) / 24
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'>
      <g xmlns='http://www.w3.org/2000/svg' id='Rounded'>
        <polyline
          fill='none'
          stroke='currentColor'
          strokeWidth={2}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeMiterlimit={10}
          points='20,7 9,18 5,14 '
        />
      </g>
    </svg>
  )
}

export default TickIcon
