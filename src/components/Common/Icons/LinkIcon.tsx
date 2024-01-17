type Props = {
  className?: string
  width?: number
}

const LinkIcon = ({ className, width = 20 }: Props) => {
  if (typeof width !== 'number') throw new Error('Icon width must be a number')
  const height = (width * 20) / 20
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      width={width}
      height={height}
      viewBox='0 0 20 20'
      fill='none'>
      <path
        d='M10.5897 15.3033L9.41116 16.4818C7.78398 18.109 5.14579 18.109 3.51861 16.4818C1.89142 14.8546 1.89142 12.2164 3.51861 10.5892L4.69712 9.41074M15.3037 10.5892L16.4822 9.41074C18.1094 7.78355 18.1094 5.14536 16.4822 3.51818C14.855 1.89099 12.2169 1.89099 10.5897 3.51818L9.41116 4.69669M7.08375 12.9166L12.9171 7.08331'
        stroke='currentColor'
        stroke-width='1.66667'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  )
}

export default LinkIcon
