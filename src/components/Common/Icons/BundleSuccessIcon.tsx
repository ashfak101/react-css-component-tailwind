import { SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement> & {
  width?: number
}

const BundleSuccessIcon = ({ width = 32, ...props }: Props) => {
  if (typeof width !== 'number') throw new Error('Icon width must be a number')

  const height = (width * 32) / 32

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <g fill='#00425E' clipPath='url(#a)'>
        <path d='m32 16-3.622-4.022.567-5.384-5.297-1.122L20.945.778 16 2.988 11.055.778 8.353 5.472 3.055 6.594l.568 5.384L0 16l3.622 4.022-.567 5.384 5.297 1.122 2.703 4.694L16 29.012l4.945 2.21 2.703-4.694 5.297-1.122-.568-5.384L32 16ZM16 26.955l-4.164 1.861-2.275-3.951L5.1 23.92l.477-4.533L2.527 16l3.05-3.387L5.1 8.08l4.461-.945 2.275-3.951L16 5.044l4.164-1.86 2.275 3.951 4.462.945-.478 4.533L29.473 16l-3.05 3.387.477 4.533-4.461.945-2.275 3.951L16 26.956Z' />
        <path d='m21.307 11.246-6.708 7.516-4.176-4.176-1.328 1.328 5.581 5.58 8.031-8.997-1.4-1.25Z' />
      </g>
      <defs>
        <clipPath id='a'>
          <path fill='#fff' d='M0 0h32v32H0z' />
        </clipPath>
      </defs>
    </svg>
  )
}

export default BundleSuccessIcon
