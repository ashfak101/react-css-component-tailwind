import { SVGProps } from 'react'

interface IProps extends SVGProps<SVGSVGElement> {
  size?: number
}

const SearchIcon = ({ size = 16, ...props }: IProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <g clipPath='url(#clip0_200_26228)'>
        <path
          d='M16 15.2938L11.7462 11.04C12.7552 9.86924 13.366 8.34616 13.366 6.683C13.366 2.99798 10.368 0 6.683 0C2.99798 0 0 2.99798 0 6.683C0 10.368 2.99798 13.366 6.683 13.366C8.34616 13.366 9.86924 12.7552 11.04 11.7462L15.2938 16L16 15.2938ZM0.998739 6.683C0.998739 3.54869 3.54869 0.998739 6.683 0.998739C9.81731 0.998739 12.3673 3.54869 12.3673 6.683C12.3673 9.81731 9.81731 12.3673 6.683 12.3673C3.54869 12.3673 0.998739 9.81731 0.998739 6.683Z'
          className='fill-current'
        />
      </g>
      <defs>
        <clipPath id='clip0_200_26228'>
          <rect width='16' height='16' className='fill-current' />
        </clipPath>
      </defs>
    </svg>
  )
}
export default SearchIcon
