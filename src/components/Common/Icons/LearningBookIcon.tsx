import { SVGProps } from 'react'

interface Props extends SVGProps<SVGSVGElement> {
  size?: number
}

const LearningBookIcon = ({ size = 30, ...props }: Props) => {
  if (typeof size !== 'number') throw new Error('Icon size must be a number')
  const height = (size * 32) / 30

  return (
    <svg
      width={size}
      height={height}
      viewBox='0 0 30 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <path
        d='M28.44 11.6824H26.5329V11.4682C26.5329 10.9351 26.0991 10.5014 25.566 10.5014H21.8046C21.5454 10.5014 21.3352 10.7115 21.3352 10.9708C21.3352 11.2301 21.5454 11.4402 21.8046 11.4402H25.566C25.5814 11.4402 25.594 11.4527 25.594 11.4682V17.1917C25.594 17.451 25.8042 17.6611 26.0634 17.6611C26.3227 17.6611 26.5329 17.451 26.5329 17.1917V12.6212H28.44C28.5035 12.6212 28.5551 12.6728 28.5551 12.7363V29.1131C28.5551 30.1873 27.6812 31.0612 26.607 31.0612H3.39306C2.31885 31.0612 1.44493 30.1873 1.44493 29.1131V12.7363C1.44493 12.6728 1.49656 12.6212 1.56003 12.6212H3.52975V28.6759C3.52975 29.3379 4.06826 29.8764 4.73026 29.8764H25.3323C25.9943 29.8764 26.5328 29.3379 26.5328 28.6759V19.1939C26.5328 18.9346 26.3226 18.7245 26.0634 18.7245C25.8041 18.7245 25.594 18.9346 25.594 19.1939V25.9491H17.9992C17.0156 25.9491 16.1279 26.3651 15.5007 27.0295V20.9575C15.5007 20.6982 15.2905 20.4881 15.0313 20.4881C14.7721 20.4881 14.5619 20.6982 14.5619 20.9575V27.0296C13.9348 26.3651 13.0469 25.9492 12.0634 25.9492H9.93035C9.67111 25.9492 9.46094 26.1593 9.46094 26.4186C9.46094 26.6779 9.67111 26.888 9.93035 26.888H12.0634C13.2878 26.888 14.3086 27.7735 14.5208 28.9376H4.73026C4.58593 28.9376 4.46857 28.8203 4.46857 28.6759V26.888H7.92815C8.18739 26.888 8.39756 26.6779 8.39756 26.4186C8.39756 26.1593 8.18739 25.9492 7.92815 25.9492H4.46857V11.4682C4.46857 11.4527 4.48115 11.4402 4.49661 11.4402H8.25799C8.51723 11.4402 8.7274 11.2301 8.7274 10.9708C8.7274 10.7115 8.51723 10.5014 8.25799 10.5014H4.49661C3.96349 10.5014 3.52975 10.9351 3.52975 11.4682V11.6824H1.56003C0.978896 11.6824 0.506104 12.1552 0.506104 12.7363V29.1131C0.506104 30.7049 1.80118 32 3.39306 32H26.6068C28.1987 32 29.4938 30.7049 29.4938 29.1131V12.7363C29.4938 12.1552 29.0211 11.6824 28.44 11.6824ZM17.9992 26.8879H25.594V28.6759C25.594 28.8203 25.4766 28.9376 25.3323 28.9376H15.5419C15.754 27.7735 16.7748 26.8879 17.9992 26.8879Z'
        fill='currentColor'
      />
      <path
        d='M8.77269 6.58624C9.03037 6.61015 9.25975 6.42107 9.2841 6.16295C9.41835 4.73944 10.0757 3.42146 11.1352 2.45184C12.2012 1.47621 13.5849 0.938826 15.0313 0.938826C18.2147 0.938826 20.8046 3.52873 20.8046 6.7121C20.8046 7.90998 20.441 9.05873 19.7533 10.0344C19.7494 10.0399 19.7456 10.0455 19.7419 10.0511L16.7381 14.7276C16.6894 14.8033 16.6636 14.8913 16.6636 14.9813V15.5895C16.6636 15.7129 16.5632 15.8133 16.4398 15.8133H16.4091L16.7081 10.7389H17.2429C18.0081 10.7389 18.6306 10.1164 18.6306 9.35127V9.29431C18.6306 8.52917 18.0081 7.90666 17.2429 7.90666C16.5093 7.90666 15.9008 8.48035 15.8576 9.2127L15.823 9.80009H14.1769L14.1423 9.2127C14.0991 8.48035 13.4906 7.90666 12.757 7.90666C11.9918 7.90666 11.3693 8.52917 11.3693 9.29431V9.35127C11.3693 10.1164 11.9918 10.7389 12.757 10.7389H13.2918L13.5906 15.81C13.4825 15.7942 13.399 15.7019 13.399 15.5895V14.9813C13.399 14.8913 13.3731 14.8033 13.3246 14.7276L10.3206 10.0511C10.317 10.0455 10.3132 10.0399 10.3094 10.0344C9.87744 9.42162 9.57326 8.74072 9.40546 8.0105C9.34731 7.75783 9.09508 7.60017 8.84279 7.65819C8.59012 7.71633 8.4324 7.96819 8.49048 8.22086C8.685 9.06699 9.03681 9.85623 9.53614 10.5668L12.4603 15.119V15.5893C12.4603 16.0633 12.7457 16.4713 13.1535 16.6521V17.4459C13.1535 18.2813 13.833 18.9608 14.6683 18.9608H15.3946C16.2298 18.9608 16.9094 18.2813 16.9094 17.4459V16.6521C17.3171 16.4713 17.6027 16.0634 17.6027 15.5893V15.119L20.5267 10.5668C21.3228 9.43388 21.7436 8.10113 21.7436 6.71204C21.7434 3.011 18.7323 0 15.0313 0C13.3497 0 11.7409 0.62482 10.5013 1.7593C9.26977 2.88651 8.50556 4.41905 8.34947 6.07483C8.32506 6.333 8.51458 6.56195 8.77269 6.58624ZM16.7948 9.2679C16.8088 9.031 17.0056 8.84543 17.2429 8.84543C17.4904 8.84543 17.6918 9.04677 17.6918 9.29425V9.3512C17.6918 9.59868 17.4904 9.80002 17.2429 9.80002H16.7635L16.7948 9.2679ZM12.757 9.80002C12.5095 9.80002 12.3081 9.59868 12.3081 9.3512V9.29425C12.3081 9.04677 12.5095 8.84543 12.757 8.84543C12.9943 8.84543 13.1911 9.031 13.2051 9.2679L13.2364 9.80002H12.757ZM15.7677 10.7389L15.4687 15.8132H14.5313L14.2323 10.7389H15.7677ZM15.9704 17.446C15.9704 17.7636 15.712 18.022 15.3944 18.022H14.6681C14.3505 18.022 14.0921 17.7636 14.0921 17.446V16.752H15.9703V17.446H15.9704Z'
        fill='currentColor'
      />
      <path
        d='M23.2538 3.56447C23.3637 3.56447 23.4741 3.52604 23.5633 3.4478L24.5875 2.54853C24.7823 2.37754 24.8015 2.08087 24.6305 1.8861C24.4595 1.69132 24.1629 1.67205 23.9681 1.84304L22.9439 2.74231C22.7491 2.9133 22.7298 3.20997 22.9008 3.40474C22.9936 3.51045 23.1234 3.56447 23.2538 3.56447Z'
        fill='currentColor'
      />
      <path
        d='M22.9439 6.39553L23.9681 7.29486C24.0573 7.37316 24.1677 7.41153 24.2777 7.41153C24.4081 7.41153 24.5378 7.35751 24.6306 7.2518C24.8017 7.05703 24.7824 6.76042 24.5876 6.58936L23.5634 5.69003C23.3686 5.51892 23.072 5.53826 22.901 5.73309C22.7299 5.92787 22.7491 6.22441 22.9439 6.39553Z'
        fill='currentColor'
      />
      <path
        d='M5.47504 2.54854L6.49924 3.44781C6.58836 3.52611 6.69877 3.56448 6.80874 3.56448C6.93911 3.56448 7.06886 3.51046 7.16167 3.40475C7.33273 3.20998 7.31345 2.91331 7.11861 2.74232L6.09442 1.84305C5.89964 1.67193 5.60297 1.69127 5.43198 1.88611C5.26093 2.08088 5.2802 2.37749 5.47504 2.54854Z'
        fill='currentColor'
      />
      <path
        d='M5.78492 7.41151C5.89489 7.41151 6.00529 7.37309 6.09448 7.29485L7.11868 6.39552C7.31346 6.22446 7.33273 5.92786 7.16168 5.73308C6.99069 5.53831 6.69408 5.51903 6.49924 5.69002L5.47505 6.58935C5.28027 6.76041 5.26099 7.05701 5.43205 7.25179C5.5248 7.3575 5.65449 7.41151 5.78492 7.41151Z'
        fill='currentColor'
      />
      <path
        d='M10.8781 16.2826C10.8781 16.0233 10.6679 15.8132 10.4087 15.8132H5.78472C5.52548 15.8132 5.31531 16.0233 5.31531 16.2826C5.31531 16.5419 5.52548 16.752 5.78472 16.752H10.4087C10.6679 16.752 10.8781 16.5419 10.8781 16.2826Z'
        fill='currentColor'
      />
      <path
        d='M11.8387 18.201H6.63268C6.37344 18.201 6.16327 18.4111 6.16327 18.6704C6.16327 18.9297 6.37344 19.1398 6.63268 19.1398H11.8387C12.098 19.1398 12.3081 18.9297 12.3081 18.6704C12.3081 18.4111 12.098 18.201 11.8387 18.201Z'
        fill='currentColor'
      />
      <path
        d='M11.8387 20.4881H6.63268C6.37344 20.4881 6.16327 20.6982 6.16327 20.9575C6.16327 21.2168 6.37344 21.4269 6.63268 21.4269H11.8387C12.098 21.4269 12.3081 21.2168 12.3081 20.9575C12.3081 20.6982 12.098 20.4881 11.8387 20.4881Z'
        fill='currentColor'
      />
      <path
        d='M11.8387 22.7751H6.63268C6.37344 22.7751 6.16327 22.9852 6.16327 23.2445C6.16327 23.5038 6.37344 23.7139 6.63268 23.7139H11.8387C12.098 23.7139 12.3081 23.5038 12.3081 23.2445C12.3081 22.9852 12.098 22.7751 11.8387 22.7751Z'
        fill='currentColor'
      />
      <path
        d='M24.7472 16.2826C24.7472 16.0233 24.5371 15.8132 24.2778 15.8132H19.6539C19.3946 15.8132 19.1844 16.0233 19.1844 16.2826C19.1844 16.5419 19.3946 16.752 19.6539 16.752H24.2778C24.5371 16.752 24.7472 16.5419 24.7472 16.2826Z'
        fill='currentColor'
      />
      <path
        d='M23.4298 18.201H18.2238C17.9646 18.201 17.7544 18.4111 17.7544 18.6704C17.7544 18.9297 17.9646 19.1398 18.2238 19.1398H23.4298C23.6891 19.1398 23.8993 18.9297 23.8993 18.6704C23.8993 18.4111 23.6891 18.201 23.4298 18.201Z'
        fill='currentColor'
      />
      <path
        d='M23.4298 20.4881H18.2238C17.9646 20.4881 17.7544 20.6982 17.7544 20.9575C17.7544 21.2168 17.9646 21.4269 18.2238 21.4269H23.4298C23.6891 21.4269 23.8993 21.2168 23.8993 20.9575C23.8993 20.6982 23.6891 20.4881 23.4298 20.4881Z'
        fill='currentColor'
      />
      <path
        d='M23.4298 22.7751H18.2238C17.9646 22.7751 17.7544 22.9852 17.7544 23.2445C17.7544 23.5038 17.9646 23.7139 18.2238 23.7139H23.4298C23.6891 23.7139 23.8993 23.5038 23.8993 23.2445C23.8993 22.9852 23.6891 22.7751 23.4298 22.7751Z'
        fill='currentColor'
      />
    </svg>
  )
}
export default LearningBookIcon
