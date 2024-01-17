import { SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement> & {
  width?: number
}

const AlarmIcon = ({ width = 24, ...props }: Props) => {
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
      <path
        fill='#F8BA01'
        d='M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0Zm0 22.4C6.265 22.4 1.6 17.735 1.6 12S6.266 1.6 12 1.6c5.735 0 10.4 4.665 10.4 10.4S17.735 22.4 12 22.4Z'
      />
      <path
        fill='#F8BA01'
        d='M17.943 11.131H12.8v-6.8a.8.8 0 1 0-1.6 0v8.4h6.743a.8.8 0 1 0 0-1.6Z'
      />
    </svg>
  )
}

export default AlarmIcon
