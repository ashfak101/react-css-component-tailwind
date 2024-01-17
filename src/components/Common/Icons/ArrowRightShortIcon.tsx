import { SVGProps } from 'react'

interface IProps extends SVGProps<SVGSVGElement> {
  size?: number
}

const ArrowRightShortIcon = ({ size = 14, ...props }: IProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 14 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <path
        d='M1.16699 7H12.8337M12.8337 7L7.00033 1.16667M12.8337 7L7.00033 12.8333'
        stroke='#1A171B'
        strokeWidth='1.66667'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default ArrowRightShortIcon
