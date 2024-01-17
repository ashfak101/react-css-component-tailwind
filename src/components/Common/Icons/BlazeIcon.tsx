import { SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement> & {
  width?: number
}

const BlazeIcon = ({ width = 16, ...props }: Props) => {
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
        d='M8.66674 1.3335L2.72904 8.45873C2.4965 8.73778 2.38023 8.8773 2.37846 8.99514C2.37691 9.09757 2.42256 9.19503 2.50224 9.25943C2.5939 9.3335 2.77552 9.3335 3.13876 9.3335H8.00007L7.3334 14.6668L13.2711 7.54159C13.5036 7.26255 13.6199 7.12302 13.6217 7.00519C13.6232 6.90275 13.5776 6.80529 13.4979 6.7409C13.4062 6.66683 13.2246 6.66683 12.8614 6.66683H8.00007L8.66674 1.3335Z'
        stroke='currentColor'
        strokeWidth='1.33333'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default BlazeIcon
