import { SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement> & {
  width?: number
}

const ArrowRightIcon = ({ width = 9, height = 8, ...props }: Props) => {
  if (typeof width !== 'number') throw new Error('Icon width must be a number')

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 9 8'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <path
        fill='#5C5A5D'
        d='M2.949 0 2.53.416 6.104 4 2.531 7.584 2.95 8l3.987-4-3.987-4Z'
      />
    </svg>
  )
}

export default ArrowRightIcon
