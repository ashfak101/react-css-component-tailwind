type Props = {
  className?: string
  width?: number
}

const DrawCheckMark = ({ className, width = 16 }: Props) => {
  if (typeof width !== 'number') throw new Error('Icon width must be a number')
  const height = (width / 16) * 16

  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 16 16'
      fill='none'>
      <path
        d='M6.44845 15.6088C6.96584 16.1325 8.11819 15.9589 8.24226 15.1355C9.01422 10.0233 12.8769 5.71052 15.8 1.64658C16.6105 0.520419 14.7469 -0.549399 13.947 0.56336C11.2758 4.27665 7.909 8.18398 6.59187 12.6899C5.08671 11.1516 3.57547 9.62798 1.88731 8.27629C0.818189 7.41991 -0.71113 8.92864 0.369511 9.79401C2.56898 11.5558 4.46976 13.6102 6.44845 15.6088Z'
        fill='currentColor'
      />
    </svg>
  )
}
export default DrawCheckMark
