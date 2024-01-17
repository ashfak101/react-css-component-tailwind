import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'

type ButtonProps = {
  variant: 'primary' | 'secondary' | 'outlined'
  size: 'small' | 'medium' | 'large'
  children: React.ReactNode
  outlineColor?: 'primary' | 'secondary'
  href?: string
}

const Button: React.FC<ButtonProps> = ({
  variant,
  size,
  children,
  outlineColor,
  href,
}) => {
  let buttonClass = ''
  let hoverClass = ''
  let activeClass = ''
  let sizeClass = ''
  let outlineClass = ''

  switch (variant) {
    case 'primary':
      buttonClass = 'bg-primary-500 text-neutral-0'
      hoverClass = 'hover:bg-primary-700'
      activeClass = 'active:bg-primary-900'
      break
    case 'secondary':
      buttonClass = 'bg-secondary-500 text-neutral-0'
      hoverClass = 'hover:bg-secondary-700'
      activeClass = 'active:bg-secondary-900'
      break
    case 'outlined':
      buttonClass = 'border  text-neutral-500'
      break
  }

  switch (outlineColor) {
    case 'primary':
      outlineClass = 'border-primary-500 text-primary-500'
      hoverClass = 'hover:border-primary-700 hover:text-primary-700'
      activeClass = 'active:border-primary-900 active:text-primary-900'
      break
    case 'secondary':
      outlineClass = 'border-secondary-500 text-secondary-500'
      hoverClass = 'hover:border-secondary-700 hover:text-secondary-700'
      activeClass = 'active:border-secondary-900 active:text-secondary-900'
      break
  }
  switch (size) {
    case 'small':
      sizeClass = 'px-2 py-1 text-xs'
      break
    case 'medium':
      sizeClass = 'px-4 py-2 text-sm'
      break
    case 'large':
      sizeClass = 'px-6 py-3 text-md'
      break
  }
  if (href)
    return (
      <Link
        href={href}
        className={clsx(
          'mx-1 rounded transition-colors duration-200',
          buttonClass,
          hoverClass,
          activeClass,
          sizeClass,
          outlineClass
        )}>
        {children}
      </Link>
    )
  else
    return (
      <button
        className={clsx(
          'mx-1 rounded transition-colors duration-200',
          buttonClass,
          hoverClass,
          activeClass,
          sizeClass,
          outlineClass
        )}>
        {children}
      </button>
    )
}

export default Button
