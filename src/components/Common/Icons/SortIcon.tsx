import { SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement> & {
  width?: number
}

const SortIcon = ({ width = 8, ...props }: Props) => {
  if (typeof width !== 'number') throw new Error('Icon width must be a number')

  const height = (width / 8) * 14

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 8 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <path
        d='M4.00006 5.99994H3.11006C2.00672 5.99994 1.55339 5.21661 2.10672 4.25994L2.55339 3.48994L3.00006 2.71994C3.55339 1.76327 4.45672 1.76327 5.01006 2.71994L5.45672 3.48994L5.90339 4.25994C6.45672 5.21661 6.00339 5.99994 4.90006 5.99994H4.00006Z'
        stroke='currentColor'
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M3.99994 8.00006L4.88994 8.00006C5.99328 8.00006 6.44661 8.78339 5.89328 9.74006L5.44661 10.5101L4.99994 11.2801C4.44661 12.2367 3.54328 12.2367 2.98994 11.2801L2.54328 10.5101L2.09661 9.74006C1.54328 8.78339 1.99661 8.00006 3.09994 8.00006L3.99994 8.00006Z'
        stroke='currentColor'
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
export default SortIcon
