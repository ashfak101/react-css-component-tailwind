import { SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement> & {
  width?: number
}

const CaretRightIcon = ({ width = 8, ...props }: Props) => {
  if (typeof width !== 'number') throw new Error('Icon width must be a number')

  return (
    <svg
      width={width}
      height={width}
      viewBox='0 0 8 8'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <g clipPath='url(#clip0_203_26789)'>
        <path
          d='M5.74932 3.33732L2.51051 0.091756C2.38857 -0.0304159 2.19071 -0.0306034 2.06857 0.0913029C1.9464 0.213209 1.9462 0.411068 2.0681 0.53324L5.30715 3.77904C5.42899 3.90088 5.42899 4.09913 5.30691 4.22121L2.0681 7.46677C1.9462 7.58894 1.9464 7.7868 2.06857 7.90871C2.12955 7.96958 2.20945 8.00001 2.2893 8.00001C2.36938 8.00001 2.44946 7.96941 2.51051 7.90824L5.74909 4.66291C6.11462 4.29738 6.11462 3.70262 5.74932 3.33732Z'
          // fill='#1A171B'
          className='fill-current'
        />
      </g>
      <defs>
        <clipPath id='clip0_203_26789'>
          <rect width='8' height='8' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}
export default CaretRightIcon
