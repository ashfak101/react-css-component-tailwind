import { SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement> & {
  width?: number
}

const TickMarkIcon = ({ width = 16, ...props }: Props) => {
  if (typeof width !== 'number') throw new Error('Icon width must be a number')

  const height = (width * 16) / 16

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <g clipPath='url(#clip0_2096_18142)'>
        <path
          d='M6.44852 15.6087C6.9659 16.1324 8.11825 15.9588 8.24232 15.1354C9.01428 10.0232 12.877 5.71042 15.8001 1.64648C16.6106 0.52032 14.747 -0.549498 13.947 0.56326C11.2758 4.27655 7.90906 8.18388 6.59193 12.6898C5.08677 11.1515 3.57553 9.62788 1.88737 8.27619C0.81825 7.41981 -0.711069 8.92854 0.369572 9.79391C2.56905 11.5557 4.46982 13.6101 6.44852 15.6087Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_2096_18142'>
          <rect width='16' height='16' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}
export default TickMarkIcon
