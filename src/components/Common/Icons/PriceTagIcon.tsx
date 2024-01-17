type Props = {
  className?: string
  width?: number
}

const PriceTagIcon = ({ className, width = 20 }: Props) => {
  if (typeof width !== 'number') throw new Error('Icon width must be a number')
  const height = (width * 20) / 20
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      className={className}
      viewBox='0 0 20 20'
      fill='none'>
      <path
        d='M19.4514 9.62078L10.2332 0.402567C9.9505 0.0920489 9.66779 -0.0238161 9.38044 0.00399153H2.0346C1.46918 0.00399153 0.987186 0.231087 0.616418 0.601855C0.24565 0.972622 0.0185547 1.48243 0.0185547 2.02004V9.36588C0.0185547 9.64859 0.129785 9.9313 0.41713 10.2186L9.63534 19.4368C10.3722 20.1737 11.5911 20.2015 12.328 19.4368L15.8735 15.8913L19.419 12.3459C20.1882 11.5766 20.1882 10.3577 19.4514 9.62078ZM6.03426 6.0197C5.21394 6.84002 3.87917 6.84002 3.05422 6.0197C2.22926 5.19937 2.23389 3.86461 3.05422 3.03965C3.87454 2.21469 5.2093 2.21933 6.03426 3.03965C6.85917 3.85998 6.85917 5.19474 6.03426 6.0197Z'
        fill='#00378B'
      />
    </svg>
  )
}
export default PriceTagIcon
