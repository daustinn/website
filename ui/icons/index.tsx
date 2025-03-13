import React from 'react'

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ArrowOutward = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 20, ...props }, forwardRef) => {
    return (
      <svg
        {...props}
        ref={forwardRef}
        width={size}
        height={size}
        viewBox="0 0 109 109"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.99996 0V16.6667H80.5833L0.666626 96.5833L12.4166 108.333L92.3333 28.4167V100H109V0H8.99996Z"
          fill="currentColor"
        />
      </svg>
    )
  }
)
ArrowOutward.displayName = 'ArrowOutwardIcon'

export const Xmark = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 20, ...props }, forwardRef) => {
    return (
      <svg
        {...props}
        ref={forwardRef}
        width={size}
        height={size}
        viewBox="0 0 126 126"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M121.828 21.8281C126.711 16.9453 126.711 9.01562 121.828 4.13281C116.945 -0.75 109.016 -0.75 104.133 4.13281L63 45.3047L21.8281 4.17187C16.9453 -0.710938 9.01562 -0.710938 4.13281 4.17187C-0.75 9.05469 -0.75 16.9844 4.13281 21.8672L45.3047 63L4.17188 104.172C-0.710937 109.055 -0.710937 116.984 4.17188 121.867C9.05469 126.75 16.9844 126.75 21.8672 121.867L63 80.6953L104.172 121.828C109.055 126.711 116.984 126.711 121.867 121.828C126.75 116.945 126.75 109.016 121.867 104.133L80.6953 63L121.828 21.8281Z"
          fill="currentColor"
        />
      </svg>
    )
  }
)
Xmark.displayName = 'XmarkIcon'

export const XSocial = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 20, ...props }, forwardRef) => {
    return (
      <svg
        {...props}
        ref={forwardRef}
        width={size}
        height={size}
        viewBox="0 0 77 76"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.839844 0L30.1641 42.75L1.46094 76H7.82031L32.9727 46.8438L52.9727 76H77L46.3633 31.3398L73.3984 0H67.0586L43.5508 27.2344L24.8672 0H0.839844ZM8.43359 4H22.7617L69.4062 72H55.0781L8.43359 4Z"
          fill="currentColor"
        />
      </svg>
    )
  }
)
XSocial.displayName = 'XSocialIcon'

export const Gmail = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 20, ...props }, forwardRef) => {
    return (
      <svg
        {...props}
        ref={forwardRef}
        width={size}
        height={size}
        viewBox="0 0 92 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 32.806V32.78V6.778L19.76 6.6H19.74L14.28 2.56C10.94 0.0800034 6.18 0.200005 3.22 3.12C1.24 5.08 0 7.8 0 10.82V18.024L20 32.806ZM72 32.78V32.806L92 18.024V10.82C92 7.84 90.8 5.12 88.84 3.16C85.92 0.246004 81.31 -0.095996 77.992 2.354L72.24 6.6L72 6.778V32.78ZM24 35.736L44.812 51.12C45.518 51.642 46.484 51.642 47.19 51.12L68 35.736V9.734L46 26L24 9.734V35.736ZM72 37.778V68C72 69.104 72.896 70 74 70H87C89.762 70 92 67.762 92 65V22.994L72 37.778ZM20 37.778L0 22.994V65C0 67.762 2.238 70 5 70H18C19.104 70 20 69.104 20 68V37.778Z"
          fill="currentColor"
        />
      </svg>
    )
  }
)
Gmail.displayName = 'GmailIcon'

export const ArrowBack = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 20, ...props }, forwardRef) => {
    return (
      <svg
        {...props}
        ref={forwardRef}
        width={size}
        height={size}
        viewBox="0 0 142 132"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M66.3125 122.25L10.0625 66L66.3125 9.75M17.875 66H131.938"
          stroke="currentColor"
          strokeWidth="18.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }
)
ArrowBack.displayName = 'ArrowBackIcon'

export const Sun = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 20, ...props }, forwardRef) => {
    return (
      <svg
        {...props}
        ref={forwardRef}
        width={size}
        height={size}
        viewBox="0 0 158 158"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M87.3333 12.3333L79 36.7833L70.6667 12.3333C69.1 7.72501 71.55 2.73334 76.1583 1.15834C80.7583 -0.408324 85.7667 2.05001 87.3333 6.65001C87.9833 8.56668 87.9333 10.5583 87.3333 12.3333ZM12.3333 70.6667L36.7833 79L12.3333 87.3333C7.72501 88.9 2.73334 86.45 1.15834 81.8417C-0.408324 77.2417 2.05001 72.2333 6.65001 70.6667C8.56668 70.0167 10.5583 70.0667 12.3333 70.6667ZM70.6667 145.667L79 121.217L87.3333 145.667C88.9 150.275 86.45 155.267 81.8417 156.842C77.2417 158.408 72.2417 155.958 70.6667 151.35C70.0167 149.433 70.0667 147.442 70.6667 145.667ZM145.667 87.3167L121.217 78.9833L145.667 70.65C150.275 69.0833 155.267 71.5333 156.842 76.1417C158.408 80.7417 155.958 85.7417 151.35 87.3167C149.433 87.9667 147.442 87.9167 145.667 87.3167ZM37.75 25.9667L49.1417 49.1417L25.9667 37.75C21.6 35.6083 19.8 30.325 21.9417 25.9667C24.0917 21.6083 29.3667 19.8083 33.725 21.95C35.5417 22.8417 36.9167 24.2833 37.75 25.9667ZM25.9667 120.242L49.1417 108.85L37.75 132.025C35.6083 136.383 30.325 138.183 25.9667 136.042C21.6083 133.892 19.8083 128.617 21.95 124.258C22.8417 122.442 24.2833 121.075 25.9667 120.242ZM120.242 132.025L108.85 108.85L132.025 120.242C136.383 122.383 138.183 127.667 136.042 132.025C133.892 136.383 128.617 138.183 124.258 136.042C122.442 135.15 121.075 133.708 120.242 132.025ZM132.017 37.7333L108.833 49.1333L120.233 25.95C122.375 21.5917 127.658 19.7917 132.017 21.9333C136.375 24.0833 138.175 29.3583 136.025 33.725C135.142 35.5333 133.7 36.9 132.017 37.7333ZM79 116.5C58.325 116.5 41.5 99.675 41.5 79C41.5 58.325 58.325 41.5 79 41.5C99.675 41.5 116.5 58.325 116.5 79C116.5 99.675 99.675 116.5 79 116.5ZM79 58.1667C67.5083 58.1667 58.1667 67.5083 58.1667 79C58.1667 90.4917 67.5083 99.8333 79 99.8333C90.4917 99.8333 99.8333 90.4917 99.8333 79C99.8333 67.5083 90.4917 58.1667 79 58.1667Z"
          fill="currentColor"
        />
      </svg>
    )
  }
)
Sun.displayName = 'SunIcon'

export const Moon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 20, ...props }, forwardRef) => {
    return (
      <svg
        {...props}
        ref={forwardRef}
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M199.383 129.498C198.065 126.284 194.964 124.342 191.684 124.337C191.667 124.337 191.65 124.333 191.634 124.333C191.58 124.333 191.534 124.354 191.48 124.358C190.838 124.375 190.196 124.479 189.558 124.65C189.32 124.713 189.095 124.775 188.866 124.854C188.749 124.896 188.628 124.913 188.508 124.959C178.049 129.256 166.941 131.436 155.482 131.436C107.56 131.436 68.5697 92.446 68.5697 44.5234C68.5697 33.0648 70.7455 21.9564 75.0472 11.4982C75.1097 11.3523 75.1305 11.1981 75.1805 11.048C75.2431 10.8646 75.2972 10.6812 75.3473 10.4895C75.5348 9.80169 75.6516 9.10976 75.6599 8.41783C75.6599 8.38865 75.6724 8.35947 75.6724 8.32612C75.6724 8.31779 75.6682 8.30528 75.6682 8.29695C75.6682 7.79675 75.6099 7.3049 75.5182 6.82138C75.4973 6.71717 75.4807 6.61296 75.4598 6.50876C75.3514 6.02941 75.2139 5.55422 75.0221 5.10405C74.9471 4.92898 74.8429 4.77892 74.7595 4.61219C73.8884 2.87402 72.4462 1.41096 70.5037 0.614819C68.232 -0.314706 65.8019 -0.147975 63.7511 0.831569C63.7303 0.839906 63.7053 0.844074 63.6844 0.856579C51.2255 5.97939 39.9795 13.499 30.2591 23.2194C-10.0857 63.6141 -10.0857 129.339 30.2632 169.742C50.4627 189.917 76.9896 200 103.521 200C130.052 200 156.583 189.913 176.786 169.738C186.473 160.047 193.98 148.839 199.103 136.421C199.128 136.375 199.137 136.321 199.157 136.271C199.395 135.775 199.587 135.258 199.724 134.721C199.733 134.679 199.749 134.641 199.762 134.6C200.158 132.957 200.074 131.182 199.383 129.498ZM165.007 157.95C131.106 191.801 75.9517 191.801 42.0594 157.95C8.20473 124.054 8.20472 68.8995 42.0553 35.0072C45.6733 31.3892 49.5832 28.2005 53.6806 25.3285C52.5051 31.6143 51.8966 38.0209 51.8966 44.5276C51.8966 101.645 98.3645 148.113 155.482 148.113C161.985 148.113 168.396 147.505 174.681 146.329C171.805 150.423 168.625 154.332 165.007 157.95Z"
          fill="currentColor"
        />
      </svg>
    )
  }
)
Moon.displayName = 'MoonIcon'

export const Display = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 20, ...props }, forwardRef) => {
    return (
      <svg
        {...props}
        ref={forwardRef}
        width={size}
        height={size}
        viewBox="0 0 20 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.87868 0.84352C0 1.68705 0 3.04468 0 5.75994V6.71993C0 9.4352 0 10.7928 0.87868 11.6363C1.75736 12.4799 3.17157 12.4799 6 12.4799H9.25H10.75H14C16.8284 12.4799 18.2426 12.4799 19.1213 11.6363C20 10.7928 20 9.4352 20 6.71993V5.75994C20 3.04468 20 1.68705 19.1213 0.84352C18.2426 -5.96046e-08 16.8284 0 14 0H6C3.17157 0 1.75736 -5.96046e-08 0.87868 0.84352Z"
          fill="currentColor"
        />
        <path
          opacity="0.5"
          d="M16.2374 16.5964L10.7502 14.8405V12.4795H9.2502V14.8405L3.76303 16.5964C3.37008 16.7221 3.15771 17.1299 3.28869 17.5071C3.41968 17.8844 3.84442 18.0882 4.23737 17.9625L10.0002 16.1184L15.763 17.9625C16.156 18.0882 16.5807 17.8844 16.7117 17.5071C16.8427 17.1299 16.6303 16.7221 16.2374 16.5964Z"
          fill="currentColor"
        />
      </svg>
    )
  }
)
Display.displayName = 'DisplayIcon'

export const Clipboard = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 20, ...props }, forwardRef) => {
    return (
      <svg
        {...props}
        ref={forwardRef}
        width={size}
        height={size}
        viewBox="0 0 20 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.41552 18.7047C1.62206 18.424 0.25 16.8723 0.25 15V8.94358C0.249984 7.10582 0.249972 5.65019 0.403135 4.51098C0.560762 3.33856 0.892879 2.38961 1.64124 1.64124C2.3896 0.892883 3.33856 0.560763 4.51098 0.403135C5.65019 0.249972 7.10582 0.249984 8.94359 0.25H13C14.8723 0.25 16.424 1.62206 16.7047 3.41552C17.4687 3.55349 18.1208 3.81753 18.6516 4.34834C19.2536 4.95026 19.5125 5.70814 19.6335 6.60825C19.75 7.47522 19.75 8.57754 19.75 9.94513V15.0549C19.75 16.4224 19.75 17.5248 19.6335 18.3917C19.5125 19.2918 19.2536 20.0497 18.6516 20.6516C18.0497 21.2536 17.2918 21.5125 16.3917 21.6335C15.5248 21.75 14.4224 21.75 13.0549 21.75H9.94513C8.57754 21.75 7.47522 21.75 6.60825 21.6335C5.70814 21.5125 4.95026 21.2536 4.34834 20.6516C3.81753 20.1208 3.55349 19.4687 3.41552 18.7047ZM2.7019 2.7019C3.12512 2.27869 3.70476 2.02502 4.71085 1.88976C5.73851 1.75159 7.09318 1.75 9 1.75H13C13.9876 1.75 14.8265 2.38623 15.1293 3.27117C14.5194 3.24998 13.8297 3.24999 13.0549 3.25H9.94513C8.57754 3.24998 7.47522 3.24996 6.60825 3.36652C5.70814 3.48754 4.95027 3.74643 4.34835 4.34835C3.74643 4.95027 3.48754 5.70814 3.36652 6.60825C3.24996 7.47522 3.24998 8.57754 3.25 9.94513V15.0549C3.24999 15.8297 3.24998 16.5194 3.27117 17.1293C2.38623 16.8265 1.75 15.9876 1.75 15V9C1.75 7.09318 1.75159 5.73851 1.88976 4.71085C2.02502 3.70476 2.2787 3.12511 2.7019 2.7019ZM5.40901 5.40901C5.68577 5.13225 6.07435 4.9518 6.80812 4.85315C7.56347 4.75159 8.56458 4.75 10 4.75H13C14.4354 4.75 15.4365 4.75159 16.1919 4.85315C16.9256 4.9518 17.3142 5.13225 17.591 5.40902C17.8677 5.68578 18.0482 6.07435 18.1469 6.80812C18.2484 7.56347 18.25 8.56458 18.25 10V15C18.25 16.4354 18.2484 17.4365 18.1469 18.1918C18.0482 18.9256 17.8677 19.3142 17.591 19.591C17.3142 19.8677 16.9256 20.0482 16.1918 20.1469C15.4365 20.2484 14.4354 20.25 13 20.25H10C8.56458 20.25 7.56347 20.2484 6.80812 20.1469C6.07435 20.0482 5.68578 19.8677 5.40902 19.591C5.13225 19.3142 4.9518 18.9256 4.85315 18.1919C4.75159 17.4365 4.75 16.4354 4.75 15V10C4.75 8.56458 4.75159 7.56347 4.85315 6.80812C4.9518 6.07435 5.13225 5.68577 5.40901 5.40901Z"
          fill="currentColor"
        />
      </svg>
    )
  }
)
Clipboard.displayName = 'ClipboardIcon'

export const ChevronDown = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 20, ...props }, forwardRef) => {
    return (
      <svg
        {...props}
        ref={forwardRef}
        width={size}
        height={size}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    )
  }
)
ChevronDown.displayName = 'ChevronDownIcon'

export const Check = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 20, ...props }, forwardRef) => {
    return (
      <svg
        {...props}
        ref={forwardRef}
        width={size}
        height={size}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
    )
  }
)
Check.displayName = 'CheckIcon'
