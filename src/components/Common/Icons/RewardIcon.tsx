import { SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement> & {
  width?: number
}

const RewardIcon = ({ width = 16, ...props }: Props) => {
  if (typeof width !== 'number') throw new Error('Icon width must be a number')

  const height = (width * 14) / 16

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 16 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <path
        d='M5.5 8.53125C5.6725 8.53125 5.8125 8.67125 5.8125 8.84375C5.8125 9.01625 5.6725 9.15625 5.5 9.15625C5.3275 9.15625 5.1875 9.01625 5.1875 8.84375C5.1875 8.67125 5.3275 8.53125 5.5 8.53125Z'
        // fill='#212529'
        className='stroke-current'
      />
      <path
        d='M12.1157 6.42727L9.9085 7.58789L10.3297 5.12977L8.54443 3.38886L11.0119 3.03039L12.116 0.793516L13.2194 3.03039L15.6876 3.38852L13.9016 5.12977L14.3232 7.58789L12.1157 6.42727Z'
        // stroke='#212529'
        className='stroke-current'
        strokeWidth='0.9375'
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M2.375 5.71875V10.0938'
        // stroke='#212529'
        className='stroke-current'
        strokeWidth='0.9375'
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M6.23844 6.45719C5.76563 5.98438 5.12441 5.71875 4.45594 5.71875H0.333125C0.321875 5.71875 0.3125 5.72813 0.3125 5.73938V10.0731C0.3125 10.0844 0.321875 10.0938 0.333125 10.0938H2.57656C2.85125 10.0938 3.11875 10.1828 3.33875 10.3478L6.86938 12.8397C7.1975 13.0856 7.59688 13.2188 8.00688 13.2188H12.6875C13.2053 13.2188 13.625 12.7991 13.625 12.2812C13.625 11.7634 13.2053 11.3438 12.6875 11.3438H8.81031'
        // stroke='#212529'
        className='stroke-current'
        strokeWidth='0.9375'
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M6.42078 9.68796L7.93484 11.0386C8.17578 11.2595 8.50172 11.3689 8.81016 11.3436C9.03456 11.3255 9.25016 11.2355 9.41703 11.0655C9.81359 10.6605 9.80297 10.0217 9.41141 9.63014L6.23828 6.45702'
        // stroke='#212529'
        className='stroke-current'
        strokeWidth='0.9375'
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
export default RewardIcon
