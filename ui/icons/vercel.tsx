import { IconProps } from './type'

export const Vercel = (props: IconProps) => {
  return (
    <svg
      width={props.size}
      height={props.size}
      fill="currentColor"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M24 22.525H0l12-21.05 12 21.05z"></path>
    </svg>
  )
}
