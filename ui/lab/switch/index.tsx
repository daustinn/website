'use client'

import React from 'react'
import { useButton, useToggleButton } from 'react-aria'
import { cn } from 'utils'

export interface SwitchProps
  extends Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    'className' | 'children' | 'onChange' | 'value' | 'defaultValue'
  > {
  thumbIcon?: React.ReactNode | ((v: boolean) => React.ReactNode)
  children?: React.ReactNode | ((v: boolean) => React.ReactNode)
  className?: string | ((v: boolean) => string)
  onChange?: (v: boolean) => void
  value?: boolean
  defaultValue?: boolean
}

/**
 * Switch component.
 * This component creates a customizable switch button.
 * @param {...SwitchProps} props - Switch properties.
 * @returns JSX.Element.
 */
const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  (
    {
      className,
      disabled,
      thumbIcon,
      children,
      defaultValue,
      value: initialValue = defaultValue ?? false,
      onChange
    },
    ref
  ) => {
    const buttonRef = React.useRef<HTMLButtonElement>(null)
    const [value, setValue] = React.useState<boolean>(initialValue)

    // Function to handle toggle action
    const onToggle = () => {
      if (disabled) return
      setValue(!value)
      onChange?.(!value)
    }

    React.useEffect(() => {
      setValue(initialValue)
    }, [initialValue])

    // Aria hook for toggle button
    const { buttonProps: tProps } = useToggleButton(
      {
        defaultSelected: defaultValue,
        isSelected: value
      },
      {
        isSelected: value,
        setSelected: (v) => {
          setValue(v)
          onChange?.(v)
        },
        toggle: onToggle
      },
      buttonRef
    )

    // Aria hook for button press
    const { buttonProps, isPressed } = useButton(
      {
        onPress: () => onToggle(),
        isDisabled: disabled
      },
      buttonRef
    )

    // Get the final thumb icon
    const thumbIconFinal =
      typeof thumbIcon === 'function' ? thumbIcon(value) : thumbIcon

    // Get the final child content
    const finalChild =
      typeof children === 'function' ? children(value) : children

    // Get the final class name
    const classNames =
      typeof className === 'function' ? className(value) : className

    React.useEffect(() => {
      if (typeof ref === 'function') ref(buttonRef.current)
      if (ref && 'current' in ref) ref.current = buttonRef.current
    }, [ref])

    return (
      <label className={cn(children && 'flex items-center gap-4', classNames)}>
        <button
          {...tProps}
          {...buttonProps}
          role="switch"
          disabled={disabled}
          aria-label="Switch button"
          className="bg-neutral-300 text-black dark:text-white dark:bg-stone-800 aria-disabled:opacity-60 aria-disabled:cursor-not-allowed h-[2rem] w-[50px] min-w-[50px] duration-300 relative rounded-full flex items-center transition-all aria-checked:bg-black aria-checked:dark:bg-white"
          aria-disabled={disabled}
          aria-checked={value ? 'true' : 'false'}
          ref={buttonRef}
        >
          <div
            className="bg-white flex shadow-md dark:bg-stone-500 translate-x-[3px] data-[state=true]:translate-x-[21px] data-[pressed=true]:scale-90 absolute p-1.2 top-[50%] duration-200 translate-y-[-50%] transition-transform h-[26px] aspect-square rounded-full data-[state=true]:bg-white data-[state=true]:dark:bg-black"
            data-pressed={isPressed ? 'true' : 'false'}
            data-state={value}
          >
            {thumbIconFinal}
          </div>
        </button>
        {children && (
          <div
            className="data-[disabled=true]:opacity-60 text-black dark:text-white font-semibold"
            data-disabled={disabled}
          >
            {finalChild}
          </div>
        )}
      </label>
    )
  }
)

Switch.displayName = 'Switch'

export { Switch }
