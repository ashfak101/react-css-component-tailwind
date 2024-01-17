type Props = {
  className?: string
  width?: number
}

const PenIcon = ({ className, width = 24 }: Props) => {
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
      <g clipPath='url(#clip0_2740_42789)'>
        <path
          d='M14.9238 4.04436L19.8059 8.92646L7.44788 21.2845L2.56851 16.4024L14.9238 4.04436ZM23.5105 2.86691L21.3333 0.689667C20.4919 -0.151764 19.1255 -0.151764 18.2813 0.689667L16.1957 2.77525L21.0778 7.65739L23.5105 5.22467C24.1631 4.57201 24.1631 3.51953 23.5105 2.86691ZM0.0135858 23.2646C-0.0752629 23.6645 0.285759 24.0228 0.685669 23.9255L6.126 22.6064L1.24662 17.7243L0.0135858 23.2646Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_2740_42789'>
          <rect width='24' height='24' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}
export default PenIcon
