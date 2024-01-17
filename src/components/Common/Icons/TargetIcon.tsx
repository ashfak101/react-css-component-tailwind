import { SVGProps } from 'react'

const TargetIcon = ({ width = 24, ...props }: SVGProps<SVGSVGElement>) => {
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
      <g clip-path='url(#clip0_4454_532)'>
        <path
          d='M12.4129 0.82576C10.5589 0.82576 8.73114 1.27245 7.09313 2.12138L5.17786 0.206018C5.00847 0.0365319 4.7644 -0.0350923 4.53028 0.0158801C4.29617 0.0668526 4.10401 0.233428 4.02032 0.45797L3.05316 3.05301L0.458165 4.02013C0.233623 4.10381 0.0670477 4.29597 0.0160752 4.53009C-0.0348503 4.7642 0.036727 5.00822 0.206213 5.17766L2.12153 7.09303C1.2726 8.731 0.825908 10.5587 0.825908 12.4127C0.825908 18.8019 6.02379 23.9998 12.4129 23.9998C18.802 23.9998 24 18.8019 24 12.4127C24 6.02364 18.802 0.82576 12.4129 0.82576ZM12.4129 16.2262C14.5157 16.2262 16.2264 14.5155 16.2264 12.4127C16.2264 10.31 14.5157 8.59929 12.4129 8.59929C11.6154 8.59929 10.8746 8.8458 10.2618 9.26602L8.49154 7.49574C9.56783 6.63568 10.9313 6.12056 12.4129 6.12056C15.8824 6.12056 18.7051 8.94324 18.7051 12.4127C18.7051 15.8823 15.8824 18.7049 12.4129 18.7049C8.94339 18.7049 6.12075 15.8823 6.12075 12.4127C6.12075 10.9311 6.63583 9.56768 7.49588 8.49139L9.26617 10.2617C8.84595 10.8744 8.59944 11.6152 8.59944 12.4127C8.59944 14.5155 10.3102 16.2262 12.4129 16.2262ZM12.9107 11.9149L11.2849 10.289C11.6216 10.1095 12.0055 10.0073 12.4129 10.0073C13.7393 10.0073 14.8183 11.0864 14.8183 12.4127C14.8183 13.739 13.7393 14.8181 12.4129 14.8181C11.0866 14.8181 10.0075 13.739 10.0075 12.4127C10.0075 12.0052 10.1097 11.6214 10.2892 11.2847L11.9151 12.9106C12.0526 13.048 12.2328 13.1167 12.4129 13.1167C12.5931 13.1167 12.7733 13.048 12.9107 12.9106C13.1857 12.6356 13.1857 12.1898 12.9107 11.9149ZM4.95707 1.97654L7.32621 4.34572L7.02164 6.0258L4.4182 3.4224L4.95707 1.97654ZM1.97673 4.95688L3.42259 4.41805L6.02604 7.02145L4.34592 7.32606L1.97673 4.95688ZM12.4129 22.5917C6.80025 22.5917 2.23399 18.0254 2.23399 12.4127C2.23399 10.9353 2.557 9.47704 3.17369 8.14514L3.6109 8.58235C3.74411 8.7156 3.92368 8.78859 4.1087 8.78859C4.15043 8.78859 4.19244 8.78488 4.2343 8.77732L5.78577 8.49608C5.10454 9.64437 4.71272 10.9835 4.71272 12.4127C4.71272 16.6587 8.16702 20.113 12.4129 20.113C16.6589 20.113 20.1132 16.6587 20.1132 12.4127C20.1132 8.16683 16.6589 4.71248 12.4129 4.71248C10.9837 4.71248 9.64457 5.10435 8.49628 5.78558L8.77752 4.23411C8.81868 4.00694 8.74584 3.77395 8.58259 3.61071L8.14538 3.1735C9.47724 2.55681 10.9354 2.23379 12.413 2.23379C18.0257 2.23379 22.5919 6.80005 22.5919 12.4127C22.5919 18.0254 18.0256 22.5917 12.4129 22.5917Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_4454_532'>
          <rect width='24' height='24' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}
export default TargetIcon