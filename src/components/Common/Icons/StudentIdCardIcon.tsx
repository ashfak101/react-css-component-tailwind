type Props = {
  className?: string
  width?: number
}

const StudentIdCardIcon = ({ className, width = 20 }: Props) => {
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
        fill='#C6C5C6'
        d='M11.71 8.47h6.352a.293.293 0 1 0 0-.586H11.71a.293.293 0 0 0 0 .586ZM11.71 10.664h6.352a.293.293 0 0 0 0-.586H11.71a.293.293 0 1 0 0 .586ZM11.71 12.858h6.352a.293.293 0 0 0 0-.585H11.71a.293.293 0 1 0 0 .585ZM16.365 13.66c-1.097 0-1.99.893-1.99 1.99s.893 1.99 1.99 1.99c1.098 0 1.99-.893 1.99-1.99s-.893-1.99-1.99-1.99Zm0 3.394c-.774 0-1.404-.63-1.404-1.404 0-.774.63-1.404 1.404-1.404.775 0 1.404.63 1.404 1.404 0 .774-.63 1.404-1.404 1.404ZM10 1.913a.88.88 0 0 0 0 1.758.88.88 0 0 0 0-1.758Zm0 1.172a.293.293 0 1 1 0-.587.293.293 0 0 1 0 .587ZM7.009 8.47a.293.293 0 0 0 0-.586H1.938a.293.293 0 0 0-.293.293v9.17c0 .162.13.293.293.293H10.068a.293.293 0 0 0 .293-.293v-9.17a.293.293 0 0 0-.293-.293H8.286a.293.293 0 0 0 0 .586h1.489v8.584h-.652v-1.81c0-.7-.57-1.27-1.27-1.27h-.748v-.111c.504-.35.835-.933.835-1.592v-.653a1.94 1.94 0 0 0-1.937-1.937 1.94 1.94 0 0 0-1.938 1.938v.652c0 .66.331 1.242.835 1.592v.111h-.748c-.7 0-1.27.57-1.27 1.27v1.81h-.651V8.47h4.778Zm-1.523 5.797v-.129l.006.002a1.934 1.934 0 0 0 1.022 0l.005-.002v.492a.517.517 0 0 1-1.033 0v-.363Zm-.835-2.649a1.353 1.353 0 0 1 2.703 0v.653a1.352 1.352 0 0 1-2.703 0v-.653ZM3.47 15.244c0-.377.306-.684.683-.684H4.9v.07a1.104 1.104 0 0 0 2.205 0v-.07h.749c.376 0 .683.307.683.684v1.81H3.47v-1.81Z'
      />
      <path
        fill='#C6C5C6'
        d='M12.556 18.617H1.27a.684.684 0 0 1-.684-.684v-5.368a.293.293 0 0 0-.586 0v5.368c0 .7.57 1.27 1.27 1.27h11.286a.293.293 0 0 0 0-.586ZM18.73 4.385h-6.796V1.48a.684.684 0 0 0-.683-.684H8.749a.684.684 0 0 0-.683.684v2.904H1.27c-.7 0-1.27.57-1.27 1.27v5.651a.293.293 0 0 0 .586 0V5.654c0-.377.307-.683.684-.683h6.796v.114c0 1.067.867 1.934 1.934 1.934a1.936 1.936 0 0 0 1.934-1.934v-.114h6.796c.377 0 .684.306.684.683v12.279a.684.684 0 0 1-.684.684h-4.897a.293.293 0 0 0 0 .585h4.897c.7 0 1.27-.569 1.27-1.269V5.654c0-.7-.57-1.27-1.27-1.27Zm-7.382.7A1.35 1.35 0 0 1 10 6.433a1.35 1.35 0 0 1-1.348-1.348V1.481c0-.054.044-.098.097-.098h2.502c.054 0 .097.044.097.098v3.604Z'
      />
      <path
        fill='#C6C5C6'
        d='m16.613 14.988-.91.91a.293.293 0 0 0 .414.414l.91-.91a.293.293 0 0 0-.414-.414Z'
      />
    </svg>
  )
}
export default StudentIdCardIcon