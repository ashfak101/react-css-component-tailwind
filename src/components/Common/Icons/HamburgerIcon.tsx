import { SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement> & {
  width?: number
}

const HamburgerIcon = ({ width = 26, ...rest }: Props) => {
  if (typeof width !== 'number') throw new Error('Icon width must be a number')

  return (
    <svg
      width={width}
      height={width}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...rest}>
      <path
        d='M20 5.907H4v1.59h16v-1.59ZM20 16.503H4v1.59h16v-1.59ZM20 11.205H4v1.59h16v-1.59Z'
        fill='currentColor'
      />
    </svg>
  )
}
export default HamburgerIcon
