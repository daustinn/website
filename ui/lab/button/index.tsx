/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import React from 'react'
import { useButton } from 'react-aria'
import { cn } from 'utils'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ disabled, children, onClick, className, ...props }, ref) => {
    const buttonRef = React.useRef<HTMLButtonElement>(null)

    const { buttonProps, isPressed } = useButton(
      {
        onPress: (event: any) => onClick?.(event),
        isDisabled: disabled,
        autoFocus: props.autoFocus,
        type: props.type
      },
      buttonRef
    )

    return (
      <button
        role="button"
        aria-label="button"
        className={cn('aria-pressed:scale-95 transition-all', className)}
        ref={ref ?? buttonRef}
        {...props}
        {...buttonProps}
        aria-disabled={disabled}
        aria-pressed={isPressed ? 'true' : 'false'}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
