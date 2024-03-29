type Props = {
  className?: string
  width?: number
}

const EyeOpenIcon = ({ className, width = 24 }: Props) => {
  if (typeof width !== 'number') throw new Error('Icon width must be a number')
  const height = (width / 24) * 24

  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'>
      <g clipPath='url(#clip0_668_13118)'>
        <path
          d='M12 19.5C4.14881 19.5 0.256312 12.6555 0.0945 12.3643C-0.0315 12.1376 -0.0315 11.8622 0.0945 11.6355C0.256312 11.3445 4.14881 4.5 12 4.5C19.8512 4.5 23.7437 11.3445 23.9055 11.6357C24.0315 11.8624 24.0315 12.1378 23.9055 12.3645C23.7437 12.6555 19.8512 19.5 12 19.5ZM1.63256 11.9989C2.52469 13.3509 6.02737 18 12 18C17.9916 18 21.4787 13.3547 22.3674 12.0011C21.4753 10.6491 17.9726 6 12 6C6.00844 6 2.52131 10.6453 1.63256 11.9989ZM12 16.5C9.51862 16.5 7.5 14.4814 7.5 12C7.5 9.51862 9.51862 7.5 12 7.5C14.4814 7.5 16.5 9.51862 16.5 12C16.5 14.4814 14.4814 16.5 12 16.5ZM12 9C10.3459 9 9 10.3459 9 12C9 13.6541 10.3459 15 12 15C13.6541 15 15 13.6541 15 12C15 10.3459 13.6541 9 12 9Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_668_13118'>
          <rect width='24' height='24' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}
export default EyeOpenIcon
