import { SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement> & {
  size?: number
}

const UpdateIcon = ({ size = 24, ...props }: Props) => {
  if (typeof size !== 'number') throw new Error('Icon width must be a number')

  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <g clipPath='url(#clip0_646_12541)'>
        <path
          d='M12 0C5.38315 0 0 5.38315 0 12C0 18.6169 5.38315 24 12 24C18.6169 24 24 18.6169 24 12C24 5.38315 18.6169 0 12 0ZM12 22.1232C6.41803 22.1232 1.87684 17.582 1.87684 12C1.87684 6.41803 6.41803 1.87684 12 1.87684C17.582 1.87684 22.1232 6.41803 22.1232 12C22.1232 17.582 17.582 22.1232 12 22.1232Z'
          fill='currentColor'
        />
        <path
          d='M6.22274 12.4859L8.37535 11.1429C8.74171 10.9143 8.64887 10.3569 8.2282 10.2595L7.40102 10.068C8.14175 8.20516 9.96165 6.91427 12.0529 6.91427C14.1077 6.91427 15.9315 8.14573 16.699 10.0515C16.8926 10.5322 17.4393 10.7648 17.9201 10.5714C18.4008 10.3778 18.6336 9.831 18.44 9.35028C17.3848 6.73034 14.8777 5.03731 12.0529 5.03731C9.07916 5.03731 6.50439 6.93629 5.55734 9.64082L4.73253 9.44975C4.31187 9.35228 3.98342 9.81211 4.2119 10.1785L5.55484 12.3311C5.6966 12.5583 5.99552 12.6276 6.22274 12.4859Z'
          fill='currentColor'
        />
        <path
          d='M19.7929 14.197L18.4911 12.0193C18.3537 11.7895 18.0562 11.7146 17.8264 11.852L15.6486 13.1538C15.278 13.3753 15.3602 13.9344 15.779 14.0397L16.611 14.2492C15.7839 15.9816 14.0091 17.1211 12.0045 17.0847C10.0311 17.0489 8.25699 15.8518 7.48486 14.0345C7.28216 13.5575 6.73124 13.3349 6.25415 13.5378C5.77718 13.7405 5.55484 14.2914 5.75742 14.7685C6.8187 17.2663 9.25759 18.9121 11.9705 18.9613C12.0134 18.9621 12.0558 18.9624 12.0985 18.9624C14.9357 18.9624 17.4145 17.2523 18.4572 14.714L19.2583 14.9157C19.6773 15.0212 20.0145 14.5678 19.7929 14.197Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_646_12541'>
          <rect width='24' height='24' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}
export default UpdateIcon