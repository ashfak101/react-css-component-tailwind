type Props = {
  className?: string
  width?: number
}

const ViewIcon = ({ className, width = 20, ...rest }: Props) => {
  return (
    <svg
      className={className}
      width={width}
      height={width}
      {...rest}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <circle
        cx='10.0001'
        cy={10}
        r='2.58333'
        stroke='#838284'
        strokeWidth='1.5'
      />
      <path
        d='M17.3585 8.87272C17.8197 9.35795 18.0503 9.60057 18.0503 10C18.0503 10.3994 17.8197 10.642 17.3585 11.1273C15.9569 12.6019 13.1874 15 10.0001 15C6.81272 15 4.0433 12.6019 2.64167 11.1273C2.18045 10.642 1.94984 10.3994 1.94984 10C1.94984 9.60057 2.18045 9.35795 2.64167 8.87272C4.0433 7.39811 6.81272 5 10.0001 5C13.1874 5 15.9569 7.39811 17.3585 8.87272Z'
        stroke='#838284'
        strokeWidth={2}
      />
    </svg>
  )
}

export default ViewIcon
