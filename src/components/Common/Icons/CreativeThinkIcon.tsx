type Props = {
  className?: string
  width?: number
}

const CreativeThinkIcon = ({ className, width = 80 }: Props) => {
  if (typeof width !== 'number') throw new Error('Icon width must be a number')
  const height = (width * 80) / 80

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 80 80'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}>
      <g clip-path='url(#clip0_4441_54920)'>
        <path
          d='M9.50109 35.6673L11.8175 35.3109C11.5964 33.8745 11.4844 32.4031 11.4844 30.9375C11.4844 15.2139 24.2764 2.42188 40 2.42188C40.8714 2.42188 41.7502 2.46156 42.6122 2.53984L42.8242 0.205781C41.892 0.121094 40.9419 0.078125 40 0.078125C22.9841 0.078125 9.14062 13.9216 9.14062 30.9375C9.14062 32.522 9.26187 34.1134 9.50109 35.6673Z'
          fill='currentColor'
        />
        <path
          d='M66.8781 40.4854C64.8381 46.2274 60.9119 51.2628 55.8226 54.6635C54.173 55.7659 52.8128 57.1921 51.802 58.8279H28.1981C27.1873 57.192 25.8272 55.7659 24.1775 54.6635C18.1436 50.6315 13.9069 44.5429 12.2476 37.5192L9.96655 38.0579C11.7625 45.6603 16.3469 52.2496 22.8751 56.6121C26.0156 58.7109 27.8906 62.2267 27.8906 66.0171V70.9374C27.8906 73.1749 29.61 75.0176 31.7969 75.2157V75.6249C31.7969 77.9943 33.7244 79.9218 36.0937 79.9218H43.9062C46.2755 79.9218 48.2031 77.9943 48.2031 75.6249V75.2157C50.3898 75.0176 52.1094 73.1749 52.1094 70.9374V66.0171C52.1094 62.2268 53.9842 58.711 57.1248 56.6124C62.6308 52.9331 66.8789 47.4845 69.0867 41.2703L66.8781 40.4854ZM49.7656 70.9374C49.7656 72.0145 48.8895 72.8906 47.8125 72.8906H39.5597V75.2343H45.8594V75.6249C45.8594 76.702 44.9833 77.5781 43.9062 77.5781H36.0937C35.0167 77.5781 34.1406 76.702 34.1406 75.6249V75.2343H37.2159V72.8906H32.1875C31.1105 72.8906 30.2344 72.0145 30.2344 70.9374V70.5468H49.7656V70.9374ZM49.7656 66.0171V68.2031H30.2344V66.0171C30.2344 65.9645 30.2325 65.912 30.2319 65.8593H49.768C49.7675 65.912 49.7656 65.9643 49.7656 66.0171ZM49.9948 63.5156H30.0051C29.8566 62.712 29.6366 61.9281 29.3508 61.1718H50.6492C50.3634 61.9281 50.1434 62.712 49.9948 63.5156Z'
          fill='currentColor'
        />
        <path
          d='M68.5156 30.9375C68.5156 33.4469 68.1895 35.9362 67.5466 38.3366L69.8103 38.9431C70.5064 36.3451 70.8594 33.6517 70.8594 30.9376C70.8594 23.612 68.2475 16.5105 63.5047 10.9408C58.8156 5.43437 52.3286 1.7339 45.2386 0.52124L44.8434 2.8314C58.5602 5.17749 68.5158 16.9978 68.5156 30.9375Z'
          fill='currentColor'
        />
        <path d='M0 30.2344H5.9375V32.5781H0V30.2344Z' fill='currentColor' />
        <path
          d='M74.0625 30.2344H80V32.5781H74.0625V30.2344Z'
          fill='currentColor'
        />
        <path
          d='M2.01257 43.9985L7.59382 41.9679L8.39539 44.171L2.81414 46.2017L2.01257 43.9985Z'
          fill='currentColor'
        />
        <path
          d='M71.6295 18.6638L77.2109 16.6331L78.0124 18.8363L72.431 20.8669L71.6295 18.6638Z'
          fill='currentColor'
        />
        <path
          d='M8.61719 56.2144L13.1653 52.3965L14.6723 54.1919L10.1242 58.0097L8.61719 56.2144Z'
          fill='currentColor'
        />
        <path
          d='M65.3408 8.60266L69.8889 4.78485L71.3959 6.58016L66.8478 10.398L65.3408 8.60266Z'
          fill='currentColor'
        />
        <path
          d='M71.6193 44.1348L72.4208 41.9316L78.0022 43.9623L77.2007 46.1654L71.6193 44.1348Z'
          fill='currentColor'
        />
        <path
          d='M2.01624 18.8252L2.8178 16.6221L8.39905 18.6527L7.59748 20.8558L2.01624 18.8252Z'
          fill='currentColor'
        />
        <path
          d='M65.3521 54.2128L66.8591 52.4175L71.4072 56.2353L69.9002 58.0306L65.3521 54.2128Z'
          fill='currentColor'
        />
        <path
          d='M8.60699 6.59399L10.114 4.79868L14.6621 8.61649L13.1551 10.4118L8.60699 6.59399Z'
          fill='currentColor'
        />
        <path
          d='M36.0527 10.5469C33.3308 10.5469 30.8727 12.1056 29.6921 14.5031C27.0746 14.7266 25.0125 16.9244 25.0125 19.5938C25.0125 19.645 25.0135 19.6962 25.0153 19.7475C22.1324 20.6689 20.0783 23.383 20.0783 26.4844C20.0783 28.4805 20.9013 30.3311 22.3321 31.655C21.5157 32.7078 21.0652 33.9956 21.0652 35.3438C21.0652 37.2403 21.9475 38.9916 23.4263 40.1333C23.1711 40.8102 23.0389 41.5216 23.0389 42.2344C23.0389 45.1895 25.1964 47.6945 28.0622 48.2095C29.4927 50.6936 32.1739 52.2656 35.0661 52.2656C36.8767 52.2656 38.5928 51.6759 40.0003 50.5861C41.4078 51.6759 43.1238 52.2656 44.9346 52.2656C47.8267 52.2656 50.5078 50.6934 51.9383 48.2095C54.8042 47.6945 56.9616 45.1895 56.9616 42.2344C56.9616 41.5216 56.8292 40.8102 56.5742 40.1333C58.0528 38.9916 58.9353 37.2402 58.9353 35.3438C58.9353 33.9958 58.4847 32.7078 57.6685 31.655C59.0992 30.3311 59.9222 28.4806 59.9222 26.4844C59.9222 23.3828 57.8685 20.6689 54.9852 19.7475C54.9871 19.6961 54.988 19.645 54.988 19.5938C54.988 16.9242 52.9263 14.7263 50.3085 14.5031C49.1277 12.1056 46.6697 10.5469 43.9477 10.5469C42.5349 10.5469 41.1644 10.9692 40.0003 11.7509C38.8361 10.9692 37.4655 10.5469 36.0527 10.5469ZM38.8282 48.5142C37.7836 49.4244 36.4649 49.9219 35.0658 49.9219C33.405 49.9219 31.8422 49.1909 30.768 47.9777C31.3874 47.7608 32.0557 47.3997 32.6303 46.7987C33.6552 45.7272 34.0827 44.2172 33.9011 42.3108L31.5678 42.533C31.6813 43.7233 31.4724 44.6098 30.9471 45.1677C30.2185 45.9417 29.0252 45.9547 28.8813 45.9527C26.9183 45.8147 25.3824 44.1841 25.3824 42.2344C25.3824 41.565 25.5682 40.9184 25.9344 40.3123L26.5849 39.2364L25.4658 38.6631C24.1969 38.0131 23.4086 36.7412 23.4086 35.3438C23.4086 34.2392 23.91 33.197 24.785 32.4742C24.9846 32.3561 25.9825 31.8163 27.1019 32.1078C28.1264 32.3747 29.041 33.2672 29.8202 34.7608L31.8981 33.6767C30.7897 31.5523 29.3599 30.2577 27.6482 29.8284C26.2155 29.4692 24.9478 29.8295 24.1855 30.1591C23.0713 29.2647 22.4217 27.9314 22.4217 26.4844C22.4217 24.1411 24.1775 22.1286 26.506 21.803L26.513 21.802C26.6138 21.7886 28.8821 21.5189 30.3107 24.0189L32.3455 22.8561C30.8549 20.2473 28.6961 19.6052 27.3621 19.4756C27.4247 18.0092 28.6352 16.8339 30.1207 16.8281C30.1408 16.83 30.1605 16.8333 30.1805 16.8359C30.2417 16.8442 30.303 16.8522 30.3652 16.8573L31.2714 16.9338L31.5703 16.0748C32.2332 14.1703 34.0346 12.8906 36.0527 12.8906C37.0522 12.8906 38.0205 13.2083 38.8282 13.7919V48.5142ZM41.1719 13.7919C41.9796 13.2083 42.9478 12.8906 43.9474 12.8906C45.9655 12.8906 47.7669 14.1703 48.4299 16.0748L48.7288 16.9338L49.6352 16.8573C49.6972 16.852 49.7585 16.8442 49.8196 16.8359C49.8396 16.8331 49.8594 16.8298 49.8796 16.8281C51.3649 16.8339 52.5755 18.0092 52.638 19.4756C51.3039 19.6052 49.1452 20.2473 47.6546 22.8561L49.6894 24.0189C51.1161 21.5222 53.38 21.7877 53.4864 21.8019L53.4939 21.803C55.8222 22.1286 57.5782 24.1411 57.5782 26.4844C57.5782 27.9312 56.9288 29.2645 55.8144 30.1589C55.0521 29.8294 53.7842 29.4689 52.3514 29.8284C50.6399 30.2577 49.21 31.5523 48.1016 33.6767L50.1796 34.7608C50.9588 33.2672 51.8733 32.3747 52.8978 32.1078C54.0171 31.8163 55.0149 32.3559 55.2147 32.4741C56.0897 33.1969 56.5913 34.2391 56.5913 35.3436C56.5913 36.7411 55.803 38.013 54.5341 38.663L53.4149 39.2362L54.0657 40.3125C54.4321 40.9183 54.6177 41.5648 54.6177 42.2344C54.6177 44.1839 53.0822 45.8144 51.1196 45.9527C50.9811 45.9545 49.7839 45.9441 49.0532 45.1678C48.5278 44.6098 48.3189 43.7234 48.4322 42.5331L46.0991 42.3109C45.9175 44.2173 46.345 45.7273 47.3697 46.7989C47.9444 47.3998 48.6127 47.7611 49.2321 47.9778C48.1577 49.1909 46.595 49.922 44.9342 49.922C43.5353 49.922 42.2164 49.4244 41.1719 48.5142V13.7919Z'
          fill='currentColor'
        />
        <path
          d='M63.8281 32.6562H66.1719V35H63.8281V32.6562Z'
          fill='currentColor'
        />
        <path
          d='M63.8281 27.8125H66.1719V30.1562H63.8281V27.8125Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_4441_54920'>
          <rect width='80' height='80' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}
export default CreativeThinkIcon
