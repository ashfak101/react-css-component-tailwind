import { SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement> & {
  width?: number
}

const UploadIcon = ({ width = 20, ...props }: Props) => {
  if (typeof width !== 'number') throw new Error('Icon width must be a number')

  const height = (width * 20) / 20

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <path
        d='M13.7002 7.4165C16.7002 7.67484 17.9252 9.2165 17.9252 12.5915V12.6998C17.9252 16.4248 16.4336 17.9165 12.7086 17.9165H7.28356C3.55856 17.9165 2.06689 16.4248 2.06689 12.6998V12.5915C2.06689 9.2415 3.27523 7.69984 6.22523 7.42484'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10 12.4999V3.0166'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12.7918 4.87516L10.0002 2.0835L7.2085 4.87516'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
export default UploadIcon
