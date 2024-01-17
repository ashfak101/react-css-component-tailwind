import { SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement> & {
  width?: number
}

const CheckIcon = ({ width = 24, ...props }: Props) => {
  if (typeof width !== 'number') throw new Error('Icon width must be a number')

  const height = (width * 24) / 24

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <g clipPath='url(#clip0_1458_33029)'>
        <path
          d='M12 0C5.3832 0 0 5.3832 0 12C0 18.6168 5.3832 24 12 24C18.6168 24 24 18.6168 24 12C24 5.3832 18.6168 0 12 0ZM12 21.8182C6.58618 21.8182 2.18182 17.4137 2.18182 12C2.18182 6.58625 6.58618 2.18182 12 2.18182C17.4138 2.18182 21.8182 6.58625 21.8182 12C21.8182 17.4137 17.4137 21.8182 12 21.8182Z'
          fill='#1FB356'
        />
        <path
          d='M16.4998 7.75748L10.3286 13.9286L7.50023 11.1002C7.07427 10.6742 6.3835 10.6741 5.95747 11.1001C5.53143 11.5261 5.53143 12.2168 5.95747 12.6429L9.55718 16.2427C9.76176 16.4473 10.0392 16.5623 10.3285 16.5623H10.3286C10.6179 16.5623 10.8954 16.4473 11.0999 16.2428L18.0426 9.30032C18.4686 8.87428 18.4686 8.18359 18.0426 7.75755C17.6165 7.33152 16.9258 7.33144 16.4998 7.75748Z'
          fill='#1FB356'
        />
      </g>
      <defs>
        <clipPath id='clip0_1458_33029'>
          <rect width='24' height='24' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}
export default CheckIcon
