type Props = {
  className?: string
  width?: number
}

const SmartphoneIcon = ({ className, width = 24 }: Props) => {
  if (typeof width !== 'number') throw new Error('Icon width must be a number')
  const height = (width * 24) / 25

  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox='0 0 25 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M17.2109 0H7.78906C6.30289 0 5.09375 1.20909 5.09375 2.69531V21.3046C5.09375 22.7909 6.30284 24 7.78906 24H17.2109C18.6971 24 19.9062 22.7909 19.9062 21.3046V2.69531C19.9062 1.20909 18.6971 0 17.2109 0ZM7.78906 1.40625H17.2109C17.9217 1.40625 18.5 1.98454 18.5 2.69531V18.5156H6.5V2.69531C6.5 1.98454 7.07829 1.40625 7.78906 1.40625ZM17.2109 22.5938H7.78906C7.07825 22.5938 6.5 22.0155 6.5 21.3047V19.9218H18.5V21.3046C18.5 22.0155 17.9217 22.5938 17.2109 22.5938Z'
        fill='currentColor'
      />
      <path
        d='M12.5 20.4844C12.1117 20.4844 11.7969 20.7992 11.7969 21.1875V21.2812C11.7969 21.6696 12.1117 21.9844 12.5 21.9844C12.8883 21.9844 13.2031 21.6696 13.2031 21.2812V21.1875C13.2031 20.7992 12.8884 20.4844 12.5 20.4844Z'
        fill='currentColor'
      />
    </svg>
  )
}
export default SmartphoneIcon
