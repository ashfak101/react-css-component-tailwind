type Props = {
  className?: string
  width?: number
}

const FacebookIcon = ({ className, width = 24 }: Props) => {
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
        d='M13.8586 24V13.0533H17.5315L18.0826 8.78588H13.8586V6.06176C13.8586 4.82664 14.2002 3.98492 15.9734 3.98492L18.2312 3.98399V0.167076C17.8408 0.116334 16.5005 0 14.9405 0C11.6829 0 9.45279 1.98836 9.45279 5.63912V8.78588H5.76877V13.0533H9.45279V24H13.8586Z'
        fill='currentColor'
      />
    </svg>
  )
}

export default FacebookIcon
