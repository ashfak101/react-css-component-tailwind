import { SVGProps } from 'react'

interface IProps extends SVGProps<SVGSVGElement> {
  size?: number
}

const PaymentCardBack = ({ size = 24, ...props }: IProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <g clipPath='url(#clip0_2918_47836)'>
        <path
          d='M21.8824 3.70589H2.11765C0.94801 3.70589 0 4.6539 0 5.82353V18.1765C0 19.3461 0.94801 20.2941 2.11765 20.2941H21.8824C23.052 20.2941 24.0001 19.3461 24.0001 18.1764V5.82348C24 4.6539 23.052 3.70589 21.8824 3.70589ZM20.4706 17.1177H15.5294V14.6471H20.4706V17.1177ZM22.9412 10.0588H1.05882V7.2353H22.9412V10.0588Z'
          fill='#1A171B'
        />
      </g>
      <defs>
        <clipPath id='clip0_2918_47836'>
          <rect width={24} height={24} fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}

export default PaymentCardBack
