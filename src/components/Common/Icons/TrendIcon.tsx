import { SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement> & {
  width?: number
}

const TrendIcon = ({ width = 13, ...props }: Props) => {
  if (typeof width !== 'number') throw new Error('Icon width must be a number')

  const height = (width * 7) / 13

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 13 7'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0.666508 6.6656C0.751841 6.6656 0.837174 6.63294 0.902508 6.56827L4.66651 2.8036L7.76384 5.9016C7.89451 6.0316 8.10517 6.0316 8.23584 5.9016L12.3332 1.8036V3.6656C12.3332 3.8496 12.4825 3.99894 12.6665 3.99894C12.8505 3.99894 12.9999 3.8496 12.9999 3.6656V1.00027C13.0045 0.818935 12.8438 0.661602 12.6658 0.665602H9.99984C9.81584 0.665602 9.66651 0.814935 9.66651 0.998935C9.66651 1.18294 9.81584 1.33227 9.99984 1.33227H11.8618L7.99984 5.19427L4.90251 2.09627C4.77184 1.96627 4.56117 1.96627 4.43051 2.09627L0.430508 6.09627C0.300508 6.22694 0.300508 6.4376 0.430508 6.56827C0.495841 6.63294 0.581174 6.6656 0.666508 6.6656Z'
        // fill='#212529'
        className='fill-current'
      />
    </svg>
  )
}
export default TrendIcon
