import { SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement> & {
  width?: number
}

const CrossIcon = ({ className, width = 24, ...props }: Props) => {
  if (typeof width !== 'number') throw new Error('Icon width must be a number')

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height={width}
      width={width}
      className={className}
      {...props}
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <line x1='18' y1='6' x2='6' y2='18' />
      <line x1='6' y1='6' x2='18' y2='18' />
    </svg>
  )
}
export default CrossIcon
