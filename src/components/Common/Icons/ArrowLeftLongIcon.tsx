type Props = {
  className?: string
  width?: number
}

const ArrowLeftLongIcon = ({ className, width = 16 }: Props) => {
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
      <g clipPath='url(#clip0_41_614)'>
        <path
          d='M4.38819 12.3882L5.10087 11.6754L1.92942 8.50396L16 8.50396L16 7.49601L1.92942 7.496L5.10088 4.32455L4.38819 3.61183L-1.51188e-06 8.00001L4.38819 12.3882Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_41_614'>
          <rect
            width='16'
            height='16'
            fill='white'
            transform='translate(16 16) rotate(-180)'
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export default ArrowLeftLongIcon
