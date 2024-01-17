import { SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement> & {
  width?: number
}

const LayerIcon = ({ width = 16, ...props }: Props) => {
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
      <path
        d='M1.33325 9.66687L7.7614 12.8809C7.84886 12.9247 7.89259 12.9465 7.93845 12.9551C7.97908 12.9628 8.02076 12.9628 8.06139 12.9551C8.10725 12.9465 8.15098 12.9247 8.23843 12.8809L14.6666 9.66687M1.33325 6.33354L7.7614 3.11946C7.84886 3.07574 7.89259 3.05387 7.93845 3.04527C7.97908 3.03765 8.02076 3.03765 8.06139 3.04527C8.10725 3.05387 8.15098 3.07574 8.23843 3.11946L14.6666 6.33354L8.23843 9.54762C8.15098 9.59134 8.10725 9.61321 8.06139 9.62181C8.02076 9.62943 7.97908 9.62943 7.93845 9.62181C7.89259 9.61321 7.84886 9.59134 7.7614 9.54762L1.33325 6.33354Z'
        stroke='currentColor'
        strokeWidth='1.33333'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
export default LayerIcon
