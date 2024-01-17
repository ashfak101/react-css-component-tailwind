import { SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement> & {
  width?: number
}

const BundleTickIcon = ({ width = 16, ...props }: Props) => {
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
      <g clipPath='url(#a)'>
        <path
          fill='#00378B'
          d='M6.448 15.609c.518.523 1.67.35 1.794-.474.772-5.112 4.635-9.425 7.558-13.489C16.61.52 14.747-.549 13.947.563c-2.671 3.714-6.038 7.62-7.355 12.127-1.505-1.538-3.017-3.062-4.705-4.414C.818 7.42-.71 8.93.37 9.794c2.199 1.762 4.1 3.816 6.078 5.815Z'
        />
      </g>
      <defs>
        <clipPath id='a'>
          <path fill='#fff' d='M0 0h16v16H0z' />
        </clipPath>
      </defs>
    </svg>
  )
}
export default BundleTickIcon
