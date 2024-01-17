type Props = {
  className?: string
  width?: number
}

const AddSquareIcon = ({ className, width = 24 }: Props) => {
  if (typeof width !== 'number') throw new Error('Icon width must be a number')
  const height = (width * 24) / 24

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'>
      <path
        d='M7.98682 12H15.9737'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M11.9802 16V8'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M8.98532 22H14.9755C19.9672 22 21.964 20 21.964 15V9C21.964 4 19.9672 2 14.9755 2H8.98532C3.99354 2 1.99683 4 1.99683 9V15C1.99683 20 3.99354 22 8.98532 22Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default AddSquareIcon
