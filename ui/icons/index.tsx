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
