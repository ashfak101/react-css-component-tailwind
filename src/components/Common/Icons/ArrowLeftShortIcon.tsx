import { SVGProps } from 'react'

interface IProps extends SVGProps<SVGSVGElement> {
  size?: number
}

const ArrowLeftShortIcon = ({ size = 14, ...props }: IProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 14 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <path
        d='M12.8332 7H1.1665M1.1665 7L6.99984 12.8333M1.1665 7L6.99984 1.16667'
        stroke='#1A171B'
        strokeWidth='1.66667'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
export default ArrowLeftShortIcon
