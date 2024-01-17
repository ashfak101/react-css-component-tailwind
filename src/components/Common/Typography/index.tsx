import clsx from 'clsx'
import React from 'react'

type TypographyProps = {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  children: React.ReactNode
  size:
    | '-xxs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'display-xs'
    | 'display-sm'
    | 'display-md'
    | 'display-lg'
    | 'display-xl'
    | 'display-2xl'
  classNames?: string
  weight?:
    | 'thin'
    | 'extralight'
    | 'light'
    | 'normal'
    | 'medium'
    | 'semibold'
    | 'bold'
    | 'extrabold'
    | 'black'
}

const sizeMap = {
  '-xxs': 'text-xxs',
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-md',
  lg: 'text-lg',
  xl: 'text-xl',
  'display-xs': 'text-display-xs',
  'display-sm': 'text-display-sm',
  'display-md': 'text-display-md',
  'display-lg': 'text-display-lg',
  'display-xl': 'text-display-xl',
  'display-2xl': 'text-display-2xl',
}

const Typography: React.FC<TypographyProps> = ({
  variant,
  size,
  children,
  classNames,
  weight,
}) => {
  const Component = variant
  const classes = clsx(sizeMap[size], weight && `font-${weight}`, classNames)

  return <Component className={classes}>{children}</Component>
}

export default Typography
