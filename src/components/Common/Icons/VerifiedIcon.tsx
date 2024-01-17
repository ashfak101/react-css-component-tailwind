import { SVGProps } from 'react'

interface Props extends SVGProps<SVGSVGElement> {
  size?: number
}

const VerifiedIcon = ({ size = 32, ...props }: Props) => {
  if (typeof size !== 'number') throw new Error('Icon size must be a number')
  const height = (size * 32) / 32

  return (
    <svg
      width={size}
      height={height}
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <g clipPath='url(#clip0_918_12840)'>
        <path
          d='M32 16L28.3775 11.978L28.9446 6.59361L23.6476 5.47218L20.9455 0.778259L16 2.98846L11.0546 0.778259L8.35251 5.47218L3.05542 6.59361L3.62255 11.978L0 16L3.62248 20.0219L3.05535 25.4063L8.35245 26.5278L11.0545 31.2217L16 29.0114L20.9454 31.2217L23.6475 26.5278L28.9446 25.4063L28.3774 20.0219L32 16ZM16 26.9553L11.8359 28.8163L9.5613 24.8648L5.0996 23.9203L5.57706 19.387L2.52652 16L5.57706 12.6131L5.0996 8.0798L9.5613 7.13521L11.8359 3.18376L16 5.04472L20.1641 3.18376L22.4387 7.13521L26.9005 8.0798L26.423 12.6131L29.4735 16L26.4229 19.3869L26.9004 23.9201L22.4386 24.8647L20.164 28.8162L16 26.9553Z'
          fill='currentColor'
        />
        <path
          d='M21.3071 11.2466L14.5987 18.7622L10.4227 14.5863L9.09528 15.9137L14.6762 21.4946L22.7076 12.4966L21.3071 11.2466Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_918_12840'>
          <rect width='32' height='32' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}
export default VerifiedIcon
