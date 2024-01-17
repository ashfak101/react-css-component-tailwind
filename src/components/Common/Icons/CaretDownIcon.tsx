type Props = {
  className?: string
  width?: number
}

const CaretDownIcon = ({ className, width = 17 }: Props) => {
  if (typeof width !== 'number') throw new Error('Icon width must be a number')
  const height = (width * 8) / 17

  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox='0 0 17 8'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M8.06515 8C7.41379 8 6.76244 7.74876 6.26927 7.25559L0.202385 1.18872C-0.0674618 0.918876 -0.0674618 0.472233 0.202385 0.202385C0.472233 -0.0674618 0.918876 -0.0674618 1.18872 0.202385L7.2556 6.26926C7.70225 6.7159 8.42804 6.7159 8.87469 6.26926L14.9416 0.202385C15.2114 -0.0674618 15.6581 -0.0674618 15.9279 0.202385C16.1978 0.472233 16.1978 0.918876 15.9279 1.18872L9.86102 7.25559C9.36786 7.74876 8.7165 8 8.06515 8Z'
        fill='currentColor'
      />
    </svg>
  )
}
export default CaretDownIcon
